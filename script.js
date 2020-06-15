let playerSimbol = 'X';
let winCounter = 1;
const points = +prompt('укажите количество символов для победы');


document.addEventListener('click', function (event) {
    winCounter = 1
   if (event.target.tagName === 'TD') {
      
    if (event.target.innerText === '') {
        event.target.innerText = playerSimbol;
        
        counter[+event.target.id.split('|')[0]+y +'|' + (+event.target.id.split('|')[1]+x)] = event.target.innerText;
        

        winChek(event);
        if (winCounter >= points) alert(`победил ` + playerSimbol)
        playerSimbol = (playerSimbol === `X`) ? 'O' : 'X'

    } 
   }
})



let counter = {

}
let x = 0;
let y = 0;



function pageReset() {
    for (let iy = 0; iy <= 9 ; iy++ ) {
    
        for(let ix = 0; ix <=9 ; ix++) {
            let keyID = (iy + y) + '|' + (ix + x);
            let slot = iy + '|' + ix
            if ( counter[keyID] !== undefined) {
            
            let slotSimbol = counter[keyID];
            document.getElementById(slot).innerText = slotSimbol;
            } 
            else document.getElementById(slot).innerText = '';
        }
       }
}

document.addEventListener('keydown', function(event){

    if (event.key === 'ArrowLeft') {
        x--
        pageReset();
    }
    if (event.key === 'ArrowUp') {
        y--
        pageReset();
    }
    if (event.key === 'ArrowRight') {
        x++
        pageReset();
    }
    if (event.key === 'ArrowDown') {
        y++
        pageReset();
    }

})




function winChek(event) {

    let lastPoint = (+event.target.id.split('|')[0]+y) +'|' + (+event.target.id.split('|')[1]+x)
    let xN = +event.target.id.split('|')[1]+x
    let yN = +event.target.id.split('|')[0]+y

    console.log(lastPoint);

    for (let i = 1; i <=points-1;i++) {                                      //Проверка по горизонтали
        if (counter[lastPoint] === counter[(yN)+'|' +(xN+i)]) winCounter++; //left => rigtn
        else break;
    }
    for (let i = 1; i <=points-1;i++) {
        if (counter[lastPoint] === counter[(yN)+'|' +(xN-i)]) winCounter++; // right => left
        else break;
    }
    if (winCounter < points ) winCounter = 1;


    for (let i = 1; i <=points-1;i++) {                                      //Проверка по вертикали
        if (counter[lastPoint] === counter[(yN+i)+'|' +(xN)]) winCounter++; //top => down
        else break;
    }
    for (let i = 1; i <=points-1;i++) {
        if (counter[lastPoint] === counter[(yN-i)+'|' +(xN)]) winCounter++; // down => top
        else break;
    }
    if (winCounter < points ) winCounter = 1;


    for (let i = 1; i <=points-1;i++) {                                    //Проверка по диагонали '/'
        if (counter[lastPoint] === counter[(yN+i)+'|' +(xN-i)]) winCounter++; //to down
        else break;
    }
    for (let i = 1; i <=points-1;i++) {
        if (counter[lastPoint] === counter[(yN-i)+'|' +(xN+i)]) winCounter++; //to up
        else break;
    }
    if (winCounter < points ) winCounter = 1;

    for (let i = 1; i <=points-1;i++) {                                    //Проверка по диагонали '\'
        if (counter[lastPoint] === counter[(yN+i)+'|' +(xN+i)]) winCounter++; //to up
        else break;
    }
    for (let i = 1; i <=points-1;i++) {
        if (counter[lastPoint] === counter[(yN-i)+'|' +(xN-i)]) winCounter++; // to down
        else break;
    }
    if (winCounter < points ) winCounter = 1;  

}