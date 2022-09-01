const circle = document.getElementById('circle');
const main = document.getElementsByClassName('slider')
const circleStyle = circle.style;
const buttons = document.querySelectorAll("button")
const bubble  = document.getElementsByClassName('bubble')
const second_bubble  = document.getElementsByClassName('second_bubble')
const note_first = document.getElementsByClassName('main')
const note_second = document.getElementsByClassName('shop')
document.addEventListener('mousemove', e => {
    window.requestAnimationFrame(() => {
        circleStyle.top = `${ e.clientY - circle.offsetHeight/2 }px`;
        circleStyle.left = `${ e.clientX - circle.offsetWidth/2 }px`;
    });
});


buttons.forEach(button =>{
    button.addEventListener("mouseover",function (){
        circle.style.transform =("scale(1.5)");
    })
    button.addEventListener("mouseout",function (){
        circle.style.transform =("scale(1)");
    })
})

window.addEventListener('scroll', () =>{
    const scrollableP = 1;
    const scrollableM = 0;
    const scrolled = window.scrollY;
    console.log(scrolled);
    if (Math.ceil(scrolled)===scrollableP){
        main[0].style.background =('#8675BA');
        bubble[0].style.visibility = "hidden";
        bubble[1].style.visibility = "hidden";
        bubble[2].style.visibility = "hidden";
        second_bubble[0].style.visibility = "visible";
        second_bubble[1].style.visibility = "visible";
        second_bubble[2].style.visibility = "visible";
        note_second[0].style.visibility = "visible";
        note_first[0].style.visibility = "hidden";
    }
    if (Math.ceil(scrolled)===scrollableM){
        main[0].style.background =('#8DBDBA');
        bubble[0].style.visibility = "visible";
        bubble[1].style.visibility = "visible";
        bubble[2].style.visibility = "visible";
        second_bubble[0].style.visibility = "hidden";
        second_bubble[1].style.visibility = "hidden";
        second_bubble[2].style.visibility = "hidden";
        note_second[0].style.visibility = "hidden";
        note_first[0].style.visibility = "visible";
    }
});

