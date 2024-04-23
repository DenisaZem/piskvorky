import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "playerCircle";

// AI API call
const makeMove = async () => {
  const squares = document.querySelectorAll(".square");
  const playingField = Array.from(squares).map((square) => {
    if (square.classList.contains("board__field--circle")) {
      return "o";
    } else if (square.classList.contains("board__field--cross")) {
      return "x";
    } else {
      return "_";
    }
  });

  const response = await fetch(
    "https://piskvorky.czechitas-podklady.cz/api/suggest-next-move",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        board: playingField,
        player: "x",
      }),
    }
  );
  const data = await response.json();
  const { x, y } = data.position;
  const fieldIndex = x + y * 10;
  const field = squares[fieldIndex];
  field.click();
};

// Function to handle user clicks
const HandleClick = async (event) => {
  const imgCurrentPlayer = document.querySelector(".imgCurrentPlayer");
  if (currentPlayer === "playerCircle") {
    event.target.classList.add(`board__field--circle`);
    imgCurrentPlayer.src = "/piskvorky/pictures/cross.svg";
    makeMove();
    currentPlayer = "playerCross";
  } else {
    event.target.classList.add(`board__field--cross`);
    imgCurrentPlayer.src = "/piskvorky/pictures/circle.svg";
    currentPlayer = "playerCircle";
  }

  const playingField = Array.from(squares).map((square) => {
    if (square.classList.contains("board__field--circle")) {
      return "o";
    } else if (square.classList.contains("board__field--cross")) {
      return "x";
    } else {
      return "_";
    }
  })
  const winner = findWinner(playingField);
  if (winner === "o" || winner === "x") {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 250);
  } else if (winner === "tie") {
    setTimeout(() => {
      alert("Hra skončila nerozhodně.");
      location.reload();
    }, 250);
  }
};

const SelectSquare = document.querySelectorAll(".square");
SelectSquare.forEach((item) => {
  item.addEventListener("click", HandleClick);
});

// Prevent clicking a square more than once
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", (event) => {
    event.target.disabled = true;
  });
});

// Prevent game restart
const confirmAction = (message) => confirm(message);

document
  .querySelector(".buttons-section__icons--restart")
  .addEventListener("click", (event) => {
    if (!confirmAction("Jste si jisti, že chcete restartovat hru?")) {
      event.preventDefault();
    }
  });

document
  .querySelector(".buttons-section__icons--home")
  .addEventListener("click", (event) => {
    if (
      !confirmAction(
        "Jste si jisti, že chcete ukončit hru a přejít na hlavní stránku?"
      )
    ) {
      event.preventDefault();
    }
  });
