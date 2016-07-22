//Config

var dimension = 512;

var maxIterations = 50;

//End of config

//Z being recursive in recursive formula
var Zr;
var Zi;

//C being constant in recursive formula
var Cr;
var Ci;

//T being temporary storage
var Tr;
var Ti

//Keep track of itrCount after iterating
var itrCount;

function setup() {
	createCanvas(dimension, dimension);
	//make sure the computer doesn't die by repeating the process over and over again
	noLoop();
}

function draw() {
	drawMandelbrot();
}

function drawMandelbrot() {
	for(var x = 0; x < dimension; x++) {
		for (var y = 0; y < dimension; y++) {
			Cr = 4 * x / dimension - 2;
			Ci = 4 * y / dimension - 2;
			itrCount = 0;
			Zr = 0;
			Zi = 0;

			while(Zr * Zr + Zi * Zi <= 4 && itrCount <= maxIterations) {
				Tr = Zr * Zr - Zi * Zi + Cr;
				Ti = 2 * Zr * Zi + Ci;

				Zr = Tr;
				Zi = Ti;

				itrCount++;
			}

			var c;

			if(itrCount >= maxIterations) {
				c = color(0, 0, 0);
			} else {
				//c = color(255, 255, 255);
				var hueValue = 10 * (1 + itrCount - Math.log(Math.log(Math.sqrt(Zr * Zr + Zi * Zi))) / Math.log(2.0));
				c = color(hueValue);
			}
			stroke(c);
			point(x, y);
		}
	}
}