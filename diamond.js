//Anlegen des Diamanten
function Diamond (value) {
    this.value = value;
};


//_line Unterteilung des Diamanten in mehrere Zeilen
Diamond.prototype._line = function (current, widest){
    var _outerSpace = this._outerSpace(current, widest);
    var _innerSpace = this._innerSpace(current);

   var _line = _outerSpace + current;

   if (_innerSpace) {
       _line += _innerSpace + current;
   }
   return _line;
};

//innere Leerzeichen bestimmen
Diamond.prototype._innerSpace = function (value) {
    
    var index = this._getIndexOf(value);

    var spaces = 2 * (index - 1) - 1;

    return new Array(spaces + 1).join(' ');
};
//vor dem Buchstaben liegende Leerzeichen bestimmen
Diamond.prototype._outerSpace = function (current, widest){
    
    var currentValue = this._getIndexOf(current);
    var widestValue = this._getIndexOf(widest);

    if (currentValue > widestValue){
        throw new Error('Ungültige Kombination');
    }

    var spaces = widestValue - currentValue;
    
    return new Array(spaces + 1).join(' ');
};

//Implementierung des Unicode Zeichensatzen .chatCodeAt, bei dem jeder Buchstabe
//einer Zahl gleichbedeutend ist

//Der Ausdruck /^[A-Z]$/ bedeutet, dass die Zeichenkette nur aus Großbuchstaben 
//bestehen darf.
Diamond.prototype._getIndexOf = function (char) {
    if (false === /^[A-Z]$/.test(char)) {
        console.log("******", char);
        throw new Error('Ungültige Aussage');
    }
   var codeOfA = 'A'.charCodeAt(0);
    return char.charCodeAt(0) - codeOfA + 1;
};

//Definierung der oberen Hälfte, von der ersten Zeile ('A')
//bis zur breitesten Stelle 
Diamond.prototype._upperHalf = function (char) {
    var index = this._getIndexOf(char);
    var result = [];

   var codeOfA = 'A'.charCodeAt(0);

    for (var i = 0; i < index; i++) {
        result.push(this._line(String.fromCharCode(i + codeOfA), char));
    }
    return result.join('\n');
};

//Definierung der unteren Hälfte des Diamanten, , also = obere Hälfte
//ohne breiteste Stelle und umgekehrter Reihenfolge

Diamond.prototype._lowerHalf = function (char){
    var index = this._getIndexOf(char);
    var result = [];

   var codeOfA = 'A'.charCodeAt(0);

    for (var i = index -2; i >= 0; i--) {
        result.push(this._line(String.fromCharCode(i + codeOfA), char));
    }
    return result.join('\n');
};


//.toString = eine Zahlenfolge, die das aktuelle Objekt darstellt
//Integrierung aller Komponenten, also kompletter Diamant
Diamond.prototype.toString = function (){
    if (this.value === 'A') {
        return this.value;
    }
    return this._upperHalf(this.value) + '\n' + this._lowerHalf(this.value);
};



module.exports = {
    Diamond
};
