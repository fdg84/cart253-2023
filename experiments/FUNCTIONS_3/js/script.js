/**
 * Functions with return values
 * Francis Ouellette
 * 
 */

"use strict";

function preload() {

}

function setup() {
    createCanvas(500,500);

    let hotCelsius = toCelsius(100);
    console.log(`100 degrees Farenheit is ${hotCelsius} degrees Celsius`);

    let coldCelsius = toCelsius(10);
    console.log(`10 degrees Farenheit is ${coldCelsius} degrees Celsius`);
}

function draw() {
    background(0);

    // let x = random(0,width);
    // let y = random(0,height);
    // ellipse(x,y,100,100);
    // same as below >>
    // ellipse(random(0,width),random(0,height),100,100);

    function toCelsius(fahrenheit) {
        let celsius = (fahrenheit - 32) * 5/9;
        return celsius;
    }
}