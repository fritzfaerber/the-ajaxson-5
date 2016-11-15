



$(document).ready(function() {
    $("#form-gif-request").submit(fetchAndDisplayGif);
});

function fetchAndDisplayGif() {
    //$("#feedback").toggle();


    setGifLoadedStatus(false);
    $("#feedback").text("Loading...").css({
        "color": "black",
        "padding-top": "0px",
        "text-align": "left",
        "font-size": "16px"
    });
    event.preventDefault();

    var userValidInput = $('#userValid').val();
    userValidInput = userValidInput.toLowerCase();

    console.log(userValidInput);
    
    if (userValidInput == 'andrew') {

        var searchQuery = $('#userInput').val();
        var tagToSend = "Jackson 5" + searchQuery;

        var params = {
            api_key: "dc6zaTOxFJmzC",
            tag : tagToSend
        };

        $.ajax({
            url: "https://api.giphy.com/v1/gifs/random", // TODO where should this request be sent?
            data: params, // attach those extra parameters onto the request
            success: function(response) {
                var gifToShow = response.data.image_url;
                console.log(gifToShow)
                $('#gif').attr('src', gifToShow);
                setGifLoadedStatus(true);
                //$("#feedback").toggle();
            },
            error: function() {

                $("#feedback").text("Sorry, could not load GIF. Try again!");
                setGifLoadedStatus(false);
            }
        });

        //    function setGifLoadedStatus(isCurrentlyLoaded) {
        //        $("#gif").attr("hidden", !isCurrentlyLoaded);
        //        $("#feedback").attr("hidden", isCurrentlyLoaded);
        //    }
    }
    else {
        //$("#feedback").toggle();
        $("#feedback").text("Sorry, NO GIF FOR YOU!").css({
            "color": "red",
            "padding-top": "50px",
            "text-align": "center",
            "font-size": "30px"
        });
        setGifLoadedStatus(false);
    }
    function setGifLoadedStatus(isCurrentlyLoaded) {
        $("#gif").attr("hidden", !isCurrentlyLoaded);
        $("#feedback").attr("hidden", isCurrentlyLoaded);
    }
};
