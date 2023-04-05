import React from "react";

function handleWinLose(guesses, answer) {
  if (guesses[guesses.length - 1] === answer) return "win";
  else if (guesses.length === 6) return "lose";
  else return "neither";
}

function Banner({ guesses, answer }) {
  const status = handleWinLose(guesses, answer);
  const numGuesses = guesses.length;

  if (status === "neither") return;
  else if (status === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {numGuesses} {numGuesses > 1 ? "guesses" : "guess"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (status === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
