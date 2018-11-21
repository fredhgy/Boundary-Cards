var order=0;
var turn=0;
function start(){
	introstart();
	if(decc!=1){
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
	}
	if(cardtot[0]==""){
		alert("无已存储套牌，以默认套牌开始:" );
		cardtot = [1,2,3,4,5,6,7,8,9,10,11,12];
	}
	else{
		deckdisplay();
		alert("已存储套牌:" + carddis);
	}
	
	document.getElementById("hdis").style.display = "block";
	document.getElementById("htdis").style.display = "block";
	document.getElementById("hdis").style.backgroundColor="green";

	document.getElementById("chdis").style.backgroundColor="white";

	document.getElementById("mana").innerHTML = mana;
	document.getElementById("cmana").innerHTML = cmana;

	document.getElementById("button2").style.display = "block";
	document.getElementById("start").style.display = "none";
	document.getElementById("deck").style.display = "none";
	pdraw();
	order = 1;
	cardpicture();
}

//电脑回合
function main1(){
	introcc();
	if(clife<5){
		document.getElementById("clife").style.backgroundColor="red";
	}
	else{
		document.getElementById("clife").style.backgroundColor="white";
	}
	
	document.getElementById("hdis").style.backgroundColor="white";
	
	document.getElementById("chdis").style.backgroundColor="green";

	document.getElementById("pb").style.backgroundColor="white";
	
	document.getElementById("mana").innerHTML = mana;
	document.getElementById("cmana").innerHTML = cmana;
	
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "block";
	document.getElementById("button3").style.display = "none";
	turn = 1;
	cdraw();
	ccre(ccard,cmana);
}

//战斗回合
function main2(){
	cardpicture();
	battlepicture();
	
	document.getElementById("hdis").style.backgroundColor="white";
	document.getElementById("chdis").style.backgroundColor="white";
	document.getElementById("pb").style.backgroundColor="green";
	
	document.getElementById("cbp1").style.border="0px";
	document.getElementById("cbp2").style.border="0px";
	document.getElementById("cbp3").style.border="0px";
	
	if(order==1){
		document.getElementById("button1").style.display = "block";
		document.getElementById("button2").style.display = "none";
		document.getElementById("button3").style.display = "none";
		intropbattle();
		order = 0;
	}
	else{
		document.getElementById("button3").style.display = "block";
		document.getElementById("button2").style.display = "none";
		document.getElementById("button1").style.display = "none";
		introcbattle()
	}
	battle();
	dead();
	
}

//你的回合
function main3(){
	
	mana=oldmana;
	introstart();
	if(life<5){
		document.getElementById("life").style.backgroundColor="red";
	}
	else{
		document.getElementById("life").style.backgroundColor="white";
	}
	
	hdis.style.display = "block";
	htdis.style.display = "block";
	
	document.getElementById("hdis").style.backgroundColor="green";
	document.getElementById("chdis").style.backgroundColor="white";
	document.getElementById("pb").style.backgroundColor="white";
	
	document.getElementById("cmana").innerHTML = cmana;
	document.getElementById("mana").innerHTML = mana;
		
	document.getElementById("button3").style.display = "none";
	document.getElementById("button2").style.display = "block";
	document.getElementById("button1").style.display = "none";
	order = 1;
	turn = 0;
	pdraw();
	cardpicture();
}

function dead(){
	document.getElementById("clife").innerHTML = clife;
	document.getElementById("life").innerHTML = life;
	if(life<=0){

		alert("你输了");
		deadand();
		//location.reload();
		document.getElementById("restart").style.display = "block";
		document.getElementById("button1").style.display = "none";
		document.getElementById("button2").style.display = "none";
		document.getElementById("button3").style.display = "none";
	}
	else if(clife<=0){

		alert("你赢了");
		deadand();
		//location.reload();
		document.getElementById("restart").style.display = "block";
		document.getElementById("button1").style.display = "none";
		document.getElementById("button2").style.display = "none";
		document.getElementById("button3").style.display = "none";
	}
	
	if(tough1==0&&tough2==0&&tough3==0&&ctough1==0&&ctough2==0&&ctough3==0&&zz==11&&czz==11)
	{
		alert("双方战场，手牌均为空，按剩余血量多少判别胜负");
		if(life<clife){

			alert("你输了");
			deadand();
			//location.reload();
		}
		else if(clife==life){

			alert("平局");
			deadand();
			//location.reload();
		}
		else{
			alert("你赢了");
			deadand();
			//location.reload();
		}
		document.getElementById("restart").style.display = "block";
		document.getElementById("button1").style.display = "none";
		document.getElementById("button2").style.display = "none";
		document.getElementById("button3").style.display = "none";
	}
	
}

function restart(){
	location.reload();
}
