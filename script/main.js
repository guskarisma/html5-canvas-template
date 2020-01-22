"use strict";

//----	global variables	---//

const canvas=document.querySelector("#canvas");	//creating canvas object
const c=canvas.getContext("2d");	//obtaining graphic context



//---	functions go here	---//
function init(){
	canvas.width=window.innerWidth;		//setting the width
	canvas.height=window.innerHeight;	//and height of the canvas
}


//---	execution	---//
window.addEventListener("load",init);
window.addEventListener("resize",init);
