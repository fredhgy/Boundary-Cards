var cd;
var ccard,ccard1,ccard2,ccard3,ccard4,ccard5;
var ccardtot= [1,2,3,4,5,6,7,8,9,10,11];
var cz,czz;
czz=0;
function ccardf(){
	cz=true;
	if(czz==11){
		ccard="null";
		return ccard;
	}
	while(cz&&czz!=11){
		var cdn = Math.floor((Math.random()*ccardtot.length));
		cd = ccardtot[cdn];
		if(cd!=0){
			cz=false;
			czz++;
		}		
	}		
	if(cd<=5){
		ccard="mana";
		for(var cdd=0;cdd<5;cdd++){
			if(ccardtot[cdd]==cd){
				ccardtot[cdd]=0;
			}
		}
	}
	if(cd==6){
		ccard="1|1|d";
		ccardtot[5]=0;
	}
	if(cd==7){
		ccard="1|1";
		ccardtot[6]=0;
	}
	if(cd==8){
		ccard="2|2";
		ccardtot[7]=0;
	}
	if(cd==9){
		ccard="3|3";
		ccardtot[8]=0;
	}
	if(cd==10){
		ccard="4|4";
		ccardtot[9]=0;
	}
	if(cd==11){
		ccard="2|2";
		ccardtot[10]=0;
	}
	return ccard;
}