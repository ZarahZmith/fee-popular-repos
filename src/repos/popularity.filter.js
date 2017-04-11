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

            let repoC = [].concat(repo);

            return repoC.sort(function doPopularitySorting(a, b) {
                let aPop = a.stargazers_count + (a.forks_count*2) + (a.open_issues_count/2);
                let bPop = b.stargazers_count + (b.forks_count*2) + (b.open_issues_count/2);

                return bPop - aPop;
            });
        };
    }
}());
