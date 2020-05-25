//Test zur Anlegung eines Diamanten
const {Diamond} = require('./diamond')
describe("Da kommt der Diamant", function () {

    var diamond;

    beforeEach(function (){
        diamond = new Diamond('A');

    });
//Tests um durch Konstruktorfunktion ein neues Objekt erstellt, mit 'toString' zur 
//gewünschten Ausgabe
    it("gibt A wieder, wenn A angegeben", function () {
        expect(diamond.toString()).toEqual('A');
    }); 

   
//Test zur Unterteilung des Diamanten in einzelne Zeilen
    describe("_Line", function (){
        it("soll ' C   C' ausgeben, wenn C und D gegeben", function (){
            expect(diamond._line('C', 'D')).toEqual(' C   C');
        });
        it("soll 'D     D' ausgeben, wenn D und D gegeben", function (){
            expect(diamond._line('D', 'D')).toEqual('D     D');
        });
        it("soll 'A' ausgeben, wenn A und B gegeben", function (){
            expect(diamond._line('A', 'B')).toEqual(' A');
        });
    });

// Durch Tests innere Leerzeichen bestimmen
//bei B ein Leerzeichen
describe("Inner Space", function (){
        it("gibt Leerzeichen, wenn B gegeben", function(){
            expect(diamond._innerSpace('B')).toEqual(' ');
        });
//bei C drei Leerzeichen
        it("gibt drei Leerzeichen, wenn C gegben", function (){
            expect(diamond._innerSpace('C')).toEqual('   ');
        });
//Grenzfall A
        it("gibt leeren String, wenn A gegeben", function (){
            expect(diamond._innerSpace('A')).toEqual('');
        });
    });

//Tests um vor dem Buchstaben liegende Leerzeichen bestimmen
    describe("Outer Space", function (){
        it("soll einen Space geben, wenn B ist current line und C weitester Punkt", 
        function (){
            expect(diamond._outerSpace('B', 'C')).toEqual(' ');
        });
        it("soll zwei Space geben, wenn C ist current line und E weitester Punkt",
        function (){
            expect(diamond._outerSpace('C', 'E')).toEqual('  ');
        });
        it("soll Exception werfen, wenn D und C", function (){
            var _outerSpace = diamond._outerSpace.bind(diamond, 'D', 'C');

            expect(_outerSpace).toThrow('Ungültige Kombination');
        });
    });
//Tests zur Implementierung des Unicode Zeichensatzen .chatCodeAt, bei dem jeder Buchstabe
//einer Zahl gleichbedeutend ist
    describe("Get Index Of", function (){
        it("soll 1 geben, wenn A gegeben", function () {
            expect(diamond._getIndexOf('A')).toEqual(1);
        });
        it("soll Exception werfen, wenn 4 gegeben", function (){
            var _getIndexOf = diamond._getIndexOf.bind(diamond, 4);

            expect(_getIndexOf).toThrow('Ungültige Aussage');
        });
    });

//Tests zur Definierung der oberen Hälfte
    describe("Upper Half", function () {
        it("soll ' A\nB B' zurückgeben, wenn B der weiteste Punkt", function () {

            var result = [
                ' A',
                'B B',
            ].join('\n');

            expect(diamond._upperHalf('B')).toEqual(result);
        });
    });

//Tests zur Definierung der unteren Hälfte
    describe("LowerHalf", function () {
        it("soll ' B B\n  A' zurückgeben, wenn C der weiteste Punkt", function () {
            
            var input = [ 
                '   A' , ' B B' , 'C   C'
            ];
            expect(diamond._lowerHalf('C')).toEqual(' B B\n  A');
        });
    });

//Tests zur Integrierung aller Komponenten
    describe("toString", function (){
        it("soll Diamant verbinden", function () {
            var diamond = new Diamond('B');
            var result = [
                ' A',
                'B B',
                ' A'
            ].join('\n');
            expect(diamond.toString()).toEqual(result);
        });

        it("soll Diamant verbinden", function () {
            var diamond = new Diamond('C');
            var result = [
                '  A',
                ' B B',
                'C   C',
                ' B B',
                '  A'
            ].join('\n');
            expect(diamond.toString()).toEqual(result);
        });
    });
});
