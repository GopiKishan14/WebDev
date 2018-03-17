var myimg = document.getElementById("pic1");
	var x = myimg.src;

function toggle(){
	console.log(x);
	if (x == 'img1.jpg') {
		console.log(1);
		x = 'img2.jpg';
	}
	else{
		console.log(0);
		x = 'img1.jpg';
	}
}