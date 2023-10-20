let radiosLength = document.getElementsByName("length");
let selectedLength = document.querySelector(
  'input[name="length"]:checked'
).value;
let radiosRepair = document.getElementsByName("ремонта");
let selectedRepair = document.querySelector(
  'input[name="ремонта"]:checked'
).value;
let radiosTarif = document.getElementsByName("Тариф");
let selectedTarif = document.querySelector('input[name="Тариф"]:checked').value;
let totalPrice;

function formatNumber(num) {
  let numStr = String(num);
  let formattedNum = "";
  let count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    if (count === 3) {
      formattedNum = " " + formattedNum;
      count = 0;
    }
    formattedNum = numStr[i] + formattedNum;
    count += 1;
  }

  totalPrice = formattedNum;
  document.getElementById("calc__left__price__text").innerText = formattedNum;
}

formatNumber(parseInt((selectedLength * selectedTarif) / selectedRepair));

function getLength() {
  for (let i = 0; i < radiosLength.length; i++) {
    if (radiosLength[i].checked) {
      selectedLength = radiosLength[i].value;
      formatNumber(parseInt((selectedLength * selectedTarif) / selectedRepair));
      break;
    }
  }
}

function getRepair() {
  for (let i = 0; i < radiosRepair.length; i++) {
    if (radiosRepair[i].checked) {
      selectedRepair = radiosRepair[i].value;
      formatNumber(parseInt((selectedLength * selectedTarif) / selectedRepair));
      break;
    }
  }
}

function getTarif() {
  for (let i = 0; i < radiosTarif.length; i++) {
    if (radiosTarif[i].checked) {
      selectedTarif = radiosTarif[i].value;
      formatNumber(parseInt((selectedLength * selectedTarif) / selectedRepair));
      break;
    }
  }
}
