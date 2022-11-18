function dqs(id) {
  return document.querySelector(id);
}
function getQuantity(id) {
  return parseInt(dqs(id).value);
}
function setQuantity(id, value) {
  dqs(id).value = value;
}
function setText(id, value) {
  dqs(id).innerText = value;
}
function setTotal() {
  const subTotal =
    parseInt(dqs("#iphonePrice").innerText) +
    parseInt(dqs("#casePrice").innerText);
  dqs("#setTotal").innerText = subTotal;
  dqs("#tax").innerText = (subTotal * 0.01).toFixed(2);
  dqs("#total").innerText = subTotal + subTotal * 0.01;
}
dqs("#iphone-add").addEventListener("click", function () {
  let oldQuantity = getQuantity("#iPhoneQuantity");
  setQuantity("#iPhoneQuantity", oldQuantity + 1);
  setText("#iphonePrice", (oldQuantity + 1) * 1219);
  setTotal();
});
dqs("#iphone-remove").addEventListener("click", function () {
  let oldQuantity = getQuantity("#iPhoneQuantity");
  if (oldQuantity > 0) {
    setQuantity("#iPhoneQuantity", oldQuantity - 1);
    setText("#iphonePrice", (oldQuantity - 1) * 1219);
    setTotal();
  }
});

dqs("#case-add").addEventListener("click", function () {
  let oldQuantity = getQuantity("#caseQuantity");
  setQuantity("#caseQuantity", oldQuantity + 1);
  setText("#casePrice", (oldQuantity + 1) * 59);
  setTotal();
});
dqs("#case-remove").addEventListener("click", function () {
  let oldQuantity = getQuantity("#caseQuantity");
  if (oldQuantity > 0) {
    setQuantity("#caseQuantity", oldQuantity - 1);
    setText("#casePrice", (oldQuantity - 1) * 59);
    setTotal();
  }
});
