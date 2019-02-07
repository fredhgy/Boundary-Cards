//战斗
function battle(){
	if(turn==2){
		pa1 = document.getElementById("pac1").checked;
		pa2 = document.getElementById("pac2").checked;
		pa3 = document.getElementById("pac3").checked;
		if(pa1){
			if(ctough1<=0&&power1>0){
				clife = clife - power1;
				document.getElementById("clife").style.backgroundColor="yellow";
			}
			else{
				if((abi1==1||cabi1==1)&&ctough1>0){
					power1=0;tough1=0;abi1=0;
					cpower1=0;ctough1=0;cabi1=0;
				}
				else{
					ctough1=ctough1-power1;
					tough1=tough1-cpower1;
				}
			}
		}
		if(pa2){
			if(ctough2<=0&&power2>0){
				clife = clife - power2;
				document.getElementById("clife").style.backgroundColor="yellow";
			}
			else{
				if((abi1==2||cabi1==2)&&ctough2>0){
					power2=0;tough2=0;abi2=0;
					cpower2=0;ctough2=0;cabi2=0;
				}
				else{
					ctough2=ctough2-power2;
					tough2=tough2-cpower2;
				}
			}	
		}
		if(pa3){
			if(ctough3<=0&&power3>0){
				clife = clife - power3;
				document.getElementById("clife").style.backgroundColor="yellow";
			}
			else{
				if((abi1==3||cabi3==1)&&ctough3>0){
					power3=0;tough3=0;abi3=0;
					cpower3=0;ctough3=0;cabi3=0;
				}
				else{
					ctough3=ctough3-power3;
					tough3=tough3-cpower3;
				}
			}
		}
	}
	//
	if(turn==1){
		ca1 = document.getElementById("cac1").checked;
		ca2 = document.getElementById("cac2").checked;
		ca3 = document.getElementById("cac3").checked;
		if(ca1){
			if(tough1<=0&&cpower1>0){
				life = life - cpower1;
				document.getElementById("life").style.backgroundColor="yellow";
			}
			else{
				if((abi1==1||cabi1==1)&&tough1>0){
					power1=0;tough1=0;abi1=0;
					cpower1=0;ctough1=0;cabi1=0;
				}
				else{
					tough1=tough1-cpower1;
					ctough1=ctough1-power1;
				}
			}
		}
		if(ca2){
			if(tough2<=0&&cpower2>0){
				life = life - cpower2;
				document.getElementById("life").style.backgroundColor="yellow";
			}
			else{
				if((abi1==2||cabi2==1)&&tough2>0){
					power2=0;tough2=0;abi2=0;
					cpower2=0;ctough2=0;cabi2=0;
				}
				else{
					tough2=tough2-cpower2;
					ctough2=ctough2-power2;
				}
			}	
		}
		if(ca3){
			if(tough3<=0&&cpower3>0){
				life = life - cpower3;
				document.getElementById("life").style.backgroundColor="yellow";
			}
			else{
				if((abi3==1||cabi3==1)&&tough3>0){
					power3=0;tough3=0;abi3=0;
					cpower3=0;ctough3=0;cabi3=0;
					}
				else{
					tough3=tough3-cpower3;
					ctough3=ctough3-power3;
				}
			}	
		}	
	}
	if(tough1<0){
		tough1=0;
	}
	if(tough2<0){
		tough2=0;
	}
	if(tough3<0){
		tough3=0;
	}
	if(ctough1<0){
		ctough1=0;
	}
	if(ctough2<0){
		ctough2=0;
	}
	if(ctough3<0){
		ctough3=0;
	}
	power1=tough1;
	power2=tough2;
	power3=tough3;
	cpower1=ctough1;
	cpower2=ctough2;
	cpower3=ctough3;
	returnpandt();
	document.getElementById("life").innerHTML = life;
	document.getElementById("clife").innerHTML = clife;
	if(life<=0){
		alert("玩家2赢了！");
		location.reload();
	}
	else if(clife<=0){
		alert("玩家1赢了!");
		location.reload();
	}
	else{

	}
}