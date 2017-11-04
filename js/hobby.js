(function() {
 var canvas = document.getElementById('demo');
 canvas.width = 300;
 canvas.height = 300;
 var ctx = canvas.getContext('2d');

 var data = [{
  "value": .2,
  "color": "red",
  "title": "认真"
 }, {
  "value": .3,
  "color": "blue",
  "title": "女汉子"
 }, {
  "value": .4,
  "color": "green",
  "title": "说服力强"
 }, {
  "value": .1,
  "color": "#D515C4",
  "title": "容易感动"
 }];
 var beginAngle = 0; //起始角度
 var xb = 150;
 var yb = 200;
 var radius = 50;

 for (var i = 0; i < data.length; i++) {
  ctx.beginPath();
  ctx.moveTo(xb, yb); //必须写
  var angle = data[i].value * 360; //绘制的角度
  var beginP = beginAngle * Math.PI / 180; //起始弧度值
  var endP = (angle + beginAngle) * Math.PI / 180; //结束的弧度值(angle + beginAngle)为结束的角度值
  ctx.arc(xb, yb, radius, beginP, endP);
  ctx.fillStyle = data[i].color;
  ctx.fill();
  //文字绘制的角度
  textAngle = beginAngle + angle / 2;
  xt = xb + Math.cos(textAngle * Math.PI / 180) * (radius + 20);
  yt = yb + Math.sin(textAngle * Math.PI / 180) * (radius + 20);
  txt = data[i].title;
  if (textAngle > 90 && textAngle < 270) {
   ctx.textAlign = "end";
  } else {
   ctx.textAlign = "start";
  }
  ctx.fillText(txt, xt, yt);
  beginAngle += angle;


 }


})();