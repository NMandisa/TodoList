// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  


  .controller('TodoController', function ($scope, $ionicPopup,$ionicModal) {
    //initialize the tasks scope with empty array
    var now=new Date();
    $scope.todos = [];
    $scope.saved = localStorage.getItem('todos');
    $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saved) :
      [{
        content: 'Buy a mobile cover for my new mobile',
        createOn: now.toDateString(),
        completedOn: null
      },
        {
          content: 'Update my address in my bank',
          createOn: now.toDateString(),
          completedOn: null
        },
        {
          content: 'Send email to HR for reimbursement like this',
          createOn: now.toDateString(),
          completedOn: null
        },{
        content: 'Pay telephone bill',
        createOn: now.toDateString(),
        completedOn: null
      }
      ];
    localStorage.setItem('todos', JSON.stringify($scope.todos));
    
        $scope.addTodo = function(){
          console.log('Clicked addTodo');
        
          $scope.todos.push({
            content: $scope.todos.content,
            createOn: new Date().toDateString(),
            completedOn: null,
          });
          // Store
          localStorage.setItem('todos', JSON.stringify($scope.todos));
        
      }

    $scope.removeTodo = function (index) {
      console.log('clicked removeTodo');
      //removes a task
      $scope.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify($scope.todos));
    }

    $scope.completeTodo = function (index) {
      //updates a task as completed
      if (index !== -1) {
        $scope.todos[index].completedOn = new Date().toDateString();
      }
      localStorage.setItem('todos', JSON.stringify($scope.todos));
    }

    $ionicModal.fromTemplateUrl('test-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;

  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  })
