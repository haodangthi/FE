var listOfDesigns=document.querySelector("nav").firstElementChild.nextElementSibling;
var liArray=designArray(listOfDesigns);
var firstShownLiIndex=0;
function designArray(list){
	var designItems=[];
	var currentLielement=list.firstElementChild;
	
	while (currentLielement.nextElementSibling!=null){
		designItems.push(currentLielement);
		currentLielement=currentLielement.nextElementSibling;

	}
	return designItems;
}


function show5Designs(array,indexOfFirst){

	for (var i = 0; i <5 ; i++) {
		array[i+indexOfFirst].style.display="block";
	}

}
function show5prevDesigns(array,indexOfFirst){

	for (var i = 0; i <5 ; i--) {
		array[indexOfFirst-i].style.display="block";
	}

}
show5Designs(liArray,firstShownLiIndex);


//hideDesigns(liArray,firstShownLiIndex);

function hideDesigns(array,indexOfFirst){
   for (var i = 0; i <5 ; i++) {
		array[indexOfFirst+i].style.display="none";
	}
}
function hidePrevDesigns(array,indexOfFirst){
   for (var i = 0; i <5 ; i--) {
		array[indexOfFirst-i].style.display="none";
	}
}



var rightBtn= document.createElement("div");
var leftBtn= document.createElement("div");
listOfDesigns.appendChild(leftBtn);
listOfDesigns.appendChild(rightBtn);


rightBtn.onclick=function(){
	console.log(firstShownLiIndex);
	hideDesigns(liArray,firstShownLiIndex);
	firstShownLiIndex=firstShownLiIndex+5;
	console.log(firstShownLiIndex);
	show5Designs(liArray,firstShownLiIndex);

}

leftBtn.onclick=function(){
	console.log(firstShownLiIndex);
	hidePrevDesigns(liArray,firstShownLiIndex);
	firstShownLiIndex=firstShownLiIndex-5;
	console.log(firstShownLiIndex);
	show5PrevDesigns(liArray,firstShownLiIndex);

}









