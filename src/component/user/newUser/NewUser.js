import styles from "./NewUser.module.css";

const NewUser = (props) => {
  return (
    <div className={styles["new__user"]}>
      <p>
        {props.username} ({props.age} years old)
      </p>
    </div>
  );
};

export default NewUser;
