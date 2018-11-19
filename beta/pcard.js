var d;
var cardtot = [1,2,3,4,5,6,7,8,9,10,11,12];
var card,card1,card2,card3,card4,card5;
var z,zz;
zz=0;
function pcard(){
	z=true;
	if(zz==12){
		card="null";
		return card;
	}
	while(z&&zz!=12){
		var dn = Math.floor((Math.random()*cardtot.length));
		d = cardtot[dn];
		if(d!=0){
			z=false;
			zz++;
		}		
	}
	if(d<=5){
		card="mana";
		for(var dd=0;dd<5;dd++){
			if(cardtot[dd]==d){
				cardtot[dd]=0;
			}
		}
	}
	if(d==6){
		card="1|1|d";
		cardtot[5]=0;
	}
	if(d==7){
		card="1|1";
		cardtot[6]=0;
	}
	if(d==8){
		card="2|2";
		cardtot[7]=0;
	}
	if(d==9){
		card="3|3";
		cardtot[8]=0;
	}
	if(d==10){
		card="4|4";
		cardtot[9]=0;
	}
	if(d==11){
		card="-2-2";
		cardtot[10]=0;
	}
	if(d==12){
		card="-1-1";
		cardtot[11]=0;
	}
	return card;
}
