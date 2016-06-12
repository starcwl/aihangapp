angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // .state('tabsController.hotel', {
  //     url: '/hotel',
  //     views: {
  //         'order': {
  //             templateUrl: 'templates/hotel.html',
  //             controller: 'hotelCtrl'
  //         }
  //     }
  // })

    .state('tabsController.order', {
      url: '/order',
      views: {
        'order': {
          templateUrl: 'templates/order.html',
          controller: 'orderCtrl'
        }
      }
    })
    .state('tabsController.hotelList', {
      url: '/hotelList',
      views: {
        'order': {
          templateUrl: 'templates/hotelList.html',
          controller: 'hotelListCtrl'
        }
      }
    })
    .state('tabsController.location', {
      url: '/location',
      views: {
        'location': {
          templateUrl: 'templates/location.html',
          controller: 'locationCtrl'
        }
      }
    })

  .state('tabsController.hotel', {
    url: '/hotel/:id',
    views: {
      'order': {
        templateUrl: 'templates/hotel.html',
        controller: 'hotelCtrl'
      }
    }
  })

  .state('tabsController.hotelR', {
    url: '/hotel/random',
    views: {
      'order': {
        templateUrl: 'templates/hotel.html',
        controller: 'hotelRandomCtrl'
      }
    }
  })

  .state('tabsController.hotelDetail', {
    url: '/hotel/:id/detail',
    views: {
      'order': {
        templateUrl: 'templates/hotel-detail.html',
        controller: 'hotelDetailCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'profile': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/main',
    views: {
      'mainContent': {
        templateUrl: 'templates/tabsController.html',
        abstract: true
      }
    }
  })

  .state('signup', {
    url: '/signup',
    views: {
      'mainContent': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    views: {
      'mainContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })
  $urlRouterProvider.otherwise('/main/order')


});
