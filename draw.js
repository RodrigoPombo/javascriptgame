const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(canvas)
const scale = 10;
const rows = canvas.height /scale;
const columns = canvas.height /scale;
var snake;
var circle;
var dif = 60;
var interval = 1000;

function setupdif()
{
        this.dif = this.dif - 10;
        console.log("dif atual: " + this.dif);
}

var snake = new Snake();
var circle = new Circle();
var player = new Player();
function setup(){

    //this.dif = this.dif - 1;

    interval = window.setInterval(()=>{

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.snake.draw();
        this.circle.draw();
        this.snake.update();
        this.circle.update();
        console.log("dif atual: " + this.dif);

        if((circle.centerY < (snake.y+ 90) && circle.centerY > snake.y) && (circle.centerX < 0))
        {
            circle.xSpeedCircle = +scale;
            circle.update();
            player.score = player.score + 1;
            setupdif(player.score)
         }

        window.clearInterval(interval);
    
        if ( player.score % 2 == 0 && player.score != 0) 
        {
            //setupdif(player.score)
            setup();
            //console.log("here");
        } 
        else 
        {
            setup();
            //console.log("here");
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

