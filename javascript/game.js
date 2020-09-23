let buttonPush = document.querySelector('#play-game');
let game = document.querySelector('#game');

buttonPush.onclick = () => {
    let canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 100;
    canvas.setAttribute('class', 'canvas-ball');
    game.appendChild(canvas);
}



