
   let bubble = [];
   var bubblenum = 300;
window.game = {
    fps: 30
};

function setupCanvas(){

    game.canvas = document.querySelector('canvas');
        if (game.canvas.getContext) {
         layout = game.canvas.getContext('2d');   
        
         for (let i = 0; i < bubblenum; i++){
         bubble.push(new Bubble(trRandom(game.canvas.width, r),trRandom(game.canvas.height, r)));   
    
         }
        setInterval(function(){

             drawPosition();    
        
        }, 1000/game.fps);
    }

    
    function drawPosition(){            // draws 
        layout.fillRect(0, 0,game.canvas.width,game.canvas.height);
        layout.fillStyl = 'black';      
      
        for(let i = 0; i < bubblenum; i++){

        let gravity = new CVector(0, trRandom(.90));
        bubble[i].applyForce(gravity, (0.01));    
     
        bubble[i].getPosition();
        bubble[i].display();

        }
      
   
    }
  
}