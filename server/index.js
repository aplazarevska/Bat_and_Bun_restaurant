import path from 'path';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import databaseConnector from './database.js';
import userRoutes from './routes/userRoutes.js';
import multer from 'multer';
import { uploadFile, getFileStream } from './s3';
import fs from 'fs';
import utils from 'utils';
const unlinkFile = utils.promisify(fs.unlink);

// multer destination for the uploads
const upload = multer({ dest: 'uploads/'})

const app = express();

app.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log(file)
  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log(result)
  const description = req.body.description
  res.send({imagePath: `/images/${result.Key}`})
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/batnbun';
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const __dirname = path.resolve();

app.use(cors());

databaseConnector(MONGODB_URI).then(() => {
    console.log("Database connected successfully!");
}).catch(error => {
    console.log(`
    Some error occured connecting to the database! It was: 
    ${error}
    `);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ROUTES
app.use('/users', userRoutes);

// For testing auth
app.get('/test', (req, res) => {
  console.log(req.headers.authorization);

  return res.json({
    testContent: [
      {
        propertyOne: 'Text1'
      },
      {
        propertyOne: 'Text2'
      }
    ]
  });
});

// PRODUCTION: Serve static build client
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  }
);

app.listen(PORT, HOST, console.log(`Server listening at http://${HOST == "0.0.0.0" && "localhost"}:${PORT}/`));
