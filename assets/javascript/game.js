window.onload = function () {

    // DECLARING VARIABLES
    var yourChar;
    var oppChar;
    var attackBtn;
    var messageBox;


    function init() {

    }

    var characters = [cloud, barret, aeris, tifa, vincent];

    var cloud = {
        name: "cloud",
        health: 130,
        attack: 15,
        counter: 10,
    }

    var barret = {
        name: "barret",
        health: 150,
        attack: 20,
        counter: 15,
    }

    var aeris = {
        name: "aeris",
        health: 100,
        attack: 8,
        counter: 10,
    }

    var tifa = {
        name: "tifa",
        health: 120,
        attack: 10,
        counter: 10,
    }

    var vincent = {
        name: "vincent",
        health: 130,
        attack: 10,
        counter: 20,
    }

    //FUNCTION THAT BEGINS GAME ON CHARACTER SELECTION
    $(".char-box").on("click", function () {

        //yourChar BEGINS FALSE, BUTTON CLICK SETS yourChar TO TRUE
        if (!yourChar) {
            yourChar = this;
            $("#my-char").html("<h4>Your Character</h4>");
            $(this).data("yourChar", true);
            $(this).attr("id", "player-char");
            console.log(this);

            //SEND REMAINING CHARACTERS TO ENEMY AVAILABLE SECTION
            $.each($(".char-box"), function (key, element) {
                if (yourChar !== element) {
                    $("#enemies-avail").append(element);
                    $(element).attr("id", "select-char");
                }
            });
        }

        //SELECTED ENEMY GOES TO DEFENDER SECTION
        else {
            $("#defender").append(this);
            $(this).attr("id", "opp-char");
            oppChar = this;
            console.log(this);
        }
    });

    $("#attackBtn").on("click", function () {
        console.log(yourChar);
        console.log(oppChar);
    });




}