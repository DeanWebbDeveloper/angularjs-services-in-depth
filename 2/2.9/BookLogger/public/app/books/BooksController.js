(function() {

    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', BooksController]);


    function BooksController(books, dataService, logger, badgeService) {

        var vm = this;

        vm.appName =    books.appName;

        vm.allBooks =   dataService.getAllBooks();
        vm.allReaders = dataService.getAllReaders();

        vm.getBadge =   badgeService.retrieveBadge;

        logger.output('BooksController has been created.');

    }


}());
