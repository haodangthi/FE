var body =document.querySelector("body");
// body.appendChild();
// var h1 = document.createElement("h1");
// var h1TextNode=document.createTextNode("CSS1K");

// var h2 = document.createElement("h2");
// var h2TextNode=document.createTextNode("Select a design");
// var ul=document.createElement("ul");

function createElement(parent,tag,text){
    let el=document.createElement(tag);
    let text=createTextNode(text);
    el.appendChild(text);
    parent.appendChild(el);
}


// function createHeaderElement(parent,text,h){
//     let h = document.createElement(h);
//     let hTextNode=document.createTextNode(text);
//     h.appendChild(hTextNode);
//     parent.appendChild(h);


// }



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

