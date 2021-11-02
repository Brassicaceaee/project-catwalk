import React from 'react';
import { render } from '@testing-library/react';

import Reviews from '../src/components/reviews/Reviews.jsx';
import ProductBreakdown from '../src/components/reviews/ProductBreakdown.jsx';
import RatingBreakdown from '../src/components/reviews/RatingBreakdown.jsx';
import ReviewsList from '../src/components/reviews/ReviewsList.jsx';
import ReviewTile from '../src/components/reviews/ReviewTile.jsx';

describe('Reviews', () => {
  test('renders Reviews component', () => {
    render(<Reviews />);
  });
});

describe('ProductBreakdown', () => {
  test('renders ProductBreakdown component', () => {
    render(<ProductBreakdown />);
  });
});

describe('RatingBreakdown', () => {
  test('renders RatingBreakdown component', () => {
    render(<RatingBreakdown />);
  });
});

describe('ReviewsList', () => {
  test('renders ReviewsList component', () => {
    render(<ReviewsList />);
  });
});

describe('ReviewTile', () => {
  test('renders ReviewTile component', () => {
    render(<ReviewTile />);
  });
});