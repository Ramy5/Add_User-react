import Button from "../UI/Button";
import Container from "../UI/Container";
import ReactDOM from "react-dom";
import styles from "./InvalidInput.module.css";

const Backdrop = (props) => (
  <div className={styles.overlay} onClick={props.onDletePopup} />
);

const Overlay = (props) => {
  return (
    <Container className={styles.invalid__input}>
      <h2>Invalid input</h2>
      <p>{props.invalidText}</p>
      <div className={styles["invalid__btn"]} onClick={props.onDletePopup}>
        <Button>Okay</Button>
      </div>
    </Container>
  );
};

const InvalidInput = (props) => {
  const deletePopup = () => props.onDletePopup(true);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onDletePopup={deletePopup} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay invalidText={props.invalidText} onDletePopup={deletePopup} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default InvalidInput;
