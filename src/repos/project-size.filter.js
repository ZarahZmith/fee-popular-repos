(function() {
    'use strict';

    angular.module('gh')
        .filter('projectSize', projectSize);

    function projectSize(repo) {
        return repo.size * 0.001;
    }
}());
