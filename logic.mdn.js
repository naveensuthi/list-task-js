const enterBtn = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

const item = document.querySelectorAll("li");

console.log(enterBtn, userInput, ul, item);

function inputLength() {
  return input.value.length;
}

console.log(item.length);

function createList() {
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOut);

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", deleteListItem());

  function deleteListItem() {
    li.classList.add("delete");
  }
}

// createList();
function addListAfterClick() {
  if (inputLength() > 0) {
    createList();
  }
}

// enterBtn.addEventListener("click", addListAfterClick);
enterBtn.onclick = () => addListAfterClick();

input.addEventListener("keypress", () => {
  if (inputLength() > 0 && event.which === 13) {
    createList();
  }
});
