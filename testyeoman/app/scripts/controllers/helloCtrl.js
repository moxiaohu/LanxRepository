angular.module('testyeomanApp')
    .controller('helloCtrl', ['$scope', '$mdSidenav', 'ShowsService', function($scope, $mdSidenav, ShowsService) {
        $scope.items = ShowsService.list();
        
       
        
    }]);

    angular.module('testyeomanApp')
    .controller('GroupCtrl', ['$scope', '$mdSidenav', 'GroupService', function($scope, $mdSidenav, GroupService) {
        $scope.groups = GroupService.list();
        
    }]);


angular.module('testyeomanApp')
    .controller('ShowsDetailController', ['$scope', '$stateParams', 'ShowsService', function($scope, $stateParams, ShowsService) {
        $scope.selectedItem = ShowsService.find($stateParams.id);
    }]);

angular.module('testyeomanApp')
    .controller('ShowsGroupsDetailController', ['$scope', '$stateParams', 'GroupService', function($scope, $stateParams, GroupService) {

        $scope.selectedGroup = GroupService.find($stateParams.id);
    }]);
