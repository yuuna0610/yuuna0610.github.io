function menu(){
    rand = Math.floor(Math.random() * 10);
var menu = "";

if (rand == 1) msg = "エビマヨサラダ";
else if (rand == 2) msg = "タレカツ";
else if (rand == 3) msg = "チキン南蛮";
else if (rand == 4) msg = "地鶏炭火焼";
else if (rand == 5) msg = "大根の天ぷら";
else if (rand == 6) msg = "天ぷら盛り合わせ";
else if (rand == 7) msg = "山芋チーズ焼き";
else if (rand == 8) msg = "牛肉炭火焼";
else if (rand == 9) msg = "チーズオムレツ";
else if (rand == 10) msg = "刺身盛り合わせ";

alert(msg);

}