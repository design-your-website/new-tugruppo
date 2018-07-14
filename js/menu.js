        //Menu toogle-button

        $(document).ready(function () {
            $(".menu-icon").on("click", function () {
                $("nav").removeClass("navbar");
                $("nav").toggleClass("showing");
            });

             $(".linea").on("click", function () {
                $("nav").removeClass("showing");
                $("nav").addClass("navbar");
            });
        });