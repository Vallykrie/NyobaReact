import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src="https://i.pinimg.com/originals/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg"
        alt="profile picture"
      />
      <h2 className={styles.cardTitle}> {props.title} </h2>
      <p className={styles.cardText}> {props.paragraph}</p>
    </div>
  );
}

export default Card;
