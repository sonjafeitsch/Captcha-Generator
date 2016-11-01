defaultConf = {
    height: 100,
    width: 300,
    fingerprintLength: 4
};

describe("The constructor is supposed a proper Captcha object", function() {
    it('Constructor Captcha exists', function(){
        expect(Captcha).toBeDefined();
    });
    var captcha = new Captcha();
    it("Captcha object is not null", function(){
       expect(captcha).not.toBeNull();
    });
    it('captcha object should be an instance of Captcha class', function(){
        expect(captcha instanceof Captcha).toBeTruthy();
    });
    it('the height of the svg should be set to the configured height', function(){
        expect(Number(captcha.height)).toEqual(defaultConf.height);
    });
    it('the width of the svg should be set to the configured width', function(){
        expect(Number(captcha.width)).toEqual(defaultConf.width);
    });
    it('the length of the fingerprint should be set to the configured fingerprintLength', function(){
        expect(Number(captcha.fingerprintLength)).toEqual(defaultConf.fingerprintLength);
    });
});

describe('The getSVG method of Captcha objects is supposed to generate the captcha as SVG', function(){
    var captcha = new Captcha();
    it('getSVG method is supposed to be a function', function(){
        expect(typeof captcha.getSVG).toEqual('function');
    });
});
