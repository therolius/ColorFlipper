let shuffleButton = document.getElementById("shuffle");
let colorTextRGB = document.getElementById("colorTextRGB");
let colorTextHEX = document.getElementById("colorTextHEX");
let colorTextHSL = document.getElementById("colorTextHSL");
let infoBox = document.getElementById("info");

function shuffleColor(){

    const maxRand = 256;
    //---RGB---
    let randR = parseInt(Math.floor(Math.random()*maxRand));
    let randG = parseInt(Math.floor(Math.random()*maxRand));
    let randB = parseInt(Math.floor(Math.random()*maxRand));
    //---HEX---
    let hex1 = parseInt(randR/16);
    let hex2 = parseInt((randR/16-hex1)*16);
    let hex3 = parseInt(randG/16);
    let hex4 = parseInt((randG/16-hex3)*16);
    let hex5 = parseInt(randB/16);
    let hex6 = parseInt((randB/16-hex5)*16);

    let calculatedHEX = "#"+hex1.toString(16)+hex2.toString(16)+hex3.toString(16)+hex4.toString(16)+hex5.toString(16)+hex6.toString(16);

    //---HSL---
    console.log("---HSL---");
    let hsl_r_value = (randR/255);
    let hsl_g_value = (randG/255);
    let hsl_b_value = (randB/255);

    let hslTab = [hsl_r_value,hsl_g_value,hsl_b_value];

    let min = Math.min(...hslTab);
    let max = Math.max(...hslTab);

    let hsl_delta = max-min;

    let HSL_L = ((min+max)/2);
    let HSL_S=0;
    let HSL_H=0;

    if(min==max){
        HSL_S=0;
    }

    HSL_S = hsl_delta/(1 - Math.abs(2 * HSL_L - 1));
    if(hsl_delta == 0){
        HSL_H = 0;
    }
    if(max==hsl_r_value){
        HSL_H = (hsl_g_value-hsl_b_value)/hsl_delta;
    }
    if(max==hsl_g_value){
        HSL_H = 2.0 + (hsl_b_value-hsl_r_value)/hsl_delta;
    }
    if(max==hsl_b_value){
        HSL_H = 4.0 + (hsl_r_value-hsl_g_value)/hsl_delta;
    }

    HSL_H = HSL_H * 60;

    if(HSL_H<0){
        HSL_H = HSL_H + 360;
    }

    HSL_H = Math.round(HSL_H);
    HSL_S = Math.round(HSL_S*100);
    HSL_L = Math.round(HSL_L*100);

    //---Result---
    hsl_result = "HSL("+HSL_H+","+HSL_S+"%,"+HSL_L+"%)";

    //---Style---
    document.body.style.backgroundColor = 'rgb('+randR+','+randG+','+randB+')';
    colorTextRGB.style.color = 'rgb('+randR+','+randG+','+randB+')';
    colorTextRGB.style.transition = "color 1000ms linear";
    colorTextHEX.style.color = 'rgb('+randR+','+randG+','+randB+')';
    colorTextHEX.style.transition = "color 1000ms linear";
    colorTextHSL.style.color = 'rgb('+randR+','+randG+','+randB+')';
    colorTextHSL.style.transition = "color 1000ms linear";
    shuffleButton.style.color = 'rgb('+randR+','+randG+','+randB+')';
    shuffleButton.style.borderColor = 'rgb('+randR+','+randG+','+randB+')';
    shuffleButton.style.transition = "1000ms linear";

    //---Type Color---
    colorTextRGB.innerHTML = "RGB("+randR+","+randG+","+randB+")";
    colorTextHEX.innerHTML = calculatedHEX.toUpperCase();
    colorTextHSL.innerHTML = hsl_result.toUpperCase();

    //---Hover effect---
    colorTextRGB.addEventListener("mouseenter",function(event){
        event.target.style.color = "black";
        event.target.style.transition = "0.4s";
    });
    colorTextRGB.addEventListener("mouseleave",function(event){

        event.target.style.color = 'rgb('+randR+','+randG+','+randB+')';
        event.target.style.transition = "0.4s";
    });
    colorTextHEX.addEventListener("mouseenter",function(event){
        event.target.style.color = "black";
        event.target.style.transition = "0.4s";
    });
    colorTextHEX.addEventListener("mouseleave",function(event){
        event.target.style.color = 'rgb('+randR+','+randG+','+randB+')';
        event.target.style.transition = "0.4s";
    });
    colorTextHSL.addEventListener("mouseenter",function(event){
        event.target.style.color = "black";
        event.target.style.transition = "0.4s";
    });
    colorTextHSL.addEventListener("mouseleave",function(event){
        event.target.style.color = 'rgb('+randR+','+randG+','+randB+')';
        event.target.style.transition = "0.4s";
    });
}


//---Copy on click---


colorTextRGB.onclick = function() {
    document.execCommand("copy");
  }
colorTextRGB.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", colorTextRGB.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});



colorTextHEX.onclick = function() {
    document.execCommand("copy");
  }
colorTextHEX.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", colorTextHEX.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});
colorTextHSL.onclick = function() {
    document.execCommand("copy");
  }
colorTextHSL.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", colorTextHSL.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});