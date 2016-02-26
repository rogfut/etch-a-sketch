$(document).ready(function() {
    
var box = 40;
var squareNumber = 1;
var rowNumber = 1;

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
for(i = 0; i < box; i++) {
    $("#grid").append("<div class='square'></div>");
}

var gridSize = $(".square").height();
$(".square").height(gridSize/box);

});
