const {Diamond} = require('./diamond')
describe("Da kommt der Diamant", function () {

    var diamond;

    beforeEach(function (){
        diamond = new Diamond('A');

    });

    it("gibt A wieder, wenn A angegeben", function () {
        expect(diamond.toString()).toEqual('A');
    }); 

    
    describe("Line", function (){
        it("soll ' C   C' ausgeben, wenn C und D gegeben", function (){
            expect(diamond.line('C', 'D')).toEqual(' C   C');
        });
        it("soll 'D     D' ausgeben, wenn D und D gegeben", function (){
            expect(diamond.line('D', 'D')).toEqual('D     D');
        });
        it("soll 'A' ausgeben, wenn A und B gegeben", function (){
            expect(diamond.line('A', 'B')).toEqual(' A');
        });
    });
describe("Inner Space", function (){
        it("gibt Leerzeichen, wenn B gegeben", function(){
            expect(diamond.innerSpace('B')).toEqual(' ');
        });

        it("gibt drei Leerzeichen, wenn C gegben", function (){
            expect(diamond.innerSpace('C')).toEqual('   ');
        });

        it("gibt leeren String, wenn A gegeben", function (){
            expect(diamond.innerSpace('A')).toEqual('');
        });
    });

    describe("Outer Space", function (){
        it("soll einen Space geben, wenn B ist current line und C weitester Punkt", 
        function (){
            expect(diamond.outerSpace('B', 'C')).toEqual(' ');
        });
        it("soll zwei Space geben, wenn C ist current line und E weitester Punkt",
        function (){
            expect(diamond.outerSpace('C', 'E')).toEqual('  ');
        });
        it("soll Exception werfen, wenn D und C", function (){
            var outerSpace = diamond.outerSpace.bind(diamond, 'D', 'C');

            expect(outerSpace).toThrow('Ungültige Kombination');
        });
    });

    describe("Get Index Of", function (){
        it("soll 1 geben, wenn A gegeben", function () {
            expect(diamond.getIndexOf('A')).toEqual(1);
        });
        it("soll Exception werfen, wenn 4 gegeben", function (){
            var getIndexOf = diamond.getIndexOf.bind(diamond, 4);

            expect(getIndexOf).toThrow('Ungültige Aussage');
        });
    });

    describe("Upper Half", function () {
        it("soll ' A\nB B' zurückgeben, wenn B der weiteste Punkt", function () {
            expect(diamond.upperHalf('B')).toEqual(' A\nB B');
        });
    });
    describe("LowerHalf", function () {
        it("soll ' B B\n A' zurückgeben, wenn C der weiteste Punkt", function () {
            var input = ['  A', ' B B', 'C   C'];
    
            expect(diamond.lowerHalf(input)).toEqual(' B B\n A');
        });
    });
});
