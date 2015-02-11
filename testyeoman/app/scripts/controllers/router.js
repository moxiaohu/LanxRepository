angular.module('testyeomanApp')
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html"
            })
            .state('main', {
                url: "/main",
                templateUrl: "views/mainrouter.html"
            })
            .state('other', {
                url: "/other",
                templateUrl: "views/other.html"
            })
            .state('main.chat', {
                url: "/chat",
                templateUrl: "views/main.chat.html"
            })
            .state('main.friends', {
                url: "/friends",
                templateUrl: "views/main.friends.html",
            })

        .state('main.groups', {
            url: "/groups",
            templateUrl: "views/main.groups.html"
        })

        .state('main.search', {
            url: "/search",
            templateUrl: "views/main.search.html"
        })

        .state('main.friends.detail', {
            url: '/detail/:id',
            templateUrl: 'views/main.friends.friendinfo.html',
            controller: 'ShowsDetailController'
        })

        .state('main.groups.detail', {
            url: "/detail/:id",
            templateUrl: "views/main.groups.groupinfo.html",
            controller: 'ShowsGroupsDetailController'
        })

        .state('main.groups.detail.profile', {
            url: "/detail/:id/profile",
            templateUrl: "views/main.groups.groupinfo.profile.html"
        })
        .state('main.groups.detail.members', {
            url: "/detail/:id/members",
            templateUrl: "views/main.groups.groupinfo.members.html"
        })
        .state('main.groups.detail.setting', {
            url: "/detail/:id/setting",
            templateUrl: "views/main.groups.groupinfo.setting.html"
        })


    });
