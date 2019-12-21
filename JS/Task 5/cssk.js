var body =document.querySelector("body");
 
var header=createElement(body,"header","");
createElement(header,"h1","CSS1K");
var nav=createElement(header,"nav","");
createElement(nav,"h2","Select a design")
var ul=createElement(nav,"ul","");


var article =createElement(body,"article","");
var artHeader= createElement(article,"header","");
var artH2=createElement(artHeader,"h2","");
artH2.innerHTML="The Beauty in <abbr>CSS</abbr> Design";
createElement(artHeader,"p","").innerHTML="A demonstration of what can be accomplished with only 1 <abbr title=\"Kibibyte\">K</abbr> (<dfn title=\"1024 bytes\">Kibibyte</dfn>) of <abbr>CSS</abbr>. Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys.";


// массивы получила с помощью копирования в консоли
//for(let i=0;i<document.querySelector("ul").children.length;i++){array.push(document.querySelector("ul").children[i].lastElementChild.innerText);}

var liNames=["Default", "Stripes", "Notepad", "Garden of CSS-3Den", "Bbubles", "Swiss", "Turn around", "Whirl", "BundlerInspired", "Oldie", "Typhon", "Cube", "Northern Lights", "Skewed", "Moonlight", "Typewriter", "Old School", "Butchery", "m6tt", "1024-bytes", "Molokai", "Android", "Bookshelf", "GeoCities", "I'm Batman", "Ebhoren", "Facetime", "Cloudy", "Grey Matter", "Blue square", "HelvetiPink", "Summer Sun", "Less is More", "Inset", "Legible", "Green Lemon", "Wired", "Narcissist", "Juiz Star", "Wolfr", "fortyeight1k", "Columns", "Trainspotting", "ribbon", "Solarized", "Open Water", "HTML5 Colors", "heart css", "Sourcy", "Terminal", "Goodnight Moon", "Fancy", "Text Levels", "Yelo", "Spartan", "paper", "Lúcuma", "Fresh Soda", "Ev", "B4y & A11y", "Adaptype", "BleuBleu", "Simpl", "Mitchiru", "Casoy", "The Simple Swede", "PhotoBox", "Desktop", "Monochrome", "Expandable", "BlueBrush", "Notice Board", "Triangulate", "AAPL", "Yollaw", "Stretchy", "smile", "Toolbar", "Round Rect", "The Rhythm", "SimpleBox", "Crawl"];
var liSurnames=["Jacob Rask", "Vasilis van Gemert", "Wout Mager", "Alex Walker", "akella & Genn", "Chris Lee", "Bas van Dorst", "Vincent De Oliveira", "PhilG", "Alexander Mankuta", "ESWAT", "Sergii Iurevych", "Igor «SkAZi» Potapov", "Paul Steffens", "Christian \"Schepp\" Schaefer", "Lance Alton Troxel", "Roman Liutikov", "Vibby", "Matt Woodfield", "Faisalman", "Kien Nguyen", "Aleksej Romanovskij", "SelenIT", "Alexey Savartsov", "Paul Reid", "Dominic Mercier", "Bernard Nijenhuis", "Sergey Leschina", "Vadim Makeev", "Hubert Sablonnière", "Bill Keller", "Tanya Peasgood", "Rob Balfre", "Guillermo Latorre", "Reimund Trost", "Dirk Radunz", "Brett DeWoody", "Jackie Balzer", "Geoffrey Crofte", "Johan Ronsse", "Michael Haschke", "Alexander Makarov", "Henrique Boaventura", "David King", "heirenton", "Gilmore Davidson", "Michael Garrett Jones", "Choy Kum Jin", "Roman Komarov", "Mikhail Korepanov", "Dethe Elza", "Michele Cipriani", "Patrick Mann", "Bart de Bruin", "Trent Mick", "Daniel Rauber", "Germán Martínez", "Jan Ortgies", "Mathieu Rochette", "Benoit Klein", "Vasilis van Gemert", "Leighton Rodney", "Neofyt", "Michael Fritz", "Robert Boloc", "Tobias Akeblom", "Stinkyink", "Webmolot", "Tamer Aydin", "Dennis Madvedovsky", "Jenny Hao", "Nihar Sawant", "Sebastien Paquet", "Joffrey Jaffeux", "Yan Ivanov", "Denis Koltsov", "Michael Scharnagl", "Maxim Chervonny", "Edwin Martin", "Roman Komarov", "Rael Max", "Bram de Haan"];
var attr1=["./", "#stripes", "#notepad", "#gardenof3den", "#bbubles", "#swiss", "#turnaround", "#whirl", "#bundler_inspired", "#oldie", "#typhon", "#cube", "#northern-lights", "#skewed", "#moonlight", "#typewriter", "#oldschool", "#butchery", "#m6tt", "#1024-bytes", "#molokai", "#android", "#bookshelf", "#geocities", "#imbatman", "#ebhoren", "#facetime", "#cloudy", "#greymatter", "#blue_square", "#helvetipink", "#summersun", "#lessismore", "#inset", "#legible", "#greenlemon", "#wired", "#narcissist", "#juizstar", "#wolfr", "#fortyeight1k", "#columns", "#trainspotting", "#ribbon", "#solarized", "#openwater", "#html5colors", "#heart_css", "#sourcy", "#terminal", "#goodnight_moon", "#fancy", "#textlevels", "#yelo", "#spartan", "#paper", "#lucuma", "#freshsoda", "#ev", "#b4ya11y", "#adaptype", "#bleubleu", "#simpl", "#mitchiru", "#casoy", "#thesimpleswede", "#photobox", "#desktop", "#monochrome", "#expandable", "#bluebrush", "#noticeboard", "#triangulate", "#aapl", "#yollaw", "#stretchy", "#smile", "#toolbar", "#roundrect", "#therhythm", "#simplebox", "#crawl"];
var attr2=["http://twitter.com/jacobrask", "http://vasilis.nl", "http://twitter.com/eworm_", "http://designfestival.com", "http://cssing.org.ua", "http://chrsl.net", "http://www.basvandorst.nl", "https://twitter.com/iamvdo", "https://github.com/PhilG", "http://pointlessone.org", "http://eswat.ca", "http://be.net/iurevych", "http://potapoff.org", "http://twitter.com/sntxrrr", "http://twitter.com/derSchepp", "http://thisbythem.com", "http://romanliutikov.com", "http://vibby.fr", "http://m6tt.com", "http://github.com/faisalman", "http://designtomarkup.com", "http://agat.in", "https://github.com/SelenIT", "https://github.com/asavartsov/", "#", "http://www.dominic-mercier.com", "http://twitter.com/bnijenhuis", "http://twitter.com/putnik", "http://pepelsbey.net", "http://twitter.com/hsablonniere", "http://billkeller.name", "http://twitter.com/tanya_peasgood", "http://twitter.com/rob_balfre", "http://www.hachemuda.com", "http://lumens.se", "http://twitter.com/d_radunz", "http://www.digitalwaxworks.com", "http://jackiebalzer.com", "http://www.creativejuiz.fr", "http://twitter.com/wolfr_", "http://michael.haschke.biz", "http://rmcreative.ru", "http://www.hboaventura.com", "http://oodavid.com", "http://twitter.com/heirenton", "https://github.com/gilmoreorless", "http://www.theweblife.com", "https://github.com/kjchoy", "http://kizu.ru/en/", "http://twitter.com/PanyaKor", "http://livingcode.org", "http://www.trustweb.it", "http://www.patrickmann.com", "http://bartdebruin.nl", "http://trentm.com", "http://daniel-rauber.de", "http://twitter.com/germanmartinez", "http://jungundwillich.de", "http://evangeneer.net", "http://twitter.com/etBen", "http://vasilis.nl", "http://www.leightonrodney.com", "http://www.neofyt.com", "http://banquo.de", "http://twitter.com/robertboloc", "http://www.tobiasphoto.com", "http://stinkyinkshop.co.uk", "http://webmolot.com", "http://tamerayd.in", "http://twitter.com/curlybrace", "https://twitter.com/jennyhao", "http://www.about.me/niharsawant", "http://jumplinkdesign.co.vu", "http://twitter.com/joffreyjaffeux", "http://franzose.in", "http://twitter.com/mistadikay", "http://twitter.com/realmuecke", "http://chervonny.ru/en/", "http://www.bitstorm.org", "http://kizu.ru/en/", "http://raelmax.com", "http://atelierbramdehaan.nl"];

artSection1=createSection(article,"So What is This About?");
artSection2=createSection(article,"Participation");
createElement(artSection1,"p","").innerHTML="Back in 2003 (that's <span id=\"zengarden-age\">a lot of</span> years ago!) <a href=\"http://mezzoblue.com\">Dave Shea</a> launched the <a href=\"http://www.csszengarden.com\"><cite><abbr>CSS</abbr> Zen Garden</cite></a>. It showcased what was possible with <abbr>CSS</abbr>-based designs, leading to an explosion in the use of CSS on the web. Then, <a href=\"http://qfox.nl\">Peter van der Zee</a> created <a href=\"http://js1k.com\">JS1k</a> in 2010, a competition to build cool applications with no more than 1 <abbr>K</abbr> of JavaScript.";
createElement(artSection1,"p","").innerHTML="A lot has happened since the Zen Garden days, and today you can do almost anything with only <abbr>CSS</abbr>. As <abbr>CSS</abbr> use is growing, so is the average <abbr>CSS</abbr> file size. Popular sites have in average <a href=\"http://httparchive.org/interesting.php#bytesperpage\">75 <abbr>K</abbr> of <abbr>CSS</abbr></a>, but some use up to a megabyte of style sheets!";
createElement(artSection1,"p","").innerHTML="Do we need that much? <b>CSS1K</b> invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity.";
var artSecOl=createElement(artSection2,"ol","");
createElement(artSection2,"p","").innerHTML="To participate, fork <a href=\"https://github.com/selfthinker/CSS1K/\">CSS1K</a> at GitHub and send your submission as a pull request. You are free to update your style at any time by sending a new pull request. Please specify the name of the style, your own name, and a URL you want us to link to (such as your homepage).";

for (let i = 0; i < liNames.length; i++) {
    createLiElements(ul,liNames[i],liSurnames[i],attr1[i],attr2[i]);
    
}



var ol1=createElement(artSecOl,"li","Submissions must consist of only");
createElement(ol1,"abbr","CSS");
var ol2=createElement(artSecOl,"li","Submissions may be up to 1 ");
createElement(ol2,"abbr","K").setAttribute("title","Kibibyte");
ol2.innerHTML+="(1024 bytes) minified";
var ol3=createElement(artSecOl,"li","Vendor prefixes are");
createElement(ol3,"em","not");
ol3.innerHTML+=" counted to the total number of bytes – submit your code unprefixed and ";
createElement(ol3,"a","PrefixFree").setAttribute("href","https://leaverou.github.io/prefixfree/");
ol3.innerHTML+="will add necesssary prefixes";
var ol4=createElement(artSecOl,"li","Any external resources and images, including ");
createElement(ol4,"code","data");
createElement(ol4,"abbr","URI");
ol4.innerHTML+="'s, ";
createElement(ol4,"code","@font-face"); 
ol4.innerHTML+=" and ";
createElement(ol4,"code","@import"); 
ol4.innerHTML+="'s, are forbidden";
var ol5=createElement(artSecOl,"li","The page ");
createElement(ol5,"a","does not").setAttribute("href","http://dowebsitesneedtolookexactlythesameineverybrowser.com");
ol5.innerHTML+=" have to look the same in every browser, but graceful degradation is encouraged";
var ol6=createElement(artSecOl,"li","The submitted code is licensed under the ");
createElement(ol6,"a","MIT License").setAttribute("href","http://www.opensource.org/licenses/mit-license.php");




var footer=createElement(body,"footer","");
        
var footP=createElement(footer,"p","Licensed under the ");
var footPA=createElement(footP,"a","MIT license\n");
footPA.setAttribute("href","http://www.opensource.org/licenses/mit-license.php");
footPA.setAttribute("rel","license");
footP.innerHTML+="Hosted and managed at";
var footPA2=createElement(footP,"a","GitHub");

footPA2.setAttribute("href","https://github.com/selfthinker/CSS1K://www.opensource.org/licenses/mit-license.php");








function createSection(parent,h2Text){
    var section=createElement(parent,"section","");
    createElement(section,"h2",h2Text);
    return section;
}

function createElement(parent,tag,text){
    let el=document.createElement(tag);
    let txt=document.createTextNode(text);
    el.appendChild(txt);
    parent.appendChild(el);
    return el;
}



function createLiElements(parent,text1,text2,link1,link2){
    let li=document.createElement("li");
    let a1= document.createElement("a");
    let a2= document.createElement("a");
    let t1= document.createTextNode(text1);
    let t2= document.createTextNode(text2);
    a1.href=link1;
    a2.href=link2;
    a1.appendChild(t1);
    a2.appendChild(t2);
    li.appendChild(a1);
    li.appendChild(a2);
    parent.appendChild(li);
}

