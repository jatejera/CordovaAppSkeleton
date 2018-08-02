app.views = {
    
    "menuPage": function (page) {

        alert('this is the menu page')

    },

    "mainPage": function (page) {

    },

    "secondPage": function (page) {

        var listDiv = page.querySelector('#theList');

        var listData = app.models.data.todolist;
        listDiv.innerHTML = "";
        listData.forEach(function (e) {
            listDiv.innerHTML += "<ons-list-item>" + e.task + "</ons-list-item>";
        })

    },

    "thirdPage": function (page) {
        
    }

};
