//玩家判断生物
var battlecard;
function cre(card){
	if(card=="mana"){
		mana++;
		oldmana=mana;
		document.getElementById("mana").innerHTML = mana;
	}
	else{
		battlecard = card;
		if(battlecard=="-2-2"){
			insdis.style.display = "block";
			instdis.style.display = "block";
			//hdis.style.display = "none";
			//htdis.style.display = "none";
			document.getElementById("insb1").innerHTML = cbattle1;
			document.getElementById("insb2").innerHTML = cbattle2;
			document.getElementById("insb3").innerHTML = cbattle3;
			introinsblock();
		}
		else{
			pbdis.style.display = "block";
			pbtdis.style.display = "block";
			//hdis.style.display = "none";
			//htdis.style.display = "none";
			introblock();
		}
	}
}

//电脑判断生物
var cbattle1,cbattle2,cbattle3;
cbattle1="0|0";
cbattle2="0|0";
cbattle3="0|0";
var cb1=0;
var cb2=0;
var cb3=0;
function ccre(ccard,cmana){
	var cm1=cmanaenough(ccard,cmana);
	if(cm1==true){		
		//优先避免11d
		if(pbattle1=="1|1|d"&&cb2==0){
			document.getElementById("cbattle2").innerHTML = ccard;
			document.getElementById("cbattle2").style.backgroundColor="blue";
			cbattle2=ccard;
			cb2=1;
			ccounterbattle();
			getpandt();
			return;
		}
		if(pbattle1=="1|1|d"&&cb2==1&&cb3==0){
			document.getElementById("cbattle3").innerHTML = ccard;
			document.getElementById("cbattle3").style.backgroundColor="blue";
			cbattle3=ccard;
			cb3=1;
			ccounterbattle();
			getpandt();
			return;
		}
		if(pbattle1=="1|1|d"&&cb2==1&&cb3==1&&cb1==0){
			document.getElementById("cbattle1").innerHTML = ccard;
			document.getElementById("cbattle1").style.backgroundColor="blue";
			cbattle1=ccard;
			cb1=1;
			ccounterbattle();
			getpandt();
			return;
		}
		
		if(pbattle2=="1|1|d"&&cb1==0){
			document.getElementById("cbattle1").innerHTML = ccard;
			document.getElementById("cbattle1").style.backgroundColor="blue";
			cbattle1=ccard;
			cb1=1;
			ccounterbattle();
			getpandt();
			return;
		}
		if(pbattle2=="1|1|d"&&cb1==1&&cb3==0){
			document.getElementById("cbattle3").innerHTML = ccard;
			document.getElementById("cbattle3").style.backgroundColor="blue";
			cbattle3=ccard;
			cb3=1;
			ccounterbattle();
			getpandt();
			return;
		}
		if(pbattle2=="1|1|d"&&cb1==1&&cb3==1&&cb2==0){
			document.getElementById("cbattle2").innerHTML = ccard;
			document.getElementById("cbattle2").style.backgroundColor="blue";
			cbattle2=ccard;
			cb2=1;
			ccounterbattle();
			getpandt();
			return;
		}
		
		if(pbattle3=="1|1|d"&&cb1==0){
			document.getElementById("cbattle1").innerHTML = ccard;
			document.getElementById("cbattle1").style.backgroundColor="blue";
			cbattle1=ccard;
			cb1=1;
			ccounterbattle();
			getpandt();
			return;
		}
		if(pbattle3=="1|1|d"&&cb1==1&&cb2==0){
			document.getElementById("cbattle2").innerHTML = ccard;
			document.getElementById("cbattle2").style.backgroundColor="blue";
			cbattle2=ccard;
			cb2=1;
			ccounterbattle();
			getpandt();
			return;
		}
		if(pbattle3=="1|1|d"&&cb1==1&&cb2==1&&cb3==0){
			document.getElementById("cbattle3").innerHTML = ccard;
			document.getElementById("cbattle3").style.backgroundColor="blue";
			cbattle3=ccard;
			cb3=1;
			ccounterbattle();
			getpandt();
			return;
		}
		
		//优先出在有对手的格子里
		if(pb1==1&&cb1==0){
			document.getElementById("cbattle1").innerHTML = ccard;
			document.getElementById("cbattle1").style.backgroundColor="blue";
			cbattle1=ccard;
			cb1=1;
			ccounterbattle();
			getpandt();
			return;
		}
		
		if(pb2==1&&cb2==0){
			document.getElementById("cbattle2").innerHTML = ccard;
			document.getElementById("cbattle2").style.backgroundColor="blue";
			cbattle2=ccard;
			cb2=1;
			ccounterbattle();
			getpandt();
			return;
		}
		
		if(pb3==1&&cb3==0){
			document.getElementById("cbattle3").innerHTML = ccard;
			document.getElementById("cbattle3").style.backgroundColor="blue";
			cbattle3=ccard;
			cb3=1;
			ccounterbattle();
			getpandt();
			return;
		}
		
		if(cb1==0){
			document.getElementById("cbattle1").innerHTML = ccard;
			document.getElementById("cbattle1").style.backgroundColor="blue";
			cbattle1=ccard;
			cb1=1;
			ccounterbattle();
			getpandt();
			return;
		}
		if(cb1==1&&cb2==0){
			document.getElementById("cbattle2").innerHTML = ccard;
			document.getElementById("cbattle2").style.backgroundColor="blue";
			cbattle2=ccard;
			cb2=1;
			ccounterbattle();
			getpandt();
			return;
		}
		if(cb1==1&&cb2==1&&cb3==0){
			document.getElementById("cbattle3").innerHTML = ccard;
			document.getElementById("cbattle3").style.backgroundColor="blue";
			cbattle3=ccard;
			cb3=1;
			ccounterbattle();
			getpandt();
			return;
		}
		
	}
	else if(cm1==2){
		for(var o=0;o<5;o++){
			var cm2=cmanaenough(oldcard[o],cmana);
			if(cm2==true){				
				//优先避免11d
				if(pbattle1=="1|1|d"&&cb2==0){
					document.getElementById("cbattle2").innerHTML = oldcard[o];
					document.getElementById("cbattle2").style.backgroundColor="blue";
					cbattle2=oldcard[o];
					oldcard[o]="";
					cb2=1;
					ccounterbattle();
					getpandt();
					return;
				}
				if(pbattle1=="1|1|d"&&cb2==1&&cb3==0){
					document.getElementById("cbattle3").innerHTML = oldcard[o];
					document.getElementById("cbattle3").style.backgroundColor="blue";
					cbattle3=oldcard[o];
					oldcard[o]="";
					cb3=1;
					ccounterbattle();
					getpandt();
					return;
				}
				if(pbattle1=="1|1|d"&&cb2==1&&cb3==1&&cb1==0){
					document.getElementById("cbattle1").innerHTML = oldcard[o];
					document.getElementById("cbattle1").style.backgroundColor="blue";
					cbattle1=oldcard[o];
					oldcard[o]="";
					cb1=1;
					ccounterbattle();
					getpandt();
					return;
				}
				
				if(pbattle2=="1|1|d"&&cb1==0){
					document.getElementById("cbattle1").innerHTML = oldcard[o];
					document.getElementById("cbattle1").style.backgroundColor="blue";
					cbattle1=oldcard[o];
					oldcard[o]="";
					cb1=1;
					ccounterbattle();
					getpandt();
					return;
				}
				if(pbattle2=="1|1|d"&&cb1==1&&cb3==0){
					document.getElementById("cbattle3").innerHTML = oldcard[o];
					document.getElementById("cbattle3").style.backgroundColor="blue";
					cbattle3=oldcard[o];
					oldcard[o]="";
					cb3=1;
					ccounterbattle();
					getpandt();
					return;
				}
				if(pbattle2=="1|1|d"&&cb1==1&&cb3==1&&cb2==0){
					document.getElementById("cbattle2").innerHTML = oldcard[o];
					document.getElementById("cbattle2").style.backgroundColor="blue";
					cbattle2=oldcard[o];
					oldcard[o]="";
					cb2=1;
					ccounterbattle();
					getpandt();
					return;
				}
				
				if(pbattle3=="1|1|d"&&cb1==0){
					document.getElementById("cbattle1").innerHTML = oldcard[o];
					document.getElementById("cbattle1").style.backgroundColor="blue";
					cbattle1=oldcard[o];
					oldcard[o]="";
					cb1=1;
					ccounterbattle();
					getpandt();
					return;
				}
				if(pbattle3=="1|1|d"&&cb1==1&&cb2==0){
					document.getElementById("cbattle2").innerHTML = oldcard[o];
					document.getElementById("cbattle2").style.backgroundColor="blue";
					cbattle2=oldcard[o];
					oldcard[o]="";
					cb2=1;
					ccounterbattle();
					getpandt();
					return;
				}
				if(pbattle3=="1|1|d"&&cb1==1&&cb2==1&&cb3==0){
					document.getElementById("cbattle3").innerHTML = oldcard[o];
					document.getElementById("cbattle3").style.backgroundColor="blue";
					cbattle3=oldcard[o];
					oldcard[o]="";
					cb3=1;
					ccounterbattle();
					getpandt();
					return;
				}
				
				//优先出在有对手的格子里
				if(pb1==1&&cb1==0){
					document.getElementById("cbattle1").innerHTML = oldcard[o];
					document.getElementById("cbattle1").style.backgroundColor="blue";
					cbattle1=oldcard[o];
					oldcard[o]="";
					cb1=1;
					ccounterbattle();
					getpandt();
					return;
				}
				
				if(pb2==1&&cb2==0){
					document.getElementById("cbattle2").innerHTML = oldcard[o];
					document.getElementById("cbattle2").style.backgroundColor="blue";
					cbattle2=oldcard[o];
					oldcard[o]="";
					cb2=1;
					ccounterbattle();
					getpandt();
					return;
				}
				
				if(pb3==1&&cb3==0){
					document.getElementById("cbattle3").innerHTML = oldcard[o];
					document.getElementById("cbattle3").style.backgroundColor="blue";
					cbattle3=oldcard[o];
					oldcard[o]="";
					cb3=1;
					ccounterbattle();
					getpandt();
					return;
				}
				
				if(cb1==0){
					document.getElementById("cbattle1").innerHTML = oldcard[o];
					document.getElementById("cbattle1").style.backgroundColor="blue";
					cbattle1=oldcard[o];
					oldcard[o]="";
					cb1=1;
					ccounterbattle();
					getpandt();
					return;
				}
				if(cb1==1&&cb2==0){
					document.getElementById("cbattle2").innerHTML = oldcard[o];
					document.getElementById("cbattle2").style.backgroundColor="blue";
					cbattle2=oldcard[o];
					oldcard[o]="";
					cb2=1;
					ccounterbattle();
					getpandt();
					return;
				}
				if(cb1==1&&cb2==1&&cb3==0){
					document.getElementById("cbattle3").innerHTML = oldcard[o];
					document.getElementById("cbattle3").style.backgroundColor="blue";
					cbattle3=oldcard[o];
					oldcard[o]="";
					cb3=1;
					ccounterbattle();
					getpandt();
					return;
				}
			}
			else{
			
			}
		}
	}
	else{

	}
}