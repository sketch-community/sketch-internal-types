// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRotationBar extends NSControl {
    /* typeEncoding=d, ivar=_currentX, attributes=(assign,nonatomic) */
    	currentX(): number;
    /* typeEncoding=c, ivar=_currentlyTrackingTouch, attributes=(assign,nonatomic) */
    	currentlyTrackingTouch(): boolean;
    /* typeEncoding=@"<MSRotationBarDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=c, ivar=_didSnapRotation, attributes=(assign,nonatomic) */
    	didSnapRotation(): boolean;
    /* typeEncoding=d, ivar=_displayValue, attributes=(assign,nonatomic) */
    	displayValue(): number;
    /* typeEncoding=d, ivar=_inertialSpeed, attributes=(assign,nonatomic) */
    	inertialSpeed(): number;
    /* typeEncoding=@"NSTimer", ivar=_inertialTimer, attributes=(retain,nonatomic) */
    	inertialTimer(): cocoascript.NSTimer;
    /* typeEncoding=d, ivar=_lastTouchTime, attributes=(assign,nonatomic) */
    	lastTouchTime(): number;
    /* typeEncoding=@"NSArray", ivar=_layers, attributes=(retain,nonatomic) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=@"MSAutoSelectingArrayController", ivar=_layersController, attributes=(retain,nonatomic) */
    	layersController(): MSAutoSelectingArrayController;
    /* typeEncoding=c, ivar=_multipleValues, attributes=(assign,nonatomic) */
    	multipleValues(): boolean;
    /* typeEncoding=d, ivar=_previousX, attributes=(assign,nonatomic) */
    	previousX(): number;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_rotationAdaptor, attributes=(retain,nonatomic) */
    	rotationAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=d, ivar=_startX, attributes=(assign,nonatomic) */
    	startX(): number;
    /* typeEncoding=d, ivar=_startingRotation, attributes=(assign,nonatomic) */
    	startingRotation(): number;
    /* typeEncoding=c24@0:8d16 */
    	shouldContinueInertialScrollingAtSpeed(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8^c16 */
    	adaptorValueIsMultipleValuesMarker(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	allowedTouchTypes(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	currentX(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	currentlyTrackingTouch(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didSnapRotation(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	displayValue(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	endInertialScrolling(): void;
    /* typeEncoding=v16@0:8 */
    	failTouchTracking(): void;
    /* typeEncoding=v24@0:8@16 */
    	inertialScrollingTimerDidFire(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	inertialSpeed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inertialTimer(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFlipped(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	lastTouchTime(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layersController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	liveUpdateRotation(): void;
    /* typeEncoding=c16@0:8 */
    	multipleValues(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	panGestureAction(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	previousX(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	resetTouchToX(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rotationAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setCurrentX(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setCurrentlyTrackingTouch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidSnapRotation(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setDisplayValue(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setInertialSpeed(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInertialTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setLastTouchTime(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayersController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setMultipleValues(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setPreviousX(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRotationAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setStartX(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setStartingRotation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setUpGestureRecognizer(): void;
    /* typeEncoding=v24@0:8d16 */
    	startInertialScrollingAtSpeed(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	startTrackingTouch(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	startX(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	startingRotation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	stopTrackingTouch(): void;
    /* typeEncoding=v24@0:8@16 */
    	updateTouchTracking(...args: any[]): any;
  }
}

declare const MSRotationBar: sketchInternal.MSRotationBar;

