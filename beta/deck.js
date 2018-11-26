function deckstart(){
	introdeck();
	chdis.style.display = "none";
	chtdis.style.display = "none";
	pb.style.display = "none";
	pbt.style.display = "none";
	document.getElementById("status").style.display="none";
	document.getElementById("cstatus").style.display="none";
	document.getElementById("start").style.display="none";
	
	document.getElementById("deckoption").style.display="block";
}

function deck(){
	if(mode==1){
		var r=confirm("切换游戏模式将删除原模式下套牌！")
		if (r==true)
		{
			delCookie("cardtot0");
			delCookie("cardtot1");
			delCookie("cardtot2");
			delCookie("cardtot3");
			delCookie("cardtot4");
			delCookie("cardtot5");
			delCookie("cardtot6");
			delCookie("cardtot7");
			delCookie("cardtot8");
			delCookie("cardtot9");
			delCookie("cardtot10");
			delCookie("cardtot11");
			cardtot = [0,0,0,0,0,0,0,0,0,0,0,0];
			deckdisplay();
		}
		else
		{
			return;
		}
	}
	introdeck();
	mode=0;
	setCookie("mode",mode,30);
	document.getElementById("gamemode").innerHTML = "构筑模式";
	document.getElementById("decksel1").style.display="block";
	document.getElementById("decksel2").style.display="block";
	document.getElementById("decksure").style.display="block";
	document.getElementById("deckdis").style.display="block";
	document.getElementById("deckdel").style.display="block";
	document.getElementById("deckback").style.display="block";
	document.getElementById("deckdisplay").style.display="block";
	document.getElementById("deck").style.display="none";
	
	document.getElementById("decklimit").style.display="none";
	document.getElementById("deckbought").style.display="none";
	document.getElementById("deckopenradio").style.display="none";
	//status.style.display = "none";
	//cstatus.style.display = "none";
}

function deckback(){
	chdis.style.display = "block";
	chtdis.style.display = "block";
	pb.style.display = "block";
	pbt.style.display = "block";
	document.getElementById("status").style.display="block";
	document.getElementById("cstatus").style.display="block";
	document.getElementById("start").style.display="block";
	document.getElementById("decksel1").style.display="none";
	document.getElementById("decksel2").style.display="none";
	document.getElementById("decksure").style.display="none";
	document.getElementById("deckdis").style.display="none";
	document.getElementById("deckdel").style.display="none";
	document.getElementById("deckback").style.display="none";
	document.getElementById("deckdisplay").style.display="none";
	document.getElementById("deckoption").style.display="none";
	document.getElementById("deck").style.display="block";
	
	document.getElementById("decklimit").style.display="none";
	document.getElementById("deckbought").style.display="none";
	document.getElementById("deckopenradio").style.display="none";
	introstart();
}


var decc=0;//如果等于1不用从cookie读取
function decksure(){
	chdis.style.display = "block";
	chtdis.style.display = "block";
	pb.style.display = "block";
	pbt.style.display = "block";
	document.getElementById("status").style.display="block";
	document.getElementById("cstatus").style.display="block";
	document.getElementById("start").style.display="block";
	document.getElementById("decksel1").style.display="none";
	document.getElementById("decksel2").style.display="none";
	document.getElementById("decksure").style.display="none";
	document.getElementById("deckdis").style.display="none";
	document.getElementById("deckdel").style.display="none";
	document.getElementById("deckback").style.display="none";
	document.getElementById("deckdisplay").style.display="none";
	document.getElementById("deckoption").style.display="none";
	document.getElementById("deck").style.display="block";
	
	document.getElementById("decklimit").style.display="none";
	document.getElementById("deckbought").style.display="none";
	document.getElementById("deckopenradio").style.display="none";
	introstart();
	
	setCookie("cardtot0",cardtot[0],1);
	setCookie("cardtot1",cardtot[1],1);
	setCookie("cardtot2",cardtot[2],1);
	setCookie("cardtot3",cardtot[3],1);
	setCookie("cardtot4",cardtot[4],1);
	setCookie("cardtot5",cardtot[5],1);
	setCookie("cardtot6",cardtot[6],1);
	setCookie("cardtot7",cardtot[7],1);
	setCookie("cardtot8",cardtot[8],1);
	setCookie("cardtot9",cardtot[9],1);
	setCookie("cardtot10",cardtot[10],1);
	setCookie("cardtot11",cardtot[11],1);
	//setCookie("cardtot12",cardtot[1],1)
	decc=1;
}

function deckdel(){
	if(mode==1){
		var r=confirm("确定删除现开模式套牌？")
		if (r==true)
		{
			delCookie("cardtot0");
			delCookie("cardtot1");
			delCookie("cardtot2");
			delCookie("cardtot3");
			delCookie("cardtot4");
			delCookie("cardtot5");
			delCookie("cardtot6");
			delCookie("cardtot7");
			delCookie("cardtot8");
			delCookie("cardtot9");
			delCookie("cardtot10");
			delCookie("cardtot11");
			cardtot = [0,0,0,0,0,0,0,0,0,0,0,0];
			deckdisplay();
		}
		else
		{
			return;
		}
	}
	else{
		delCookie("cardtot0");
		delCookie("cardtot1");
		delCookie("cardtot2");
		delCookie("cardtot3");
		delCookie("cardtot4");
		delCookie("cardtot5");
		delCookie("cardtot6");
		delCookie("cardtot7");
		delCookie("cardtot8");
		delCookie("cardtot9");
		delCookie("cardtot10");
		delCookie("cardtot11");
		cardtot = [0,0,0,0,0,0,0,0,0,0,0,0];
		deckdisplay();
	}
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

var carddis;
function deckdisplay(){
	carddis = [0,0,0,0,0,0,0,0,0,0,0,0];
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

function decksaved(){
	cardtot[0]=getCookie("cardtot0");
	cardtot[1]=getCookie("cardtot1");
	cardtot[2]=getCookie("cardtot2");
	cardtot[3]=getCookie("cardtot3");
	cardtot[4]=getCookie("cardtot4");
	cardtot[5]=getCookie("cardtot5");
	cardtot[6]=getCookie("cardtot6");
	cardtot[7]=getCookie("cardtot7");
	cardtot[8]=getCookie("cardtot8");
	cardtot[9]=getCookie("cardtot9");
	cardtot[10]=getCookie("cardtot10");
	cardtot[11]=getCookie("cardtot11");
	carddis = [0,0,0,0,0,0,0,0,0,0,0,0];
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
