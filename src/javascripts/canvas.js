var app = angular.module('myApp', ['draggable', 'resizable', 'collapse']);

app.controller('MainCtrl', function($scope, $element, $document) {
	$scope.arr = [
		{index: 0, isSelect: 0}, 
		{index: 1, isSelect: 1}, 
		{index: 2, isSelect: 0}
	];
	
	$scope.cursorState = 0;
	$scope.curZ = 1;
	$scope.pos = 0;
	
	
});

app.directive('initCanvas', ['$document', function ($document) {
  return function (scope, element, attr) {
		element.ready(function () {
			for(var idx = 0; idx <= scope.arr.length; idx++)
			{
				if (element.attr("id") == 'resizable'+idx) {
					var elem = angular.element(element);
					elem.css("top", 400*parseInt((idx / 2))+"px");
					
					if(idx % 2 == 0)
						elem.css("left", "50px");
					else
						elem.css("left", "800px");
					
					elem.on("mousedown", mouseDown);
				}
			}
    });
		
		function mouseDown()
		{
			element.css("z-index", 99999);
			$document.on("mouseup", mouseUp);
			
		}
		
		function mouseUp()
		{
			element.css("z-index", scope.$parent.curZ++);
			$document.off("mouseup");
		}
  };
}]); 