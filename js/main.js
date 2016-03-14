$(document).ready(function() {
    
var box = prompt("Number of boxes >= 16");
if  (box === null) {
    var box = 100
} else if (Math.sqrt(box) < 4) {
    var box = prompt("Number of boxes must equal or greater than 16!");
}

//var squareNumber = 1;
//var rowNumber = 1;
var sqRoot = Math.sqrt(box);
var gridHeight = 665;
var gridWidth = 864;
var boxHeight = Math.round(gridHeight / sqRoot); 
var boxWidth =  Math.round(gridWidth / sqRoot);

for(i = 0; i < box; i++) {
    $("#grid").append("<div class='square'></div>");
}

$(".square").css("height", boxHeight);
$(".square").css("width", boxWidth);

/*
for(i = 0; i < box; i++) {
    $("#grid").append("<td class='square'></td>");
}
*/

//when the mouse enters the div square it will change the background color
$(".square").mouseenter(function() {
    $(this).css('background-color', 'blue')
})

$("#btnclear").click(function() {
    $(".square").css("background", "transparent")
})

});
/*
var gridSize = $(".square").height();
$(".square").height(gridSize/box);

});

$(".square").hover(function() {
    $(this).css('background-color', 'blue')
});
*/



/*
for(i = 0; i < box; i++) {
    $("#grid").append("<div class='row" + rowNumber + "'></div>");
    for(j = 0; j < box; j++) {
        $(".row" + rowNumber).append("<div class='square' id='" + squareNumber +"'></div>");
        squareNumber ++;
    }
    rowNumber ++;
}

});
*/
