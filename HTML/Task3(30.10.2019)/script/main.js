var btnForm = document.querySelector("#btn-form");
console.log(btnForm);
var dialog = document.querySelector("dialog");
var btnClose = document.querySelector(".btn_close");

btnForm.onclick = function() {
  dialog.showModal();
};
btnClose.onclick = function() {
  dialog.close();
};
