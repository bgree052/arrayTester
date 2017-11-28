   var v = [5,4,0,9,9];

var current = 0;
var j = 0;

function setup(){
  createCanvas(400,400);

  for (var i = 0; i < v.length; i++) {
		current = v[i];
		j = i - 1;
		while (j >= 0) {
			if (v[j] <= current) {
				break;
			}
			v[j + 1] = v[j];
			j = j - 1;
		}
		v[j + 1] = current;
	}

	console.log(v);

}

function draw(){

}
