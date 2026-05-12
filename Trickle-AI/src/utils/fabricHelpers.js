window.fabricHelpers = {
  setupInfiniteCanvas: (canvas) => {
    // Zoom via mouse wheel
    canvas.on('mouse:wheel', function(opt) {
      var delta = opt.e.deltaY;
      var zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 8) zoom = 8;
      if (zoom < 0.1) zoom = 0.1;
      canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    // Pan via Middle Mouse or Alt + Left Click
    canvas.on('mouse:down', function(opt) {
      var evt = opt.e;
      if (evt.button === 1 || (evt.altKey && evt.button === 0)) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    });

    canvas.on('mouse:move', function(opt) {
      if (this.isDragging) {
        var e = opt.e;
        var vpt = this.viewportTransform;
        vpt[4] += e.clientX - this.lastPosX;
        vpt[5] += e.clientY - this.lastPosY;
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    });

    canvas.on('mouse:up', function(opt) {
      this.isDragging = false;
      this.selection = true;
    });

    // Optimize rendering with viewport culling
    canvas.on('before:render', function() {
      // Basic culling logic could go here, but Fabric 5+ handles object caching decently well.
      // We can manually set visible = false for objects completely outside bounds if needed for massive maps.
    });
  },

  createSectionZone: (canvas, x, y, width, height, labelText, color = '#38bdf8') => {
    const rect = new fabric.Rect({
      left: x,
      top: y,
      width: width,
      height: height,
      fill: 'transparent',
      stroke: color,
      strokeWidth: 4,
      strokeDashArray: [10, 5],
      selectable: false,
      evented: false,
      rx: 16,
      ry: 16
    });

    const text = new fabric.Text(labelText, {
      left: x + 20,
      top: y + 20,
      fontSize: 24,
      fontFamily: 'Outfit',
      fontWeight: 'bold',
      fill: color,
      selectable: false,
      evented: false
    });

    const group = new fabric.Group([rect, text], {
      selectable: true,
      hasControls: true,
      id: 'section_' + Date.now(),
      type: 'section_zone'
    });

    canvas.add(group);
    canvas.sendToBack(group);
    canvas.requestRenderAll();

    return group;
  }
};