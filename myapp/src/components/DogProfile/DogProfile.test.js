// // myComponent.test.js
// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import DogProfile from './DogProfile';
// test('Button is clickable', () => {
//   // Create a mock function for the onClick handler
//   const mockOnClick = jest.fn();
//   // Render the component
//  render(<DogProfile onClick={mockOnClick} />);
//   // Get the button element by its text
//   const button = screen.getByText('Adopt Me!');
//   // Simulate a click on the button
//   fireEvent.click(button);
//   // Verify that the onClick handler was called once
//   expect(mockOnClick).toHaveBeenCalledTimes(1);
// });

//import react from react
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";

//import buttonText because you will be using it as a prop.
import DogProfile from "./DogProfile.js";
//import AddItem, {buttonText} from '../AddItem/index.js'

test("does the header appear on the page", () => {
  //arrange
  render(<DogProfile />);
  const header = screen.getByRole("heading", { level: 1 });
  expect(header).toBeInTheDocument();
  //screen.logTestingPlaygroundURL()
});


// import { render, screen } from "@testing-library/react";
// import { test, expect } from "@jest/globals";

// //import buttonText because you will be using it as a prop.
// import AboutUs from "./AboutUs.js";
// //import AddItem, {buttonText} from '../AddItem/index.js'

// test("does the header appear on the page", () => {
//   //arrange
//   render(<AboutUs />);
//   const header = screen.getByRole("heading", { level: 1 });
//   expect(header).toBeInTheDocument();
//   expect(header).toHaveTextContent("About Us");
//   //screen.logTestingPlaygroundURL()
// });









