// IMPORT ONSENUI ELEMENTS AS WELL AS ADDITIONAL MODULES
import ons from 'onsenui';
import "../node_modules/onsenui/css/onsenui.css";
import "../node_modules/onsenui/css/onsen-css-components.css";
import "./css/index.css";

window.ons = ons;

// IMPORT PAGES
import main from 'html/mainPage.html';
import menu from 'html/menuPage.html';
import second from 'html/secondPage.html';
import third from 'html/thirdPage.html';

//DECLARE BODY GLOBAL VARIABLE
var body = document.body;
console.log(document.body);


// ADD PAGES USING PAGE METHOD
addPage(main, 'mainPage.html')
addPage(menu, 'menuPage.html')
addPage(second, 'secondPage.html')
addPage(third, 'thirdPage.html')

function addPage(Value, PageName) {
    var PageDiv = document.createElement('template');
    PageDiv.id = PageName;
    PageDiv.innerHTML = Value;
//    console.log(PageDiv); // ENABLE FOR DEBUGGING
    body.appendChild(PageDiv);
}

var codovaScript = document.createElement('script');
    codovaScript.src = "cordova.js";
    body.appendChild(codovaScript);
