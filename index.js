// // Write your code here!

// const element = document.createElement("div");

// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }
// element.append(ul);

// const elements = document.getElementById("main");
// elements.style.height = "300px";
// elements.style.backgroundColor = "#27647B";

// elements.textContent = "You've changed what's on the screen!";


// elements.style.fontSize = "24px";
// elements.style.marginLeft = "30px";
// elements.style.lineHeight = 2;

// elements.className = "pet-listing dog";

// elements.classList.remove("dog");
// elements.classList.add('cat', 'sale');

// const uls = document.getElementsByTagName("ul")[0];
// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");

newHeader.textContent = "Christian " + "is the champion";