
class CVector{
constructor(x, y){

   this.x = x;
   this.y = y;
   
}     

   add(Vector) {
   this.x += Vector.x; 
   this.y += Vector.y; 
   }

   sub(Vector){
   this.x -= Vector.x;
   this.y -= Vector.y;
 
   }
   
   multi(m){
   this.x *= m;
   this.y *= m;
   }

   div(d){
   this.x /= d;
   this.y /= d;
   }
   
   set(x, y){

      this.x = x;
      this.y = y;
   }

   damped(Vector, factor){

      this.x += Vector.x * factor
      this.y += Vector.y * factor
   }
   mag(){
         /**
       * returns the magnatude of the vector 
       */
      return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
   }
 
   magSq(){
      return Math.pow(this.x,2) + Math.pow(this.y,2);
   }
   
   angle(){   
     /**
      * returns the angle in radians 
      */
      return Math.atan(this.y / this.x);
   }


 
   
   normalize(){
      /**
       * keeps the angle, makes a unit vector
       */
       const len = this.mag();
       if (len !== 0) this.multi(1 / len);
       return this    
   }
   
   setMag(sm){

   return this.normalize().multi(sm);
   }

   limit(max){
      /**
       * limits the mag
       */
      if ( this.mag() > max) {

         this.setMag(max);
      }

   }
}


   const dot = (a, b) => a.x * b.x + a.y * b.y;

function random2D() {  // random unit vector 

   let x;
   let y;
   let ang_ = trRandom(360);

   y = Math.sin(ang_);
   x = Math.cos(ang_);
  return new CVector(x, y); 
}


function sub(a, b){
  
   return new CVector(a.x - b.x, a.y - b.y);
}


function add(a, b){
  
   return new CVector(a.x + b.x, a.y + b.y);
}



class C3DVector{
   constructor(x, y, z){
      this.x = x;
      this.y = y;
      this.z = z;
         }

         mag(){
            return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2)+ Math.pow(this.z,2));
         }      
      


      }


      function trRandom(max, min){

         
        if (max && min){         // normal random
           
         return Math.floor(Math.random() * (max - min + 1)) + min;
         
         }else if(max >= 0 && !min) {        

         return Math.floor(Math.random() * (Math.abs(max) - 0 + 1)) + 0;
         
         }else if(max < 0 && !min){

         return Math.floor(Math.random() * (Math.abs(max) - max + 1)) + max;

         }else if(!max && !min){
            return null;
         }
        }

        

   