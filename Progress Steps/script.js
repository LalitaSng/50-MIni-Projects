const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('nxt');
const progress = document.getElementById('progress');

let currActive = 1;

next.addEventListener('click',()=>{
    currActive++;
    // if(currActive > circles.length){
    //     currActive = circles.length;
    // }
    update();
    console.log('currAN',currActive);
})

prev.addEventListener('click',()=>{
    currActive--;
    // if(currActive<1){
    //     currActive = 1;
    // }
    update();
    console.log('currAP',currActive);
})

function update(){
    circles.forEach((circle, index)=>{
        if(index<currActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })
    const activeCircle = document.querySelectorAll('.active');

    progress.style.width = (activeCircle.length - 1)/(circles.length-1)*100+'%';
    console.log(progress.style.width);

    if(currActive === 1){
        prev.disabled = true;
    }else if(currActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}

