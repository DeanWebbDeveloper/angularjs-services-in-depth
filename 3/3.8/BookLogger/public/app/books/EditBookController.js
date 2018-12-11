(function () {

    angular.module('app')
        .controller('EditBookController', ['$routeParams', 'books', EditBookController]);

    function EditBookController($routeParams, books) {

        var vm = this;
        
        vm.currentBook = books.filter(function (item) {
            return item.book_id == $routeParams.bookID;
        })[0];

    }

}());