// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmapEditEventHandler extends MSEventHandler {
    /* typeEncoding=@"NSBezierPath", ivar=_accumulatedSelection, attributes=(retain,nonatomic) */
    	accumulatedSelection(): cocoascript.NSBezierPath;
    /* typeEncoding=@"NSBitmapImageRep", ivar=_backupImageRep, attributes=(retain,nonatomic) */
    	backupImageRep(): cocoascript.NSBitmapImageRep;
    /* typeEncoding=@"NSBitmapImageRep", ivar=_cachedFirstBitmapImageRep, attributes=(retain,nonatomic) */
    	cachedFirstBitmapImageRep(): cocoascript.NSBitmapImageRep;
    /* typeEncoding=q, ivar=_currentMode, attributes=(assign,nonatomic) */
    	currentMode(): number;
    /* typeEncoding=@"MSOverlayItemImageCache", ivar=_imageCache, attributes=(retain,nonatomic) */
    	imageCache(): MSOverlayItemImageCache;
    /* typeEncoding=@"MSBitmapEditInspectorViewController", ivar=_inspectorViewController, attributes=(assign,nonatomic,readonly) */
    	inspectorViewController(): MSBitmapEditInspectorViewController;
    /* typeEncoding=@"NSNumberFormatter", ivar=_lengthFormatter, attributes=(assign,nonatomic,readonly) */
    	lengthFormatter(): cocoascript.NSNumberFormatter;
    /* typeEncoding=@"MSBitmapMagicWandEditor", ivar=_magicWandEditor, attributes=(retain,nonatomic) */
    	magicWandEditor(): MSBitmapMagicWandEditor;
    /* typeEncoding=@"_TtC17SketchControllers14MSOverlayLabel", ivar=_measurementLabel, attributes=(assign,nonatomic,readonly) */
    	measurementLabel(): _TtC17SketchControllers14MSOverlayLabel;
    /* typeEncoding=@"MSBitmapRectangleEditor", ivar=_rectangleEditor, attributes=(retain,nonatomic) */
    	rectangleEditor(): MSBitmapRectangleEditor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseDragged_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	accumulatedSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	backupImageRep(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bitmapEditableLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bitmapLayerFromSelectedArea(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedFirstBitmapImageRep(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canDuplicate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearAreaUnderSelection(): void;
    /* typeEncoding=v24@0:8@16 */
    	configureInspector(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	coordinateTransformMatrix(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	copy(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cropAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cropLayerFrame(): void;
    /* typeEncoding=@16@0:8 */
    	crossHairCursor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	crossHairCursorAdd(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	crossHairCursorRemove(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	currentMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cut(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	displayRectForSelectionRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	duplicate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	fillSelectionWithColor(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	fillSelectionWithColor_blending(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	imageBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageFromSelectedArea(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	imageSize(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	inspectorLocation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorViewController(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	inspectorViewControllersForLayers_standardControllers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	invertAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	layerRectFromSelectionRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lengthFormatter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	magicWandCursor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	magicWandCursorAdd(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	magicWandCursorRemove(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	magicWandEditor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	makeNewBackupImage(): void;
    /* typeEncoding=@16@0:8 */
    	measurementLabel(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mouseDraggedOutsideViewShouldMoveScrollOrigin(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	paste(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	rectFromBitmapToBoundsCoordinates(...args: any[]): any;
    /* typeEncoding=c56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	rectIsCropOfImage_fromImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rectangleEditor(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	selectLayerBelowPoint(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	selectedRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionBezierForFlippingCoordinates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidLiveUpdateTo(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	selectionRectInLayerCoordinates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAccumulatedSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackupImageRep(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedFirstBitmapImageRep(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setCurrentMode(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setImage_forBitmapLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMagicWandEditor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRectangleEditor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	updateMeasurementLabelWithPosition(...args: any[]): any;
  }
}

declare const MSBitmapEditEventHandler: sketchInternal.MSBitmapEditEventHandler;

