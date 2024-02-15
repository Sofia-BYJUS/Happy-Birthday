var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg') , function(Img){
        block_image-object = Img;

        block_image-object.scaleToWidth(700);
        block_image-object.scaleToHeight(510);
        block_image-object.set({
            top:0 , 
            left:0
        });
        canvas.add(block_imag_object);
    }
	
}

function playSound(){
	x.play();
}
