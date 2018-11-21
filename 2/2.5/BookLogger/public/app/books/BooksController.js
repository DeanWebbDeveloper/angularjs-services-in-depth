(function() {

    angular.module('app')
        .controller('BooksController', BooksController);


    function BooksController(books, dataService, logger) {

        var vm = this;

        vm.appName =  books.appName;

        vm.allBooks = dataService.getAllBooks();

        logger.output('BooksController has been created.');

    }


}());
