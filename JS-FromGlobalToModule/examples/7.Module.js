;(function ($, window, undefined) {

    /* 
     *  We have one global namespace 'Kunstmaan' to which we attach all modules.
     *  We check if the namespace exists; if it does we use it, if not we create a new object
     */

    var Kunstmaan = window.Kunstmaan || {};

    /*
     *  This is the constructor:
     *      We bind our constructor to the Kunstmaan namespace
     *      and set some defaults for each object we create
     */

    Kunstmaan.Modal = function (el) {
        this.$el = el;
        this.box_id = null;
        this.$box = null;
    };


    /*
    *   extending the prototype with $.extend:
    *
    *   this is the same as typing
    *
    *   Kunstmaan.Modal.prototype.init = function () { };
    *   Kunstmaan.Modal.prototype.bindEvents = function () { };
    *
    *  over and over again 
    */
    
    $.extend(Kunstmaan.Modal.prototype, {
        init: function () {
            // code
        },

        bindEvents: function () {
            // code
        },

        activate: function () {
            // code
        },

        show: function () {
            // code
        },

        positionBox: function () {
            // code
        },

        deactivate: function () {            
            // code
        },

        bindDocumentEvents: function () {
            /* 
             * the issue with 'this':
             * the context of 'this' changes when we go into the eventhandler.
             * inside the onDocumentKeyUp function, 'this' doesn't refer to the Modal object
             * instead it refers to the window object.
             *
             * we use jQuery.proxy(eventhandler, context) to pass the correct context to the function
             * that way, we still have access to our Modal object context inside the onDocument.. function
             */

            $(document).on('keyup', $.proxy(this.onDocumentKeyUp, this));
            $(document).on('click', $.proxy(this.onDocumentClick, this));
            $(document).on('touchstart', $.proxy(this.onDocumentClick, this));
        },

        unbindDocumentEvents: function () {
            $(document).off('keyup');
            $(document).off('click');
            $(document).off('touchstart');
        },

        onDocumentKeyUp: function (e) {
            if (e.keyCode === 27) {
                this.deactivate();
            }
        },

        onDocumentClick: function (e) {
            if ($(e.target).hasClass('modal-cover')) {
                this.deactivate();
            }
        }
    });

    /* we then attach the new Kunstmaan object (with our Modal module) back to the window. */
    window.Kunstmaan = Kunstmaan;

})(jQuery, window);