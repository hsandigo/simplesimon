"use strict";
var settings = {
    sequence: [],
    round: 0,
    playNumber: 0,
    speed: 1000,
    clicked: 0
};

//START and END GAME

$(document).ready(function () {
$("#box1, #box2, #box3, #box4").on("click", function () {
    animate(this.id)
});
$("#startGame").on("click", function () {
    $("#startGame").hide();
    // $("#simon, #count").css("filter", "blur(0px)");
    // $("#simon, #count").css("-webkit-filter", "blur(0px)");
    settings.round++;
    makeId(); // make id and play it
});

$("#resetGame").on("click", function () {
    $("#resetGame").hide();
    settings.sequence = [];
    settings.round = 0;
    settings.playNumber = 0;
        settings.speed = 1000;
    settings.clicked = 0;
    $("#startGame").trigger("click");
});

    function animate(liid) {

        // Increase round speed.
        if (settings.round > 5) {
            settings.speed = 500
        }
        if (liid == "box1") {
            $("#box1").css("border-color", "#C6E2A7");//new
            setTimeout(function () {
                $("#box1").css("border-color", "#E7F4E1");//original
            }, 200);
        } else if (liid == "box2") {
            $("#box2").css("border-color", "#67EF8B");//new
            setTimeout(function () {
                $("#box2").css("border-color", "#91FABB");//orig
            }, 200);
        } else if (liid == "box3") {
            $("#box3").css("border-color", "#31A545");//new
            setTimeout(function () {
                $("#box3").css("border-color", "#41E181");//orig
            }, 200);
        } else if (liid == "box4") {
            $("#box4").css("border-color", "#A6DBAB");
            setTimeout(function () {
                $("#box4").css("border-color", "#C6EFD7");//orig
            }, 200);
        }
    }

    function makeId() {
        var text = "";
        var possible = "box1box2box3box4";

        // var random = Math.floor((Math.random() * 4) + 1);
        // for (var i = 1; i >= 4; i++) {
        //     console.log('Loop counter is: ' + i);
        // }
         for (var i = 1; i >= 4; i++) {
             text += possible.charAt(Math.floor(Math.random() * possible.length));
             settings.sequence.push(text);
        }
        function myLoop() {
            setTimeout(function () {
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

        myLoop();
    }

    // LISTEN
    function listen() {

        $("#box1, #box2, #box3, #box4").on("mouseDown", function () {
            if (this.id === settings.sequence[settings.clicked]) {

                if (settings.clicked === settings.sequence.length - 1) {
                    $("#box1, #box2, #box3, #box4").off("mouseDown");
                    settings.clicked = 0;
                    $("#startGame").trigger("click");
                } else {
                    console.log("Right!");
                    settings.clicked++;
                }
            } else {
                console.log("WRONG");
                $("#resetGame").show();
                $("#resetGame").addClass("bigEntrance");
                // settings.clicked = 0;
                $("#box1, #box2, #box3, #box4").off("mouseDown");
            }
        });
    }

    // count- effects ---slides down from footer?
    $('#count-toggle').click(function() {
        $('#count').slideDown();
    });

});

//math.random sequence


//possible ternary operator for messages once the game ends
//po
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

//didn't know what some of the code in here so I didn't use it
//    var sequence = ["#boxOne", "#boxTwo", "#boxThree", "#boxFour","#boxOne"];
//    var human = [];
//    var i = 0;
//
//    SimonSays.prototype.setUpRound = function() {
//        var limit = moves();
//
//        order.length = 0;
//        // Update GUI-counter.
//        incrementDisplay();
//
//        // Put random numbers into an array. =>
//        for (var i = 0; i < limit; i++) {
//            order.push(Math.floor(Math.random() * 4));
//        }
//
//        var boxes = [boxOne, boxTwo, boxThree, boxFour];

//possible way of starting the game
//    function SimonSays( timeLapse,
//                        elements,
//                        cssClass,
//                        messageBoard,
//                        display,
//                        breakTime,
//                        board) {
//        var order = [];
//
//        if (!Array.isArray(elements)) {
//            // Change nodeList into an real array.
//            elements = Array.prototype.slice.apply(elements);
//        }
//
//        // Every round the count
//        //  of the moves is incremented.
//        var moves = (function() {
//            var moves = 1;
//
//            return function() {
//                return moves++;
//            }
//        })();
//
//        var getRounds = (function() {
//            var rounds = 1;
//
//            return function() {
//                return rounds++;
//            }
//        })()
//    }
