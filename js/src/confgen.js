
// Bouts variables pour le titre
var intros = ["10 trucs pour","10 secrets de","10 tendances de","tout ce que vous voulez savoir sur","aux frontières de"];

var domaines = ["de la R&amp;D","du serious gaming","du digital","du social media","du branding"];
var technos = ["HTML5",".Net","AngularJS","Big Data","NodeJS","WebSocket","Grunt","Creative Cloud","Git","Capistrano"];
var jobs = ["designer", "community manager","lead developer","startupeur"];

var concepts = ["jeu","application","mashup","business model","pull request","networking"];
var concepts_article = ["un jeu","une application","un mashup","un business model","une pull request","une architecture"];
var substantifs = ["l'utilisation","le développement","le déploiement","le focus"];

var adjectifs = ["disruptif","transmedia","digital","mainstream","BtoB","2.0","web2store","BtoC","retina","créatif","user centric"];
var problemes = ["les limites","les problèmes","la stratégie","le bounce rate","la logique métier","la parallélisation","le CPC"];
var environnements = ["en entreprise","en startup","dans le cloud","en agence 360","en mobilité"];

var verbes = ["foirer","innover avec","incentiver","benchmarker","customiser","brander","versionner","disrupter","itérer","drafter"];
var actions = ["comprendre","développer","brander","faire le buzz avec","pusher"];

var pluriels = ["es smileys","es serveurs","es réseaux","es QR code"];
var plateformes = ["Twitter","la digitalization","Facebook","ERP","KPI","CRM","le cloud","SSL"];

// Bouts aléatoires pour l'auteur
var prenoms = ["Tristan","Jake","Bruce","Christophe","Bobby","Raphël","Stéphanie","Goulven","Jeanne","Damien"];
var noms = ["Lawson","Tyler","Goetter","Dorne","Parisot","de Oliveira","Chouquet","Zuckerberger"];
var biz1 = ["OneTo","Wee","Trans","Net","Link","You"];
var biz2 = ["oo","biz","media","buzz"];

// Eléments HTML concernés
var el_result = document.getElementById('result');
var el_refresh = document.getElementById('refresh');

// Fonction de piochage aléatoire

Array.prototype.randsplice = function() {
  var ri = Math.floor(Math.random() * this.length);
  var rs = this.splice(ri, 1);
  return rs;
};

function gen(tab) {
    var r = Math.round(Math.random()*(tab.length-1));
    return tab.randsplice();
}

// Fonction de génération aléatoire du titre
function gen_conf() {
    var txt = '';
    switch(Math.round(Math.random()*9)+1) {
        case 1:
            txt = gen(concepts_article)+" "+gen(adjectifs)+" avec "+gen(technos)+" et "+gen(technos);
        break;
        case 2:
            txt = gen(actions)+" "+gen(technos)+" par "+gen(substantifs)+" d"+gen(pluriels);
        break;
        case 3:
            txt = "comment "+gen(technos)+" va révolutionner le web "+gen(domaines);
        break;
        case 4:
            txt = gen(technos)+" VS "+gen(technos)+", quel "+gen(jobs)+" êtes-vous ?";
        break;
        case 5:
            txt = gen(actions)+" votre "+gen(concepts)+" "+gen(adjectifs)+" en 5 minutes avec "+gen(technos);
        break;
        case 6:
            txt = gen(intros)+" "+gen(technos)+" "+gen(adjectifs)+", l'avenir "+gen(domaines);
        break;
        case 7:
            txt = "concevoir "+gen(concepts_article)+" "+gen(technos)+" piloté par "+gen(plateformes);
        break;
        case 8:
            txt = gen(problemes)+" d"+gen(pluriels)+" "+gen(environnements);
        break;
        case 9:
            txt = "faut-il "+gen(verbes)+" l"+gen(pluriels)+" des applications "+gen(plateformes)+" ?";
        break;
        case 10:
            txt = "doit-on "+gen(verbes)+" "+gen(substantifs)+" "+gen(environnements)+" ?";
        break;
    }
    return txt[0].toUpperCase()+txt.substring(1);
}

// Fonction de génération aléatoire de l'auteur
function gen_by() {
  var prenom = gen(prenoms);
  var nom = gen(noms);
  var biz = gen(biz1)+gen(biz2);
  if(prenom && nom && biz)
    return "par "+prenom+" "+nom+" de "+biz;
  else
    return "";
}

// Rafraîchit le contenu HTML
function refresh() {
  var resultat = gen_conf()+'<br><span class="by">'+gen_by()+'</span>';
  el_result.innerHTML = resultat;
}
el_refresh.addEventListener('click', refresh, false);

// Boot !
window.onload = refresh;
