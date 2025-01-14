import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import UserInput from "./UserInput";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <UserInput guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
