import { useState } from "react";
import Container from "../UI/Container";
import Button from "../UI/Button";
import InvalidInput from "../invalidInput/InvalidInput";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [invalidMessage, setInvalidMessage] = useState("");

  const onUserChange = (e) => setUser(e.target.value);
  const onAgeChange = (e) => setAge(e.target.value);
  const validInputHandler = (isValid) => {
    if (isValid) setIsValid(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // INVALID AGE (NEGATIVE VALUE)
    if (+age < 0) {
      setInvalidMessage("Please enter a valid age (> 0).");
      setIsValid(false);
      return;
    }

    // WHEN EMPTY INPUTS
    if (!user || !age) {
      setInvalidMessage(
        "Please enter a valid name and age (non-empty values)."
      );
      setIsValid(false);
      return;
    }

    // COLLECT DATA
    const inputsData = {
      id: Date.now().toString(),
      username: user,
      age: +age,
    };
    // MOVE DATA TO APP FILE
    props.onAddNewUser(inputsData);

    // EMPTY INPUTS AFTER SUBMIT
    setUser("");
    setAge("");
  };

  return (
    <div>
      {!isValid && (
        <InvalidInput
          onDletePopup={validInputHandler}
          invalidText={invalidMessage}
        />
      )}
      <form onSubmit={onSubmitHandler}>
        <Container className={styles["user__form"]}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user}
            onChange={onUserChange}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={onAgeChange} />
          <Button type="submit">Add User</Button>
        </Container>
      </form>
    </div>
  );
};

export default UserInput;
