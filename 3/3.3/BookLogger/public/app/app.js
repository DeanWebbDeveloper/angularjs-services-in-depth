(function() {

    var app = angular.module('app', []);

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

    app.config(['booksProvider', 'constants', 'dataServiceProvider', function(booksProvider, constants, dataServiceProvider) {

      booksProvider.setIncludeVersionInTitle(false);

      console.log('title from constants service: ' + constants.APP_TITLE);

      console.log(dataServiceProvider.$get);

    }]);

}());
