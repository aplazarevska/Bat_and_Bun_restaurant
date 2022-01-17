# T3A2 MERN App - Bat and Bun Restaurant

![Bat and Bun Logo](./docs/bat_and_bun_logo.jpg)

&nbsp;  

>
> Live Website: [https://bat-and-bun.herokuapp.com/](https://bat-and-bun.herokuapp.com/)
>
> GitHub Repository: [https://github.com/pduong987/Bat_and_Bun_restaurant](https://github.com/pduong987/Bat_and_Bun_restaurant)
>

&nbsp;  

A MERN stack web application developed for the Bat and Bun restaurant in Darlinghurst, Sydney, NSW 2010 Australia.    
By: [Ana Lazarevska](https://github.com/aplazarevska), [Duong Pham](https://github.com/pduong987), [Jessica Gozali](https://github.com/petitejess)

&nbsp;  

Admin user login for test:
- Email: test@example.com
- Password: 123123

&nbsp;  

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
      <ul>
        <li><a href="#purpose">Purpose</a></li>
        <li><a href="#functionality-and-features">Functionality and Features</a></li>
        <li><a href="#target-audience">Target Audience</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#data-flow-diagram">Data Flow Diagram</a>
    </li>
    <li>
      <a href="#application-architecture-diagram">Application Architecture Diagram</a>
    </li>
    <li>
      <a href="#user-stories">User Stories</a>
    </li>
    <li>
      <a href="#wireframes">Wireframes</a>
    </li>
    <li>
      <a href="#manual-test">Manual Test</a>
    </li>
    <li>
      <a href="#trello-board-screenshots">Trello Board Screenshots</a>
    </li>
    <li>
      <a href="#installation-for-development">Installation for Development</a>
    </li>
    <li>
      <a href="#dependencies-or-libraries">Dependencies or Libraries</a>
    </li>
    <li>
      <a href="#acknowledgement">Acknowledgement</a>
    </li>
  </ol>
</details>

&nbsp;  

## Description

### Purpose

The Bat and Bun restaurant website is developed to satisfy the requirements of a restaurant owner, who needed a website for their business. 

The owner wants a simple website which will allow their business to showcase their full menu, get orders, and get payments for those orders. The owner will occasionally need to add or remove items from the menu using the admin dashboard. The owner will also have the ability to track the orders and the payments. 

The requirements that the owner accented was to include images for each menu item, to include links to their external ordering partners, to include links to the social media accounts of the business, and to have a detailed info on the location and the working hours of the business.

The website has to be easy to use by the customers, who should be able to see information about the restaurant, view the menu items with images, choose an item from the menu, and place an order and make a payment for it.

### Functionality and Features

&nbsp;  

![App Main Features](./docs/features.jpg)

&nbsp;  

1. **Admin Dashboard**: The owner of the restaurant will sign in as administrator of the website and gain access to the Admin Dashboard. From here the owner will manage the menu (add and remove items, change the price of items), and will track the orders. Currently, only order that has been paid in full will be processed and displayed on the Admin Dashboard.

2. **Image Upload**: Through the Admin Dashboard, the owner would be able to upload pictures of the menu items, through a form when creating or editing their menu items. Images are stored in AWS S3, with URL reference saved in MongoDB.

3. **No-Fuss Checkout**: The customers will have the option to view the menu and place an order without creating an account. We realised that it is easier and faster process if the customer is not required to make those additional steps to log in. We want the website to be easy and fast to use. So, once the customers are going to be ready to place an order, they will need to add their item to the cart, proceed to order confirmation page, and enter few personal details and credit card details through Stripe, and then place the order right away.

4. **Track Order Status**: After the customer place the order, they will receive a reference number which they will be able to use to get the status of their order through the tracking page. They will need to enter the order reference number as well as their phone number used during checkout to retrieve their order details so to reduce chances of random people checking other people's order details.


### Target Audience

The application will target the customers of the restaurant. They will need to be able to easily view the menu, get any information about the restaurant, and also place orders through several channels (links to UberEats and MenuLog, online payment and pick-up).

### Tech Stack

The web application for the Bat and Bun restaurant is developed using the MERN stack and the following technologies.

|Product|Description|
|:---:|:---|
|ReactJS|Used for front end framework.|
|Material UI|Used for component design framework.|
|ExpressJS|Used mainly for server routing.|
|NodeJS|Used to run the back end server.|
|MongoDB|Used to store data of menu items, order details.|
|Firebase Auth|Used for authentication.|
|Amazon S3|Used to store menu item images uploaded by users.|
|Stripe|Payment gateway.|
|Jest|Used for unit/integration testing.|
|Postman|Used to test API.|
|Heroku|Deployed as one app.|
|GitHub|Used for version control and collaborative workflow.|
|Trello|Used as project management tool.|

&nbsp;

## Data Flow Diagram

<details>
  <summary>Bat and Bun DFD</summary>

  ![Bat and Bun Data Flow Diagram](./docs/BaB_DataFlowDiagram.png)
</details>

&nbsp;

## Application Architecture Diagram

<details>
  <summary>Bat and Bun App Architecture Diagram</summary>

  ![Bat and Bun App Architecture Diagram](./docs/bat_and_bun_architecture_diagram.jpg)
</details>

&nbsp;

## User Stories

- As a restaurant owner, I want to show who we are as a business and where we are located, so people can check our place and find us.
- As a restaurant owner, I want links to our social media accounts and our delivery partner logos that link to their apps to be shown somewhere in the website, so customers can follow us or place order through those apps.
- As a restaurant owner, I want to be able to log in, so I can have a full control of managing the website.
- As a restaurant owner, I want to manage all orders from the admin dashboard, so that I can ensure they are fulfilled.
- As a restaurant owner, I want to update the food menu in the admin dashboard, so customers can see an up-to-date menu.
- As a restaurant owner, I want to put pictures of the food on the website, so customers can see the available menu items.
- As a customer, I want to be able to place an order from the website, so that I can get the food I want without having to call the shop.
- As a customer, I want to check my order on the website, so I can track its status.
- As a customer, I want to be able to choose menu items from the homepage right away, so I don't have to navigate around to start adding items to cart.
- As a customer, I don't want the hassle to create an account/profile, so I can just place an order quickly.

**User Journeys**

![User Journey Diagram](./docs/user_journey.png)

&nbsp;

## Wireframes

>
> Link to the Prototype: [https://www.figma.com/proto/dAotZd3sIZQP9kvFvEqwLL/Bat-%2B-Bun-Restaurant?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2](https://www.figma.com/proto/dAotZd3sIZQP9kvFvEqwLL/Bat-%2B-Bun-Restaurant?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2)
>

<details>
  <summary>Homepage</summary>

  ![Homepage Wireframe](./docs/homepage.jpeg)
</details>

<details>
  <summary>About</summary>

  ![About Wireframe](./docs/about_page.jpeg)
</details>

<details>
  <summary>Admin Log In</summary>

  ![Admin Log In Wireframe](./docs/admin_log_in.jpeg)
</details>

<details>
  <summary>Admin Dashboard(Order List)</summary>

  <p>Changes made: Swapped with Menu List as it is more make sense for admin to see Order List as soon as they log in. Using Material UI Data Grid instead of displaying each order in table format so order status updates on multiple orders can be made without having to navigate to a different page.</p>

  ![NEW Order List Wireframe](./docs/admin-order-list-page-new.jpeg)
</details>

<details>
  <summary>Admin Dashboard(Order Record)</summary>

  <p>Changes made: An additional page, derived from original Order List wireframe, to display each order in detail.</p>

  ![Order Detail Wireframe](./docs/admin-order-record.jpg)
</details>

<details>
  <summary>Admin Dashboard(Menu List)</summary>

  ![Menu List Wireframe](./docs/admin_menu_item_list.jpeg)
</details>

<details>
  <summary>Admin Dashboard(New Menu Item)</summary>

  ![New Menu Item Wireframe](./docs/admin_new_menu_item.jpeg)
</details>

<details>
  <summary>Cart</summary>

  ![Cart Wireframe](./docs/cart.jpeg)
</details>

<details>
  <summary>Order Confirmation</summary>

  <p>Changes made: Added missing payment form (elements provided by Stripe).</p>

  ![NEW Order Confirmation Wireframe](./docs/order-confirmation-new.jpg)
</details>

<details>
  <summary>Thank You</summary>

  ![Thank You Wireframe](./docs/thank_you.jpeg)
</details>

<details>
  <summary>Track Order</summary>

  ![Track Order Wireframe](./docs/track_order.jpeg)
</details>

&nbsp;

## Manual Test

### User Test

&nbsp;

>
> Link to the Bat and Bun Manual Test Report: [Report Google Spreadsheets](https://docs.google.com/spreadsheets/d/1Ng_Ul0X3_KGzul7F5kzaEl4eU9rlexYYN_A6u8Ywu2s/edit?usp=sharing)
>

&nbsp;

### Postman Test

#### Items CRUD

<details>
  <summary>Create Item Test</summary>

  ![createItem API Test with Postman](./docs/createItem.jpg)
</details>

<details>
  <summary>Get All Items Test</summary>

  ![getItems API Test with Postman](./docs/getItems.jpg)
</details>

<details>
  <summary>Get Specific Item Test</summary>

  ![getItem API Test with Postman](./docs/getItem.jpg)
</details>

<details>
  <summary>Update Item Test</summary>

  ![updateItem API Test with Postman](./docs/updateItem.jpg)
</details>

<details>
  <summary>Delete Item Test</summary>

  ![deleteItem API Test with Postman](./docs/deleteItem.jpg)

  <p>In practice, users are not allowed to delete item. Instead, users are given a Delete button to update the item status to 'deleted', which in result will be hidden from view.</p>
</details>

&nbsp;

#### Orders CRUD

<details>
  <summary>Create Order Test</summary>

  ![createOrder API Test with Postman](./docs/createOrder.jpg)
</details>

<details>
  <summary>Get All Orders Test</summary>

  ![getOrders API Test with Postman](./docs/getOrders.jpg)
</details>

<details>
  <summary>Get Specific Order Test</summary>

  ![Fail getOrder API Test with Postman](./docs/getOrder-FAIL.jpg)

  <p>First attempt was fail due to wrong parameter used in Order controller. The controller was expecting order id, however the usage intention was to search specific order based on order reference number and phone number. After fixing the issue, below is the successful test screenshot.</p>

  ![SUCCESS getOrder API Test with Postman](./docs/getOrder-SUCCESS.jpg)
</details>

<details>
  <summary>Update Order Test</summary>

  ![updateOrder API Test with Postman](./docs/updateOrder.jpg)
</details>

<details>
  <summary>Delete Order Test</summary>

  ![deleteOrder API Test with Postman](./docs/deleteOrder.jpg)

  <p>In practice, users are not allowed to delete order for accountability purpose. However, users may update the order status to Cancelled.</p>
</details>

&nbsp;  

## Trello Board Screenshots

&nbsp;

>
> Link to the Board: [https://trello.com/b/lUHTux9t/bat-and-bun-app](https://trello.com/b/lUHTux9t/bat-and-bun-app)
>

&nbsp;  

We were using Scrum with 1-week long per sprint. Stand up meetings were scheduled every Monday mornings of the week through Discord.

&nbsp;  

### Sprint 1 (30 Nov 2021 - 6 Dec 2021)

<details>
  <summary>Start</summary>

  ![S01 Start](./docs/sprint-01/s01_start.png)
</details>

<details>
  <summary>Mid</summary>

  ![S01 Mid](./docs/sprint-01/s01_mid.png)
</details>

<details>
  <summary>End</summary>

  ![S01 End](./docs/sprint-01/s01_end.png)
</details>

&nbsp;  

### Sprint 2 (7 Dec 2021 - 13 Dec 2021)

<details>
  <summary>Start</summary>

  ![S02 Start](./docs/sprint-02/s02_start.png)
</details>

<details>
  <summary>Mid</summary>

  ![S02 Mid](./docs/sprint-02/s02_mid.png)
</details>

<details>
  <summary>End</summary>

  ![S02 End](./docs/sprint-02/s02_end.png)
</details>

&nbsp;  

### Sprint 3 (14 Dec 2021 - 20 Dec 2021)

<details>
  <summary>Start</summary>

  ![S03 Start](./docs/sprint-03/s03_start.png)
</details>

<details>
  <summary>Mid</summary>

  ![S03 Mid](./docs/sprint-03/s03_mid.png)
</details>

<details>
  <summary>End</summary>

  ![S03 End](./docs/sprint-03/s03_end.png)
</details>

&nbsp;  

### Sprint 4 (21 Dec 2021 - 3 Jan 2022)

<details>
  <summary>Start</summary>

  ![S04 Start](./docs/sprint-04/s04_start.png)
</details>

<details>
  <summary>Mid</summary>

  ![S04 Mid](./docs/sprint-04/s04_mid.png)
</details>

<details>
  <summary>End</summary>

  ![S04 End](./docs/sprint-04/s04_end.png)
</details>

&nbsp;  

### Sprint 5 (4 Jan 2022 - 12 Jan 2022)

<details>
  <summary>Start</summary>

  ![S05 Start](./docs/sprint-05/s05_start.png)
</details>

<details>
  <summary>End</summary>

  ![S05 End](./docs/sprint-05/s05_end.png)
</details>

&nbsp;  

## Installation for Development

Download or clone from the repository:

`git clone git@github.com:pduong987/Bat_and_Bun_restaurant.git`

&nbsp;  

Go to the *root* directory and run:

`npm install`

&nbsp;  

Next, go to */client* directory and run:

`npm install`

&nbsp;  

To run the development server, after installing the dependencies, go back in the *root* directory and run:

`npm run dev`

&nbsp;  

To run tests for front-end, go to */client* directory then run:

`npm run test`

&nbsp;

To run tests for back-end, go to *root* directory then run:

`npm run test`

&nbsp;

The front-end part of the project is all in */client* directory. The back-end part of the project is all in */server* directory. The app uses proxy to redirect call to the server.

&nbsp;  

<details>
  <summary>Project directory tree:</summary>

  ```bash
  ├── client
  │   ├── public
  │   │   ├── favicon.ico
  │   │   ├── img
  │   │   │   ├── about-hero-image.jpg
  │   │   │   ├── bat-bun-logo.png
  │   │   │   ├── bat-bun-map.jpg
  │   │   │   ├── doordash-icon.png
  │   │   │   ├── fb-icon.png
  │   │   │   ├── hero-image.jpg
  │   │   │   ├── insta-icon.png
  │   │   │   ├── items
  │   │   │   │   └── image-placeholder.jpg
  │   │   │   ├── menulog-icon.png
  │   │   │   ├── owner.jpg
  │   │   │   ├── uber-eats-icon.png
  │   │   │   └── yqme-icon.png
  │   │   ├── index.html
  │   │   ├── logo192.png
  │   │   ├── logo512.png
  │   │   ├── manifest.json
  │   │   └── robots.txt
  │   ├── src
  │   │   ├── App.js
  │   │   ├── components
  │   │   │   ├── CartTable.js
  │   │   │   ├── DashboardView
  │   │   │   │   ├── AddNewItem.js
  │   │   │   │   ├── AdminMenuList.js
  │   │   │   │   ├── AdminOrderList.js
  │   │   │   │   ├── EditItem.js
  │   │   │   │   ├── ItemForm.js
  │   │   │   │   ├── ListTable.js
  │   │   │   │   └── OrderRecord.js
  │   │   │   ├── Footer.js
  │   │   │   ├── Header.js
  │   │   │   ├── HomeView
  │   │   │   │   ├── BusinessInfo.js
  │   │   │   │   ├── EmbedMap.js
  │   │   │   │   ├── HeroBanner.js
  │   │   │   │   ├── IconLink.js
  │   │   │   │   ├── MenuItemDetail.js
  │   │   │   │   ├── MenuItemList.js
  │   │   │   │   └── PartnerLinks.js
  │   │   │   ├── OrderConfirmationView
  │   │   │   │   └── CustomerDetailsForm.js
  │   │   │   ├── PrivateRoute.js
  │   │   │   ├── RightDrawer.js
  │   │   │   └── TrackOrderView
  │   │   │       ├── TrackResult.js
  │   │   │       └── TrackingForm.js
  │   │   ├── contexts
  │   │   │   ├── AuthContext.js
  │   │   │   ├── CartContext.js
  │   │   │   ├── ItemContext.js
  │   │   │   └── OrderContext.js
  │   │   ├── firebase.js
  │   │   ├── index.js
  │   │   ├── index.scss
  │   │   ├── reducers
  │   │   │   ├── cartReducers.js
  │   │   │   ├── constants.js
  │   │   │   ├── itemReducer.js
  │   │   │   └── orderReducer.js
  │   │   ├── utils
  │   │   │   ├── cartOrderUtils.js
  │   │   │   └── itemUtils.js
  │   │   └── views
  │   │       ├── AboutView.js
  │   │       ├── CartView.js
  │   │       ├── DashboardView.js
  │   │       ├── HomeView.js
  │   │       ├── LoginView.js
  │   │       ├── OrderConfirmationView.js
  │   │       ├── ThankYouView.js
  │   │       └── TrackOrderView.js
  │   ├── babel.config.js
  │   ├── package-lock.json
  │   ├── package.json
  ├── keys
  │   ├── firebaseAdminKey.json
  │   ├── firebaseClientKey.json
  │   └── firebaseDevAdminKey.json
  ├── package-lock.json
  ├── package.json
  ├── server
  │   ├── app.js
  │   ├── config
  │   │   └── firebase-config.js
  │   ├── controllers
  │   │   ├── itemController.js
  │   │   ├── orderController.js
  │   │   ├── paymentController.js
  │   │   └── uploadController.js
  │   ├── database.js
  │   ├── index.js
  │   ├── middleware
  │   │   └── authMiddleware.js
  │   ├── models
  │   │   ├── itemModel.js
  │   │   └── orderModel.js
  │   └── routes
  │       ├── itemRoutes.js
  │       ├── orderRoutes.js
  │       ├── paymentRoutes.js
  │       └── uploadRoutes.js
  ├── Procfile
  └── README.md
  ```
</details>

&nbsp;  

## Dependencies or Libraries

List of packages (npm) used in this project.

&nbsp;  

|Package|Description|
|:---:|:---|
|aws-sdk, multer, multer-s3|AWS SDK package, Multer (and its related packages) used for image upload to AWS S3.|
|axios|Axios package used for http request between client and server.|
|babel and its related packages|Babel package used for JS transpiling.|
|cors|Cors package used for Express middleware to enable Cross-Origin Resource Sharing.|
|dotenv|DotEnv package used for loading environment variables automatically to the process.|
|express|Express package used for routing in server.|
|firebase and its related packages|Firebase package (and its related packages) used for authentication admin login to dashboard.|
|mongoose|Mongoose package used as Object Data Modeling (ODM) library for NodeJS and MongoDB.|
|mui and its related packages|Material UI package (and its related packages) used for front end element styling.|
|nodemon|Nodemon package used for running front and back-end servers simultaneously.|
|react-router-dom|Routing package used for dynamic routing in client (ReactJS) app.|
|react testing-library and its related packages, jest|React Testing Library package (and its related packages) and Jest package used for testing.|
|sass|SASS package used for compiling SASS.|
|stripe|Stripe package used for easy access to Stripe API.|

&nbsp;  

## Acknowledgement

Content and materials used in this app belong to Bat and Bun Vietnamese Restaurant.

Image placeholders used are from Pixabay and/or Pexels, and are under Pixabay and/or Pexels lincenses which allow usage for commercial.

Team members: [Ana Lazarevska](https://github.com/aplazarevska), [Duong Pham](https://github.com/pduong987), [Jessica Gozali](https://github.com/petitejess).
