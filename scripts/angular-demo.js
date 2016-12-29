'use strict';

(function(angular, s,u,m,e,e,t){

	var angularDempApp = angular.module('angularDemoApp',[]);

	angularDempApp
		.service('$ToDoService', [function(){

			function ToDoService(args) {
				this._items = [
					{
						id: 'TD'+ Math.ceil(Math.random()*1000000),
						isDone: false,
						title: 'Client Meeting',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quibusdam, maxime deserunt. Excepturi enim sapiente ducimus minus tempore minima rerum optio, cumque, eligendi, a ipsam dolores possimus, accusantium veniam architecto?',
						createdOn: new Date(),
						type: 1
					},
					{
						id: 'TD'+ Math.ceil(Math.random()*1000000),
						isDone: false,
						title: 'Take Indulgence Updates',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisici, Lorem ipsum dolor sit amet, consectetur adipisici',
						createdOn: new Date(),
						type: 2
					},
					{
						id: 'TD'+ Math.ceil(Math.random()*1000000),
						isDone: true,
						title: 'Decorate Cristmas Tree',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisici, Lorem ipsum dolor sit amet, consectetur adipisici',
						createdOn: new Date(),
						type: 3
					}
					
				];
				this.onListItemChangeListener = null;
			}

			ToDoService.prototype.addItem = function (todo) {
				this._items.push(todo);
			}

			ToDoService.prototype.updateItem = function (todo, index) {
				this._items[index] = todo;
			}

			ToDoService.prototype.getItems = function () {
				return this._items;
			}

			return new ToDoService({});
		}])
		.controller('ToDoCtrl',['$ToDoService', '$scope', function($ToDoService, $scope) {
			// TODO Controller
			
			$scope.toDoItem = {
				id: 'TD'+ Math.ceil(Math.random()*1000000),
				isDone: false,
				title: '',
				description: '',
				createdOn: new Date(),
				type: 1
			};

			$scope.taskType = [{
				key: 1,
				value: 'Normal'
			},{
				key: 2,
				value: 'Alert'
			},{
				key: 3,
				value: 'Critical'
			}];

			$scope.toDoList = $ToDoService.getItems();

			$scope.onSumbit = function ($valid) {

				$ToDoService.addItem($scope.toDoItem);	

				$scope.toDoItem = {
					id: 'TD'+ Math.ceil(Math.random()*1000000),
					isDone: false,
					title: '',
					description: '',
					createdOn: new Date(),
					type: 1
				};
			};

		}]);

})(angular);
