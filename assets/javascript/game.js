window.onload = function () {

    //INITIAL STATE
    $("#restart-btn").hide();


    // DECLARING VARIABLES
    var yourChar;
    var oppChar;
    var messageBox;
    var enemies = [];
    var playerwin;

    function init() {

    }

    function updatePlayer () {
        //FIX THIS LINK, NEEDS TO GO TO PLAYERCHOSEN (CHARACTER.HEALTH)
        $("#char-health").text(character.health);
    }

    function updateOpp () {

    }

    function youWin () {
        
    }

    var characters = [cloud, barret, aeris, tifa, vincent];

    var cloud = {
        name: "Cloud",
        health: 130,
        attack: 15,
        counter: 10,
    }

    var barret = {
        name: "Barret",
        health: 180,
        attack: 20,
        counter: 15,
    }

    var aeris = {
        name: "Aeris",
        health: 100,
        attack: 8,
        counter: 10,
    }

    var tifa = {
        name: "Tifa",
        health: 120,
        attack: 10,
        counter: 10,
    }

    var vincent = {
        name: "Vincent",
        health: 140,
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

    $("#restart-btn").on("click", function() {
        location.reload();
    });


}