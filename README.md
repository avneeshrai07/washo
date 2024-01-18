# `Washo Website Link`
https://avneeshrai07.github.io/washo/

# WashO - Fresh Clothes Fresh You :)

Welcome to **WashO**, your one-stop solution for all your laundry needs! This MERN (MongoDB, Express, React, Node.js) website is designed to make the process of giving your clothes for washing seamless and convenient.

## Features

### 1. Washing Cart Menu

- **Selection:** Users can easily select different categories of clothes such as shirts, pants, shoes, etc.
- **Pricing:** Each item in the menu displays the corresponding washing cost.
- **Quantity:** Users can choose the quantity of each item they want to wash.

### 2. Receipt Generation

After selecting the items, the website generates a detailed receipt with the following information:

- **Name of Selected Clothes (X):** Displaying the name of each selected item.
- **Number of Clothes (n):** Showing the quantity of each selected item.
- **Price of Selected Clothes (X * n):** Calculating the total cost for each selected item.
- **Total Cost:** Summing up the total cost of all selected items.

### 3. Order Placement

Users can proceed to the checkout by clicking on "Order Now." Payment can be made via Razorpay (currently not working).

### 4. Previous Order Records

WashO keeps track of your previous orders, allowing you to review your laundry history.

### 5. User Authentication

- **Signin and Signup Pages:** Secure authentication through dedicated sign-in and sign-up pages.
- **TwilioService for OTP Verification (currently not working):** Utilizing TwilioService for an extra layer of security through OTP verification.
- **MongoDB Compass:** Storing user data securely in the MongoDB Compass database.

### 6. Data Security

- **JSON Web Tokens (JWT):** Ensuring secure data transfer to the database using JWT.
- **Bcrypt for Password Salting:** Implementing password salting with Bcrypt for enhanced security in the database.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/avneeshrai07/washo.git
   ```

2. Install dependencies:
   ```bash
   cd washo
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Access the WashO website locally at [http://localhost:3000](http://localhost:3000).

## Known Issues

- Razorpay integration for payment is currently not working.
- TwilioService for OTP verification is currently not functional.

Feel free to contribute and make WashO even better! If you encounter any issues, please report them in the [Issues](https://github.com/avneeshrai07/washo/issues) section.

Happy washing! 🧺✨