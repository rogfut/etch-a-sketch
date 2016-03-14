

$(document).ready(function() {
   configureGrid();
   buttonBar();
   randomColor();
});

//declaring global vars
var squareColor = "#444242";

//sets random values for red, green, blue to be used by CSS
function randomColor () {
    var red = Math.floor((Math.random() * 255) + 1);
    var green = Math.floor((Math.random() * 255) + 1);
    var blue = Math.floor((Math.random() * 255) + 1);
    return "rgb(" + red + "," + green + "," + blue + ")";
}

//asks user to input a number, if no number is given value is set at 10
function configureGrid () {
    //reset the grid to default
    $(".square").remove();
    $("#container").css("border", "0px solid transparent")
        
    var numSquares = prompt("Input a number between 1 and 32");
    if  (numSquares === null) {
        var numSquares = 10
    } else if (numSquares > 32 || numSquares < 1 ) {
        do { numSquares = prompt("Input a number between 1 and 32") }
        while (numSquares > 32 || numSquares < 1)
    }

    //creates the square divs
    for(i = 0; i < (numSquares * numSquares); i++) {
        $("#grid").append("<div class='square'></div>");
    }
    
    var containerWidth = ($("#container").width()) / numSquares;
    $(".square").css("width", containerWidth);
    $(".square").css("height", containerWidth);
    
    //sets the background color of the squares on mouse enter
    $(".square").mouseenter(function() {
        $(this).css('background-color', squareColor)
    })
    
    //sets the container border
    $("#container").css("border", "40px solid red")
}

function buttonBar () {
    //sets the square background to transparent on button click
    $("#btnclear").click(function() {
        configureGrid();
    })
    
    //sets the square background to be random after being clicked
    $("#btnunicorn").click(function() {
        $(".square").mouseenter(function() {
            $(this).css("background-color", randomColor());
        })
    })
    
    //sets the square background to be black after being clicked
    $("#btnblack").click(function() {
        $(".square").mouseenter(function() {
            $(this).css("background-color", "#000000");
        })
    })
    
    //sets the square background to be a random greyscale color after being clicked
    $("#btngreyscale").click(function() {
        
    })
}

