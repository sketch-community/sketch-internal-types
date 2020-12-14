// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPencilEventHandler extends MSEventHandler {
    /* typeEncoding=@"MSLayerGroup", ivar=_currentGroup, attributes=(retain,nonatomic) */
    	currentGroup(): MSLayerGroup;
    /* typeEncoding=c, ivar=_isDragging, attributes=(assign,nonatomic) */
    	isDragging(): boolean;
    /* typeEncoding={CGPoint=dd}, ivar=_lastMouse, attributes=(assign,nonatomic) */
    	lastMouse(): CGPoint;
    /* typeEncoding=@"MSShapePathLayer", ivar=_shape, attributes=(retain,nonatomic) */
    	shape(): MSShapePathLayer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseDragged_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseMoved_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addCurvePoint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	addPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	adjustStyleForGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentGroup(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	finishShapeOrRemoveIfEmpty(): void;
    /* typeEncoding=@24@0:8@16 */
    	fittedBezierPathFromShapePath(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	insertNewShapeForEditingAtPoint(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDragging(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	lastMouse(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	mouseDownEvent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mouseDraggedOutsideViewShouldMoveScrollOrigin(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	pathShouldClose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeRedundantPoints(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeShape(): void;
    /* typeEncoding=v16@0:8 */
    	selectShape(): void;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentGroup(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsDragging(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setLastMouse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShape(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shape(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	unflattenResult(): void;
  }
}

declare const MSPencilEventHandler: sketchInternal.MSPencilEventHandler;

