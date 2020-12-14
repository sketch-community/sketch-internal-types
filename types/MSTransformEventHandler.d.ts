// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTransformEventHandler extends MSPointsEventHandler {
    /* typeEncoding=@"MSLayerGroup", ivar=_currentGroup, attributes=(retain,nonatomic) */
    	currentGroup(): MSLayerGroup;
    /* typeEncoding=Q, ivar=_directionLock, attributes=(assign,nonatomic) */
    	directionLock(): number;
    /* typeEncoding={CGPoint=dd}, ivar=_firstSelectedLocation, attributes=(assign,nonatomic) */
    	firstSelectedLocation(): CGPoint;
    /* typeEncoding=@"MSPointArray", ivar=_mouseDownPoints, attributes=(retain,nonatomic) */
    	mouseDownPoints(): MSPointArray;
    /* typeEncoding=@"NSMutableArray", ivar=_originalPoints, attributes=(retain,nonatomic) */
    	originalPoints(): cocoascript.NSMutableArray;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_originalRect, attributes=(assign,nonatomic) */
    	originalRect(): CGRect;
    /* typeEncoding=@"NSMapTable", ivar=_shapeMapping, attributes=(retain,nonatomic) */
    	shapeMapping(): cocoascript.NSMapTable;
    /* typeEncoding=@"DKDistortionTransform", ivar=_transform, attributes=(retain,nonatomic) */
    	transform(): DKDistortionTransform;
    /* typeEncoding=@"MSPointArray", ivar=_transformPoints, attributes=(retain,nonatomic) */
    	transformPoints(): MSPointArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseDragged_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	bounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	coordinateSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentGroup(...args: any[]): any;
    /* typeEncoding=@24@0:8q16 */
    	cursorForCorner(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	directionLock(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	firstSelectedLocation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mouseDownPoints(...args: any[]): any;
    /* typeEncoding=v48@0:8q16{CGPoint=dd}24Q40 */
    	movePointAtIndex_toLocation_modifierFlags(...args: any[]): any;
    /* typeEncoding=v64@0:8q16{CGPoint=dd}24{CGPoint=dd}40Q56 */
    	movePointsRelatedToCorner_newLocation_previous_modifierFlags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalPoints(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	originalRect(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8q16 */
    	pointAtCorner(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	points(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pointsToSnap(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	recordOriginalShapes(): void;
    /* typeEncoding=v40@0:8q16{CGPoint=dd}24 */
    	replacePointAtCorner_withPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resetTransformsForLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setDirectionLock(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setFirstSelectedLocation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMouseDownPoints(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalPoints(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setOriginalRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShapeMapping(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTransformPoints(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shapeMapping(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transform(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	transformLayers(): void;
    /* typeEncoding=@16@0:8 */
    	transformPoints(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	useSnaps(...args: any[]): any;
  }
}

declare const MSTransformEventHandler: sketchInternal.MSTransformEventHandler;

