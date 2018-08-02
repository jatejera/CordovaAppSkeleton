app.models = {
    "data": {
        "todolist": [{
            "task": "Sample Task 1",
            "done": false
        }, {
            "task": "Sample Task 2",
            "done": false
        }],
        "usersList":[]
    },
    
    fetchUserData: function(){
        
        fetch('https://reqres.in/api/users?page=2')
            .then(function(data){
                return data.json();
            }).then(function(json){
//                console.log(json.data);
                app.models.usersList = json.data;
               console.log(app.models.usersList);
            })
        
        
        
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
