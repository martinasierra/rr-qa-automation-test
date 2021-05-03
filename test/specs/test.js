describe('Google Page', () => {
   
    beforeAll('open browser', () => {
        return browser.url('https://google.com');
    });

    it('title', () => {
        browser.pause(2000);
        expect(browser.getTitle()).toEqual('Google');
    })

});