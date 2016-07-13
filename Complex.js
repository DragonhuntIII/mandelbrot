function Complex(a, b) {
    this.a = a;
    this.b = b;
    this.string = "";
    if(a != 0)
        this.string += a;
    switch(true){
        case b > 0: this.string+= (" + " + b + "i"); break;
        case b < 0: this.string+= (" - " + (-b) + "i"); break;
    }
}

function Arg(complex) {

}

Complex.prototype.conjugate = function() {
    return new Complex(this.a, -this.b);
}

Complex.prototype.add = function(complex) {
    return new Complex(this.a + complex.a, this.b + complex.b);
}

Complex.prototype.multiply = function(complex) {
    return new Complex(this.a * complex,a - this.b * complex.b, this.a * complex.b + this.b * complex.a);
}

Complex.prototype.devide = function(complex) {
    if (complex.a == 0 && complex.b == 0) {
        console.log("Error: Division by 0");
    } else {
        var re = (this.a * complex.a + this.b * complex.b) / (Math.pow(complex.a, 2) + Math.pow(complex.b, 2));
        var im = (this.b * complex.a - this.a * complex.b) / (Math.pow(complex.a, 2) + Math.pow(complex.b, 2));
        return new Complex(re, im);
    }
}

function PolarCplx(complex) {
    this.r = complex.abs();
    this.Arg = Math.atan(complex.b / complex.a);
    this.string = this.r + "(cos " + this.Arg + " + i*sin(" + this.Arg + ")";
}

Complex.prototype.abs = function() {
    return Math.sqrt(this.a * this.a + this.b * this.b);
}

Complex.prototype.absSqr = function() {
    return this.a * this.a + this.b * this.b;
}

function parseCplx(complex) {
    var res = complex.split("+");
    if (Object.keys(res).length == 1) {
        res = complex.split("-");
        res[1] = "-" + res[1];
    }
    return new Complex(res[0], res[1].replace("i", ""));
}

Complex.prototype.polar = function() {
    var r = this.abs();
    var Arg = Math.atan2(this.b / this.a);
    return r + "(cos " + Arg + " + i*sin(" + Arg + ")";
}

Complex.prototype.pow = function(exp) {
    var r = this.abs();
    var theta = Math.atan2(this.b , this.a);
    var pow = Math.pow(r, exp);
    return new Complex(pow * Math.cos(theta * exp), pow * Math.sin(theta * exp));
}