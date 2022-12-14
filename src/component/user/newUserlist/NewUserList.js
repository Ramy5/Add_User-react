import NewUser from "../newUser/NewUser";
import Container from "../UI/Container";
import styles from "./NewUserList.module.css";

const NewUserList = (props) => {
  return (
    <Container className={styles["new__user-list"]}>
      {props.userData.map((data) => (
        <NewUser key={data.id} username={data.username} age={data.age} />
      ))}
    </Container>
  );
};

export default NewUserList;
