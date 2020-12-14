// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCanvasView extends NSView {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSCanvasViewDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_didMouseDown, attributes=(assign,nonatomic) */
    	didMouseDown(): boolean;
    /* typeEncoding=c, ivar=_didMouseDragged, attributes=(assign,nonatomic) */
    	didMouseDragged(): boolean;
    /* typeEncoding=^{__CVDisplayLink=}, ivar=_displayLink, attributes=(assign,nonatomic) */
    	displayLink(): any;
    /* typeEncoding=^{__CFRunLoopObserver=}, ivar=_displayRunLoopObserver, attributes=(assign,nonatomic,readonly) */
    	displayRunLoopObserver(): any;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=@"MSRenderingDriver", ivar=_driver, attributes=(assign,nonatomic,readonly) */
    	driver(): MSRenderingDriver;
    /* typeEncoding=@"MSEventHandlerManager", ivar=_eventHandlerManager, attributes=(retain,nonatomic) */
    	eventHandlerManager(): MSEventHandlerManager;
    /* typeEncoding=@"_TtC6Sketch18MSGuideOverlayTool", ivar=_guideOverlayTool, attributes=(assign,nonatomic,readonly) */
    	guideOverlayTool(): _TtC6Sketch18MSGuideOverlayTool;
    /* typeEncoding=Q, ivar=_handToolState, attributes=(assign,nonatomic) */
    	handToolState(): number;
    /* typeEncoding=c, ivar=_hasUserFocus, attributes=(assign) */
    	hasUserFocus(): boolean;
    /* typeEncoding=c, ivar=_hasWindow, attributes=(assign,nonatomic) */
    	hasWindow(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_haveStoredMostRecentFullScaleScrollOrigin, attributes=(assign,nonatomic) */
    	haveStoredMostRecentFullScaleScrollOrigin(): boolean;
    /* typeEncoding=@"_TtC6Sketch11MSRulerView", ivar=_horizontalRuler, attributes=(assign,nonatomic,weak) */
    	horizontalRuler(): _TtC6Sketch11MSRulerView;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isReadyToRender(): boolean;
    /* typeEncoding=c, ivar=_magnifying, attributes=(assign,nonatomic,getter=isMagnifying) */
    	magnifying(): boolean;
    /* typeEncoding={CGPoint=dd}, ivar=_mostRecentFullScaleScrollOrigin, attributes=(assign,nonatomic) */
    	mostRecentFullScaleScrollOrigin(): CGPoint;
    /* typeEncoding=@"MSMouseTracker", ivar=_mouseTracker, attributes=(assign,nonatomic,readonly) */
    	mouseTracker(): MSMouseTracker;
    /* typeEncoding=c, ivar=_needsUpdateCursor, attributes=(assign,nonatomic,readonly) */
    	needsUpdateCursor(): boolean;
    /* typeEncoding=@"MSOverlaySettings", ivar=_overlaySettings, attributes=(copy,nonatomic) */
    	overlaySettings(): MSOverlaySettings;
    /* typeEncoding=@"MSRenderInstruction", ivar=_renderInstruction, attributes=(copy) */
    	renderInstruction(): MSRenderInstruction;
    /* typeEncoding={_opaque_pthread_mutex_t=q[56c]}, ivar=_renderLock, attributes=(assign,nonatomic,readonly) */
    	renderLock(): _opaque_pthread_mutex_t;
    /* typeEncoding=Q, ivar=_renderMask, attributes=(assign,nonatomic) */
    	renderMask(): number;
    /* typeEncoding={CGPoint=dd}, ivar=_scalingCenterInViewCoordinates, attributes=(assign,nonatomic) */
    	scalingCenterInViewCoordinates(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	scrollOrigin(): CGPoint;
    /* typeEncoding=@"_TtC6Sketch18MSScrollRecognizer", ivar=_scrollRecognizer, attributes=(assign,nonatomic,readonly) */
    	scrollRecognizer(): _TtC6Sketch18MSScrollRecognizer;
    /* typeEncoding=c, ivar=_shouldDrawPixelated, attributes=(assign,nonatomic) */
    	shouldDrawPixelated(): boolean;
    /* typeEncoding=c, ivar=_shouldOptimisePerformance, attributes=(assign,nonatomic) */
    	shouldOptimisePerformance(): boolean;
    /* typeEncoding=c, ivar=_shouldRedrawNextEqualRenderingInstruction, attributes=(assign) */
    	shouldRedrawNextEqualRenderingInstruction(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=d, ivar=_temporaryHorizontalGuide, attributes=(assign,nonatomic) */
    	temporaryHorizontalGuide(): number;
    /* typeEncoding=d, ivar=_temporaryVerticalGuide, attributes=(assign,nonatomic) */
    	temporaryVerticalGuide(): number;
    /* typeEncoding=@"NSObject<MSTilingSystemProvider>", ivar=_tiledRenderer, attributes=(retain,nonatomic) */
    	tiledRenderer(): any;
    /* typeEncoding=@"_TtC6Sketch11MSRulerView", ivar=_verticalRuler, attributes=(assign,nonatomic,weak) */
    	verticalRuler(): _TtC6Sketch11MSRulerView;
    /* typeEncoding=@"MSViewPort", ivar=(null), attributes=(retain,nonatomic) */
    	viewPort(): MSViewPort;
    /* typeEncoding=d, ivar=_windowBackingScale, attributes=(assign,nonatomic) */
    	windowBackingScale(): number;
    /* typeEncoding=@"MSZoomTool", ivar=_zoomTool, attributes=(assign,nonatomic,readonly) */
    	zoomTool(): MSZoomTool;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
    	absoluteCoordinatesFromViewCoordinates_forViewPort(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}48@0:8@16d24{CGPoint=dd}32 */
    	scrollOriginAfterScalingViewPort_toZoomValue_scalingCenterInViewCoordinates(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
    	viewCoordinatesFromAbsoluteCoordinates_forViewPort(...args: any[]): any;
    /* typeEncoding=@48@0:8@16d24{CGPoint=dd}32 */
    	viewPortAfterScalingViewPort_toZoom_centeredOnAbsoluteCoordinates(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v20@0:8c16 */
    	_redrawContentImmediately(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	_scheduleRedraw(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_scheduleToolbarItemValidation(): void;
    /* typeEncoding=c24@0:8@16 */
    	acceptsFirstMouse(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	acceptsFirstResponder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	addObserversForNotifications(): void;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	animateScrollOriginToPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	animateToViewPort(...args: any[]): any;
    /* typeEncoding=v44@0:8@16d24c32@?36 */
    	animateToViewPort_duration_forceRedraw_completion(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	animateToZoom(...args: any[]): any;
    /* typeEncoding=v40@0:8d16{CGPoint=dd}24 */
    	animateToZoom_scalingCenteredOnAbsoluteCoordinates(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	animationDidFinish(): void;
    /* typeEncoding=v24@0:8@16 */
    	animationDidFinishAtViewPort(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyCurrentDocumentToInstructions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyCurrentOverlayToInstruction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyCurrentRenderingParametersToInstruction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	beginImporting(): void;
    /* typeEncoding=v16@0:8 */
    	centerDocumentAndPlaceScrollOriginInTopLeft(): void;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	centerForScalingInAbsoluteCoordinates(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	centerInBounds(): void;
    /* typeEncoding=v16@0:8 */
    	centerLayersInCanvas(): void;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	centerRect(...args: any[]): any;
    /* typeEncoding=v52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
    	centerRect_animated(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	centerSelectionInVisibleArea(): void;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeFont(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	clickShouldDismissPopover(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	commonInit(): void;
    /* typeEncoding=v16@0:8 */
    	completeMagnifyWithFactor(): void;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
    	convertPoint_toCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8{CGPoint=dd}16 */
    	convertPointFromPage(...args: any[]): any;
    /* typeEncoding={CGSize=dd}32@0:8{CGSize=dd}16 */
    	convertSizeToPage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentPage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cursorUpdate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didMouseDown(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didMouseDragged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	displayLayer(...args: any[]): any;
    /* typeEncoding=^{__CVDisplayLink=}16@0:8 */
    	displayLink(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	displayPropertiesDidChange(): void;
    /* typeEncoding=^{__CFRunLoopObserver=}16@0:8 */
    	displayRunLoopObserver(...args: any[]): any;
    /* typeEncoding=v24@0:8:16 */
    	doCommandBySelector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doMouseDraggedEvent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	draggingExited(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingUpdated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	driver(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	endImporting(): void;
    /* typeEncoding=v16@0:8 */
    	endZoomToolMode(): void;
    /* typeEncoding=@16@0:8 */
    	eventHandlerManager(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	eventHandlerManager_didChangeCurrentHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	flowItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	guideOverlayTool(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handToolMouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handToolMouseDragged(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handToolMouseUp(): void;
    /* typeEncoding=Q16@0:8 */
    	handToolState(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleFlagsChangedEvent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasUserFocus(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasWindow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	haveStoredMostRecentFullScaleScrollOrigin(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	horizontalRuler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	ignoreNextKeyDownEventUntilModifiersChange(): void;
    /* typeEncoding=v16@0:8 */
    	initDriver(): void;
    /* typeEncoding=v20@0:8c16 */
    	initTiledRendererAndSyncFirstFrame(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertBacktab(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertTab(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertTabIgnoringFieldEditor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertText(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFlipped(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isMagnifying(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isOpaque(...args: any[]): any;
    /* typeEncoding=c32@0:8{CGPoint=dd}16 */
    	isPointOutsideCanvas(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isReadyToRender(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyUp(...args: any[]): any;
    /* typeEncoding=v28@0:8d16c24 */
    	magnifyByFactor_centerOnMouse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	magnifyWithEvent(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	menuForEvent(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mostRecentFullScaleScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDragged(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	mouseDraggedOutsideCanvas(): void;
    /* typeEncoding=v24@0:8@16 */
    	mouseEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseExited(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mouseInView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseMoved(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mouseTracker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseUp(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	needsUpdateCursor(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlaySettings(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pages(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	performActionWithIdentifier(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	performDragOperation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	placeOriginInTopLeft(): void;
    /* typeEncoding=v16@0:8 */
    	prepare(): void;
    /* typeEncoding=c24@0:8@16 */
    	prepareForDragOperation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshAfterVisualSettingsChange(): void;
    /* typeEncoding=v16@0:8 */
    	refreshRulers(): void;
    /* typeEncoding=v24@0:8Q16 */
    	refreshSidebarWithMask(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeFromSuperview(): void;
    /* typeEncoding=v16@0:8 */
    	removeObserversForNotifications(): void;
    /* typeEncoding=v16@0:8 */
    	renderIfNeeded(): void;
    /* typeEncoding=@16@0:8 */
    	renderInstruction(...args: any[]): any;
    /* typeEncoding={_opaque_pthread_mutex_t=q[56c]}16@0:8 */
    	renderLock(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	renderMask(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	resignFirstResponder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	returnToDefaultHandlerIfNeededForResize(): void;
    /* typeEncoding=v24@0:8d16 */
    	scaleContentBy(...args: any[]): any;
    /* typeEncoding=v40@0:8d16{CGPoint=dd}24 */
    	scaleContentBy_withScalingCenterInViewCoordinates(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	scalingCenterInViewCoordinates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	scroll(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	scrollBy(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	scrollOrigin(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scrollRecognizer(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	scrollToScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	scrollWheel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidMouseDown(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidMouseDragged(...args: any[]): any;
    /* typeEncoding=v24@0:8^{__CVDisplayLink=}16 */
    	setDisplayLink(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventHandlerManager(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setHandToolState(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasUserFocus(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasWindow(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHaveStoredMostRecentFullScaleScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHorizontalRuler(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setMagnifying(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setMostRecentFullScaleScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setNeedsRenderWithMask(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setNeedsUpdateCursor(): void;
    /* typeEncoding=v24@0:8@16 */
    	setOverlaySettings(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderInstruction(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setRenderMask(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setScalingCenterInViewCoordinates(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setScrollOrigin(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldDrawPixelated(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldOptimisePerformance(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldRedrawNextEqualRenderingInstruction(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTemporaryHorizontalGuide(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTemporaryVerticalGuide(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTiledRenderer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVerticalRuler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setViewPort(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setWindowBackingScale(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValueCenteredInCanvas(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setupDisplayLinkForWindow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawPixelated(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldOptimisePerformance(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldRedrawNextEqualRenderingInstruction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showDebugWindowBadgeTypeA(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showDebugWindowBadgeTypeB(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	smartMagnifyWithEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	startAnimatingViewPort(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	switchToSymbolHandlerIfPasteboardContentsDetected(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	tag(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	teardown(): void;
    /* typeEncoding=@88@0:8{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}16 */
    	temporaryGuideOverlayItemContainerWithParameters(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	temporaryHorizontalGuide(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	temporaryVerticalGuide(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tiledRenderer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateCursor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateCursorIfNeeded(): void;
    /* typeEncoding=v24@0:8@16 */
    	updateDraggingItemsForDrag(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	updateRenderInstructionIfNeeded(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	verticalRuler(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	viewCenterInAbsoluteCoordinatesForViewPort(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidChangeBackingProperties(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidChangeEffectiveAppearance(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidMoveToWindow(): void;
    /* typeEncoding=@16@0:8 */
    	viewPort(...args: any[]): any;
    /* typeEncoding=@40@0:8d16{CGPoint=dd}24 */
    	viewPortAfterScalingToZoom_centeredOnAbsoluteCoordinates(...args: any[]): any;
    /* typeEncoding=@28@0:8d16c24 */
    	viewPortAfterScalingToZoom_selectionCentered(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	viewPortForZoomToFitRect(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGPoint=dd}16d32 */
    	viewPortWithCenter_zoomValue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewWillStartLiveResize(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	visibleContentRect(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wantsPeriodicDraggingUpdates(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	windowBackingScale(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidBecomeMain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResignMain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResize(...args: any[]): any;
    /* typeEncoding=v40@0:8d16{CGPoint=dd}24 */
    	zoomBy_centeredOnViewPoint(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	zoomIn(): void;
    /* typeEncoding=v16@0:8 */
    	zoomOut(): void;
    /* typeEncoding={CGPoint=dd}32@0:8{CGPoint=dd}16 */
    	zoomPoint(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	zoomToActualSizeAnimated(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	zoomToFitRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zoomTool(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
  }
}

declare const MSCanvasView: sketchInternal.MSCanvasView;

