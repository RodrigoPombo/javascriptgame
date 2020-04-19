const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(canvas)
const scale = 10;
const rows = canvas.height /scale;
const columns = canvas.height /scale;
var snake;
var circle;
var dif = 20;
var interval;


function setupdif()
{
    if(player.score%1 == 0 && player.score!=0)
    {
        this.dif = 1;
        console.log("dif autal: " +this.dif);
    }
}

function setup(){
    snake = new Snake();
    circle = new Circle();
    player = new Player();

    this.dif = this.dif - 10;

    window.setInterval(()=>{

    if ( player.score == 2 ) {
        setup();
    } else {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        snake.draw();
        circle.draw();
        snake.update();
        circle.update();

        if((circle.centerY < (snake.y+ 90) && circle.centerY > snake.y) && (circle.centerX < 0))
        {
            circle.xSpeedCircle = +scale;
            circle.update();
            player.score = player.score + 1;
            setupdif(player.score);
         }
    }

    //window.clearInterval(interval); 

    ctx.font = "30px Arial";
    ctx.fillText("your score atual: " + player.score, 740, 50);
    ctx.fillText("your dif atual: " + (50-dif), 740, 100);

    },this.dif)

};

setup();

window.addEventListener("keydown",(evt) => {
const direction = evt.key.replace("Arrow","");
//console.log(direction);

snake.changeDir(direction);


})

