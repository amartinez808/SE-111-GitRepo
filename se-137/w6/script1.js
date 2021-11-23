
var tabs = document.querySelectorAll(`nav a`);



for(let i=0; i<tabs.length; i++)

{

    tabs[i].addEventListener(`click`, hilite)

}

function hilite(e)

{

    e.preventDefault();

    tabs[0].style.backgroundColor=`black`;

    tabs[1].style.backgroundColor=`black`;

    tabs[2].style.backgroundColor=`black`;

    e.target.style.backgroundColor=`#161616`;

    document.querySelector(`#file`).innerHTML= e.target.innerHTML;



}


