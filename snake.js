function Player() 
{
    this.score = 0;
}

function Snake() 
{
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0; 

    this.draw =  function()
    {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, 30,90);
    }

    this.update = function()
    {
        this.x = this.x + (this.xSpeed);
        this.y = this.y + (this.ySpeed);
        //atual_rect_x = this.x;
        atual_rect_y = this.y;

        if(this.y > 900)
        {
            this.ySpeed = -scale;
        }
        
        if(this.y < 0)
        {
            this.ySpeed = scale;
        }

        //console.log(this.y);
    }

    this.changeDir = function(direct)
    {
        switch(direct){
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;
                //console.log(this.ySpeed);
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
        }
    }
}


function Circle() 
{
    this.centerX = 65;
    this.centerY = 50;
    this.radius = 30;
    this.toX = 10;
    this.toY = 0;
    this.xSpeedCircle = 30;
    this.ySpeedCircle = 3;

    this.draw =  function()
    {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.centerX ,this.centerY , 30,30);
    }

    this.update = function()
    {
        this.centerX = this.centerX + this.xSpeedCircle;
        this.centerY = this.centerY + this.ySpeedCircle;

        if(this.centerX > 1000)
        {
            this.xSpeedCircle = -scale;
        }
        
        if(this.centerX < -50)
        {
            ctx.font = "30px Arial";
            alert("Click OK to play again");
        }

        if(this.centerY > 990)
        {
            this.ySpeedCircle = -scale;
        }
        
        if(this.centerY < 0)
        {
            this.ySpeedCircle = scale;
        }

        //console.log(this.ySpeedCircle);
    }

}
