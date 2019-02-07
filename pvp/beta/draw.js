//初始化套牌
var cardtot0=new Array();
for(var i=0;i<12;i++){
	cardtot0[i] = 0;
}
//初始化玩家1套牌
var pcardtot=new Array();
for(var i=0;i<12;i++){
	pcardtot[i] = 0;
}
pcardtot = ["mana","mana","mana","mana","mana","1|1|d","1|1","2|2","3|3","4|4","2|2","1|1"];
//初始化玩家2套牌
var ccardtot=new Array();
for(var i=0;i<12;i++){
	ccardtot[i] = 0;
}
ccardtot = ["mana","mana","mana","mana","mana","1|1|d","1|1","2|2","3|3","4|4","2|2","1|1"];
//玩家1抽牌
var pcard = 0;
var pcard1,pcard2,pcard3,pcard4,pcard5;
var zp,zzp;
zzp = 0;
var j1 = 0;
var j2 = 0;
var j3 = 0;
var j4 = 0;
var j5 = 0;
function pdraw(){
	zp = true;
	if(zzp==12||pcardtot==cardtot0){
		pcard = 0;
	}
	while(zp&&zzp!=12){
		var dn = Math.floor((Math.random()*pcardtot.length));
		var d = pcardtot[dn];
		if(d!=0){
			zp = false;
			zzp++;
			pcardtot[dn] = 0;
		}		
	}
	pcard=d;
	if(j1==0){
		pcard1 = pcard;
		document.getElementById("phand1").innerHTML = pcard1;
		j1 = 1;
		cardpicture();
		return;
	}
	if(j1==1&&j2==0){
		pcard2 = pcard;
		document.getElementById("phand2").innerHTML = pcard2;
		j2 = 1;
		cardpicture();
		return;
	}
	if(j1==1&&j2==1&&j3==0){
		pcard3 = pcard;
		document.getElementById("phand3").innerHTML = pcard3;
		j3 = 1;
		cardpicture();
		return;
	}
	if(j1==1&&j2==1&&j3==1&&j4==0){
		pcard4 = pcard;
		document.getElementById("phand4").innerHTML = pcard4;
		j4 = 1;
		cardpicture();
		return;
	}
	if(j1==1&&j2==1&&j3==1&&j4==1&&j5==0){
		pcard5 = pcard;
		document.getElementById("phand5").innerHTML = pcard5;
		j5 = 1;
		cardpicture();
		return;
	}
	if(j1==1&&j2==1&&j3==1&&j4==1&&j5==1&&zzp!=12){
		alert("手牌已满！替换第一张牌");
		pcard1 = pcard;
		document.getElementById("phand1").innerHTML = pcard1;
		cardpicture();
		return;
	}
}
//玩家2抽牌
var ccard = 0;
var ccard1,ccard2,ccard3,ccard4,ccard5;
var zc,zzc;
zzc = 0;
var h1 = 0;
var h2 = 0;
var h3 = 0;
var h4 = 0;
var h5 = 0;
function cdraw(){
	zc = true;
	if(zzc==12||ccardtot==cardtot0){
		ccard = 0;
	}
	while(zc&&zzc!=12){
		var dn = Math.floor((Math.random()*ccardtot.length));
		var d = ccardtot[dn];
		if(d!=0){
			zc = false;
			zzc++;
			ccardtot[dn] = 0;
		}		
	}
	ccard = d;
	if(h1==0){
		ccard1 = ccard;
		document.getElementById("chand1").innerHTML = ccard1;
		h1 = 1;
		cardpicture();
		return;
	}
	if(h1==1&&h2==0){
		ccard2 = ccard;
		document.getElementById("chand2").innerHTML = ccard2;
		h2 = 1;
		cardpicture();
		return;
	}
	if(h1==1&&h2==1&&h3==0){
		ccard3 = ccard;
		document.getElementById("chand3").innerHTML = ccard3;
		h3 = 1;
		cardpicture();
		return;
	}
	if(h1==1&&h2==1&&h3==1&&h4==0){
		ccard4 = ccard;
		document.getElementById("chand4").innerHTML = ccard4;
		h4 = 1;
		cardpicture();
		return;
	}
	if(h1==1&&h2==1&&h3==1&&h4==1&&h5==0){
		ccard5 = ccard;
		document.getElementById("chand5").innerHTML = ccard5;
		h5 = 1;
		cardpicture();
		return;
	}
	if(h1==1&&h2==1&&h3==1&&h4==1&&h5==1&&zzc!=12){
		alert("手牌已满！替换第一张牌");
		ccard1 = ccard;
		document.getElementById("chand1").innerHTML = ccard1;
		cardpicture();
		return;
	}
}