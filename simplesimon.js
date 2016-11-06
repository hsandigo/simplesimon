"use strict";
var settings = {
    sequence: [], //array containing the generated/randomized pads
    plaSequence: [], //array containing the users pad selections
    round: 0,
    playNumber: 0,
    speed: 1000,
    clicked: 0
};

//function to start game
$("#box1, #box2, #box3, #box4").on("click", function () {
    animate(this.id)
});
$("#startGame").on("click", function () {
    disableUserInput();
    $("#startGame").hide();
    $("#count").text("0").show();
    settings.round++;
    makeId(); // make id and play it
});

//animates the boxes while game is being played
function animate(liid) {
    // Increases round speed after round 7
    if (settings.round > 7) {
        settings.speed = 200
    }
    if (liid == "box1") {
        $("#box1").css("background-color", "#C6E2A7");//new
        setTimeout(function () {
            $("#box1").css("background-color", "#E7F4E1");//original
        }, 200);
    } else if (liid == "box2") {
        $("#box2").css("background-color", "#67EF8B");//new
        setTimeout(function () {
            $("#box2").css("background-color", "#91FABB");//orig
        }, 200);
    } else if (liid == "box3") {
        $("#box3").css("background-color", "#31A545");//new
        setTimeout(function () {
            $("#box3").css("background-color", "#41E181");//orig
        }, 200);
    } else if (liid == "box4") {
        $("#box4").css("background-color", "#A6DBAB");//new
        setTimeout(function () {
            $("#box4").css("background-color", "#C6EFD7");//orig
        }, 200);
    }
}

//generates random sequence of box possibilities
function makeId() {
    var score = "";
    var possible = ["box1", "box2", "box3", "box4"];
    var random = Math.floor((Math.random() * 4));
    var simonChoice = possible[random];
    settings.sequence.push(simonChoice);

    myLoop();
}
// keeps track of each round being played
function updateCount() {
    var count = $("#count").text();
    count++;
    $("#count").text(count);

}

//
function myLoop() {
    setTimeout(function () {
        console.log(settings.sequence.length);
        animate(settings.sequence[settings.playNumber]);
        settings.playNumber++;
        if (settings.playNumber < settings.sequence.length) {
            myLoop();
        } else {
            settings.playNumber = 0;
            listen();
        }
    }, settings.speed);

    updateCount().reset();
}

//function that clears the settings for new games
$("#resetGame").on("click", function () {
    $("#resetGame").hide();
    settings.sequence = [];
    settings.round = 0;
    settings.playNumber = 0;
    settings.speed = 100;
    settings.clicked = 0;
    $("#startGame").trigger("click");

    updateCount();
});

//compares the user sequence with simon's sequence
function listen() {
    $("#box1, #box2, #box3, #box4").on("click", function () {
        if (this.id === settings.sequence[settings.clicked]) {
            console.log(settings.clicked === settings.sequence.length - 1);
            if (settings.clicked === settings.sequence.length - 1) {
                $("#box1, #box2, #box3, #box4").off("click");
                settings.clicked = 0;
                makeId();
            } else {
                console.log("Right!");
                settings.clicked++;
            }
        } else {
            console.log("WRONG");
            $("#resetGame").show();
            $("#box1, #box2, #box3, #box4").off("click");
        }
    });
}

//disables user clicks while simon is playing
function disableUserInput() {
    $("div").off('click');
}
