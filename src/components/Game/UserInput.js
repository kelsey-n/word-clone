import React from "react";

function UserInput({ guesses, setGuesses }) {
  const [userInput, setUserInput] = React.useState("");

  function handleSubmit(event) {
    console.log(userInput);
    setGuesses([...guesses, userInput]);
    setUserInput("");
  }

  return (
    <>
      <form
        className="user-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <label htmlFor="user-input">Enter guess:</label>
        <input
          required
          id="user-input"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value.toUpperCase())}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
        ></input>
      </form>
    </>
  );
}

export default UserInput;
