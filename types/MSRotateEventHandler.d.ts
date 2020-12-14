// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRotateEventHandler extends MSNormalBaseEventHandler {
    /* typeEncoding=@"_TtC6Sketch34MSRotationCenterPointPlacementTool", ivar=_centerPointTool, attributes=(assign,nonatomic,readonly) */
    	centerPointTool(): _TtC6Sketch34MSRotationCenterPointPlacementTool;
    /* typeEncoding=@"MSRotationGestureInterpreter", ivar=_cursorRotationInterpreter, attributes=(assign,nonatomic,readonly) */
    	cursorRotationInterpreter(): MSRotationGestureInterpreter;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_disableMoving, attributes=(assign,nonatomic) */
    	disableMoving(): boolean;
    /* typeEncoding=@"MSDragToMoveOrCopyGestureRecognizer", ivar=_dragGestureRecognizer, attributes=(assign,nonatomic,readonly) */
    	dragGestureRecognizer(): MSDragToMoveOrCopyGestureRecognizer;
    /* typeEncoding=@"MSRotationGestureInterpreter", ivar=_dragRotationInterpreter, attributes=(assign,nonatomic,readonly) */
    	dragRotationInterpreter(): MSRotationGestureInterpreter;
    /* typeEncoding=Q, ivar=_draggedComponent, attributes=(assign,nonatomic) */
    	draggedComponent(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=@"MSNormalEventHandler", ivar=_normalEventHandler, attributes=(retain,nonatomic) */
    	normalEventHandler(): MSNormalEventHandler;
    /* typeEncoding={CGPoint=dd}, ivar=_rotationCenterPoint, attributes=(assign,nonatomic) */
    	rotationCenterPoint(): CGPoint;
    /* typeEncoding=@"NSArray", ivar=_rotationItems, attributes=(assign,nonatomic,readonly) */
    	rotationItems(): cocoascript.NSArray;
    /* typeEncoding=@"_TtC17SketchControllers14MSOverlayLabel", ivar=_rotationLabel, attributes=(assign,nonatomic,readonly) */
    	rotationLabel(): _TtC17SketchControllers14MSOverlayLabel;
    /* typeEncoding=c, ivar=_shouldExitOnMouseUp, attributes=(assign,nonatomic) */
    	shouldExitOnMouseUp(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8q16 */
    	cursorForDegrees(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	alignDegreesTo15Angles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	centerPointTool(...args: any[]): any;
    /* typeEncoding=Q32@0:8{CGPoint=dd}16 */
    	componentAtPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cursorRotationInterpreter(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	disableMoving(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentForRotationBar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dragCenterPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dragLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragRotationInterpreter(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	draggedComponent(...args: any[]): any;
    /* typeEncoding=@24@0:8q16 */
    	formatAngle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleDrag(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleRotation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeTouchBar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	normalEventHandler(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshTouchBarItemWithIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resetWithSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rotationBarAction(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	rotationCenterPoint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
    	rotationCenterPointForAnchorPoint_layer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rotationItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rotationLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDisableMoving(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setDraggedComponent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNormalEventHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setRotationCenterPoint(...args: any[]): any;
    /* typeEncoding=v36@0:8{CGPoint=dd}16c32 */
    	setRotationCenterPoint_updateAnchorPoints(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldExitOnMouseUp(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldExitOnMouseUp(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	touchBar_makeItemForIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateAnchorPoint(): void;
    /* typeEncoding=v24@0:8q16 */
    	updateMeasurementLabelWithAngle(...args: any[]): any;
  }
}

declare const MSRotateEventHandler: sketchInternal.MSRotateEventHandler;

