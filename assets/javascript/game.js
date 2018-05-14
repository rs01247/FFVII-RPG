window.onload = function () {

    //INITIAL STATE
    // $("#restart-btn").hide();

    // DECLARING VARIABLES
    var startBox;
    var yourChar;
    var oppChar;
    var activeBattle = false;
    var enemies = [];
    var playerwin;
    var battleTheme = new Audio("./assets/audio/battletheme.mp3");
    var fanfare = new Audio("./assets/audio/fanfare.mp3");

    var cloud = {
        name: "Cloud",
        health: 130,
        attack: 15,
        baseAttack: 15,
        counter: 10,
    }

    var barret = {
        name: "Barret",
        health: 180,
        attack: 20,
        baseAttack: 20,
        counter: 15,
    }

    var aeris = {
        name: "Aeris",
        health: 100,
        attack: 8,
        baseAttack: 8,
        counter: 10,
    }

    var tifa = {
        name: "Tifa",
        health: 120,
        attack: 10,
        baseAttack: 10,
        counter: 10,
    }

    var vincent = {
        name: "Vincent",
        health: 140,
        attack: 10,
        baseAttack: 10,
        counter: 20,
    }

    var characters = [cloud, barret, aeris, tifa, vincent];

    //FUNCTION THAT BEGINS GAME ON CHARACTER SELECTION
    $(".char-box").on("click", function () {
        battleTheme.play();

        //yourChar BEGINS FALSE, BUTTON CLICK SETS yourChar TO TRUE
        if (!activeBattle) {
            $("#my-char").html("<h4>Your Character</h4>");

            startBox = this;
            yourChar = eval($(this).attr("character"));
            // $(this).data("yourChar", true);
            $(this).attr("id", "player-char");
            activeBattle = true;
            console.log(startBox);
            console.log(yourChar);

            //SEND REMAINING CHARACTERS TO ENEMY AVAILABLE SECTION
            $.each($(".char-box"), function (key, element) {
                if (startBox !== element) {
                    $("#enemies-avail").append(element);
                    $(element).attr("character");
                    $(element).attr("id", "select-char");
                }
            });
        }

        //SELECTED ENEMY GOES TO DEFENDER SECTION
        else {
            $("#defender").append(this);
            $(this).attr("id", "opp-char");
            oppChar = eval($(this).attr("character"));
            console.log(oppChar);
        }
    });

    $("#attackBtn").on("click", function () {
        if (activeBattle == true) {
            oppChar.health -= yourChar.attack;
            yourChar.attack += yourChar.baseAttack;
            updateOpp()
            console.log(yourChar);
            console.log(oppChar);
        }
    });



    $("#restart-btn").on("click", function () {
        location.reload();
    });



    function init() {

    }

    function updatePlayer() {
        $("#char-health").text(yourChar.health);
    }

    function updateOpp() {
        $("#char-health").text(oppChar.health);
    }

    function youWin() {

    }

}