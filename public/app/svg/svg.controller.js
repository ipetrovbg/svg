;(function(SVG, $){
    'use strict';
    angular.module('app')
        .controller('SvgController', SvgController);
    
    SvgController.$inject = [];
    function SvgController(){
        var vm = this;
        var draw = SVG('drawing').size(300, 130)

        var path = draw.path('M0 0 L20 30 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z')
        path.fill('none').move(20, 20)
        path.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' });
    }
})(SVG, jQuery);