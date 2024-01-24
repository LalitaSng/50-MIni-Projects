const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',scrolling);

scrolling()

function scrolling(){
    const TriggeredBottom = window.innerHeight /5 * 4;
    console.log()
    boxes.forEach(box=>{
        const borderTop = box.getBoundingClientRect().top;
        if(borderTop < TriggeredBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}