const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

console.log(loadText);
console.log(bg);

let load = 0;

let interval = setInterval(loading, 30);
console.log('interval',interval)

function loading(){
    load++;
    if(load > 99){
        clearInterval(interval);
    }
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,0,30)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}