import PropTypes from 'prop-types';
import './CustomButton.css';

const CustomButton = ({bgcolor, title}) => {
  return (
    <button type="button" className={"btn " + bgcolor}>{title}</button>
  )
}

CustomButton.propTypes = {};

CustomButton.defaultProps = {};

export default CustomButton;
