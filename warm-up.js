const submitBtn = document.querySelector("#btn-submit");
const titleInput = document.querySelector("#title-input");

submitBtn.addEventListener("click", function () {
  const inputVal = titleInput.value;

  if (inputVal === "") {
    console.log("Error: empty input");
  }
});
