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
    this.fingerprintLength = 4;
    this.fingerprintHash = "";
    this.color = "#ef8216";
}

/**
 * Functions which generates a random fingerprint and return a svg
 * @returns {string|*|string}
 */
Captcha.prototype.getSVG = function(){
    var that = this;
    var fingerprint = "";
    var possible = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz023456789?#$%&";

    for( var i=0; i < that.fingerprintLength; i++ ){
        fingerprint += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    that.fingerprintHash = CryptoJS.MD5(fingerprint);

    var svg = "<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>" +
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'>" +
        "<rect x='0' y='50' width='250' height='100' fill='"+that.color+"' z-index='-1' />" +
        "<line x1='100' y1='50' x2='290' y2='50' /><line x1='100' y1='120' x2='290' y2='120' /><line x1='100' y1='50' x2='100' y2='120' /><line x1='290' y1='50' x2='290' y2='120' />g>" +
        "<text x='20 40 70 100' y='110' style='font-size:40px; font-family:Times New Roman, Courier; font-weight: bold; font-style=oblique; stroke: black; stoke-width:1'transform='rotate(20, 100, 100)'>" +
        fingerprint[0] +
        "</text>" +
        "<text x='80 40 70 100' y='120' style='font-size:35px; font-family:Arial black, Arial; font-weight: bold; font-style=oblique; stroke: black; stoke-width:1; fill:none'transform='rotate(-5, 170, 100)'>" +
    fingerprint[1] +
    "</text" +
    "><text x='130 20 10 10' y='110' style='font-size:35px; font-family:Comic Sans MS, Arial; font-weight: bold; " +
    "font-style=oblique; stroke: black; stoke-width:1; fill:none'transform='rotate(30, 200, 100)'>" +
        fingerprint[2] +"</text>" +
        "<text x='200 40 70 100' y='100' style='font-size:37px; font-family:Courier new, Courier; font-weight: bold; " +
        "font-style=oblique; stroke: black; stoke-width:50; fill:none'transform='rotate(-20, 250, 100)'>" +
        fingerprint[3] +"</text>";

    return svg;
};

/**
 * Function which check if the user input is equal to the fingerprint
 * @param input
 * @returns {boolean}
 */
Captcha.prototype.checkCaptcha = function(input){
    var that = this;
    var inputAsHash = CryptoJS.MD5(input);
    return inputAsHash.toString() === that.fingerprintHash.toString();
};

/**
 * Function which returns the color of the captcha object
 * @returns {string}
 */
Captcha.prototype.getColor = function(){
    return this.color;
};

/**
 * Function which sets the color of the captcha
 * @param color
 * @returns {*|string}
 */
Captcha.prototype.setColor = function(color){
    if(color === ""){
        throw "Sorry, you entered an empty value. Please try it again."
    } else {
        this.color = color;
        return this.color;
    }
};
