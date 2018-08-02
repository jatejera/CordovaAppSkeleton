app.controllers = {
    //bind button id to it's corresponding page
    "indexPage": function (page) {

    },
    "menuPage": function (page) {
        function bindPage(buttonId, target) {
            document.getElementById(buttonId).onclick = function () {
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load(target).then(menu.close.bind(menu));
            };
        }

        bindPage('menu-main', 'mainPage.html');
        bindPage('menu-secondPage', 'secondPage.html');
        bindPage('menu-thirdPage', 'thirdPage.html');
    },

    "mainPage": function (page) {
        page.querySelector('#btn-splitter-toggle').onclick = function () {
            document.querySelector('#app-splitter').left.toggle();
        };

        var helloButton = page.querySelector('#sayHello');
        helloButton.addEventListener("click", function () {
            alert("Hello World");
            
        })
    },

    "secondPage": function (page) {
        page.querySelector('#btn-splitter-toggle').onclick = function () {
            document.querySelector('#app-splitter').left.toggle();
        };

        app.views.secondPage(page);

    },

    "thirdPage": function (page) {
        page.querySelector('#btn-splitter-toggle').onclick = function () {
            document.querySelector('#app-splitter').left.toggle();
        };
         app.models.fetchUserData();
      
//        app.views.thirdPage(page);

    }

};
