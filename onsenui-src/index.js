import ons from 'onsenui';
import "../node_modules/onsenui/css/onsenui.css";
import "../node_modules/onsenui/css/onsen-css-components.css";

window.ons = ons;

import main from 'html/mainPage.html';
import menu from 'html/menuPage.html';
import second from 'html/secondPage.html';
import third from 'html/thirdPage.html';

var body = document.body;
console.log(document.body);

//var mainPage = document.createElement('template');
//mainPage.id = 'mainPage.html';
//mainPage.innerHTML = main;
//console.log(mainPage);
//body.appendChild(mainPage);
//
//var menuPage = document.createElement('template');
//menuPage.id = 'menuPage.html';
//menuPage.innerHTML = menu;
//console.log(menuPage);
//body.appendChild(menuPage);
//
//var secondPage = document.createElement('template');
//secondPage.id = 'secondPage.html';
//secondPage.innerHTML = second;
//console.log(secondPage);
//body.appendChild(secondPage);

//var thirdPage = document.createElement('template');
//thirdPage.id = 'thirdPage.html';
//thirdPage.innerHTML = third;
//console.log(thirdPage);
//body.appendChild(thirdPage);
addPage(main, 'mainPage.html')
addPage(menu, 'menuPage.html')
addPage(second, 'secondPage.html')
addPage(third, 'thirdPage.html')

function addPage(Value, PageName) {
    var PageDiv = document.createElement('template');
    PageDiv.id = PageName;
    PageDiv.innerHTML = Value;
    console.log(PageDiv);
    body.appendChild(PageDiv);

}
