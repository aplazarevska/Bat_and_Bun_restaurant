import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import EmbedMap from '../EmbedMap';
import { afterEach, expect } from '@jest/globals';

const imgUrl = "./img/bat-bun-map.jpg";

afterEach(() => {
  cleanup();
});

test("Should render embed map component that has a background image", () => {
  render(<EmbedMap imgUrl={imgUrl} />);
  const embedMapElement = screen.getByTestId('embed-map');
  expect(embedMapElement).toBeInTheDocument();
  expect(embedMapElement).toHaveStyle(`background-image: url(${imgUrl})`);
});

test("Should call handleClick on click", () => {
  const handleMapClick = jest.fn();

  const { getByTestId } = render(<EmbedMap imgUrl={imgUrl} handleMapClick={handleMapClick} />);
  fireEvent.click(getByTestId('embed-map'));

  expect(handleMapClick).toHaveBeenCalled();
});

test("Matches snapshot", () => {
  const tree = renderer.create(<EmbedMap imgUrl={imgUrl} />).toJSON();
  expect(tree).toMatchSnapshot();
});
