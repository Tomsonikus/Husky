var slowa, slowo, dl, strzal;
var odpowiedzi = [];
var bledy = 0;
var trafienie = false;

function start() {
	
	bledy=0;
	odpowiedzi=[];
	dl=0;
	slowo="";
	strzal="";
	
	document.getElementById("wynik").innerHTML="Dobrej Zabawy!";
	document.getElementById("szubienica").innerHTML="<img src=\"img/s0.jpg\">";
	document.getElementById("znak").disabled=false;

	slowa = ["informatyka", "kontrola" ,"opozycja" ,"pocisk" ,"strzał" ,"integralna" ,"hipoglikemia" ,"hipotermia" , "defragmentacja","degradacja" ,"dezorganizacja" ,"feminizm" ,"pedantyzm" ,"dygnita" ,"nastawiać" ,"omackiem" ,"rzyć" ,"poziom" ,"przybywać" ,"udoskonalenie" ,"administracyjny" ,"żółć" ,"bizantyjski" ,"abdykacja" ,"pejoratywny" ,"zintegrowany" ,"defektyzm" ,"eskalować" ,"afront" ,"konfabulacja" ,"abstrahować" ,"trywilny" ,"miraż" ,"reminiscencja" ,"defakto" ,"ramen" ,"kebab" ,"zapiekanka" ,"pizza" ,"spaghetti" ,"kanapka" ,"karton" ,"chemioterapia" ,"overclocking" ,"eskomunikowany" ,"humanizm","klarowany","masło","nazista","człowiek","zombie","trup","kościotrup","unikatowy","pies","kot","zwierze","kompan","przyjaciel","samarytanin","galareta","rynsztok","rynna","zegar","bomba","jurysdykcja","warsztat","brytyjczyk","gałka","oko","ząb","tramwaj","rum","rumianek","ekler","rogal","rzym","medycyna","filar","nitka","ortoprda","rekin","flaga","cyrkiel","klown","tradycja","trawa","laptop","komputer","chemia","nadzieja","internet","krasnal",];
	slowo = slowa[Math.floor(Math.random() * slowa.length)];

	for (var i = 0; i < slowo.length; i++) {
		odpowiedzi[i] = "_";
	}
	document.getElementById("demo").innerHTML = odpowiedzi.join(" ");
	dl = slowo.length;
}

function sprawdz() {
	trafienie = false;
	strzal = document.getElementById("znak").value;
	for (var i = 0; i < slowo.length; i++) {
		if (slowo[i] == strzal) {
			odpowiedzi[i] = strzal;
			dl--;
			trafienie = true;
		}
	}
	document.getElementById("demo").innerHTML = odpowiedzi.join(" ");
	document.getElementById("znak").value = "";
	if (trafienie == false) {
		bledy++;
		var obraz = "img/s" + bledy + ".jpg";
		document.getElementById("szubienica").innerHTML = "<img src=\"" + obraz + "\">"
		//alert( "<img src=\""+obraz+"\">")
		if(bledy>=9){
			document.getElementById("znak").disabled=true;
			document.getElementById("wynik").innerHTML="Przegrałeś! <button onclick=\"start()\">Zagraj jeszcze raz!</button>";
		}
	}
}
