import PropTypes from "prop-types";
import "./TodoInput.css";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";

const TodoInput = () => {
  return (
    <div className="row justify-content-between text-white p-2">
      <div className="form-group w-100 d-flex mb-2">
        <CustomInput />
        <CustomButton bgcolor="btn-primary" title="Add todo"/>
      </div>
    </div>
  );
};

TodoInput.propTypes = {};

TodoInput.defaultProps = {};

export default TodoInput;
