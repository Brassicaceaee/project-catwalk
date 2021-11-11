import React from 'react';
import { render } from '@testing-library/react';

import Overview from '../src/components/overview/overview.jsx'
import ImageGallery from '../src/components/overview/ImageGallery.jsx'
import ProductInfo from '../src/components/overview/ProductInfo.jsx'
import StyleSelector from '../src/components/overview/StyleSelector.jsx'
import AddToCart from '../src/components/overview/addToCart/AddToCart.jsx'



describe('Overview', () => {
  test('renders Overview component', () => {
    render(<Overview />);
  });
});

describe('ImageGallery', () => {
  test('renders ImageGallery component', () => {
    render(<ImageGallery />);
  });
});



describe('ProductInfo', () => {
  test('renders ProductInfo component', () => {
    render(<ProductInfo />);
  });
});



describe('StyleSelector', () => {
  test('renders StyleSelector component', () => {
    render(<StyleSelector />);
  });
});



describe('AddToCart', () => {
  test('renders AddToCart component', () => {
    render(<AddToCart />);
  });
});





