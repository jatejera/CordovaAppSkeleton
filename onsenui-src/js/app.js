window.app = {};


ons.ready(function() {
    document.addEventListener('init', function(event) {
        var page = event.target; // target of the init event is a page
        
        console.log(app.controllers);
        app.controllers[page.id](page); // name all controllers with their respective page id
    });
});