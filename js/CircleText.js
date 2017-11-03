// 封装圆形文字

function CircleText(option) {
    this._init(option);
}

CircleText.prototype = {
    _init: function(option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;
        this.innerStyle = option.innerStyle || 'red';
        this.outerStyle = option.outerStyle || 'yellow';
        this.opacity = option.opacity || .5;
        this.text = option.text || '';
        this.align = option.align || 'center';
        this.fontSize = option.fontSize || '16';
        this.fontFamily = option.fontFamily || '微软雅黑';
        this.fontStyle = option.fontStyle || 'bold';
        this.fill = option.fill;
        this.group = new Konva.Group({
            x: this.x,
            y: this.y,
        });
        var innerCircle = new Konva.Circle({
            x: 0,
            y: 0,
            radius: this.innerRadius,
            fill: this.innerStyle,

        });
        this.group.add(innerCircle);
        var innerRing = new Konva.Ring({
            x: 0,
            y: 0,
            innerRadius: this.innerRadius,
            outerRadius: this.outerRadius,
            fill: this.outerStyle,
            opacity: this.opacity,


        });
        this.group.add(innerRing);
        // 创建内层文字
        var innerText = new Konva.Text({
            x: 0 - this.innerRadius,
            y: 0 - this.fontSize / 2,
            text: this.text,
            align: this.align,
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontStyle: this.fontStyle,
            width: this.innerRadius * 2,
            fill: this.fill,
        });
        this.group.add(innerText);

    },
    addGroup: function(animateGroup) {
        /*var innerCircle = this.group.findOne('#innerCircle');
        var innerText = this.group.findOne('#innerText');
        var innerRing = this.group.findOne('#innerRing');
        animateGroup1.add(innerCircle);
        animateGroup1.add(innerText);
        animateGroup1.add(innerRing);*/
        animateGroup.add(this.group);
    }
};