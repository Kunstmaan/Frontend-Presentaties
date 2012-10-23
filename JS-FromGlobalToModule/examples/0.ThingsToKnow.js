/***********************************/
/* jQuery document.ready shorthand */
/***********************************/

$(document).ready(function () {

});


$(function () {

});



/*****************************************/
/* slight optimization for jQuery events */
/*****************************************/
$('.btn').click(function () {

});


$('.btn').on('click', function () {

});



/***************************************/
/* avoid errors when minifying scripts */
/***************************************/
var thirdPartyScript = (function () {

})() // no semi-colon

(function () {
    // our code
})();

// -> error


;(function () {
    // semicolon makes sure the scripts concatenate properly.
})()