angular.module('sellPhone', []).controller('SellPhoneController', sellPhoneController);
sellPhoneController.$inject=['$scope'];
function sellPhoneController ($scope) {
    $scope.message = "ERum";
    console.log("Hi");
}
