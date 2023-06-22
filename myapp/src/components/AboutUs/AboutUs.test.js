//import react from react
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";

//import buttonText because you will be using it as a prop.
import AboutUs from "./AboutUs.js";
//import AddItem, {buttonText} from '../AddItem/index.js'

test("does the header appear on the page", () => {
  //arrange
  render(<AboutUs />);
  const header = screen.getByRole("heading", { level: 1 });
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent("About Us");
  //screen.logTestingPlaygroundURL()
});
