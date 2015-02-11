angular.module('testyeomanApp')
    .factory('ShowsService', function() {
        var items = [{
            face: '/images/avatar/avatar1.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            info: "Male 23 Goat Cancer Other",
            occupation: "Student",
            birthday: "Jul 17",
            location: "China Guangdong Guangzhou",
            hometown: "China Guangdong Zhanjiang",
            email: "wizawu@gmail.com",
            groupname: "groupxx",
            mobile: "13245356636",
            description: "douban www.douban.com/people/wizaw",

            id: 1
        }, {
            face: '/images/avatar/avatar2.jpeg',
            what: 'Brunch this weekend?',
            who: 'xxxxx',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            info: "Male 23 Goat Cancer Other",
            occupation: "Student",
            birthday: "Jul 17",
            location: "China Guangdong Guangzhou",
            hometown: "China Guangdong Zhanjiang",
            email: "wizawu@gmail.com",
            groupname: "groupxx",
            mobile: "13245356636",
            description: "douban www.douban.com/people/wizaw facebook www.facebook.com",
            id: 2
        }, {
            face: '/images/avatar/avatar3.jpeg',
            what: 'Brunch this weekend?',
            who: 'Min dfsfan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            info: "Male 23 Goat Cancer Other",
            occupation: "Student",
            birthday: "Jul 17",
            location: "China Guangdong Guangzhou",
            hometown: "China Guangdong Zhanjiang",
            email: "wizawu@gmail.com",
            groupname: "groupxx",
            mobile: "13245356636",
            description: "douban www.douban.com/people/wizaw facebook www.facebook.com",
            id: 3
        }, {
            face: '/images/avatar/avatar4.jpeg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            info: "Male 23 Goat Cancer Other",
            occupation: "Student",
            birthday: "Jul 17",
            location: "China Guangdong Guangzhou",
            hometown: "China Guangdong Zhanjiang",
            email: "wizawu@gmail.com",
            groupname: "groupxx",
            mobile: "13245356636",
            description: "douban www.douban.com/people/wizaw facebook www.facebook.com",
            id: 4
        }, {
            face: '/images/avatar/avatar5.jpeg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            info: "Male 23 Goat Cancer Other",
            occupation: "Student",
            birthday: "Jul 17",
            location: "China Guangdong Guangzhou",
            hometown: "China Guangdong Zhanjiang",
            email: "wizawu@gmail.com",
            groupname: "groupxx",
            mobile: "13245356636",
            description:"douban www.douban.com/people/wizaw facebook www.facebook.com",
            id: 5
        }, ];


        return {
            list: function() {
                return items;
            },
            find: function(id) {
                return _.find(items, function(item) {

                    return item.id == id
                });
            },
           
        }
    });
