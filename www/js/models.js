app.models = {
    "data": {
        "todolist": [{
            "task": "Sample Task 1",
            "done": false
        }, {
            "task": "Sample Task 2",
            "done": false
        }]
    },

    "todo": {

        "get": function (id) {
            return app.models.data.todolist[id];
        },

        "add": function (task) {
            app.models.data.todolist.push({
                "task": task,
                "done": false
            });
        },

        "end": function (id) {
            app.models.data.todolist[id].done = true;
        }
    }
}
