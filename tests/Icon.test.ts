import { beforeEach, afterEach, test, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import { AcademicCap } from '../src/lib/index';
import { render, screen, cleanup } from '@testing-library/svelte';

afterEach(() => cleanup());
beforeEach(() => {
  render(AcademicCap, { size: '40' });
});

test('should mount the path element', async () => {
  const pathElement = screen.getByLabelText('svg-path');

  expect(pathElement).toBeInTheDocument();
});

test('should have the correct d attribute passed in from baseEdgeProps', async () => {
  const pathElement = screen.getByLabelText('svg-path');

  expect(pathElement).toHaveAttribute('size', '40');
});
