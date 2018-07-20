function setup(){
    createCanvas(500,500);
    background("red");
    }
function mouseDragged() {
        fill("black");
        ellipse(mouseX, mouseY, 5, 5);
        fill("red");
        rect(30, 20, 55, 55);
        return false;
}    
            
      
