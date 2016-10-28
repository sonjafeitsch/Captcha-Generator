/**
 * Created by sonja on 10/26/16.
 */

/**
 * Creates an object of type Captcha
 * @constructor
 */
function Captcha() {
    this.height = 100;
    this.width = 300;
    this.fingerprintLenght = 4;
}

/**
 *
 * @returns {string|*|string}
 */
Captcha.prototype.getPNG = function(){
    var fingerprint = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?#$%&";

    for( var i=0; i < 4; i++ ){
        fingerprint.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    }
    console.log(fingerprint);

    // var svg = "<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>" +
    //     "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'>" +
    //     "<text x='100 40 70 100' y='100' style='font-size:55; font-family:Times New Roman, Courier; font-weight: bold; font-style=oblique; stroke: black; stoke-width:1'transform='rotate(20, 100, 100)'>" +
    //     fingerprint[0] +
    //     "</text><text x='170 40 70 100' y='100' style='font-size:60; font-family:Arial black, Arial; font-weight: bold; font-style=oblique; stroke: black; stoke-width:1; fill:none'transform='rotate(-40, 170, 100)'>" +
    // fingerprint[1] +
    // "</text" +
    // "><text x='200 40 70 100' y='100' style='font-size:35; font-family:Comic Sans MS, Arial; font-weight: bold; " +
    // "font-style=oblique; stroke: black; stoke-width:1; fill:none'transform='rotate(30, 200, 100)'>" +
    //     fingerprint[2] +"</text>" +
    //     "<text x='250 40 70 100' y='100' style='font-size:37; font-family:Courier new, Courier; font-weight: bold; " +
    //     "font-style=oblique; stroke: black; stoke-width:1; fill:none'transform='rotate(-20, 250, 100)'>" +
    //     fingerprint[3] +"</text>" +
    //     "<filter id='filter1' filerUnits='objectBoundingBox' x='0%' width='100%' height='100%'><feTurbulence type='turbulence' baseFrequency='0.03' numOctaves='5' />" +
    //     "</filter><rect x='100' y='50' width='250' height='100' filter='url(#filter1)' />" +
    //     "<line x1='100' y1='50' x2='290' y2='50' /><line x1='100' y1='120' x2='290' y2='120' /><line x1='100' y1='50' x2='100' y2='120' /><line x1='290' y1='50' x2='290' y2='120' />g>";

    return svg;
};