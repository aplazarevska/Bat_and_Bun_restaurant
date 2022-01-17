import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { updateItem } from '../../utils/itemUtils';
import { ccyFormat } from '../../utils/cartOrderUtils';

const ListTable = ({ items, token }) => {
  const navigate = useNavigate();

  const handleEdit = (item) => {
    navigate(`/dashboard/menu/edit/${item._id}`);
  };

  const handleDelete = (item) => {
    item.deleted = true;
    updateItem(item, token);
  };

  return (
    <TableContainer className="cart-table">
      <Table sx={{ maxWidth: 900 }} aria-label="cart details">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell colSpan={1}>
                <span
                  style={{display: 'block', width: '100%'}}
                >
                  {item.name}
                </span>
                  <Button
                    color="primary"
                    sx={{display: 'inline-block', fontSize: '.8em', padding: '0', minWidth: '0', marginTop: '.5em', marginRight: '15px'}}
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    sx={{display: 'inline-block', fontSize: '.8em', padding: '0', minWidth: '0', marginTop: '.5em'}}
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </Button>
              </TableCell>
              <TableCell align="right" sx={{verticalAlign: 'top'}}>${ccyFormat(item.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTable;
