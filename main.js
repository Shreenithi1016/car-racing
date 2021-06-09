canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;

car2_width=120;
car2_height=70;

car1_image="car1.png";
car2_image="car2.png";

car1x_=10;
car1_y=10;

car2x_=10;
car2_y=100;

function add() {
    background_image1=new Image();
    background_image1.onload=uploadBackround;
    background_image1.src=background_image;

    car1_image1=new Image();
    car1_image1.onload=uploadcar1;
    car1_image1.src=car1_image;

    car2_image1=new Image();
    car2_image1.onload=uploadcar2;
    car2_image1.src=car2_image;
}

function uploadBackround() {
    ctx.drawImage(background_image1, 0, 0, canvas.width, canvas.height);
}

function uploadcar1 ()  {
    ctx.drawImage(car1_image1, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2 ()  {
    ctx.drawImage(car2_image1, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38") {
        up();
        console.log("up key was pressed");
    }
    if(keyPressed=="40") {
        down();
        console.log("down key was pressed");
    }
    if(keyPressed=="37") {
        left();
        console.log("left key was pressed");
    }
    if(keyPressed=="39") {
        right();
        console.log("right key was pressed");

    } if(keyPressed=="83") {
        down();
        console.log("s key was pressed");
    }

    if(keyPressed=="68") {
        right();
        console.log("d key was pressed");
    }

    if(keyPressed=="65") {
        left();
        console.log("a key was pressed");
    }
}
