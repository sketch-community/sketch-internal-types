// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGradientEventHandler extends MSPointsEventHandler {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"<MSGradientEventHandlerDelegate>", ivar=_gradientDelegate, attributes=(assign,nonatomic,weak) */
    	gradientDelegate(): any;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	gradientType(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSOverlayItemImageCache", ivar=_imageCache, attributes=(retain,nonatomic) */
    	imageCache(): MSOverlayItemImageCache;
    /* typeEncoding=@"NSCursor", ivar=_insertPointCursor, attributes=(retain,nonatomic) */
    	insertPointCursor(): cocoascript.NSCursor;
    /* typeEncoding=@"NSCursor", ivar=_selectPointCursor, attributes=(retain,nonatomic) */
    	selectPointCursor(): cocoascript.NSCursor;
    /* typeEncoding=@"MSStyleBasicFill", ivar=_stylePart, attributes=(retain,nonatomic) */
    	stylePart(): MSStyleBasicFill;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static gradientHandlerForStylePart_manager(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseDragged_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseMoved_flags(...args: any[]): any;
    /* typeEncoding=q32@0:8{CGPoint=dd}16 */
    	addStopAtPosition(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canDuplicate(...args: any[]): any;
    /* typeEncoding=c32@0:8{CGPoint=dd}16 */
    	canInsertPointAtMouse(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	centerStopBetween(): void;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForItemAtIndexPath_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForSupplementaryElementOfKind_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@40@0:8@16^{CGColorSpace=}24d32 */
    	collectionOverlay_overlayItemImagesForColorSpace_backingScale(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorMagnifierAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@?16 */
    	cursorWithDrawingBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradient(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradientDelegate(...args: any[]): any;
    /* typeEncoding=v48@0:8@16Q24{CGPoint=dd}32 */
    	gradientPointArray_didReplacePointAtIndex_withPoint(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	gradientType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=c16@0:8 */
    	hasSelectedPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageCache(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertBacktab(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertPointCursor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertTab(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nextStop(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	points(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previousStop(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadFollowingBackgroundChangesToDocument(): void;
    /* typeEncoding=v16@0:8 */
    	repairGradientIfNecessary(): void;
    /* typeEncoding=v40@0:8q16{CGPoint=dd}24 */
    	replacePointAtIndex_withPoint(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	returnToDefaultHandlerByClickingOutside(): void;
    /* typeEncoding=@16@0:8 */
    	selectPointCursor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedStop(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGradientDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageCache(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setIndexForSelectedPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInsertPointCursor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectPointCursor(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setSelectedStopToPercentage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStylePart(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDisplayMessageForSelectedStop(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stylePart(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateImageCache(): void;
    /* typeEncoding=c16@0:8 */
    	useSnaps(...args: any[]): any;
  }
}

declare const MSGradientEventHandler: sketchInternal.MSGradientEventHandler;

