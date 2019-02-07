//玩家1选择战场格
var pbattle1,pbattle2,pbattle3;
pbattle1="0|0";
pbattle2="0|0";
pbattle3="0|0";
var pb1,pb2,pb3;
pb1=0;
pb2=0;
pb3=0;
function pblock1(card){
	if(pb1==0&&bo==1){
		pbattle1=card;
		pb1=1;
		getpandt();
		battlepicture();
		document.getElementById("pbp1").style.border = "0px";
		document.getElementById("pbp2").style.border = "0px";
		document.getElementById("pbp3").style.border = "0px";
		bo=0;
		if(pb1==1||pb2==1||pb3==1){
				document.getElementById("pcbutton").style.display = "block";
				document.getElementById("pbbutton").style.display = "none";
		}
		if(pcard1==card){
			pcard1="null";
			j1=0;
			document.getElementById("phand1").innerHTML = pcard1;
			cardpicture();
			return;
		}
		if(pcard2==card){
			pcard2="null";
			j2=0;
			document.getElementById("phand2").innerHTML = pcard2;
			cardpicture();
			return;
		}
		if(pcard3==card){
			pcard3="null";
			j3=0;
			document.getElementById("phand3").innerHTML = pcard3;
			cardpicture();
			return;
		}
		if(pcard4==card){
			pcard4="null";
			j4=0;
			document.getElementById("phand4").innerHTML = pcard4;
			cardpicture();
			return;
		}
		if(pcard5==card){
			pcard5="null";
			j5=0;
			document.getElementById("phand5").innerHTML = pcard5;
			cardpicture();
			return;
		}
	}
	else if(bo==0){
	}
	else{
		alert("already have");
	}
}
function pblock2(card){
	if(pb2==0&&bo==1){
		pbattle2=card;
		pb2=1;
		getpandt();
		battlepicture();
		document.getElementById("pbp1").style.border = "0px";
		document.getElementById("pbp2").style.border = "0px";
		document.getElementById("pbp3").style.border = "0px";
		bo=0;
		if(pb1==1||pb2==1||pb3==1){
				document.getElementById("pcbutton").style.display = "block";
				document.getElementById("pbbutton").style.display = "none";
		}
		if(pcard1==card){
			pcard1="null";
			j1=0;
			document.getElementById("phand1").innerHTML = pcard1;
			cardpicture();
			return;
		}
		if(pcard2==card){
			pcard2="null";
			j2=0;
			document.getElementById("phand2").innerHTML = pcard2;
			cardpicture();
			return;
		}
		if(pcard3==card){
			pcard3="null";
			j3=0;
			document.getElementById("phand3").innerHTML = pcard3;
			cardpicture();
			return;
		}
		if(pcard4==card){
			pcard4="null";
			j4=0;
			document.getElementById("phand4").innerHTML = pcard4;
			cardpicture();
			return;
		}
		if(pcard5==card){
			pcard5="null";
			j5=0;
			document.getElementById("phand5").innerHTML = pcard5;
			cardpicture();
			return;
		}
	}
	else if(bo==0){
	}
	else{
		alert("already have");
	}
}
function pblock3(card){
	if(pb3==0&&bo==1){
		pbattle3=card;
		pb3=1;
		getpandt();
		battlepicture();
		document.getElementById("pbp1").style.border = "0px";
		document.getElementById("pbp2").style.border = "0px";
		document.getElementById("pbp3").style.border = "0px";
		bo=0;
		if(pb1==1||pb2==1||pb3==1){
				document.getElementById("pcbutton").style.display = "block";
				document.getElementById("pbbutton").style.display = "none";
		}
		if(pcard1==card){
			pcard1="null";
			j1=0;
			document.getElementById("phand1").innerHTML = pcard1;
			cardpicture();
			return;
		}
		if(pcard2==card){
			pcard2="null";
			j2=0;
			document.getElementById("phand2").innerHTML = pcard2;
			cardpicture();
			return;
		}
		if(pcard3==card){
			pcard3="null";
			j3=0;
			document.getElementById("phand3").innerHTML = pcard3;
			cardpicture();
			return;
		}
		if(pcard4==card){
			pcard4="null";
			j4=0;
			document.getElementById("phand4").innerHTML = pcard4;
			cardpicture();
			return;
		}
		if(pcard5==card){
			pcard5="null";
			j5=0;
			document.getElementById("phand5").innerHTML = pcard5;
			cardpicture();
			return;
		}
	}
	else if(bo==0){
	}
	else{
		alert("already have");
	}
}

//玩家2选择战场格
var cbattle1,cbattle2,cbattle3;
cbattle1="0|0";
cbattle2="0|0";
cbattle3="0|0";
var cb1,cb2,cb3;
cb1=0;
cb2=0;
cb3=0;
function cblock1(card){
	if(cb1==0&&bo==1){
		cbattle1=card;
		cb1=1;
		getpandt();
		battlepicture();
		document.getElementById("cbp1").style.border = "0px";
		document.getElementById("cbp2").style.border = "0px";
		document.getElementById("cbp3").style.border = "0px";
		bo=0;
		if(cb1==1||cb2==1||cb3==1){
				document.getElementById("ccbutton").style.display = "block";
				document.getElementById("cbbutton").style.display = "none";
		}
		if(ccard1==card){
			ccard1="null";
			h1=0;
			document.getElementById("chand1").innerHTML = ccard1;
			cardpicture();
			return;
		}
		if(ccard2==card){
			ccard2="null";
			h2=0;
			document.getElementById("chand2").innerHTML = ccard2;
			cardpicture();
			return;
		}
		if(ccard3==card){
			ccard3="null";
			h3=0;
			document.getElementById("chand3").innerHTML = ccard3;
			cardpicture();
			return;
		}
		if(ccard4==card){
			ccard4="null";
			h4=0;
			document.getElementById("chand4").innerHTML = ccard4;
			cardpicture();
			return;
		}
		if(ccard5==card){
			ccard5="null";
			h5=0;
			document.getElementById("chand5").innerHTML = ccard5;
			cardpicture();
			return;
		}
	}
	else if(cbo==1){
	}
	else{
		alert("already have");
	}
}
function cblock2(card){
	if(cb2==0&&bo==1){
		cbattle2=card;
		cb2=1;
		getpandt();
		battlepicture();
		document.getElementById("cbp1").style.border = "0px";
		document.getElementById("cbp2").style.border = "0px";
		document.getElementById("cbp3").style.border = "0px";
		bo=0;
		if(cb1==1||cb2==1||cb3==1){
				document.getElementById("ccbutton").style.display = "block";
				document.getElementById("cbbutton").style.display = "none";
		}
		if(ccard1==card){
			ccard1="null";
			h1=0;
			document.getElementById("chand1").innerHTML = ccard1;
			cardpicture();
			return;
		}
		if(ccard2==card){
			ccard2="null";
			h2=0;
			document.getElementById("chand2").innerHTML = ccard2;
			cardpicture();
			return;
		}
		if(ccard3==card){
			ccard3="null";
			h3=0;
			document.getElementById("chand3").innerHTML = ccard3;
			cardpicture();
			return;
		}
		if(ccard4==card){
			ccard4="null";
			h4=0;
			document.getElementById("chand4").innerHTML = ccard4;
			cardpicture();
			return;
		}
		if(ccard5==card){
			ccard5="null";
			h5=0;
			document.getElementById("chand5").innerHTML = ccard5;
			cardpicture();
			return;
		}
	}
	else if(cbo==1){
	}
	else{
		alert("already have");
	}
}
function cblock3(card){
	if(cb3==0&&bo==1){
		cbattle3=card;
		cb3=1;
		getpandt();
		battlepicture();
		document.getElementById("cbp1").style.border = "0px";
		document.getElementById("cbp2").style.border = "0px";
		document.getElementById("cbp3").style.border = "0px";
		bo=0;
		if(cb1==1||cb2==1||cb3==1){
				document.getElementById("ccbutton").style.display = "block";
				document.getElementById("cbbutton").style.display = "none";
		}
		if(ccard1==card){
			ccard1="null";
			h1=0;
			document.getElementById("chand1").innerHTML = ccard1;
			cardpicture();
			return;
		}
		if(ccard2==card){
			ccard2="null";
			h2=0;
			document.getElementById("chand2").innerHTML = ccard2;
			cardpicture();
			return;
		}
		if(ccard3==card){
			ccard3="null";
			h3=0;
			document.getElementById("chand3").innerHTML = ccard3;
			cardpicture();
			return;
		}
		if(ccard4==card){
			ccard4="null";
			h4=0;
			document.getElementById("chand4").innerHTML = ccard4;
			cardpicture();
			return;
		}
		if(ccard5==card){
			ccard5="null";
			h5=0;
			document.getElementById("chand5").innerHTML = ccard5;
			cardpicture();
			return;
		}
	}
	else if(cbo==1){
	}
	else{
		alert("already have");
	}
}