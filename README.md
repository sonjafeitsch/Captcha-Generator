# Captcha-Generator
JavaScript library which generates captchas based on svg

# Dependencies
- jQuery
- crypto-js

# Installation
Clone the project via git
```
git clone https://github.com/sonjahohlfeld/Captcha-Generator.git
```

# Usage
Create an empty div in the html.
```
<div id="myFirstCaptcha"></div>
```
Define a new captcha object and add the SVG to the div via JavaScript and jQuery.
```javascript
var captcha = new Captcha();
$('#myFirstCaptcha').html(captcha.getSVG());
```
# Changelog
**0.2.0**
 - Add function for changing the color

**0.1.0**
 - First release of the Captcha-Generator code.
 - Get SVG
 - Check if user input is equal to fingerprint
