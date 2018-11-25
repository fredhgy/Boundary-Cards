function version(){
	var version= "25.11.18.2234";
	document.getElementById("version").innerHTML = version;
	mode=getCookie("mode");
	deckbalance=getCookie("deckbalance");
	document.getElementById("deckbalance").innerHTML = "金币数："+deckbalance;
}

function andversion(){
	var andversion="22.11.18.1309";
	document.getElementById("andversion").innerHTML = andversion;
}
