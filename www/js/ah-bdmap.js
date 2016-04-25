    function MessageOverlay(center, backgroundColor, logo, price) {
        this._center = center;
        this._color = backgroundColor;
        this._image = logo;
        this._price = price;
    }
    // 继承API的BMap.Overlay      
    MessageOverlay.prototype = new BMap.Overlay();

    MessageOverlay.prototype.initialize = function(map) {
        // 保存map对象实例     
        this._map = map;
        // 创建div元素，作为自定义覆盖物的容器     
        var div = document.createElement("div");
        div.style.position = "absolute";
        // div.style.height = '100px';
        // div.style.width = '100px';
        // div.style.background = 'blue';
        // 将div添加到覆盖物容器中     
        map.getPanes().markerPane.appendChild(div);
        // 保存div实例     

        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // svg.setAttribute('style', 'background: red')
        svg.setAttribute('width', '90');
        svg.setAttribute('height', '45');
        var messageBox = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        messageBox.setAttribute('d', 'M 0 5 A 5 5 0 0 1 5 0 l 80 0 a 5 5 0 0 1 5 5 l 0 25 a 5 5 0 0 1 -5 5 l -60 0 l -5 10 l -5 -10 l -10 0 a 5 5 0 0 1 -5 -5 Z');
        messageBox.setAttribute('fill', this._color);
        svg.appendChild(messageBox);

        var image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        image.setAttribute('width', '25');
        image.setAttribute('height', '25');
        image.setAttribute('x', '5');
        image.setAttribute('y', '5');
        image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'img/markers.png');
        svg.appendChild(image);

        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '40');
        text.setAttribute('y', '22');
        text.setAttribute('fill', '#ffffff');
        text.innerHTML = '¥' + ' ' + this._price;
        svg.appendChild(text);

        div.appendChild(svg);
        this._div = div;
        // 需要将div元素作为方法的返回值，当调用该覆盖物的show、     
        // hide方法，或者对覆盖物进行移除时，API都将操作此元素。     

        return div;
    }

    MessageOverlay.prototype.draw = function() {
        // 根据地理坐标转换为像素坐标，并设置给容器      
        var position = this._map.pointToOverlayPixel(this._center);
        this._div.style.left = position.x - 23 + "px"; // adjust mark center
        this._div.style.top = position.y - 93 + "px";
    }

    // 实现显示方法      
    MessageOverlay.prototype.show = function() {
            if (this._div) {
                this._div.style.display = "";
            }
        }
    // 实现隐藏方法    
    MessageOverlay.prototype.hide = function() {
        if (this._div) {
            this._div.style.display = "none";
        }
    }