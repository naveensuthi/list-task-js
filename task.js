const item = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const enterBtn = document.getElementById("enter");
const input = document.getElementById("userInput");

console.log(item, ul, input, enterBtn);

function inputLength() {
  return input.value.length;
}

function createList() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  li.onclick = () => li.classList.toggle("done");

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  deleteBtn.onclick = () => {
    li.classList.add("delete");
    setTimeout(function () {
      li.style.display = "none";
    }, 500);
  };
}

enterBtn.onclick = () => {
  if (inputLength() > 0) {
    createList();
  }
};

input.onkeypress = () => {
  if (inputLength() > 0 && event.which === 13) {
    createList();
  }
};
