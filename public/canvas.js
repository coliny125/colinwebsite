
function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  // Draw triangle
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-100, -120);
  ctx.lineTo(0, -120);
  ctx.lineTo(-45, 0);
  ctx.lineTo(-100, -120);
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-10, -110);
  ctx.lineTo(60, 50);
  ctx.lineTo(-90, 50);
  ctx.lineTo(-10, -110);
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.moveTo(-45, -210);
  ctx.lineTo(-45, 100);
  ctx.stroke();
  //ctx.beginPath();
  //ctx.moveTo(-190, -120);
  //ctx.stroke();

  ctx.beginPath();
  ctx.arc(-100, -120, 50, 0, Math.PI * 2, false);
  ctx.stroke();

//  ctx.lineWidth = 10;
  //ctx.beginPath();
//  ctx.moveTo(-100, -180);
  //ctx.lineTo(140, 120);
  //ctx.stroke();

  //ctx.fillRect(-160, 10, 100, 100);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 1)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

  ctx.save();
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
