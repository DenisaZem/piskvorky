let currentPlayer = "playerCircle";
const HandleClick = (event) => {
  const imgCurrentPlayer = document.querySelector(".imgCurrentPlayer");
  if (currentPlayer === "playerCircle") {
    event.target.classList.add(`board__field--circle`);
    imgCurrentPlayer.src = "/piskvorky/pictures/cross.svg";
    currentPlayer = "playerCross";
  } else {
    event.target.classList.add(`board__field--cross`);
    imgCurrentPlayer.src = "/piskvorky/pictures/circle.svg";
    currentPlayer = "playerCircle";
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
