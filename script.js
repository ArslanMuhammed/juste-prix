let input = document.querySelector("input"),
  error = document.querySelector(".text-danger"),
  form = document.querySelector("form"),
  btn = document.querySelector("button"),
  p = document.querySelector("p");

let life = 0,
  chooseNumber;

error.style.display = "none";

function verification(number) {
  let instruction = document.createElement("div");

  if (chooseNumber < numberRandom) {
    instruction.textContent = "#" + life + " ( " + number + " ) c'est plus";
    instruction.className = "instruction plus";
  } else if (chooseNumber > numberRandom) {
    instruction.textContent = "#" + life + " ( " + number + " ) c'est moins";
    instruction.className = "instruction moins";
  } else {
    instruction.textContent =
      "#" +
      life +
      " ( " +
      number +
      " ) Félicitation vous avez trouvé le juste prix";
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  console.log(numberRandom);
  document.querySelector("#instruction").prepend(instruction);
}

function numberGeneratRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  p.textContent = "Le juste prix est entre " + min + " et " + max;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numberRandom = numberGeneratRandom(0, 10);

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red";
  } else {
    life++;
    input.style.borderColor = "silver";
    chooseNumber = input.value;
    input.value = "";
    verification(chooseNumber);
  }
});
