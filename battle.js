function battle(){
//计算血量
//变00
	if(pbattle1=="0|0"&&cbattle1!="0|0"&&turn==1){
		if(cbattle1=="1|1"){
			life = life - 1;
		}
		if(cbattle1=="1|1|d"){
			life = life - 1;
		}
		if(cbattle1=="2|2"){
			life = life - 2;
		}
		if(cbattle1=="3|3"){
			life = life - 3;
		}
		if(cbattle1=="4|4"){
			life = life - 4;
		}
		document.getElementById("life").style.backgroundColor="yellow";
	}
	if(pbattle2=="0|0"&&cbattle2!="0|0"&&turn==1){		
		if(cbattle2=="1|1"){
			life = life - 1;
		}
		if(cbattle2=="1|1|d"){
			life = life - 1;
		}
		if(cbattle2=="2|2"){
			life = life - 2;
		}
		if(cbattle2=="3|3"){
			life = life - 3;
		}
		if(cbattle2=="4|4"){
			life = life - 4;
		}
		document.getElementById("life").style.backgroundColor="yellow";
	}
	if(pbattle3=="0|0"&&cbattle3!="0|0"&&turn==1){
		
		if(cbattle3=="1|1"){
			life = life - 1;
		}
		if(cbattle3=="1|1|d"){
			life = life - 1;
		}
		if(cbattle3=="2|2"){
			life = life - 2;
		}
		if(cbattle3=="3|3"){
			life = life - 3;
		}
		if(cbattle3=="4|4"){
			life = life - 4;
		}
		document.getElementById("life").style.backgroundColor="yellow";
	}
	if(cbattle1=="0|0"&&pbattle1!="0|0"&&turn==0){
		
		if(pbattle1=="1|1"){
			clife = clife - 1;
		}
		if(pbattle1=="1|1|d"){
			clife = clife - 1;
		}
		if(pbattle1=="2|2"){
			clife = clife - 2;
		}
		if(pbattle1=="3|3"){
			clife = clife - 3;
		}
		if(pbattle1=="4|4"){
			clife = clife - 4;
		}
		document.getElementById("clife").style.backgroundColor="yellow";
	}
	if(cbattle2=="0|0"&&pbattle2!="0|0"&&turn==0){
		
		if(pbattle2=="1|1"){
			clife = clife - 1;
		}
		if(pbattle2=="1|1|d"){
			clife = clife - 1;
		}
		if(pbattle2=="2|2"){
			clife = clife - 2;
		}
		if(pbattle2=="3|3"){
			clife = clife - 3;
		}
		if(pbattle2=="4|4"){
			clife = clife - 4;
		}
		document.getElementById("clife").style.backgroundColor="yellow";
	}
	if(cbattle3=="0|0"&&pbattle3!="0|0"&&turn==0){
		
		if(pbattle3=="1|1"){
			clife = clife - 1;
		}
		if(pbattle3=="1|1|d"){
			clife = clife - 1;
		}
		if(pbattle3=="2|2"){
			clife = clife - 2;
		}
		if(pbattle3=="3|3"){
			clife = clife - 3;
		}
		if(pbattle3=="4|4"){
			clife = clife - 4;
		}
		document.getElementById("clife").style.backgroundColor="yellow";
	}

//玩家11
	if(pbattle1=="1|1"&&cbattle1!="0|0"){
		if(cbattle1=="1|1"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="1|1|d"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="2|2"){
			pbattle1="0|0";
			cbattle1="1|1";
		}
		if(cbattle1=="3|3"){
			pbattle1="0|0";
			cbattle1="2|2";
		}
		if(cbattle1=="4|4"){
			pbattle1="0|0";
			cbattle1="3|3";
		}				
	}	
	if(pbattle2=="1|1"&&cbattle2!="0|0"){
		if(cbattle2=="1|1"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="1|1|d"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="2|2"){
			pbattle2="0|0";
			cbattle2="1|1";
		}
		if(cbattle2=="3|3"){
			pbattle2="0|0";
			cbattle2="2|2";
		}
		if(cbattle2=="4|4"){
			pbattle2="0|0";
			cbattle2="3|3";		
		}		
	}	
	if(pbattle3=="1|1"&&cbattle3!="0|0"){
		if(cbattle3=="1|1"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="1|1|d"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="2|2"){
			pbattle3="0|0";
			cbattle3="1|1";
		}
		if(cbattle3=="3|3"){
			pbattle3="0|0";
			cbattle3="2|2";
		}
		if(cbattle3=="4|4"){
			pbattle3="0|0";
			cbattle3="3|3";
		}	
	}
	
//玩家11d
	if(pbattle1=="1|1|d"&&cbattle1!="0|0"){
		if(cbattle1=="1|1"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="1|1|d"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="2|2"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="3|3"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="4|4"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}		
	}	
	if(pbattle2=="1|1|d"&&cbattle2!="0|0"){
		if(cbattle2=="1|1"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="1|1|d"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="2|2"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="3|3"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="4|4"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}		
	}
	
	if(pbattle3=="1|1|d"&&cbattle3!="0|0"){
		if(cbattle3=="1|1"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="1|1|d"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="2|2"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="3|3"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="4|4"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}		
	}
	
//玩家22
	if(pbattle1=="2|2"&&cbattle1!="0|0"){
		if(cbattle1=="1|1"){
			pbattle1="1|1";
			cbattle1="0|0";			
		}
		if(cbattle1=="1|1|d"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="2|2"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="3|3"){
			pbattle1="0|0";
			cbattle1="1|1";
		}
		if(cbattle1=="4|4"){
			pbattle1="0|0";
			cbattle1="2|2";
		}		
	}
	if(pbattle2=="2|2"&&cbattle2!="0|0"){
		if(cbattle2=="1|1"){
			pbattle2="1|1";
			cbattle2="0|0";			
		}
		if(cbattle2=="1|1|d"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="2|2"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="3|3"){
			pbattle2="0|0";
			cbattle2="1|1";
		}
		if(ccard2=="4|4"){
			pbattle2="0|0";
			cbattle2="2|2";
		}	
	}
	if(pbattle3=="2|2"&&cbattle3!="0|0"){
		if(cbattle3=="1|1"){
			pbattle3="1|1";
			cbattle3="0|0";			
		}
		if(cbattle3=="1|1|d"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="2|2"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="3|3"){
			pbattle3="0|0";
			cbattle3="1|1";
		}
		if(cbattle3=="4|4"){
			pbattle3="0|0";
			cbattle3="2|2";
		}	
	}
	
//玩家33
	if(pbattle1=="3|3"&&cbattle1!="0|0"){
		if(cbattle1=="1|1"){
			pbattle1="2|2";
			cbattle1="0|0";
		}
		if(cbattle1=="1|1|d"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="2|2"){
			pbattle1="1|1";
			cbattle1="0|0";			
		}
		if(cbattle1=="3|3"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
		if(cbattle1=="4|4"){
			pbattle1="0|0";
			cbattle1="1|1";
		}	
	}
	if(pbattle2=="3|3"&&cbattle2!="0|0"){
		if(cbattle2=="1|1"){
			pbattle2="2|2";
			cbattle2="0|0";			
		}
		if(cbattle2=="1|1|d"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="2|2"){
			pbattle2="1|1";
			cbattle2="0|0";			
		}
		if(cbattle2=="3|3"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}
		if(cbattle2=="4|4"){
			pbattle2="0|0";
			cbattle2="1|1";
		}		
	}
	if(pbattle3=="3|3"&&cbattle3!="0|0"){
		if(cbattle3=="1|1"){
			pbattle3="2|2";
			cbattle3="0|0";			
		}
		if(cbattle3=="1|1|d"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="2|2"){
			pbattle3="1|1";
			cbattle3="0|0";			
		}
		if(cbattle3=="3|3"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="4|4"){
			pbattle3="0|0";
			cbattle3="1|1";
		}	
	}
	
//玩家44
	if(pbattle1=="4|4"&&cbattle1!="0|0"){
		if(cbattle1=="1|1"){
			pbattle1="3|3";
			cbattle1="0|0";			
		}
		if(cbattle1=="1|1|d"){
			pbattle1="0|0";
			cbattle1="0|0";		
		}
		if(cbattle1=="2|2"){
			pbattle1="2|2";
			cbattle1="0|0";			
		}
		if(cbattle1=="3|3"){
			pbattle1="1|1";
			cbattle1="0|0";			
		}
		if(cbattle1=="4|4"){
			pbattle1="0|0";
			cbattle1="0|0";			
		}
	}
	if(pbattle2=="4|4"&&cbattle2!="0|0"){
		if(cbattle2=="1|1"){
			pbattle2="3|3";
			cbattle2="0|0";			
		}
		if(cbattle2=="1|1|d"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}		
		if(cbattle2=="2|2"){
			pbattle2="2|2";
			cbattle2="0|0";			
		}
		if(cbattle2=="3|3"){
			pbattle2="1|1";
			cbattle2="0|0";			
		}
		if(cbattle2=="4|4"){
			pbattle2="0|0";
			cbattle2="0|0";			
		}		
	}
	if(pbattle3=="4|4"&&cbattle3!="0|0"){
		if(cbattle3=="1|1"){
			pbattle3="3|3";
			cbattle3="0|0";			
		}
		if(cbattle3=="1|1|d"){
			pbattle3="0|0";
			cbattle3="0|0";			
		}
		if(cbattle3=="2|2"){
			pbattle3="2|2";
			cbattle3="0|0";			
		}
		if(cbattle3=="3|3"){
			pbattle3="1|1";
			cbattle3="0|0";			
		}
		if(cbattle3=="4|4"){
			pbattle3="0|0";
			cbattle3="0|0";	
		}
		
	}
	
	if(cbattle1=="0|0"){
		cb1=0;
	}
	if(cbattle2=="0|0"){
		cb2=0;
	}
	if(cbattle3=="0|0"){
		cb3=0;
	}
	if(pbattle1=="0|0"){
		pb1=0;
	}
	if(pbattle2=="0|0"){
		pb2=0;
	}
	if(pbattle3=="0|0"){
		pb3=0;
	}

	document.getElementById("life").innerHTML = life;
	document.getElementById("clife").innerHTML = clife;
	
	document.getElementById("pbattle1").innerHTML = pbattle1;
	document.getElementById("cbattle1").innerHTML = cbattle1;
	document.getElementById("pbattle2").innerHTML = pbattle2;
	document.getElementById("cbattle2").innerHTML = cbattle2;
	document.getElementById("pbattle3").innerHTML = pbattle3;
	document.getElementById("cbattle3").innerHTML = cbattle3;
}