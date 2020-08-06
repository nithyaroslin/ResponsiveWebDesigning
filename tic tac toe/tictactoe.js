let playerOne = true;
let gameover = false;
let button = document.querySelector("button");

document.querySelector("tbody").addEventListener("click", function (event) {
  var td = event.target;
  while (td !== this && !td.matches("td")) {
    td = td.parentNode;
  }
  if (td === this) {
    console.log("No table cell found");
  } else {
    console.log(td.getAttribute("id"));
    if (td.innerHTML === "" && gameover === false) {
      if (playerOne === true) {
        td.innerHTML = "X";
        checkForWinner();
        playerOne = false;
      } else {
        td.innerHTML = "O";
        checkForWinner();
        playerOne = true;
      }
    } else if (gameover === true) {
      alert("Click Reset button to play again");
    } else if (td.innerHTML !== "") {
      alert("Click on an empty cell!");
    }
  }
});

const checkForWinner = () => {
  const one = document.getElementById("one").innerHTML;
  const two = document.getElementById("two").innerHTML;
  const three = document.getElementById("three").innerHTML;
  const four = document.getElementById("four").innerHTML;
  const five = document.getElementById("five").innerHTML;
  const six = document.getElementById("six").innerHTML;
  const seven = document.getElementById("seven").innerHTML;
  const eight = document.getElementById("eight").innerHTML;
  const nine = document.getElementById("nine").innerHTML;

  if (
    (one === two &&
      two === three &&
      one !== "" &&
      two !== "" &&
      three !== "") ||
    (four === five &&
      five === six &&
      four !== "" &&
      five !== "" &&
      six !== "") ||
    (seven === eight &&
      eight === nine &&
      seven !== "" &&
      eight !== "" &&
      nine !== "") ||
    (one === four &&
      four === seven &&
      one !== "" &&
      four !== "" &&
      seven !== "") ||
    (two === five &&
      five === eight &&
      two !== "" &&
      five !== "" &&
      eight !== "") ||
    (three === six &&
      six === nine &&
      three !== "" &&
      six !== "" &&
      nine !== "") ||
    (one === five &&
      five === nine &&
      one !== "" &&
      five !== "" &&
      nine !== "") ||
    (three === five &&
      five === seven &&
      three !== "" &&
      five !== "" &&
      seven !== "")
  ) {
    gameover = true;

    if (playerOne === true) {
      document.getElementById("result").innerHTML = "Player one (X) wins";
    } else {
      document.getElementById("result").innerHTML = "Player two (O) wins";
    }
  }
};

const handleClick = () => {
  playerOne = true;
  gameover = false;
  document.getElementById("result").innerHTML = "";

  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    td.innerHTML = "";
  });
};

button.addEventListener("click", handleClick);
