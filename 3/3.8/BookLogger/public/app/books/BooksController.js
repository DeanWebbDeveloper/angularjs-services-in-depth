(function() {

    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'badgeService', '$q', BooksController]);


    function BooksController(books, dataService, badgeService, $q) {

        var vm = this;

        vm.appName          = books.appName;

        var booksPromise    = dataService.getAllBooks();
        var readersPromise  = dataService.getAllReaders();

        $q.all([booksPromise, readersPromise])
            .then(getAllDataSuccess)
            .catch(getAllDataError);

        function getAllDataSuccess(dataArray) {
            vm.allBooks     = dataArray[0];
            vm.allReaders   = dataArray[1];
        }

        function getAllDataError(reason) {
            console.log(reason);
        }

        // dataService.getAllBooks()
        //     .then(getBooksSuccess, null, getBooksNotification)
        //     .catch(errorCallback)
        //     .finally(getAllBooksComplete);

        // function getBooksSuccess(books) {
        //     vm.allBooks = books;
        // }

        // // function getBooksError(reason) {
        // //     console.log(reason);
        // // }

        // function errorCallback(errorMsg) {
        //     console.log("Error Message: " + errorMsg);
        // }

        // function getBooksNotification(notification) {
        //     console.log("Promise Notification: " + notification);
        // }

        // function getAllBooksComplete() {
        //     console.log('getAllBooks has completed');
        // }

        // dataService.getAllReaders()
        //     .then(getReadersSuccess)
        //     .catch(errorCallback)
        //     .finally(getAllReadersComplete)

        // function getReadersSuccess(readers) {
        //     vm.allReaders = readers;
        // }

        // function getAllReadersComplete() {
        //     console.log("getAllreaders has completed");
        // }

        vm.getBadge =   badgeService.retrieveBadge;

    }


}());
