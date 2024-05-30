import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";


describe("Компонент навигации", () => {
    it("Должен отрендерить картинку с логотипом", () => {
      render(<Navigation />);
      const Image = screen.getByAltText("Cкайпро-музыка.логотип");
      expect(Image).toBeInTheDocument();
    });
  });