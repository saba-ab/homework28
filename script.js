const save = document.getElementById("save");
const remove = document.getElementById("remove");
save.addEventListener("click", () => {
  const storageInput = document.getElementById("storageInput");
  const inputValue = storageInput.value;
  localStorage.setItem(inputValue, "local");
});
remove.addEventListener("click", () => {
  const storageInput = document.getElementById("storageInput");
  const inputValue = storageInput.value;
  localStorage.removeItem(inputValue, "local");
});
