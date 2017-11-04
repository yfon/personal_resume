(function() {
 //创建舞台
 var stage = new Konva.Stage({
  container: 'container',
  width: 300,
  height: 305
 });

 //创建层
 var layer = new Konva.Layer();
 stage.add(layer);



 //柱状图的数据
 var data = [
  { name: 'js', value: '.8', color: 'green' },
  { name: 'jquery', value: '.7', color: 'blue' },
  { name: 'AngularJS', value: '.6', color: 'red' },
  { name: 'css3', value: '.7', color: 'orange' },
  { name: 'HTML5', value: '.7', color: 'purple' },
  { name: 'Bootstrap', value: '.6', color: '#F620C0' },
  { name: 'ps', value: '.6', color: '#59FC19' }
 ];


 var h = new HistogramChart({
  x: 1 / 8 * stage.width(),
  y: 3 / 4 * stage.height(),
  w: 3 / 4 * stage.width(),
  h: 1 / 2 * stage.height(),
  data: data
 });

 h.addToGroupOrLayer(layer);

 layer.draw();

 stage.on('contentClick', function() {
  h.playAnimate();
 });
})();