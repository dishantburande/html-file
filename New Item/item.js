//childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
//console.log(itemList.FirstChild);
// firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'hello 1';

//lastChild
//console.log(itemList.lastChild);
//itemList.lastElementChild.textContent = 'hello 1';


//nextSibling
//console.log(itemList.nextSibling);
// nextElementSibling
//console.log(itemList.nextElementSibling);


//previousSibling
//console.log(itemList.previousSibling);
// previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//createElement

// create a div
var newDiv = document.createElement('div');

// Add class
newDiv.classNmae= 'hello';

// Add id
newDiv.id = 'hello 1';

console.log(newDiv);

// Add attr
newDiv.setAttribute('title','Hello Div');

// create text node
var newDivText = document.createTextNode('Hello world');

// Add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1);