function version(){
	var version= "26.11.18";
	document.getElementById("version").innerHTML = version;
	mode=getCookie("mode");
	decksaved();
	if(mode==1){
		document.getElementById("gamemode").innerHTML = "现开模式";
	}
	else{
		document.getElementById("gamemode").innerHTML = "构筑模式";
	}
	deckbalance=getCookie("deckbalance");
	document.getElementById("deckbalance").innerHTML = "金币数："+deckbalance;
}

function andversion(){
	var andversion="22.11.18.1309";
	document.getElementById("andversion").innerHTML = andversion;
}
