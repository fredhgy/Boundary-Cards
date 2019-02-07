//判断法力足够
var bo=0;
var cbo=0;
function manaenough(card,mana){
	if(card=="1|1|d"&&mana>=2){
		mana=mana-2;
		document.getElementById("mana").innerHTML = mana;
		bo=1;
		return true;
	}
	if(card=="1|1"&&mana>=1){
		mana=mana-1;
		document.getElementById("mana").innerHTML = mana;
		bo=1;
		return true;
	}
	if(card=="2|2"&&mana>=2){
		mana=mana-2;
		document.getElementById("mana").innerHTML = mana; 
		bo=1;
		return true;
	}
	if(card=="3|3"&&mana>=3){
		mana=mana-3;
		document.getElementById("mana").innerHTML = mana;
		bo=1;
		return true;
	}
	if(card=="4|4"&&mana>=4){
		mana=mana-4;
		document.getElementById("mana").innerHTML = mana;
		bo=1;
		return true;
	}
	if(card=="-2-2"&&mana>=2){
		mana=mana-2;
		document.getElementById("mana").innerHTML = mana;
		cbo=1;
		return true;
	}
	if(card=="-1-1"&&mana>=1){
		mana=mana-1;
		document.getElementById("mana").innerHTML = mana;
		cbo=1;
		return true;
	}
	if(card=="mana"){
		return 3;
	}
	if(card=="null"||card==null){
		//alert("瞎按啥？");
		return 2;
	}
}

//判断生物
var battlecard;
function cre(card){
	if(card=="mana"){
		if(order==1){
			mana++;
			oldmana=mana;
			document.getElementById("mana").innerHTML = mana;
		}
		if(order==2){
			cmana++;
			coldmana=cmana;
			document.getElementById("cmana").innerHTML = cmana;
		}
	}
	else{
		battlecard = card;
		if(order==1){
			if(battlecard=="-2-2"||battlecard=="-1-1"){
				if(cb1==1){
					document.getElementById("cbp1").style.border = "2px solid red";
				}
				if(cb2==1){
					document.getElementById("cbp2").style.border = "2px solid red";
				}
				if(cb3==1){
					document.getElementById("cbp3").style.border = "2px solid red";
				}
				introinsblock();
			}
			else{
				if(pb1==0){
					document.getElementById("pbp1").style.border = "2px solid red";
				}
				if(pb2==0){
					document.getElementById("pbp2").style.border = "2px solid red";
				}
				if(pb3==0){
					document.getElementById("pbp3").style.border = "2px solid red";
				}
			}
		}
		if(order==2){
			if(battlecard=="-2-2"||battlecard=="-1-1"){
				if(pb1==1){
					document.getElementById("pbp1").style.border = "2px solid red";
				}
				if(pb2==1){
					document.getElementById("pbp2").style.border = "2px solid red";
				}
				if(pb3==1){
					document.getElementById("pbp3").style.border = "2px solid red";
				}
				introinsblock();
			}
			else{
				if(cb1==0){
					document.getElementById("cbp1").style.border = "2px solid red";
				}
				if(cb2==0){
					document.getElementById("cbp2").style.border = "2px solid red";
				}
				if(cb3==0){
					document.getElementById("cbp3").style.border = "2px solid red";
				}
			}
		}
	}
}