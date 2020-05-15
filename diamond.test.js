describe("Da kommt der Diamant", function () {
    it("gibt A wieder, wenn A angegeben", function () {
        const diamond = new Diamond('A');
        expect(diamond.toString()).toEqual('A');
    });  
});


