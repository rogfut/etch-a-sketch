

$(document).ready(function() {
   createGrid(); 
});
   
//creates a grid based on user input
function createGrid () {
    
    //asks user to input a number, if no number is given value is set at 10    
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
        $(this).css('background-color', 'blue')
    })

    //sets the square background to transparent on button click
    $("#btnclear").click(function() {
        $(".square").css("background", "transparent")
    })


}


//var squareNumber = 1;
//var numSquaresNumber = 1;
/*
var sqRoot = Math.sqrt(numSquares);
var gridHeight = 665;
var gridWidth = 864;
var numSquaresHeight = Math.round(gridHeight / sqRoot); 
var numSquaresWidth =  Math.round(gridWidth / sqRoot);
*/

/*
$(".square").css("height", numSquaresHeight);
$(".square").css("width", numSquaresWidth);

*/
/*
for(i = 0; i < numSquares; i++) {
    $("#grid").append("<td class='square'></td>");
}
*/

//when the mouse enters the div square it will change the background color

/*
var gridSize = $(".square").height();
$(".square").height(gridSize/numSquares);

});

$(".square").hover(function() {
    $(this).css('background-color', 'blue')
});
*/



/*
for(i = 0; i < numSquares; i++) {
    $("#grid").append("<div class='numSquares" + numSquaresNumber + "'></div>");
    for(j = 0; j < numSquares; j++) {
        $(".numSquares" + numSquaresNumber).append("<div class='square' id='" + squareNumber +"'></div>");
        squareNumber ++;
    }
    numSquaresNumber ++;
}

});
*/
