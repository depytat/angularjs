// контроллер defaultCtrl

angular.module("exampleApp").controller("defaultCtrl", function ($scope) {

    $scope.buttons = {
        name: ['Buttons #1', 'Buttons #2', 'Buttons #3'],
        totalClicks: 0
    };

    $scope.$watch('buttons.totalClicks', function (newVal) {
        console.log('Total click count: ' + newVal);
    });
});
