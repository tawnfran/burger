$(document).ready(function () {
    $(".devour-button").on("click", function (event) {
        event.preventDefault();
        var burger_id = $(this).data("id");
        var eaten = $(this).data("devoured");
        console.log(burger_id)
        console.log(eaten)
        if (eaten === 0) {
            eaten = true;
        }
        var eatenState = {
            devoured: eaten
        }

        console.log(burger_id, eaten)
        //send PUT request 
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burger_id,
            data: eatenState

        }).then(function () {
            console.log("changed devoured to", eaten);
            location.reload();
        })
    })
});



$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#burgerInput").val().trim(),
        devoured: 0
    };

    console.log(newBurger)
    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".delete-button").on("click", function (event) {
    event.preventDefault();
    var burger_id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + burger_id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted burger", burger_id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});



