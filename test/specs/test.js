describe('Google Page', () => {
   
    beforeAll('open Google in the browser', () => {
        return browser.url('https://google.com');
    });

    it('should introduce the text Wikipedia in the search bar and press enter', () => {
        let input = $('[type="text"');
        input.addValue('Wikipedia');
        browser.keys("\uE007");
    });

    it('should go to Wikipedia webpage and validate the URL', () => {
        let = wikiLink =$('.LC20lb.DKV0Md');
        wikiLink.click();
        browser.pause(1000);
        expect(browser.getUrl()).toEqual('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    })
});

