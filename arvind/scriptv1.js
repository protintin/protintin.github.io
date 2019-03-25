var stage;

function prepare(){
	

  $("img").click(version1);

  stage = new Konva.Stage({
        container: 'leftSide',
        width: 320,
        height: 320
      })
}

function textChanged(e){
	var text = document.getElementById("textMain").value;
	console.log(text);
}


function createModal(){
	
}
	
function version1(e){
	console.log(e.target.height);
  var sourceImage = e.target;
  addImageToStage(sourceImage.currentSrc,100,100,(sourceImage.width)/1.2,(sourceImage.height)/1.2);
}	

function myFunction(e){
	

	stage = [new Konva.Stage({
        container: 'generated_canvas_0',
        width: 320,
        height: 320
      }),new Konva.Stage({
        container: 'generated_canvas_1',
        width: 320,
        height: 320
      }),new Konva.Stage({
        container: 'generated_canvas_2',
        width: 320,
        height: 320
      }), new Konva.Stage({
        container: 'generated_canvas_3',
        width: 320,
        height: 320
      })
      ];

	var imagesSelected_layer1 = $("#layer1 option:selected").attr('data-img-src');
	var imagesSelected_layer2 = $("#layer2 option:selected");
	var imagesSelected_layer3 = $("#layer3 option:selected").attr('data-img-src');
	console.log(imagesSelected_layer1,imagesSelected_layer2,imagesSelected_layer3);

	// generated 1

	addImageToStage(imagesSelected_layer1,0,20,20,300,300);
	addImageToStage(imagesSelected_layer3,0,20,20,100,100);

	// gen 2
	addImageToStage(imagesSelected_layer1,1,0,20,300,300);
	addImageToStage(imagesSelected_layer3,1,0,0,100,100);
	// gen 3
	addImageToStage(imagesSelected_layer1,2,10,10,300,300);
	addImageToStage(imagesSelected_layer3,2,10,10,100,100);

	// gen 4
	addImageToStage(imagesSelected_layer1,3,50,50,300,300);
	addImageToStage(imagesSelected_layer3,3,50,50,100,100);
}

function addImageToStage(src,xPos,yPos, w, h){
	var layer = new Konva.Layer();
    var imageObj = new Image();
    imageObj.onload = function() {

      var yoda = new Konva.Image({
        x: xPos,
        y: yPos,
        width: w,
        height: h,
        image: imageObj,
        draggable: true,
      });

      // add the shape to the layer
      layer.add(yoda);

      // add the layer to the stage
      stage.add(layer);
    };
    imageObj.src = src;
}

