/* Modular */

var myApp = (function ($) {

    var init, initSlider, initModal, initSearch, search;

    init = function () {
        initSlider();
        initModal();
        initSearch();
    };

    initSlider = function () {
        console.log('slider');
    };

    initModal = function () {
        console.log('modal');
    };

    initSearch = function () {
        console.log('search');
    };

    search = function () {
        console.log('searching');
    }

    return {
        init: init,
        search: search
    };

}(jQuery));


$(document).ready(function () {
    myApp.init();
    myApp.search();
});