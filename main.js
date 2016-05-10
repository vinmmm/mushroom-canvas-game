$(document).ready(function() { 
	'use strict'; 
	paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
var tool = new Tool();
var c = Shape.Circle(200, 200, 40); c.fillColor = 'black';
var text = new PointText(200, 200); text.justification = 'center'; text.fillColor = 'blue'; text.fontSize = 18;
    text.content = 'Bubbles';
tool.onMouseDown = function(event) {
var c = Shape.Circle(event.point, 20);
c.fillColor = 'blue';
};
    paper.view.draw();
});