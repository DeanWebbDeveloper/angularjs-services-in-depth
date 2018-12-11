(function() {

    var app = angular.module('app', ['ngRoute']);

    app.provider('books', ['constants', function (constants) {
      this.$get = function () {

        var appName = constants.APP_TITLE;
        var appDesc = constants.APP_DESCRIPTION;

        var version = constants.APP_VERSION;

        if (includeVersionInTitle) {
          appName += ' ' + version;
        }

        return {
          appName: appName,
          appDesc: appDesc
        };
      };

      var includeVersionInTitle = false;
      this.setIncludeVersionInTitle = function (value) {
        includeVersionInTitle = value;
      };
    }]);

    app.config(['booksProvider', '$routeProvider', function(booksProvider, $routeProvider) {

      booksProvider.setIncludeVersionInTitle(true);

      $routeProvider
        .when('/', {
          templateUrl: '/app/templates/books.html',
          controller: 'BooksController',
          controllerAs: 'books'
        })
        .when('/AddBook', {
          templateUrl: '/app/templates/addBook.html',
          controller: 'AddBookController',
          controllerAs: 'addBook'
        })
        .when('/EditBook/:bookID', {
          templateUrl: '/app/templates/editBook.html',
          controller: 'EditBookController',
          controllerAs: 'bookEditor',
          resolve: {
            books: function (dataService) {
              //throw 'error getting books';
              return dataService.getAllBooks();
            }
          }
        })
        .otherwise('/');

    }]);

    app.run(['$rootScope', function($rootScope) {

      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        console.log('successfully changed routes');

      });

      $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
        
        console.log('error changing routes');

        console.log(event);
        console.log(current);
        console.log(previous);
        console.log(rejection);

      });

    }])

}());
