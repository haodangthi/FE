var btnForm = document.querySelector("#btn-form");

var dialog = document.querySelector("dialog");
var btnClose = document.querySelector(".btn_close");

btnForm.onclick = function() {
  dialog.showModal();
};
btnClose.onclick = function() {
  dialog.close();
};

var btnSliderLeft = document.getElementsByClassName("left-btn")[0];
var btnSliderRight = document.getElementsByClassName("right-btn")[0];

var galleryImages = document.getElementsByClassName("gallery_image");
var index = 0;

show(index);
btnSliderRight.onclick = function() {
  rightSlide(index, galleryImages);
};
btnSliderLeft.onclick = function() {
  leftSlide(index, galleryImages);
};

function show(index) {
  for (let index = 0; index < galleryImages.length; index++) {
    galleryImages[index].style.display = "none";
  }
  galleryImages[index].style.display = "block";
}

function rightSlide(currentIndex, array) {
  console.log("right");
  if (currentIndex + 1 == array.length) {
    index = 0;
  } else {
    index++;
  }
  show(index);
}

function leftSlide(currentIndex, array) {
  console.log("left");
  if (currentIndex - 1 == -1) {
    index = array.length - 1;
  } else {
    index--;
  }
  show(index);
}

// function findBiggestImg(array){
//   var biggestImg=0;
//   //console.log(array);
//    array= [].slice.call(array);
//   array.forEach(function(element){
//   //console.log(element);
//  if (element.firstElementChild.clientHeight>biggestImg){

//   //console.log(element.firstElementChild.clientHeight);
//    biggestImg=element.firstElementChild.clientHeight;
//  }
// }
// )
// return biggestImg;
// }


// var sliderSection=document.querySelector('.gallery_section__wrapper');
// var sliderHeight=findBiggestImg(galleryImages)+400;
// sliderSection.style.height=sliderHeight.toString()+"px";
