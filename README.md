# project-catwalk
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)



We were tasked with redesigning, from scratch, the products page for an eCommerce company. As a group we created an overview component, related product component, questions and answers component and a reviews and ratings component. React allowed us to implement the requirements quickly and to keep the code maintainable. We were able to use React hooks and context to allow all the components to interface and share the same data.

![2021-11-13_10-02-07 (1)](https://user-images.githubusercontent.com/54276174/141654324-9ab226c0-e36d-4683-b6c8-dc4f5f1d324e.gif)


## Product Overview
Provides a comprehensive look of the selected product. Displays a main image along with its accompanied selectable images to provide other views of the product. Details of the product include the review rating, category, name, price and the available styles. Selecting the styles will show variants along with with the images, sizes, and product availability.


## Related Products
Related product widgets consist of two parts. One is the Related products which are related to the item displayed by overview component and it changes accordingly. Having carousel of cards let users navigate between the card. And, upon clicking on a star button a modal would pop up which compares the feature between the related card and the product item. Once a card clicked, it would change the overview item as well. The second part is the outfit section, which is unique to each user. It gives the user the ability to save the current product item and navigating through them.


## Product Questions and Answers
The questions and answers widget provides the customer with a list of questions for a given product. On page load, the widget will request data from the API and dynamically render the correct questions in order of helpfulness rating. Additional functionality includes a search bar to filter the displayed questions, options to post questions and answers to the API and buttons to rate questions as helpful or report report them for internal review.

## Product Ratings and Reviews
The ratings and reviews section provides access to user feedback for the current product. Reviews from other users can be read and new reviews can be created. Also there is a breakdown of the ratings given for all of reviews and the average score given for the characteristics of the current product.

### Ratings and Review Component
![2021-11-13_09-53-56 (1)](https://user-images.githubusercontent.com/54276174/141654272-021a70fe-390e-437a-8477-9b6f401ffe4d.gif)



## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run using nodemon:

```sh
npm start
```

To create a production build and watch for changes:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```