import Button from "../UI/Button";
import Container from "../UI/Container";
import styles from "./InvalidInput.module.css";

const InvalidInput = (props) => {
  const deletePopup = () => props.onDletePopup(true);

  return (
    <div>
      <div className={styles.overlay} onClick={deletePopup} />
      <Container className={styles.invalid__input}>
        <h2>Invalid input</h2>
        <p>{props.invalidText}</p>
        <div className={styles["invalid__btn"]} onClick={deletePopup}>
          <Button>Okay</Button>
        </div>
      </Container>
    </div>
  );
};

export default InvalidInput;
