window.onload = function () {


    // DECLARING VARIABLES
    var yourChar;
    var otherChar;
    var attackBtn;
    var messageBox;
    var startClick;

    $(".char-box").on("click", function () {
        if (!startClick) {

            startClick = this;
            $("#my-char").html("<h4>Your Character</h4>");
            $(this).data("startClick", true);
            $(this).attr("id", "player-char");

            console.log(this);

            $.each($(".char-box"), function (key, element) {
                if (startClick !== element) {
                    $("#enemies-avail").append(element);
                    $(element).attr("id", "select-char");  
                }
                console.log(element);
            });
        }

        else {
            $("#defender").append(this);
            $(this).attr("id", "opp-char");
        }
    });







    // $(".char-box").on("click", function () {
    //     $("#.char-box").data("clicked", true);
    // });

    // if ($(".char-box").data("clicked")) {
    //     $(".char-box").appendTo("#enemy-avail");
    // }














}