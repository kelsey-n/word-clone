import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      <Banner guesses={guesses} answer={answer} />
      {range(NUM_OF_GUESSES_ALLOWED).map((value) => (
        <Guess
          key={value}
          guess_instance={guesses[value] || ""}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default Guesses;
