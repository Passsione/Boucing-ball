

var r = 24;
var Xmouse;
var Ymouse; 
var clicked = false;

class Bubble{
    constructor(x, y){

        this.loc = new CVector(x, y);
        this.vel = new CVector(0, 0);
        this.acc = new CVector(0, 0);
        let handleMousemove = (event) => {

            Xmouse = event.x;
            Ymouse = event.y;
       };
       document.addEventListener('mousedown', handleMousemove);
  
       let handleMousedown = (event) => {

        clicked = true;
   };
        document.addEventListener('mouseup', handleMousedown);

        let handleMouseup = (event) => {

            clicked = false;
        };

}     

    applyForce(Vforce, damper){

        if (Vforce) {
        this.acc.damped(Vforce, damper);
        }
    }

     getPosition() {            // calculate position
          
        this.Bounce(); 
        
        this.vel.add(this.acc);
        this.vel.limit(28)
        this.loc.add(this.vel);
     
  //    console.log( this.vel.mag());
    }


    display() {
        
        layout.beginPath();
        layout.strokeStyle = 'rgb(48,120,90)';
        layout.arc(this.loc.x, this.loc.y, r, 0, 2 * Math.PI);
        layout.stroke();
       
       
    }

    Bounce() {

        if (this.loc.x >= game.canvas.width-r ){
            this.loc.x = game.canvas.width-r
            this.vel.x *= -1;  
        
        }else if (this.loc.x <= r){
            this.loc.x = r
            this.vel.x *= -1;  
        }

        if (this.loc.y >= game.canvas.height-r){
            this.loc.y = game.canvas.height-r
            this.vel.y *= -1;  
        
        }else if (this.loc.y <= r){
            this.loc.y = r
            this.vel.y *= -1;  
        }
    }

}


  




