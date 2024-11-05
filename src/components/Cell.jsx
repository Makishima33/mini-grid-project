import "./Cell.css";
import PropTypes from "prop-types";

const Cell = ({ isOn, onToggle }) => {
  return (
    <div className={`cell ${isOn ? "on" : "off"}`} onClick={onToggle}></div>
  );
};
Cell.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default Cell;
