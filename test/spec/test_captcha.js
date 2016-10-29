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
});
