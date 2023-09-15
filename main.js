const btnNota = document.querySelectorAll(".nota");
const btnSubmit = document.getElementById("submit-btn");
let chosenValue = 0;

const htmlThankPage = (nota, length) => `
<img class="img-thank" src="./images/illustration-thank-you.svg" alt="thank-you">
<h3 class="select-nota-title">You selected ${nota} out of ${length}</h3>

<h1 class="title">Thank you!</h1>

<p class="description">
  We appreciate you taking the time to give a rating. If you ever need more support,
  don’t hesitate to get in touch!
</p>
`;

const removeActive = () => btnNota.forEach(btn => btn.classList.remove("active"));


function setNota(e) {
  chosenValue = e.target.value;
  if(e.target.classList.contains("active")) {
    removeActive();
    chosenValue = 0;
  } else {
    removeActive();
    e.target.classList.add("active");
  }
}

btnNota.forEach((btn) => btn.addEventListener("mousedown", e => setNota(e)));

function sendNota() {
  if (chosenValue <= 0) return;
  const elementContainer = document.querySelector(".container");
  elementContainer.classList.add("active");
  elementContainer.innerHTML = htmlThankPage(chosenValue, btnNota.length);
}

btnSubmit.addEventListener("mousedown",() => sendNota())