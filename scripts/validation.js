(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        }
        
        // isEmailDuplicated: function(email, DSemail) {
        //     if (email.test(email) === DSemail) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
