"use strict";
var settings = {
    sequence: [], //array containing the generated/randomized pads
    plaSequence: [], //array containing the users pad selections
    round: 0,
    playNumber: 0,
    speed: 1000,
    clicked: 0
};

//START and END GAME

// $(document).ready(function () {

    $("#box1, #box2, #box3, #box4").on("click", function () {
        animate(this.id)
    });
    $("#startGame").on("click", function () {
        $("#startGame").hide();
        settings.round++;
        makeId(); // make id and play it
    });

    function animate(liid) {
        // Increase round speed.
        if (settings.round > 5) {
            settings.speed = 500
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

    function makeId() {
        var score = "";
        var possible = ["box1", "box2", "box3", "box4"];
        var random = Math.floor((Math.random() * 4));
        var simonChoice = possible[random];
        settings.sequence.push(simonChoice);

        myLoop();
    }

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
        }, settings.speed)
    }

    $("#resetGame").on("click", function () {
        $("#resetGame").hide();
        settings.sequence = [];
        settings.round = 0;
        settings.playNumber = 0;
        settings.speed = 1000;
        settings.clicked = 0;
        $("#startGame").trigger("click");
    });

    // LISTEN
    function listen() {
        $("#box1, #box2, #box3, #box4").on("click", function () {
            if (this.id === settings.sequence[settings.clicked]) {
                console.log(settings.clicked === settings.sequence.length - 1);
                if (settings.clicked === settings.sequence.length - 1) {
                    $("#box1, #box2, #box3, #box4").off("click");
                    settings.clicked = 0;
                    makeId();
                    // $("#startGame").trigger("click");
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
    // count-effects --- slides down from footer, which means it slides up from the footer?
    $('#count-toggle').click(function () {
        $('#count').slideDown();
    });

// });



//possible array

// var sequence = ["#boxOne", "#boxTwo", "#boxThree", "#boxFour","#boxOne"];
// var human = [];
// var i = 0;
//
// function startGame() {
//     order.length = 0;
//     // Update GUI-counter.
//     incrementDisplay();
//
//     // Put random numbers into an array. =>
//     for (var i = 0; i <= 4; i++) {
//         order.push(Math.floor(Math.random() * 4) + 1);
//     }
//     var boxes = ["boxOne, boxTwo, boxThree, boxFour"];
// };


//possible ternary operator for messages once the game ends

//
//var message = (success) ? "Next Round!" : "Game Over!";

//possible animation for boxes once the game works

//     // $("#boxes").click(function (addEventListener, click) {
//     //     console.log("you clicked on a box")
//     // });
//     //
//  function startGame () {
//      event.preventDefault();
//      switch (number) {
//          case 1:
//              flashBox(box1);
//              break;
//          case 2:
//              flashBox(box2);
//              break;
//          case 3:
//              flashBox(box3);
//              break;
//          case 4:
//              flashBox(box4);
//      }
//  }
//
// function animateBox(number) {
//  //console.log(number);
//  switch (number) {
//      case 1:
//          flashBox(box1);
//          break;
//      case 2:
//          flashBox(box2);
//          break;
//      case 3:
//          flashBox(box3);
//          break;
//      case 4:
//          flashBox(box4);
//  }
// }
//
// //Animation for Boxes
// function flashBox(id) {
//  id.animate({
//      opacity: 1
//  }, interval);
//  id.animate({
//      opacity: 0.4
//  }, interval)
// }
//
// startGame.addEventListener("click", startGame);

//old way of trying to make this work with vars and event listeners

//    var boxOne = document.getElementById("boxOne");
//    var boxTwo = document.getElementById("boxTwo");
//    var boxThree = document.getElementById("boxThree");
//    var boxFour = document.getElementById("boxFour");
//
//    boxOne.addEventListener("click", boxOneClicked);
//    boxTwo.addEventListener("click", boxTwoClicked);
//    boxThree.addEventListener("click", boxThreeClicked);
//    boxFour.addEventListener("click", boxFourClicked);