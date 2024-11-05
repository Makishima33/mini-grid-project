import { useState } from "react";
import Cell from "./Cell";
import "./Grid.css";

const Grid = () => {
  const size = 2;
  const initialGridArray = Array(size * size);
  initialGridArray.fill(false);
  const [grid, setGrid] = useState(initialGridArray);
  const toggle = (index) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[index] = !newGrid[index];
      return newGrid;
    });
  };
  const countCells = grid.filter((cell) => cell).length;

  return (
    <div className="big-grid">
      <h2>Count: {countCells}</h2>
      <div className="grid-container">
        {grid.map((isOn, index) => (
          <Cell key={index} isOn={isOn} onToggle={() => toggle(index)} />
        ))}
      </div>
    </div>
  );
};
export default Grid;
