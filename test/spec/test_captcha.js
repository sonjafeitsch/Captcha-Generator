describe("The constructor is supposed a proper Captcha object", function() {
    it('Constructor Captcha exists', function(){
        expect(Captcha).toBeDefined();
    });
    it("Captcha object is not null", function(){
       expect(captcha).not.toBeNull();
    });
});
