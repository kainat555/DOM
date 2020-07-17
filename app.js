// Task 3
// function deleteRow1() {
//     let rowDelete1 = document.querySelector("#rowDelete1");
//     rowDelete1.innerHTML = "";
// }
// function deleteRow2() {
//     let rowDelete2 = document.querySelector("#rowDelete2");
//     rowDelete2.innerHTML = "";
// }
// function deleteRow3() {
//     let rowDelete3 = document.querySelector("#rowDelete3");
//     rowDelete3.innerHTML = "";
// }
// function deleteRow4() {
//     let rowDelete4 = document.querySelector("#rowDelete4");
//     rowDelete4.innerHTML = "";
// }
// function deleteRow5() {
//     let rowDelete5 = document.querySelector("#rowDelete5");
//     rowDelete5.innerHTML = "";
// }
// function deleteRow6() {
//     let rowDelete6 = document.querySelector("#rowDelete6");
//     rowDelete6.innerHTML = "";
// }
// function deleteRow7() {
//     let rowDelete7 = document.querySelector("#rowDelete7");
//     rowDelete7.innerHTML = "";
// }
// function deleteRow8() {
//     let rowDelete8 = document.querySelector("#rowDelete8");
//     rowDelete8.innerHTML = "";
// }
// function deleteRow9() {
//     let rowDelete9 = document.querySelector("#rowDelete9");
//     rowDelete9.innerHTML = "";
// }
// function deleteRow10() {
//     let rowDelete10 = document.querySelector("#rowDelete10");
//     rowDelete10.innerHTML = "";
// }


// Task 4
function imgChange(id, src) {
    let image = document.querySelector("#img");
    image.src = src;
}

// Task 5
// let a = 0;
// function increase() {
//     a++;
//     let add = document.querySelector("#counter");
//     if (a <= 9) {
//         add.innerHTML = "0" + a;
//     }
//     else {
//         add.innerHTML = a;
//     }
// }

// function decrease() {
//     a--;
//     let subtract = document.querySelector("#counter");
//     if (a <= 9) {
//         subtract.innerHTML = "0" + a;
//     }
//     else {
//         subtract.innerHTML = a;
//     }
// }


// Chapter 49 to 52
// Task 1

// function submit() {
//     let formSubmit = document.querySelector("#main");
//     // formSubmit.innerText = document.querySelector("#display");
//     let allData1 = document.querySelector("#text1").value;
//     let allData2 = document.querySelector("#text2").value;
//     let allData3 = document.querySelector("#email").value;
//     let allData4 = document.querySelector("#pswd1").value;
//     let allData5 = document.querySelector("#pswd2").value;
// allData = allData1 + allData2 + allData3 + allData4 + allData5;
//     allData = document.querySelector("#display");
// }


// Task 2
// function expandedText() {
//     let para = `The 2020 Toyota Corolla shows how serious the 
//                 company remains about small sedans and hatchbacks, 
//                 even as rivals drop theirs in favor of crossover SUVs.
//                 The latest Corolla sedan adds luster to one of the 
//                 longest-lived nameplates in the business, and while
//                 it doesn’t bristle with some of the verve of the new 
//                 RAV4—really—it’s become noticeably better in ways it 
//                 probably doesn’t need to. The latest Corolla sedan comes 
//                 in L, LE, LE Hybrid, SE, XLE, and XSE trims. Hatchbacks 
//                 come in SE and XSE trims.`

//     document.querySelector("#paragraph").innerHTML = para;
// }



// Chapter 53-57

// Task 1
function imgZoomIn1() {
     var image = document.querySelector("#img1");
    //  image.style.width = "600px";
    //  image.style.height = "400px";
    image.style.transform = "scale(2.5)"
}
function imgZoomOut1() {
    var image = document.querySelector("#img1");
    image.style.width = "300px";
    image.style.height = "200px";
}
function imgZoomIn2() {
    var image = document.querySelector("#img2");
    image.style.width = "600px";
    image.style.height = "400px";
}
function imgZoomOut2() {
   var image = document.querySelector("#img2");
   image.style.width = "300px";
   image.style.height = "200px";
}function imgZoomIn3() {
    var image = document.querySelector("#img3");
    image.style.width = "600px";
    image.style.height = "400px";
}
function imgZoomOut3() {
   var image = document.querySelector("#img3");
   image.style.width = "300px";
   image.style.height = "200px";
}function imgZoomIn4() {
    var image = document.querySelector("#img4");
    image.style.width = "600px";
    image.style.height = "400px";
}
function imgZoomOut4() {
   var image = document.querySelector("#img4");
   image.style.width = "300px";
   image.style.height = "200px";
}
  











// Task 2

// let a = 16;
// function zoomIn() {
//     a = a + 10;
//     a++;
//     let paraZoom = document.querySelector("#para");
//     paraZoom.style.fontSize = a + "px";
// }


// function zoomOut() {
//     a = a - 10;
//     a--;
//     let paraZoom = document.querySelector("#para");
//     paraZoom.style.fontSize = a + "px";
// }




// Chapter 58-67 
// Task 1 

// let mainContent = document.querySelector("#main-content");
// let result = mainContent.innerHTML;                wrong
// console.log(result);

// Task 2
// sub-task 1
// console.log(document.childNodes[1].childNodes[2].childNodes[55].childNodes[3].nodeType);

// sub-task 2
console.log(document.childNodes[1].childNodes[2].childNodes[55].childNodes[5].childNodes[3].nodeType);
