import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantCard from "../RestaurantCard"; // Adjust the import based on your file structure
import MOCK_DATA from "../../mocks/resCardMock.json"; // Adjust the import based on your file structure
import "@testing-library/jest-dom";
it("Should render Restaurant Card with props Data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Subway");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component With Promoted Label", () => {
  //Homework -test HOC:with promoted label
});
