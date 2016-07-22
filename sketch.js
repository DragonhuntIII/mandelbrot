//Config
var dimension = 2048;

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
var Ti;

//Keep track of itrCount after iterating
var itrCount;

//Corners of current viewport
var xMin = -2;
var xMax = 2;
var yMin = -2;
var yMax = 2;

//storing locations for zoomport
var zoomXMin;
var zoomXMax;
var zoomYMin;
var zoomYMax;

function setup() {
    createCanvas(dimension, dimension);
    //make sure the computer doesn't die by repeating the process over and over again
    noLoop();
}

function draw() {
    drawMandelbrot();
}

function drawMandelbrot() {
    for (var x = 0; x < dimension; x++) {
        for (var y = 0; y < dimension; y++) {
            Cr = (xMax - xMin) * x / dimension - (xMax - xMin) / 2 + (xMax + xMin) / 2;
            Ci = (yMax - yMin) * y / dimension - (yMax - yMin) / 2 + (yMax + yMin) / 2;
            itrCount = 0;
            Zr = 0;
            Zi = 0;

            while (Zr * Zr + Zi * Zi <= 4 && itrCount <= maxIterations) {
                Tr = Zr * Zr - Zi * Zi + Cr;
                Ti = 2 * Zr * Zi + Ci;

                Zr = Tr;
                Zi = Ti;

                itrCount++;
            }

            var c;

            if (itrCount >= maxIterations) {
                c = color(0, 0, 0);
            } else {
                //c = color(255, 255, 255);
                var hueValue = 10 * (1 + itrCount - Math.log(Math.log(Math.sqrt(Zr * Zr + Zi * Zi))) / Math.log(2.0));
                c = color('hsl(' + Math.floor(hueValue)  + ', 100%, 50%)');
            }
            stroke(c);
            point(x, y);
        }
    }
}
