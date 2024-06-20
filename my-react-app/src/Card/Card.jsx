import styles from "./Card.module.css";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={props.img}
        alt="profile picture"
      />
      <h2 className={styles.cardTitle}> {props.title} </h2>
      <p className={styles.cardText}> {props.paragraph}</p>
    </div>
  );
}

Card.defaultProps = {
  img: "https://via.placeholder.com/150",
  title: "Title",
  paragraph: "This is a paragraph",
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Card;
