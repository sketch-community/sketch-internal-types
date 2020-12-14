// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSEventHandler extends NSResponder {
    /* typeEncoding=@"NSArray", ivar=_activeGestureRecognizers, attributes=(copy,nonatomic) */
    	activeGestureRecognizers(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	applicableActionItemIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"NSCursor", ivar=_cursor, attributes=(retain,nonatomic) */
    	cursor(): cocoascript.NSCursor;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	gestureRecognizers(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	handlesHistoryCoalescing(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	inspectorLocation(): number;
    /* typeEncoding=@"MSEventHandlerManager", ivar=_manager, attributes=(assign,nonatomic,weak) */
    	manager(): MSEventHandlerManager;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	mousePageCoordinate(): CGPoint;
    /* typeEncoding=@"NSTouchBar", ivar=_noSelectionTouchBar, attributes=(retain,nonatomic) */
    	noSelectionTouchBar(): cocoascript.NSTouchBar;
    /* typeEncoding=@"MSDuplicateOffsetTracker", ivar=_offsetTracker, attributes=(retain,nonatomic) */
    	offsetTracker(): MSDuplicateOffsetTracker;
    /* typeEncoding=@"NSArray", ivar=_overlays, attributes=(assign,nonatomic,readonly) */
    	overlays(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=_pressedKeys, attributes=(copy,nonatomic) */
    	pressedKeys(): cocoascript.NSString;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	scrollOrigin(): CGPoint;
    /* typeEncoding=@"NSTouchBar", ivar=_selectionTouchBar, attributes=(retain,nonatomic) */
    	selectionTouchBar(): cocoascript.NSTouchBar;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldExitOnContentViewResize(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSUndoManager", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	undoManager(): cocoascript.NSUndoManager;
    /* typeEncoding=c, ivar=(null), attributes=(assign,readonly) */
    	wantsLayerHighlight(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,readonly) */
    	wantsStandardSelectionControls(): boolean;
    /* typeEncoding=@24@0:8@16 */
    	eventHandlerWithManager(...args: any[]): any;
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
    /* typeEncoding=@16@0:8 */
    	activeGestureRecognizers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addOverlay(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsSwitchToInsertAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	applicableActionItemIdentifier(...args: any[]): any;
    /* typeEncoding=c20@0:8S16 */
    	arrowKeyIsPressed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canDuplicate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelOperation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasView(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	centerPointForZooming(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	configureInspector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	copy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentGroup(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	currentMousePointInCanvasCoordinates(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentPage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	currentPageDidChange(): void;
    /* typeEncoding=@16@0:8 */
    	cursor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cut(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=Q16@0:8 */
    	defaultSnapMask(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding=c20@0:8S16 */
    	deleteKeyIsPressed(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doCut(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPasteLayersAtCurrentPosition(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentWindow(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	dragDropHintForDropOnPoint(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	draggingExited(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingUpdated(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	drawHandles(): void;
    /* typeEncoding=v24@0:8@16 */
    	duplicate(...args: any[]): any;
    /* typeEncoding=@48@0:8@16Q24{CGVector=dd}32 */
    	duplicateLayer_toIndex_offset(...args: any[]): any;
    /* typeEncoding=@40@0:8@16{CGVector=dd}24 */
    	duplicateSelectedLayersInGroup_withOffset(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGVector=dd}16 */
    	duplicateSelectedLayersWithOffset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	editLayer(...args: any[]): any;
    /* typeEncoding=c20@0:8S16 */
    	enterKeyIsPressed(...args: any[]): any;
    /* typeEncoding=c20@0:8S16 */
    	escapeKeyIsPressed(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flagsChanged(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	focusOnMainWindow(): void;
    /* typeEncoding=@16@0:8 */
    	gestureRecognizers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleSymbolInstanceDoubleClick(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerDidLoseFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=@16@0:8 */
    	handlerName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=c16@0:8 */
    	handlesHandToolItself(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	handlesHistoryCoalescing(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hitTestingOptions(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	horizontalRulerGuidesForGridAlign(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertBacktab(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertPasteboardLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertTab(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	inspectorLocation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorViewController(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	inspectorViewControllersForLayers_standardControllers(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGPoint=dd}16Q32 */
    	itemAtPoint_modifierFlags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=v28@0:8S16Q20 */
    	keyUp_flags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	layerListSelectionDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layerRulerOriginChanged(): void;
    /* typeEncoding=@24@0:8@16 */
    	layersSeparatedByGroups(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layersToCopy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeTouchBar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	manager(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mayShowResizingInspectorView(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	menuForEvent(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	mouseDownEvent(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	mouseDraggedEvent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mouseDraggedOutsideViewShouldMoveScrollOrigin(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	mouseExited(): void;
    /* typeEncoding=c24@0:8@16 */
    	mouseMovedEvent(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mousePageCoordinate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	mouseUpEvent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	noSelectionTouchBar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	noSelectionTouchbarIdentifiers(...args: any[]): any;
    /* typeEncoding=d24@0:8Q16 */
    	nudgeDistanceForFlags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	offsetTracker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openBorderAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openFillAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openInnerShadowAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openShadowAction(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlays(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8{CGPoint=dd}16 */
    	pageCoordinateFromLocationInWindow(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	parentForInsertingLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	paste(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pasteHere(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pasteOverSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	pasteWithOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pasteWithStyle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pastingViewPort(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	performDragOperation(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	prepareForDragOperation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pressedKeys(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	readFromPasteboard_options(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshOverlay(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	refreshStylePreviewTouchBarButton_forIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshTouchBarItemWithIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadFollowingBackgroundChangesToDocument(): void;
    /* typeEncoding=v24@0:8@16 */
    	replaceArtboardWithLayerGroupInPasteBoardData(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	returnToDefaultHandler(): void;
    /* typeEncoding=v16@0:8 */
    	returnToDefaultHandlerByClickingOutside(): void;
    /* typeEncoding=v24@0:8@16 */
    	rightMouseDown(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8{CGPoint=dd}16 */
    	rulerGuidesRectAroundPoint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	scrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectAll(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	selectLayer_extendSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectToolbarItemWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayers(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	selectedRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionTouchBar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionTouchBarIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActiveGestureRecognizers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCursor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setManager(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setNeedsUpdateCursor(): void;
    /* typeEncoding=v24@0:8@16 */
    	setNoSelectionTouchBar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOffsetTracker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPressedKeys(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectionTouchBar(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldExitOnContentViewResize(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldFitToPixelBounds(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldManageOverridesView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowFlowView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowLayoutView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowResizingView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowSharedStyles(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowTextInspector(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	styleViewControllersForLayers_fromStyleInspectorSection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	touchBar_makeItemForIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	touchBarTextColorAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	touchBarWithIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	undoManager(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateCursor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateDraggingItemsForDrag(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	valueForUndefinedKey(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	verticalRulerGuidesForGridAlign(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	viewDidScroll(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wantsLayerHighlight(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wantsStandardSelectionControls(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	willResignFirstResponder(): void;
    /* typeEncoding=v16@0:8 */
    	willStartExporting(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	writeLayers_toPasteboard(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	zoomToArtboard(): void;
    /* typeEncoding=v16@0:8 */
    	zoomToSelection(): void;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	zoomValueDidChange(): void;
    /* typeEncoding=v24@0:8d16 */
    	zoomValueWillChangeTo(...args: any[]): any;
  }
}

declare const MSEventHandler: sketchInternal.MSEventHandler;

