function isTouching(b,a){
    if(b.x-a.x <a.width/2+b.width/2&&
      a.x-b.x <a.width/2+b.width/2&&
      a.y-b.y<a.height/2+b.height/2&&
      b.y-a.y<a.height/2+b.height/2){
        return true;
  
    }
    else{
   return false
    }
  }
  function bounceOff(b,a){
    if(b.x-a.x <a.width/2+b.width/2&&
      a.x-b.x <a.width/2+b.width/2){
      
    b.velocityX=b.velocityX*(-1)
    a.velocityX=a.velocityX*(-1)
    }
     if(a.y-b.y<a.height/2+b.height/2&&
      b.y-a.y<a.height/2+b.height/2){
        b.velocityY=b.velocityY*(-1)
        a.velocityY=a.velocityY*(-1)
    } 
  }