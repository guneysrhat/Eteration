# Project Information

This React application is designed to meet the following requirements:

## Live Demo

Check out the live version of the project: [Live Demo](https://eteration-rho.vercel.app/)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/guneysrhat/Eteration.git
    ```

2. **Install dependencies:**

    ```bash
    cd Eteration
    yarn
    ```

3. **Run the application:**

    ```bash
    yarn start
    ```

## Features

### 1. Listing Screen

The application starts with a listing screen, where items are fetched from the  [following address](https://5fc9346b2af77700165ae514.mockapi.io/products) and displayed on the screen. Products are displayed in groups of 12, and if there are more than 12 items, pagination is implemented.

### 2. Product Details

Clicking on any listed product directs the user to the product details screen, displaying relevant information. Users can also add the product to their cart from this screen.

### 3. Add to Cart

The "Add to Cart" button on the product details screen allows users to add the selected item to their cart.

### 4. Cart Management

In the cart section (located on the right side), users can increase or decrease the quantity of items. The cart updates dynamically based on these changes.

### 5. Persistent Cart

Added products persist even if the browser is closed and reopened. Users can continue shopping from where they left off.

### 6. Filtering

The left side of the screen contains filters for refining the displayed items.

### 7. Search Functionality

The "Search" field in the header allows users to search for products by name, updating the list accordingly.


### 8. State Management

The project utilizes Redux, Context API, or similar state management tools to handle application-wide state efficiently.

## Technologies Used

- React
- @reduxjs/toolkit
- react-redux
- axios
- react-router-dom
- react-toastify


