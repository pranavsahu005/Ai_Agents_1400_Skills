function DrawingTool({ canvas, isActive }) {
  React.useEffect(() => {
    if (!canvas) return;

    if (isActive) {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.color = 'white'; // Default or based on theme
      canvas.freeDrawingBrush.width = 3;
    } else {
      canvas.isDrawingMode = false;
    }
  }, [canvas, isActive]);

  return null; // This is a logic-only component that mounts/unmounts
}

window.DrawingTool = DrawingTool;