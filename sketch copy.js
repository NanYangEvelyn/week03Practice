let xpos = 150;
let ypos = 150;

let rectwidth = 300;
let rectheight = 200;

let eDiam = 50;
let maxDiam = 50;

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(200,20,20);
    
  
    // if(xpos < mouseX && mouseX < (xpos + rectwidth) && 
    //   mouseY > ypos && mouseY < ypos + rectheight
    // ){
    //     fill(20,200,20);
    // }else{
    // fill(255);
    // }
    
    
    //很多圆
    // fill("pink");
    // // xpos = xpos + eDiam;
    // for(let xpos = 0; xpos <= width; xpos += eDiam ){
    //     for(let ypos = 0; ypos <= height; ypos += eDiam ){
    //         ellipse(xpos,ypos,eDiam,eDiam);
    //      }

    // }


    //回形
        很多圆
    fill("pink");
    // xpos = xpos + eDiam;
    for(let xpos = 0; xpos <= width; xpos += maxDiam ){
        for(let ypos = 0; ypos <= height; ypos += maxDiam ){
            for(let dim = maxDiam; dim > 5; dim -= 8){
                ellipse(xpos, ypos,dim,dim);
             }
         }

    }
}
    // for(let dim = maxDiam; dim > 5, dim -= 8;){
    //    ellipse(xpos, ypos,dim,dim);
    // }












   
   
   
    // for(let ypos = 0; ypos <= height; ypos += eDiam ){
    //    ellipse(0,ypos,eDiam,eDiam);
    // }











    // ellipse(eDiam,0,eDiam,eDiam);
    // ellipse(2 * eDiam,0,eDiam,eDiam);
    // ellipse(3 * eDiam,0,eDiam,eDiam);

    // ellipse(0,0,eDiam,eDiam);
    // ellipse(0,eDiam,eDiam,eDiam);
    // ellipse(0,2 * eDiam,eDiam,eDiam);




    // translate(eDiam,0);

    // ellipse(eDiam,0,eDiam,eDiam);
    // ellipse(2 * eDiam,0,eDiam,eDiam);
    // ellipse(3 * eDiam,0,eDiam,eDiam);

    // ellipse(0,0,eDiam,eDiam);
    // ellipse(0,eDiam,eDiam,eDiam);
    // ellipse(0,2 * eDiam,eDiam,eDiam);



   
}
