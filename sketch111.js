let xpos = 180;
function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(200,20,20);

    // rect(xpos,10,30,30);
    // rect(xpos,50,30,30);
    // rect(xpos,90,30,30);

    // rect(mouseX,mouseY,30,30);
    // print(mouseX,mouseY);
    
    // fill(255);
    if(mouseX > width / 2) {
        if(mouseY > height / 2) {
            fill(200,10,200);
        } else{
            fill(0,255,0);
        }
    } else{
        if(mouseY > height / 2){
            fill(10,10,200);
        }
        fill(255);
    }

    // if(mouseY > height / 2) {
    //     fill(200,10,200);
    // } else{
    //     fill(255);
    // }

    rect(mouseX,mouseY,30,30);


}
