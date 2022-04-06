import { fireEvent, render, screen } from "@testing-library/react";
import { renderer } from "react-test-renderer";
import { HomePage } from "../src/components/HomePage";

describe("<HomePage/>", () => {
  test("display Movie benefits", () => {
    render(<HomePage />);
    const btnMovie = screen.getByTestId("btn-Movie");
    fireEvent.click(btnMovie);

    expect(screen.getByTestId("display-benefit")).toHaveTextContent("Movies");
  });
});
