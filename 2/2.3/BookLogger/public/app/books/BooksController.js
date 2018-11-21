(function() {

    angular.module('app')
        .controller('BooksController', BooksController);


    function BooksController(books) {

        var vm = this;

        vm.appName = books.appName

    }


}());
