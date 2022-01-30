let esmha = [];

let nomreha = [];
document.querySelector("#save").addEventListener("click", function () {
  let esmInput = document.querySelector("#esm").value;
  let nomrehInput = Number(document.querySelector("#nomreh").value);
  if (!nomrehInput && !esmInput) {
    document.querySelector("#alert").textContent = "لطفا مقداری وارد کنید";
    document.querySelector("#alert").style.color = "red";
  } else if (nomrehInput <= 20 && nomrehInput >= 0) {
    esmha.push(document.querySelector("#esm").value);
    console.log(esmha);
    nomreha.push(Number(document.querySelector("#nomreh").value));
    console.log(nomreha);
    document.querySelector("#nomrehdars").textContent =
      bishtarinnomreh(nomreha);
    document.querySelector("#esmedars").textContent =
      esmeBishtarinNomreh(esmha);
  } else {
    document.querySelector("#alert").textContent =
      "لطفا نمره خود را درست وارد کنید ";
    document.querySelector("#alert").style.color = "red";
  }
});
let indexNomreha = 0;
function bishtarinnomreh(nomreha) {
  let max = 0;
  for (let i = 0; i < nomreha.length; i++) {
    if (nomreha[i] > max) {
      max = nomreha[i];
      indexNomreha = nomreha.indexOf(max);
    }
  }

  return max;
}
function esmeBishtarinNomreh(darsha) {
  return darsha[indexNomreha];
}
