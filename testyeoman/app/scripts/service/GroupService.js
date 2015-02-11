angular.module('testyeomanApp')
    .factory('GroupService', function() {



        var groups = [{
                id: 1,
                groupname:"EFREI",
                members : [{
                    id: 1,
                    name: "Tom",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 2,
                    name: "Marie",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group2.jpeg'
                }, {
                    id: 3,
                    name: "Tom",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group3.jpeg'
                }, {
                    id: 4,
                    name: "Jack",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group4.jpeg'
                }, {
                    id: 5,
                    name: "Tom",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group5.png'
                }],
                groupface: '/images/groupavatar/group1.jpeg',
                groupInfo: "We are the best"
            },

            {
                id: 2,
                groupname:"SEU",
                members : [{
                    id: 1,
                    name: "Tom",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 2,
                    name: "Marie",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 3,
                    name: "Tom",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 4,
                    name: "Jack",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }],
                 groupface: '/images/groupavatar/group2.jpeg',
                groupInfo: "On yeah!"
            },

            {
                id: 3,
                groupname:"HELLO",
                members : [{
                    id: 1,
                    name: "Tom",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 2,
                    name: "Marie",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 3,
                    name: "Tom",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 4,
                    name: "Jack",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }],
                 groupface: '/images/groupavatar/group3.jpeg',
                groupInfo: "We are the best"
            },
            {
                id: 4,
                groupname:"Y&ME",
                members : [{
                    id: 1,
                    name: "Tom",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 2,
                    name: "Marie",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 3,
                    name: "Tom",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 4,
                    name: "Jack",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }],
                 groupface: '/images/groupavatar/group4.jpeg',
                groupInfo: "Come on !"
            },

            {
                id: 5,
                groupname:"BABIES",
                members : [{
                    id: 1,
                    name: "Tom",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 2,
                    name: "Marie",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 3,
                    name: "Tom",
                    gender: "Female",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }, {
                    id: 4,
                    name: "Jack",
                    gender: "Male",
                    lastMessage: "2015-01-24",
                    groupface: '/images/groupavatar/group1.jpeg'
                }],
                 groupface: '/images/groupavatar/group5.png',
                groupInfo: "HAHAHAHA"
            }

        ];

         return {
            list: function() {
                return groups;
            },
            find: function(id) {
                return _.find(groups, function(group) {

                    return group.id == id
                });
            }
            
        }

    });
