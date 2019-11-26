$(document).ready(function(){
$(".devour-form").on("submit", function(event){
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    $.ajax({
        method: "put", url: "/api/burgers/" + burger_id
    }).then (function(data){
        location.reload();
    })
})
});

