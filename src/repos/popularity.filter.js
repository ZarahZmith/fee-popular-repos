(function() {
    'use strict';

    angular.module('gh')
        .filter('popularity', popularity);

    function popularity() {
        let $ = angular.element;

        return function arrangePopularity(repo) {
            if (!Array.isArray(repo)) {
                return repo;
            }

        };
    }
}());
