import React from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const onChangeEvent = (event) => {
    setName(`Hello ${event.target.value}!`);
  };

  return (
    <div>
      {
        <>
          <p>Enter your name:</p>
          <input type="{text}" onChange={onChangeEvent} />
          <p className="display">{name}</p>
        </>
      }
    </div>
  );
};

export default App;
