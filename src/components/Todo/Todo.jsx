import PropTypes from 'prop-types';
import CustomButton from '../CustomButton/CustomButton';
import './Todo.css';

const Todo = () => {
  return(
    <div class="col col-12 p-2 todo-item" todo-id="0">
  <div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" onchange="TodoChecked(0)" aria-label="Checkbox for following text input" false=""/>
    </div>
  </div>
  <input type="text" readonly="" class="form-control false " aria-label="Text input with checkbox" value="take out the trash"/>
  <div class="input-group-append">
  <CustomButton bgcolor="bg-danger" title="X"/>
  </div>
  </div>
  </div>
  )
};

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;

