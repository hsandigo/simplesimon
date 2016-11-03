 "use strict";
 var settings = {
     sequence: [],
     round: 0,
     playNumber: 0,
     speed: 1000,
     clicked: 0
 };

 $(document).ready(function() {
     function animate(liid) {

         // Increase round speed.
         if (settings.round > 5) {
             settings.speed = 500
         }
         if (liid == "box1") {
             $("#box1").css("border-color", "#1aff00");
             setTimeout(function() {
                 $("#box1").css("border-color", "#0b7000");
             }, 200);
         } else if (liid == "box2") {
             $("#box2").css("border-color", "#ff0b00");
             setTimeout(function() {
                 $("#box2").css("border-color", "#c30800");
             }, 200);
         } else if (liid == "box3") {
             $("#box3").css("border-color", "#ffec00");
             setTimeout(function() {
                 $("#box3").css("border-color", "#c3b400");
             }, 200);
         } else if (liid == "box4") {
             $("#box4").css("border-color", "#29abd0");
             setTimeout(function() {
                 $("#box4").css("border-color", "#196d85");
             }, 200);
         }
     }

     function makeid() {
         var text = "";
         var possible = "1234"; //or should this be "box1box2box3box4"

         for (var i = 0; i < 1; i++) {
             text += possible.charAt(Math.floor(Math.random() * possible.length));
             settings.sequence.push(text);
         }
         function myLoop() {
             setTimeout(function() {
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

         $("#box1, #box2, #box3, #box4").on("mousedown", function() {
             if (this.id == settings.sequence[settings.clicked]) {

                 if (settings.clicked === settings.sequence.length - 1) {
                     $("#box1, #box2, #box3, #box4").off("mousedown");
                     settings.clicked = 0;
                     $("#start").trigger("click");
                 } else {
                     console.log("Right!");
                     settings.clicked++;
                 }
             } else {
                 console.log("WRONG");
                 $("#fail").show();
                 $("#fail").addClass("bigEntrance");
                 $("#simon, #count").css("filter", "blur(5px)");
                 $("#simon, #count").css("-webkit-filter", "blur(5px)");
                 settings.clicked = 0;
                 $("#box1, #box2, #box3, #box4").off("mousedown");
             }
         });
     }
     //BEGIN GAME

     $("#box1, #box2, #box3, #box4").on("click", function() {
         animate(this.id)
     });
     $("#startgame").on("click", function() {
         $("#startgame").hide();
         // $("#simon, #count").css("filter", "blur(0px)");
         // $("#simon, #count").css("-webkit-filter", "blur(0px)");
         settings.round++;
         makeid(); // make id and play it
     });

     $("#fail").on("click", function() {
         $("#fail").hide();
         settings.sequence = [];
         settings.round = 0;
         settings.playNumber = 0,
             settings.speed = 1000;
         settings.clicked = 0;
         $("#start").trigger("click");
     });
 });


//var message = (success) ? "Next Round!" : "Game Over!";


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
//
//  var random = Math.floor((Math.random()*4)+1);
//  for (var i = 1; i >= 4; i++) {
//      console.log('Loop counter is: ' + i);
//  }
//
// // function animateBox(number) {
// //  //console.log(number);
// //  switch (number) {
// //      case 1:
// //          flashBox(box1);
// //          break;
// //      case 2:
// //          flashBox(box2);
// //          break;
// //      case 3:
// //          flashBox(box3);
// //          break;
// //      case 4:
// //          flashBox(box4);
// //  }
// // }
//
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


//    var boxOne = document.getElementById("boxOne");
//    var boxTwo = document.getElementById("boxTwo");
//    var boxThree = document.getElementById("boxThree");
//    var boxFour = document.getElementById("boxFour");
//
//    boxOne.addEventListener("click", boxOneClicked);
//    boxTwo.addEventListener("click", boxTwoClicked);
//    boxThree.addEventListener("click", boxThreeClicked);
//    boxFour.addEventListener("click", boxFourClicked);

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




//    var random = Math.floor((Math.random()*4)+1);
//    for (var i = 1; i >= 4; i++) {
//
//        console.log('Loop counter is: ' + i);

//    var boxOne = document.getElementById("boxOne");
//    var boxTwo = document.getElementById("boxTwo");
//    var boxThree = document.getElementById("boxThree");
//    var boxFour = document.getElementById("boxFour");
//
//    function boxOneClicked () {
////        event.preventDefault();
////        if (middleBox.value == ""){
////            document.getElementById("left").value += "5";
////        }else{
////            document.getElementById("right").value += "5";
////        }
//    }
//    function boxTwoClicked () {
////        event.preventDefault();
////        if (middleBox.value == ""){
////            document.getElementById("left").value += "5";
////        }else{
////            document.getElementById("right").value += "5";
////        }
//    }
//    function boxThreeClicked () {
////        event.preventDefault();
////        if (middleBox.value == ""){
////            document.getElementById("left").value += "5";
////        }else{
////            document.getElementById("right").value += "5";
////        }
//    }
//    function boxFourClicked () {
////        event.preventDefault();
////        if (middleBox.value == ""){
////            document.getElementById("left").value += "5";
////        }else{
////            document.getElementById("right").value += "5";
////        }
//    }
//


//    var boxOne = function () {
//        alert('You clicked the button!');
//    };
