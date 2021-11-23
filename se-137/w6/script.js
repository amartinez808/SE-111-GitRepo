var toggle = document.querySelector(`#toggle`)
var tray = document.querySelector(`.tray`)

var tabs = Array.from(document.querySelectorAll(`nav a`))
var p = document.querySelector(`p`)

toggle.addEventListener(`click`, (e)=>{
    e.preventDefault();
    tray.classList.toggle(`closed`)
})

for(let i=0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, selectTab);
}



function selectTab(e)
{
    for (let i=0; i<tabs.length; i++)
    {
        tabs[i].style.backgroundColor= `gray`;
        tabs[i].style.textColor= `white`;
    }
    e.target.style.backgroundColor=`black`;
    p.innerHTML = ` <a href=#>SE 137</a> >>
                    <a href=#>W6</a> >>
                    <a href=#>Homework</a> >>
                    <a href=#>Tab ${Array.from(tabs).indexOf(e.target)+1}</a> >>`
}
   