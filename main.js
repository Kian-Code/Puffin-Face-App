function preload() {
    img = loadImage('https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg');
  }
  
  function setup() {
    Canvas = createCanvas(1000, 1000);
    Canvas.position(150, 150);
    Video = createCapture(VIDEO);
    Video.hide();
  }
  
  function draw() {
    image(Video,180,400, 640, 480);
   image(img , 400, 400, 300, 300);
  } 
  
  function Take_Snapshot()
  {
      save('Your Puffin Face.png');
  }