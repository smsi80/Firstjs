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
    nomreha.push(Number(document.querySelector("#nomreh").value));
    document.querySelector("#nomrehdars").textContent =
      bishtarinnomreh(nomreha);
    document.querySelector("#esmedars").textContent =
      esmeBishtarinNomreh(esmha);
    document.querySelector(
      "#moadel"
    ).textContent = `معدل برابر است با: ${moadelCac(nomreha)}`;
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
function moadelCac(nomreha) {
  moadel = 0;
  for (let i = 0; i < nomreha.length; i++) {
    moadel += nomreha[i];
  }
  return (moadel / nomreha.length).toFixed(2);
}
document.querySelector("#showmoadel").addEventListener("click", function () {
  if (
    nomreha.length > 0 &&
    esmha.length > 0 &&
    document.querySelector("#moadelOverlay").classList.contains("hidden")
  ) {
    document.querySelector("#moadelOverlay").classList.remove("hidden");
  } else if (
    !document.querySelector("#moadelOverlay").classList.contains("hidden")
  ) {
    document.querySelector("#moadelOverlay").classList.add("hidden");
  } else {
    document.querySelector("#alert").textContent =
      "لطفا اول نمره و اسم درس را وارد کنید";
    document.querySelector("#alert").style.color = "red";
  }
});
document.querySelector("#closeOverlay").addEventListener("click", function () {
  document.querySelector("#moadelOverlay").classList.add("hidden");
});
