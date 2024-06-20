import PropTypes from 'prop-types';

const styles = {
  fontFamily: "Arial, sans-serif",
  fontSize: "1em",
  padding: "10px",
  border: "1px solid hsla(0, 0%, 50%, 0.8)",
};

const p = {
  margin: "0",
};

function Student(props) {
  return (
    <div style={styles}>
      <p style={p}> Name: {props.name}</p>
      <p style={p}> Age: {props.age}</p>
      <p style={p}> Gender: {props.gender ? "Male" : "Female"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.bool,
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  gender: false,
}

export default Student;
