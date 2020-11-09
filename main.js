console.log('Hello World!');
//This is done to replace the HTML elements. When the button is clicked//
var list=document.getElementById('list');
function replaceContent(){list.innerHTML='<li>Mercury</li>'+'<li>Venus</li>'+'<li>Neptune</li>';}
var element=document.createElement('p');
var textNode=document.createTextNode('I love you God');
element.appendChild(textNode);
document.getElementById('demo').appendChild(element);
//This is used to add an element before the first child of a list//
var west=document.getElementById('west');
function prependContent(){var li=document.createElement('li');
    var textNode=document.createTextNode('Strawberry');;
    li.appendChild(textNode);
    west.prehend(li);
}