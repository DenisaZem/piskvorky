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

// Prevent game restart
document
  .querySelector(".buttons-section__icons--restart")
  .addEventListener("click", (event) => {
    const confirmation = confirm("Jste si jisti, že chcete restartovat hru?");
    if (confirmation === false) {
      event.preventDefault();
    }
  });
document
  .querySelector(".buttons-section__icons--home")
  .addEventListener("click", (event) => {
    const confirmation = confirm(
      "Jste si jisti, že chcete ukončit hru a přejít na hlavní stránku?"
    );
    if (confirmation === false) {
      event.preventDefault();
    }
  });
