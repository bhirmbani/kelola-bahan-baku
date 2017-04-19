
/**
* Theme: Moltran Admin Template
* Author: Coderthemes
* Form Validator
*/

!function($) {
    "use strict";

    var FormValidator = function() {
        this.$formTambahBahanBaku = $("#formTambahBahanBaku"),
        this.$formEditBahanBaku = $("#formEditBahanBaku"),
        this.$signupForm = $("#signupForm");

    };

    //init
    FormValidator.prototype.init = function() {
        // //validator plugin
        // $.validator.setDefaults({
        //     submitHandler: function() { alert("submitted!"); }
        // });

        this.$formTambahBahanBaku.validate({
            rules: {
                // jmlTepung: {
                //     required: true,
                //     number: true
                // },
                // jmlGulaPasir: {
                //     required: true,
                //     number: true
                // }
            },
            messages: {
                // jmlTepung: "Masukkan Angka",
                // jmlGulaPasir: "Masukkan Angka",
            }
        });

        this.$formEditBahanBaku.validate({
            rules: {
                // jmlBahan: {
                //     required: true,
                //     number: true
                // },
                // jmlGulaPasir: {
                //     required: true,
                //     number: true
                // }
            },
            messages: {
                // jmlTepung: "Masukkan Angka",
                // jmlGulaPasir: "Masukkan Angka",
            }
        });


    },
    //init
    $.FormValidator = new FormValidator, $.FormValidator.Constructor = FormValidator
}(window.jQuery),


//initializing 
function($) {
    "use strict";
    $.FormValidator.init()
}(window.jQuery);