//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color") 
var lineWidth = $('#lineWidth').val(); 

var $canvasOne = $("canvas.one");
var $canvasTwo = $("canvas.two"); 
var contextOne = $canvasOne[0].getContext("2d"); 
var contextTwo = $canvasTwo[0].getContext("2d"); 
var lastEvent; 
var mousedown = false; 


//When clicking on control list items
$(".controls").on("click", "li",function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});
  
//When "New Color" is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//When "New Line" is pressed
$("#revealLineSelect").click(function(){
  //Show color select or hide the color select
  changeLineWidth();
  $("#lineSelect").toggle();
});

function changeLineWidth(){
  lineWidth = $('#lineWidth').val(); 
}

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();
});
  
//On mouse events on the canvas
//Draw lines
$canvasOne.mousedown(function(e){
   lastEvent = e; 
   mousedown = true;
   lineWidth = $('#lineWidth').val(); 
}).mousemove(function(e){
  if(mousedown){
   contextOne.beginPath(); 
   contextOne.moveTo(lastEvent.offsetX,lastEvent.offsetY); 
   contextOne.lineTo(e.offsetX,e.offsetY);
   contextOne.strokeStyle = color; 
   contextOne.lineWidth = lineWidth;
   contextOne.stroke();
   lastEvent = e;
  }
}).mouseup(function(e){
  mousedown = false;
})

$canvasTwo.mousedown(function(e){
   lastEvent = e; 
   mousedown = true;
   lineWidth = $('#lineWidth').val(); 
}).mousemove(function(e){
  if(mousedown){
   contextTwo.beginPath(); 
   contextTwo.moveTo(lastEvent.offsetX,lastEvent.offsetY); 
   contextTwo.lineTo(e.offsetX,e.offsetY);
   contextTwo.strokeStyle = color; 
   contextTwo.lineWidth = lineWidth;
   contextTwo.stroke();
   lastEvent = e;
  }
}).mouseup(function(e){
  mousedown = false;
})


   