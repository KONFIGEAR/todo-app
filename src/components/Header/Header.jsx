import PropTypes from 'prop-types';
import './Header.css';

const Header = ({bgColor, title}) => {
    return (
      <div className={` row text-white  ${bgColor}`}>
        <div className="col  p-2">
          <h4>{title}</h4>
        </div>
      </div>

  )
    };

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
