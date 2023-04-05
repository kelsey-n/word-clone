import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess_instance, answer }) {
  if (guess_instance === "") {
    return (
      <p className="guess">
        {range(5).map((r) => (
          <span key={r} className="cell"></span>
        ))}
      </p>
    );
  } else {
    const guess_status = checkGuess(guess_instance, answer);
    return (
      <p className="guess">
        {guess_status.map((r, idx) => (
          <span key={idx} className={`cell ${r.status}`}>
            {r.letter}
          </span>
        ))}
      </p>
    );
  }
}

export default Guess;
