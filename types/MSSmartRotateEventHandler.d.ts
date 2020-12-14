// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSmartRotateEventHandler extends MSEventHandler {
    /* typeEncoding=@"_TtC17SketchControllers26MSModelObjectChangeTracker", ivar=_changeTracker, attributes=(retain,nonatomic) */
    	changeTracker(): _TtC17SketchControllers26MSModelObjectChangeTracker;
    /* typeEncoding=@"MSSmartRotateImageCache", ivar=_imageCache, attributes=(retain,nonatomic) */
    	imageCache(): MSSmartRotateImageCache;
    /* typeEncoding=Q, ivar=_numberOfRepetitions, attributes=(assign,nonatomic) */
    	numberOfRepetitions(): number;
    /* typeEncoding=@"MSLayerArray", ivar=_shapeLayers, attributes=(copy,nonatomic) */
    	shapeLayers(): MSLayerArray;
    /* typeEncoding=@"NSArray", ivar=_shapeLayersCopies, attributes=(copy,nonatomic) */
    	shapeLayersCopies(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseDragged_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	adjustBooleanOperationForShapeCopyIfNecessary(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24Q32 */
    	adjustFrameForShapeCopy_shape_index(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustGroup(): void;
    /* typeEncoding=v40@0:8@16Q24d32 */
    	adjustRotationForShapeCopy_atIndex_baseRotation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	changeTracker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	clearEditingFlagForLayerArray(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	createChangeTracker(): void;
    /* typeEncoding=v16@0:8 */
    	createShapeCopies(): void;
    /* typeEncoding=@16@0:8 */
    	currentGroup(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	determineOriginalRotationCenter(): void;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	findShapes(): void;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@16@0:8 */
    	imageCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	numberOfRepetitions(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	returnToDefaultHandler(): void;
    /* typeEncoding=v16@0:8 */
    	rotateCopies(): void;
    /* typeEncoding=v32@0:8@16Q24 */
    	rotateCopiesForShape_shapeIndex(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24Q32 */
    	rotateCopy_ofShape_toIndex(...args: any[]): any;
    /* typeEncoding=d24@0:8Q16 */
    	rotationForRepetitionAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChangeTracker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageCache(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setNumberOfRepetitions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShapeLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShapeLayersCopies(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shapeLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shapeLayersCopies(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	transformForRotatingShape_toIndex(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	tryToSnapPoint_toMid(...args: any[]): any;
  }
}

declare const MSSmartRotateEventHandler: sketchInternal.MSSmartRotateEventHandler;

