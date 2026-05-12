const { useEffect, useRef } = React;

function TrickleCanvas({ boardId, mode, onNodeSelect }) {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);

  useEffect(() => {
    // Initialize Fabric
    const initCanvas = async () => {
      if (fabricRef.current) return;

      const canvas = new fabric.Canvas(canvasRef.current, {
        width: window.innerWidth,
        height: window.innerHeight,
        selection: true,
        preserveObjectStacking: true
      });
      fabricRef.current = canvas;

      // Apply infinite canvas behaviors
      window.fabricHelpers.setupInfiniteCanvas(canvas);

      // Load State
      if (boardId) {
        const state = await window.storageHelpers.getCanvasState(boardId);
        if (state && state.fabricData && state.fabricData.objects.length > 0) {
          canvas.loadFromJSON(state.fabricData, canvas.renderAll.bind(canvas));
        }
      }

      // Handle Selection for Node Panel
      canvas.on('selection:created', (e) => {
        if (e.selected && e.selected.length === 1) {
          onNodeSelect(e.selected[0]);
        } else {
          onNodeSelect(null);
        }
      });

      canvas.on('selection:cleared', () => {
        onNodeSelect(null);
      });

      // Handle Double Click (Fabric doesn't have native dblclick, so we simulate)
      let lastClickTime = 0;
      canvas.on('mouse:down', (e) => {
        const t = new Date().getTime();
        if (t - lastClickTime < 300) {
           // Double click logic
           if (e.target) {
             onNodeSelect(e.target);
             // Trigger panel open implicitly via state
           }
        }
        lastClickTime = t;
      });

      // Handle Resize
      const resizeObserver = new ResizeObserver(() => {
        canvas.setWidth(window.innerWidth);
        canvas.setHeight(window.innerHeight);
        canvas.renderAll();
      });
      resizeObserver.observe(document.body);

      // Debounced Save
      let saveTimeout;
      const triggerSave = () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(async () => {
          const json = canvas.toJSON(['id']);
          const currentState = await window.storageHelpers.getCanvasState(boardId) || {};
          currentState.fabricData = json;
          await window.storageHelpers.saveCanvasState(currentState);
        }, 500);
      };

      canvas.on('object:modified', triggerSave);
      canvas.on('object:added', triggerSave);
      canvas.on('object:removed', triggerSave);
    };

    initCanvas();

    return () => {
      if (fabricRef.current) {
        fabricRef.current.dispose();
        fabricRef.current = null;
      }
    };
  }, [boardId, onNodeSelect]);

  // Handle Mode changes (e.g. background grid changes)
  useEffect(() => {
    // Mode specific logic on canvas if any
  }, [mode]);

  return (
    <div className="w-full h-full canvas-container-wrapper" style={{ touchAction: 'none' }}>
      <canvas ref={canvasRef} id="fabric-canvas" />
    </div>
  );
}

window.TrickleCanvas = TrickleCanvas;