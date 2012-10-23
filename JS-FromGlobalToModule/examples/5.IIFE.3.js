/* Encapsulation; can't call any method from outside, what if we want a public API? */

(function ($) {

    var init, initSlider, initModal, initSearch;

    init = function () {
        initSlider();
        initModal();
        initSearch();
    };

    initSlider = function () {

    };

    initModal = function () {

    };

    initSearch = function () {

    };

    $(document).ready(function () {
        init();
    });

}(jQuery));