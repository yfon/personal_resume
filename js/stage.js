 <!-- step2、创建舞台-->
 var stage = new Konva.Stage({ container: 'container', width: window.innerWidth, height: window.innerHeight });
 <!-- 创建一个层 -->
 var layer = new Konva.Layer();
 <!-- 将层加在舞台上 -->
 stage.add(layer);
 //中心点坐标
 var cenX = stage.width() / 4; //注意Konva获取数据都是用方法获取值
 var cenY = stage.height() / 2;
 var innerRadius = 81;
 var outerRadius = 110;
 var innerDash = 153;
 var outerDash = 243;
 //基本组
 var group = new Konva.Group(

 );
 layer.add(group);
 <!-- 创建东西 -->
 // 创建内层圆
 var innerCircle = new Konva.Circle({
  x: cenX,
  y: cenY,
  radius: innerRadius,
  fill: '#525A82',
 });
 group.add(innerCircle);
 // 创建内层文字
 var innerText = new Konva.Text({
  x: cenX - innerRadius,
  y: cenY - 8,
  width: 162,
  text: '基础技能',
  align: 'center',
  fontSize: 16,
  fontFamily: '微软雅黑',
  fontStyle: 'bold',
  fill: '#fff',
 });
 group.add(innerText);
 // 创建内层环
 var innerRing = new Konva.Ring({
  x: cenX,
  y: cenY,
  innerRadius: innerRadius,
  outerRadius: outerRadius,
  fill: '#c0c0c0',
  opacity: .1,

 });
 group.add(innerRing);
 //创建虚线内层环
 var innerDashCircle = new Konva.Circle({
  x: cenX,
  y: cenY,
  radius: innerDash,
  dash: [10, 4],
  stroke: '#ccc',

 });
 group.add(innerDashCircle);
 //创建虚线外层环
 var outerDashCircle = new Konva.Circle({
  x: cenX,
  y: cenY,
  radius: outerDash,
  dash: [10, 4],
  stroke: '#ccc',
  opacity: .5,

 });
 group.add(outerDashCircle);
 <!-- 将东西加在层上面 -->

 //动画组1
 var animateGroup1 = new Konva.Group({
  x: cenX,
  y: cenY,
 });

 layer.add(animateGroup1);
 //动画组2
 var animateGroup2 = new Konva.Group({
  x: cenX,
  y: cenY,
 });
 layer.add(animateGroup2);
 //创建动画组元素
 var x0 = innerDash * Math.cos(-60 * Math.PI / 180);
 var y0 = innerDash * Math.sin(-60 * Math.PI / 180);

 var circleTextHtml5 = new CircleText({
  x: x0,
  y: y0,
  innerRadius: 30,
  outerRadius: 40,
  innerStyle: '#E1F612',
  outerStyle: '#E0E0E0',
  text: 'JQuery',
  opacity: .1,
  fontSize: 12,
  fill: '#fff',

 });
 circleTextHtml5.addGroup(animateGroup1);

 var x1 = innerDash * Math.cos(30 * Math.PI / 180);
 var y1 = innerDash * Math.sin(30 * Math.PI / 180);

 var circleTextCss3 = new CircleText({
  x: x1,
  y: y1,
  innerRadius: 30,
  outerRadius: 40,
  innerStyle: '#32FCD9',
  outerStyle: '#E0E0E0',
  text: 'Css3',
  opacity: .1,
  fontSize: 12,
  fill: '#fff',

 });
 circleTextCss3.addGroup(animateGroup1);

 var x2 = innerDash * Math.cos(180 * Math.PI / 180);
 var y2 = innerDash * Math.sin(180 * Math.PI / 180);

 var circleTextJquery = new CircleText({
  x: x2,
  y: y2,
  innerRadius: 30,
  outerRadius: 40,
  innerStyle: '#F98181',
  outerStyle: '#E0E0E0',
  text: 'HTML5',
  opacity: .1,
  fontSize: 12,
  fill: '#fff',

 });
 circleTextJquery.addGroup(animateGroup1);

 var x4 = outerDash * Math.cos(270 * Math.PI / 180);
 var y4 = outerDash * Math.sin(270 * Math.PI / 180);

 var circleTextKonva = new CircleText({
  x: x4,
  y: y4,
  innerRadius: 40,
  outerRadius: 50,
  innerStyle: '#DE9CF4',
  outerStyle: '#E0E0E0',
  text: 'Angular',
  opacity: .1,
  fontSize: 16,
  fill: '#fff',

 });
 circleTextKonva.addGroup(animateGroup2);

 var x4 = outerDash * Math.cos(180 * Math.PI / 180);
 var y4 = outerDash * Math.sin(180 * Math.PI / 180);

 var circleTextJs = new CircleText({
  x: x4,
  y: y4,
  innerRadius: 40,
  outerRadius: 50,
  innerStyle: '#39FF6D',
  outerStyle: '#E0E0E0',
  text: 'JS',
  opacity: .1,
  fontSize: 16,
  fill: '#fff',

 });
 circleTextJs.addGroup(animateGroup2);

 var x5 = outerDash * Math.cos(90 * Math.PI / 180);
 var y5 = outerDash * Math.sin(90 * Math.PI / 180);

 var circleTextPS = new CircleText({
  x: x5,
  y: y5,
  innerRadius: 40,
  outerRadius: 50,
  innerStyle: '#62C9FC',
  outerStyle: '#E0E0E0',
  text: 'PS',
  opacity: .1,
  fontSize: 16,
  fill: '#fff',

 });
 circleTextPS.addGroup(animateGroup2);

 var x6 = outerDash * Math.cos(0 * Math.PI / 180);
 var y6 = outerDash * Math.sin(0 * Math.PI / 180);

 var circleTextboostrap = new CircleText({
  x: x6,
  y: y6,
  innerRadius: 40,
  outerRadius: 50,
  innerStyle: '#0EEB5A',
  outerStyle: '#E0E0E0',
  text: 'boostrap',
  opacity: .1,
  fontSize: 16,
  fill: '#fff',

 });
 circleTextboostrap.addGroup(animateGroup2);
 // 动画
 var eachSecondAngle = 60;
 var anim = new Konva.Animation(function(frame) {
  var rotateAngle = eachSecondAngle * frame.timeDiff / 100000;
  animateGroup1.rotate(rotateAngle);
  animateGroup1.getChildren().each(function(index, el) {
   index.rotate(-rotateAngle);
  });
  animateGroup2.rotate(-rotateAngle);
  animateGroup2.getChildren().each(function(index, el) {
   index.rotate(rotateAngle);
  });


 }, layer);

 anim.start();
 layer.on('mouseover', function() {
  eachSecondAngle = 10;
 });
 layer.on('mouseout', function() {
  eachSecondAngle = 60;
 });
 <!-- 将层渲染在舞台上 -->
 layer.draw();