function deck(){
	chdis.style.display = "none";
	chtdis.style.display = "none";
	pb.style.display = "none";
	pbt.style.display = "none";
	document.getElementById("status").style.display="none";
	document.getElementById("cstatus").style.display="none";
	document.getElementById("start").style.display="none";
	document.getElementById("decksel").style.display="block";
	document.getElementById("decksure").style.display="block";
	document.getElementById("deckdis").style.display="block";
	document.getElementById("deckdel").style.display="block";
	//status.style.display = "none";
	//cstatus.style.display = "none";
}

function decksure(){
	chdis.style.display = "block";
	chtdis.style.display = "block";
	pb.style.display = "block";
	pbt.style.display = "block";
	document.getElementById("status").style.display="block";
	document.getElementById("cstatus").style.display="block";
	document.getElementById("start").style.display="block";
	document.getElementById("decksel").style.display="none";
	document.getElementById("decksure").style.display="none";
	document.getElementById("deckdis").style.display="none";
	document.getElementById("deckdel").style.display="none";
}

function deckdel(){
	cardtot = [0,0,0,0,0,0,0,0,0,0,0,0];
}

var cardtot = [0,0,0,0,0,0,0,0,0,0,0,0];
function defaultdeck(){
	cardtot = [1,2,3,4,5,6,7,8,9,10,11,12];
	deckdisplay();
}

function yiyid(){
	for(var dec=0;dec<=11;dec++){
		if(cardtot[dec]==0){
			cardtot[dec]=6;
			break;
		}
	}
	deckdisplay();
}

function yiyi(){
	for(var dec=0;dec<=11;dec++){
		if(cardtot[dec]==0){
			cardtot[dec]=7;
			break;
		}
	}
	deckdisplay();
}

function erer(){
	for(var dec=0;dec<=11;dec++){
		if(cardtot[dec]==0){
			cardtot[dec]=8;
			break;
		}
	}
	deckdisplay();
}

function sansan(){
	for(var dec=0;dec<=11;dec++){
		if(cardtot[dec]==0){
			cardtot[dec]=9;
			break;
		}
	}
	deckdisplay();
}

function sisi(){
	for(var dec=0;dec<=11;dec++){
		if(cardtot[dec]==0){
			cardtot[dec]=10;
			break;
		}
	}
	deckdisplay();
}

function jianer(){
	for(var dec=0;dec<=11;dec++){
		if(cardtot[dec]==0){
			cardtot[dec]=11;
			break;
		}
	}
	deckdisplay();
}

function jianyi(){
	for(var dec=0;dec<=11;dec++){
		if(cardtot[dec]==0){
			cardtot[dec]=12;
			break;
		}
	}
	deckdisplay();
}

function decmana(){
	for(var dec=0;dec<=11;dec++){
		if(cardtot[dec]==0){
			cardtot[dec]=1;
			break;
		}
	}
	deckdisplay();
}

function deckdisplay(){
	var carddis = [0,0,0,0,0,0,0,0,0,0,0,0];
	for(var decs=0;decs<=11;decs++){
		if(cardtot[decs]==1){
			carddis[decs]="mana";
		}
		if(cardtot[decs]==2){
			carddis[decs]="mana";
		}
		if(cardtot[decs]==3){
			carddis[decs]="mana";
		}
		if(cardtot[decs]==4){
			carddis[decs]="mana";
		}
		if(cardtot[decs]==5){
			carddis[decs]="mana";
		}
		if(cardtot[decs]==6){
			carddis[decs]="1|1|d";
		}
		if(cardtot[decs]==7){
			carddis[decs]="1|1";
		}
		if(cardtot[decs]==8){
			carddis[decs]="2|2";
		}
		if(cardtot[decs]==9){
			carddis[decs]="3|3";
		}
		if(cardtot[decs]==10){
			carddis[decs]="4|4";
		}
		if(cardtot[decs]==11){
			carddis[decs]="-2-2";
		}
		if(cardtot[decs]==12){
			carddis[decs]="-1-1";
		}
		if(cardtot[decs]==0){
			carddis[decs]="null";
		}
		
	}
	document.getElementById("deckdis").innerHTML = carddis;
}
