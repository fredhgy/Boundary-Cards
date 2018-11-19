function introstart(){
	document.getElementById("intro").innerHTML = "选择要使用的牌。。1|1需要1点法力，1|1|d 2|2 -2-2需要两点法力，3|3需要3点法力，4|4需要4点法力";
}

function introblock(){
	document.getElementById("intro").innerHTML = "选择要放置的战场格";
}

function introinsblock(){
	document.getElementById("intro").innerHTML = "选择目标生物";
}

function intropbattle(){
	document.getElementById("intro").innerHTML = "你的战斗回合，你的生物进行进攻";
}

function introcbattle(){
	document.getElementById("intro").innerHTML = "电脑玩家的战斗回合，电脑生物进行进攻";
}

function introcc(){
	document.getElementById("intro").innerHTML = "电脑玩家回合，你可以在该回合使用法术";
}
