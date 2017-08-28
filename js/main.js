var sqHeight = 10;
var sqWidth = 10;

var prays = [];
var hunters = [];

function setup(){
    
    createCanvas(800,600);
    
    var countPray = random(20,50);
    var countHunter = random(20,50);
    
    for (var i=0;i<countPray;i++){
        prays.push(new Creature(creatureType[0]));
    }
    
    for (var i=0;i<countHunter;i++){
        hunters.push(new Creature(creatureType[1]));
    }
    
}

function draw(){
    
    drawBackground();
    
    for (var i=0; i<prays.length;i++){
        
        if (prays[i].dead){
            prays.splice(i,1);
        } else {
            prays[i].update();
            prays[i].draw();
        }
    }
    
    for (var i=0; i<hunters.length;i++){
        
        if (hunters[i].dead){
            hunters.splice(i,1);
        } else {
            hunters[i].update();
            hunters[i].draw();
        }
    }
    
    var encounter = null;
    //hunter pray encounter
    for (var i=0;i<hunters.length;i++){
        for (var j=0;j<prays.length;j++){
            encounter = hunters[i].haveColided(prays[j]); 
        }
    }
    
    //hunter hunter encounter
    for (var i=0;i<hunters.length;i++){
        for (var j=0;j<prays.length;j++){
            encounter = hunters[i].haveColided(prays[j]); 
        }
    }
}

function drawBackground(){
    background(51);
    stroke(255);
    for (var i=0;i<width;i+=10){
        line(i,0,i,height);
        //console.log("w" + i);
    }
    
    for (var i=0;i<height;i+=10){
        line(0,i,width,i);
        //console.log("h" + i);
    }
    
}