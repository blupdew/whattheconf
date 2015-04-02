
var intros, domaines, technos, jobs, concepts, concepts_article, substantifs, adjectifs, problemes, environnements, verbes, actions, pluriels,plateformes, prenoms, noms, biz1, biz2, refreshbutton;

function reinit() {

// Bouts variables pour le titre
intros = ["10 trucs pour","10 secrets de","10 tendances de","tout ce que vous voulez savoir sur","aux frontières de"];

domaines = ["de la R&amp;D","du serious gaming","du digital","du social media","du branding"];
technos = ["HTML5",".Net","AngularJS","Big Data","NodeJS","WebSocket","Grunt","Creative Cloud","Git","Capistrano","Yeoman"];
jobs = ["designer", "community manager","lead developer","startupeur","Growth Hacker","Développeur Cobol","webdesigner"];

concepts = ["jeu","application","mashup","business model","pull request","networking"];
concepts_article = ["un jeu","une application","un mashup","un business model","une pull request","une architecture"];
substantifs = ["l'utilisation","le développement","le déploiement","le focus"];

adjectifs = ["disruptif","transmedia","digital","mainstream","BtoB","2.0","web2store","BtoC","retina","créatif","user centric","proactif","win-win"];
problemes = ["les limites","les problèmes","la stratégie","le bounce rate","la logique métier","la parallélisation","le CPC"];
environnements = ["en entreprise","en startup","dans le cloud","en agence 360","en mobilité","en agence plurimédia","en freelance","en binôme","en hackaton"];

verbes = ["foirer","innover avec","incentiver","benchmarker","customiser","brander","versionner","disrupter","itérer","drafter"];
actions = ["comprendre","développer","brander","faire le buzz avec","pusher","commiter"];

pluriels = ["es smileys","es serveurs","es réseaux","es QR code","es émoticons","es Gifs animés"];
plateformes = ["Twitter","la digitalization","Facebook","ERP","KPI","CRM","le cloud","SSL","Windows 10"];

// Bouts aléatoires pour l'auteur
prenoms = ["Tristan","Jake","Bruce","Christophe","Bobby","Raphël","Stéphanie","Goulven","Jeanne","Damien","Chuck","Jackie","Kévin","Ophélie","Nabila","Luke","ObiWan"];
noms = ["Lawson","Tyler","Goetter","Dorne","Parisot","de Oliveira","Chouquet","Zuckerberger","Norris","Van Damme","Jobs","Gates","Glazman","Skyblogger","Kenobi"];
biz1 = ["OneTo","Wee","Trans","Net","Link","You","Ultra","Studio","Alsa"];
biz2 = ["oo","biz","media","buzz","seo","meta","win","creations"];

//Boutons funs
refreshbutton= ["C'est naze","Juste...non","One more thing","Autre chose?","On peut faire mieux","Refresh","F5","Ma grand-mère fait mieux","Je like à moitié"];

}

reinit();

// Eléments HTML concernés
var el_result = document.getElementById('result');
var el_refresh = document.getElementById('refresh');
var el_thetwitt = document.getElementById('thetwitt');


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
  var conf = gen_conf();
  var by = gen_by();
  var resultat = conf+'<br><span class="by">'+by+'</span>';
  var thetwitt = '<a id="thetwitt" href="https://twitter.com/intent/tweet?source=webclient&original_referer=http://whattheconf.pwnd.fr&text='+conf+' '+by+' via &url=http://whattheconf.pwnd.fr">Twitter ça !</a>';
  el_result.innerHTML = resultat;
  el_thetwitt.innerHTML= thetwitt;
  el_refresh.value= gen(refreshbutton);
  reinit();
}
el_refresh.addEventListener('click', refresh, false);

// Boot !
window.onload = refresh;
