import React from 'react';
import { render } from '@testing-library/react';

import Related from '../src/components/related/Related.jsx';

describe('Related', () => {
  test('renders Related component', () => {
    render(<Related />);
  });
});