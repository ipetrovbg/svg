;(function($){

	'use strict';

	angular
		.module('app', ['ui.router'])
		.config(config);

		config.$inject = ['$stateProvider', '$urlRouterProvider'];

		function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/svg");

        $stateProvider
            .state('svg', {
                url: '/svg',
                templateUrl: 'public/app/svg/svg.controller.html',
                controller: 'SvgController',
                controllerAs: 'vm',
            });
		}

})(jQuery);