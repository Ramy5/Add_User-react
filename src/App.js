import { useState } from "react";
import NewUserList from "./component/user/newUserlist/NewUserList";
import UserInput from "./component/user/userInput/UserInput";

const DATA = [];

function App() {
  const [data, setData] = useState(DATA);

  const addNewUser = (newData) => {
    setData((prevData) => {
      const mainData = [...prevData];
      mainData.push(newData);
      return mainData;
    });
  };

  return (
    <>
      <UserInput onAddNewUser={addNewUser} />
      {data.length !== 0 && <NewUserList userData={data} />}
    </>
  );
}

export default App;
