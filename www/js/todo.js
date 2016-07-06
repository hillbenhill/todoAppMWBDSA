function todoCtrl($scope) {
	$scope.todos = [
    
  ];

  $scope.currentText = ''; // make the text empty
  $scope.currentDetails = ''; // make the text empty
  
   $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false, details:''});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.Done = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
  
  $scope.showDetail = function(text) {
    var result = $scope.todos.filter(function (obj) {
      return obj.text == text;
    })
    $scope.currentText = result[0].text;
    $scope.currentDetails = result[0].details;
    document.getElementById('todoDetails').style.visibility = 'visible';
  }

  $scope.closeThis = function() {
    $scope.currentText = '';
    $scope.currentDetails = '';
    document.getElementById('todoDetails').style.visibility = 'hidden';
  }

  $scope.addDetails = function(text) {	
    var result = $scope.todos.filter(function (obj) {
      return obj.text == text;
    })
angular.forEach($scope.todos, function(todo) {
      if(todo.text == text) {
        todo.details = $scope.currentDetails;
      }
    });
    document.getElementById('todoDetails').style.visibility = 'hidden';
    
  }

}