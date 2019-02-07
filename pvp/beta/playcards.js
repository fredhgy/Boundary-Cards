//玩家1出牌
function pcre1(){
	if(pcard1=="-2-2"||pcard1=="-1-1"){
		var m = manaenough(pcard1,mana);
		if(m==true){
			j1 = 0; 
			cre(pcard1);
			pcard1 = 0;
			document.getElementById("phand1").innerHTML = pcard1;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&pcard1!="-2-2"&&pcard1!="-1-1"){
		var m = manaenough(pcard1,mana);
		if(m==true){
			cre(pcard1); 		
		}
		else if(m==3){
			j1 = 0;  
			cre(pcard1); 
			pcard1=0;
			document.getElementById("phand1").innerHTML = pcard1;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
function pcre2(){
	if(pcard2=="-2-2"||pcard2=="-1-1"){
		var m = manaenough(pcard2,mana);
		if(m==true){
			j2 = 0; 
			cre(pcard2);
			pcard2 = 0;
			document.getElementById("phand2").innerHTML = pcard2;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&pcard2!="-2-2"&&pcard2!="-1-1"){
		var m = manaenough(pcard2,mana);
		if(m==true){
			cre(pcard2); 		
		}
		else if(m==3){
			j2 = 0;  
			cre(pcard2); 
			pcard2=0;
			document.getElementById("phand2").innerHTML = pcard2;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
function pcre3(){
	if(pcard3=="-2-2"||pcard3=="-1-1"){
		var m = manaenough(pcard3,mana);
		if(m==true){
			j3 = 0; 
			cre(pcard3);
			pcard3 = 0;
			document.getElementById("phand3").innerHTML = pcard3;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&pcard3!="-2-2"&&pcard3!="-1-1"){
		var m = manaenough(pcard3,mana);
		if(m==true){
			cre(pcard3); 		
		}
		else if(m==3){
			j3 = 0;  
			cre(pcard3); 
			pcard3=0;
			document.getElementById("phand3").innerHTML = pcard3;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
function pcre4(){
	if(pcard4=="-2-2"||pcard4=="-1-1"){
		var m = manaenough(pcard4,mana);
		if(m==true){
			j4 = 0; 
			cre(pcard4);
			pcard4 = 0;
			document.getElementById("phand4").innerHTML = pcard4;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&pcard4!="-2-2"&&pcard4!="-1-1"){
		var m = manaenough(pcard4,mana);
		if(m==true){
			cre(pcard4); 		
		}
		else if(m==3){
			j4 = 0;  
			cre(pcard4); 
			pcard4=0;
			document.getElementById("phand4").innerHTML = pcard4;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
function pcre5(){
	if(pcard5=="-2-2"||pcard5=="-1-1"){
		var m = manaenough(pcard5,mana);
		if(m==true){
			j5 = 0; 
			cre(pcard5);
			pcard5 = 0;
			document.getElementById("phand5").innerHTML = pcard5;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==1&&pcard5!="-2-2"&&pcard5!="-1-1"){
		var m = manaenough(pcard5,mana);
		if(m==true){
			cre(pcard5); 		
		}
		else if(m==3){
			j5 = 0;  
			cre(pcard5); 
			pcard5=0;
			document.getElementById("phand5").innerHTML = pcard5;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
//玩家2出牌
function ccre1(){
	if(ccard1=="-2-2"||ccard1=="-1-1"){
		var m = manaenough(ccard1,cmana);
		if(m==true){
			h1 = 0; 
			cre(ccard1);
			ccard1 = 0;
			document.getElementById("chand1").innerHTML = ccard1;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==2&&ccard1!="-2-2"&&ccard1!="-1-1"){
		var m = manaenough(ccard1,cmana);
		if(m==true){
			cre(ccard1); 		
		}
		else if(m==3){
			h1 = 0;  
			cre(ccard1); 
			ccard1=0;
			document.getElementById("chand1").innerHTML = ccard1;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
function ccre2(){
	if(ccard2=="-2-2"||ccard2=="-1-1"){
		var m = manaenough(ccard2,cmana);
		if(m==true){
			h2 = 0; 
			cre(ccard2);
			ccard2 = 0;
			document.getElementById("chand2").innerHTML = ccard2;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==2&&ccard2!="-2-2"&&ccard2!="-1-1"){
		var m = manaenough(ccard2,cmana);
		if(m==true){
			cre(ccard2); 		
		}
		else if(m==3){
			h2 = 0;  
			cre(ccard2); 
			ccard2=0;
			document.getElementById("chand2").innerHTML = ccard2;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
function ccre3(){
	if(ccard3=="-2-2"||ccard3=="-1-1"){
		var m = manaenough(ccard3,cmana);
		if(m==true){
			h3 = 0; 
			cre(ccard3);
			ccard3 = 0;
			document.getElementById("chand3").innerHTML = ccard3;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==2&&ccard3!="-2-2"&&ccard3!="-1-1"){
		var m = manaenough(ccard3,cmana);
		if(m==true){
			cre(ccard3); 		
		}
		else if(m==3){
			h3 = 0;  
			cre(ccard3); 
			ccard3=0;
			document.getElementById("chand3").innerHTML = ccard3;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
function ccre4(){
	if(ccard4=="-2-2"||ccard4=="-1-1"){
		var m = manaenough(ccard4,cmana);
		if(m==true){
			h4 = 0; 
			cre(ccard4);
			ccard4 = 0;
			document.getElementById("chand4").innerHTML = ccard4;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==2&&ccard4!="-2-2"&&ccard4!="-1-1"){
		var m = manaenough(ccard4,cmana);
		if(m==true){
			cre(ccard4); 		
		}
		else if(m==3){
			h4 = 0;  
			cre(ccard4); 
			ccard4=0;
			document.getElementById("chand4").innerHTML = ccard4;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}
function ccre5(){
	if(ccard5=="-2-2"||ccard5=="-1-1"){
		var m = manaenough(ccard5,cmana);
		if(m==true){
			h5 = 0; 
			cre(ccard5);
			ccard5 = 0;
			document.getElementById("chand5").innerHTML = ccard5;
			cardpicture();
		}
		else{
			alert("法力不足");
		}
	}
	if(order==2&&ccard5!="-2-2"&&ccard5!="-1-1"){
		var m = manaenough(ccard5,cmana);
		if(m==true){
			cre(ccard5); 		
		}
		else if(m==3){
			h5 = 0;  
			cre(ccard5); 
			ccard5=0;
			document.getElementById("chand5").innerHTML = ccard5;
			cardpicture();
		}
		else if(m==2){
		}
		else{
			alert("法力不足");
		}	
	}
}