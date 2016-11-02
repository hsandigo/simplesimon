 "use strict";
    // $("#boxes").click(function (addEventListener, click) {
    //     console.log("you clicked on a box")
    // });
    //
 function startGame () {
     event.preventDefault();
     switch (number) {
         case 1:
             flashBox(box1);
             break;
         case 2:
             flashBox(box2);
             break;
         case 3:
             flashBox(box3);
             break;
         case 4:
             flashBox(box4);
     }
 }


// var random = Math.floor((Math.random()*4)+1);
// for (var i = 1; i >= 4; i++) {
//     console.log('Loop counter is: ' + i);
// }

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
 

//Animation for Boxes
function flashBox(id) {
 id.animate({
     opacity: 1
 }, interval);
 id.animate({
     opacity: 0.4
 }, interval)
}

startGame.addEventListener("click", startGame);


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
