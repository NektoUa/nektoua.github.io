let buttonPush = document.querySelector('#play-game');
let game = document.querySelector('#game');

buttonPush.onclick = () => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;
    // canvas.width = 700;
    // canvas.height = 100;
    canvas.setAttribute('class', 'canvas-ball');
    game.appendChild(canvas);

    let blockSize = 5;
    let widthInBlocks = width / blockSize;
    let heightInBlocks = height / blockSize;

    let score = 0;

    class Block {
        constructor(col, row) {
            this.col = col;
            this.row = row;
        }

        drawSquare(color) {
            let x = this.col * blockSize;
            let y = this.row * blockSize;
            context.fillStyle = color;
            context.fillRect(x, y, blockSize, blockSize);
        }
        // drawCircle(color) {
        //     let centerX = this.col * blockSize + blockSize / 2;
        //     let centerY = this.row * blockSize + blockSize / 3;
        //     ctx.fillStyle = color;
        //     circle(centerX, centerY, blockSize / 2, true);
        // }
        equal(otherBlock) {
            return this.col === otherBlock.col && this.row === otherBlock.row;
        }
    }

    let drawScore = function () {
        context.font = '20px Comic Sans';
        context.fillStyle = 'black';
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.fillText('Your score: ' + score, blockSize, blockSize)
    };

    let drawBorder = function () {
        context.fillStyle = 'grey';
        context.fillRect(0, 0, width, blockSize);
        context.fillRect(0, height - blockSize, width, blockSize);
        context.fillRect(0, 0, blockSize, height);
        context.fillRect(width - blockSize, 0, blockSize, height);
    };


    let intervalId = setInterval(function () {
        context.clearRect(0, 0, width, height);
        drawScore();

        drawBorder();
    }, 100)

}





