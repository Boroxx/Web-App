
var modal_kanal = document.getElementById('modal_kanal');
var modal_absenkung = document.getElementById('modal_absenkung');
var img_kanal = document.getElementById('image_kanal');
var img_absenkung = document.getElementById('image_absenkung');
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];


img_kanal.onclick = function(){
		modal_kanal.style.display = "block";

	}

	span1.onclick = function(){
		modal_kanal.style.display = "none";
	}

	window.onclick = function(event){
		if(event.target==modal_kanal){
			modal_kanal.style.display = "none";
		}
	}

img_absenkung.onclick = function(){
		modal_absenkung.style.display = "block";
		

	}

	span2.onclick = function(){
		modal_absenkung.style.display = "none";
	}

	window.onclick = function(event){
		if(event.target==modal_absenkung){
			modal.style.display = "none";
		}
	}


	
