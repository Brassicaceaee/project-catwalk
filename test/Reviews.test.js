import React from 'react';
import { render } from '@testing-library/react';

import {ProductProvider} from '../src/context/ProductContext.jsx'
import Reviews from '../src/components/reviews/Reviews.jsx';
import ProductBreakdown from '../src/components/reviews/ProductBreakdown.jsx';
import RatingBreakdown from '../src/components/reviews/RatingBreakdown.jsx';
import ReviewsList from '../src/components/reviews/ReviewsList.jsx';
import ReviewTile from '../src/components/reviews/ReviewTile.jsx';

describe('Reviews', () => {
  test('renders Reviews component', () => {
    render(<ProductProvider><Reviews /></ProductProvider>);
  });
});

describe('ProductBreakdown', () => {
  test('renders ProductBreakdown component', () => {
    render(<ProductProvider><ProductBreakdown /></ProductProvider>);
  });
});

describe('RatingBreakdown', () => {
  test('renders RatingBreakdown component', () => {
    render(<ProductProvider><RatingBreakdown /></ProductProvider>);
  });
});

describe('ReviewsList', () => {
  test('renders ReviewsList component', () => {
    render(<ProductProvider><ReviewsList /></ProductProvider>);
  });
});

describe('ReviewTile', () => {
  test('renders ReviewTile component', () => {
    render(<ProductProvider><ReviewTile /></ProductProvider>);
  });
});