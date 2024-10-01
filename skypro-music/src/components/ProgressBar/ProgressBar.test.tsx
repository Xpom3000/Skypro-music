import renderer  from"react-test-renderer";
import ProgressBar from "./ProgressBar";

describe("Компонент ProgressBar", () => {
  it("Успешный рендер ProgressBar", () => {
    const handleSeek = jest.fn();
    const test = renderer
      .create(
        <ProgressBar
          max={135.444898}
          value={2.377663}
          step={0.01}
          onChange={handleSeek}
        />
      )
      .toJSON();
    expect(test).toMatchSnapshot();
  });
});