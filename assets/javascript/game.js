window.onload = function () {


    // DECLARING VARIABLES
    var yourChar;
    var otherChar;
    var attackBtn;
    var messageBox;
    var clicked;

    $(".char-box").on("click", function () {
        if (!clicked) {

            clicked = this;
            $("#my-char").html("<h3>Your Character</h3>");
            $(this).data("clicked", true);
            console.log(this);
            $.each($(".char-box"), function (key, element) {
                if (clicked !== element) {
                    $("#enemies-avail").append(element);
                }
                console.log(element);
            });
        }

        else {

        }
    });







    // $(".char-box").on("click", function () {
    //     $("#.char-box").data("clicked", true);
    // });

    // if ($(".char-box").data("clicked")) {
    //     $(".char-box").appendTo("#enemy-avail");
    // }














}