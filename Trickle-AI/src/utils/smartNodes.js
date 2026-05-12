window.smartNodes = {
  createConnector: (canvas, fromNode, toNode) => {
    // Simple straight line connector for now
    var line = new fabric.Line([
      fromNode.left + fromNode.width / 2,
      fromNode.top + fromNode.height / 2,
      toNode.left + toNode.width / 2,
      toNode.top + toNode.height / 2
    ], {
      fill: 'red',
      stroke: 'red',
      strokeWidth: 2,
      selectable: false,
      evented: false
    });

    canvas.add(line);
    canvas.sendToBack(line);

    // Keep line attached when nodes move
    const updateLine = () => {
      line.set({
        x1: fromNode.left + (fromNode.width * fromNode.scaleX) / 2,
        y1: fromNode.top + (fromNode.height * fromNode.scaleY) / 2,
        x2: toNode.left + (toNode.width * toNode.scaleX) / 2,
        y2: toNode.top + (toNode.height * toNode.scaleY) / 2
      });
      canvas.requestRenderAll();
    };

    fromNode.on('moving', updateLine);
    fromNode.on('scaling', updateLine);
    toNode.on('moving', updateLine);
    toNode.on('scaling', updateLine);

    return line;
  },

  makeNodeSmart: (fabricObj, defaultMetadata = {}) => {
    if (!fabricObj.id) {
      fabricObj.id = 'node_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Add custom connection points logic here later
    // Add hover effects for connection nodes

    return fabricObj;
  }
};