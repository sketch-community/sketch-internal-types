// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSNormalEventHandler extends MSNormalBaseEventHandler {
    /* typeEncoding=@"MSLayer", ivar=_activeLayer, attributes=(retain,nonatomic) */
    	activeLayer(): MSLayer;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSLayerDragController", ivar=_dragController, attributes=(retain,nonatomic) */
    	dragController(): MSLayerDragController;
    /* typeEncoding=@"MSDragToMoveOrCopyGestureRecognizer", ivar=_dragGestureRecognizer, attributes=(assign,nonatomic,readonly) */
    	dragGestureRecognizer(): MSDragToMoveOrCopyGestureRecognizer;
    /* typeEncoding=q, ivar=_dragMode, attributes=(assign,nonatomic) */
    	dragMode(): number;
    /* typeEncoding={CGVector=dd}, ivar=_duplicateOffset, attributes=(assign,nonatomic) */
    	duplicateOffset(): CGVector;
    /* typeEncoding=@"NSSet", ivar=_duplicatedObjectIDs, attributes=(copy,nonatomic) */
    	duplicatedObjectIDs(): cocoascript.NSSet;
    /* typeEncoding=@"MSNormalEventData", ivar=_eventData, attributes=(retain,nonatomic) */
    	eventData(): MSNormalEventData;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSObject<MSHoverableItem>", ivar=_highlightedItem, attributes=(retain,nonatomic) */
    	highlightedItem(): any;
    /* typeEncoding=@"_TtC17SketchControllers13MSPathOverlay", ivar=_hoverHighlightOverlay, attributes=(assign,nonatomic,readonly) */
    	hoverHighlightOverlay(): _TtC17SketchControllers13MSPathOverlay;
    /* typeEncoding=c, ivar=_isLayerPastedFromLayerList, attributes=(assign,nonatomic) */
    	isLayerPastedFromLayerList(): boolean;
    /* typeEncoding=@"MSLayerMeasuringController", ivar=_measuringController, attributes=(assign,nonatomic,readonly) */
    	measuringController(): MSLayerMeasuringController;
    /* typeEncoding=@"MSNormalEventContextualMenuBuilder", ivar=_menuBuilder, attributes=(retain,nonatomic) */
    	menuBuilder(): MSNormalEventContextualMenuBuilder;
    /* typeEncoding=@"NSMenu", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuForLayerList(): cocoascript.NSMenu;
    /* typeEncoding=@"MSHitTestResult", ivar=_mouseDownHitTest, attributes=(retain,nonatomic) */
    	mouseDownHitTest(): MSHitTestResult;
    /* typeEncoding=@"MSOpacityKeyboardShortcutRecognizer", ivar=_opacityShortcutRecognizer, attributes=(assign,nonatomic,readonly) */
    	opacityShortcutRecognizer(): MSOpacityKeyboardShortcutRecognizer;
    /* typeEncoding=@"_TtC17SketchControllers13MSPathOverlay", ivar=_selectedOverridesOverlay, attributes=(assign,nonatomic,readonly) */
    	selectedOverridesOverlay(): _TtC17SketchControllers13MSPathOverlay;
    /* typeEncoding=@"_TtC17SketchControllers13MSPathOverlay", ivar=_selectedShapePathsOverlay, attributes=(assign,nonatomic,readonly) */
    	selectedShapePathsOverlay(): _TtC17SketchControllers13MSPathOverlay;
    /* typeEncoding=@"_TtC17SketchControllers21MSSelectionBoxOverlay", ivar=_selectionBoxOverlay, attributes=(assign,nonatomic,readonly) */
    	selectionBoxOverlay(): _TtC17SketchControllers21MSSelectionBoxOverlay;
    /* typeEncoding=@"MSDragToSelectGestureRecognizer", ivar=_selectionGestureRecognizer, attributes=(assign,nonatomic,readonly) */
    	selectionGestureRecognizer(): MSDragToSelectGestureRecognizer;
    /* typeEncoding=@"_TtC6Sketch28MSSelectionOverlayController", ivar=_selectionOverlayController, attributes=(assign,nonatomic,readonly) */
    	selectionOverlayController(): _TtC6Sketch28MSSelectionOverlayController;
    /* typeEncoding=@"MSSnapOverlayController", ivar=_snapsController, attributes=(assign,nonatomic,readonly) */
    	snapsController(): MSSnapOverlayController;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseDragged_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	activeLayer(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	artboardRectInViewCoordinates(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}40@0:8@16{CGPoint=dd}24 */
    	artboardRectInViewCoordinates_withScrollOrigin(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	artboardsInReadingOrder(...args: any[]): any;
    /* typeEncoding=v48@0:8@16{CGPoint=dd}24Q40 */
    	beginAdjustingHandleOfKind_atPoint_modifierFlags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentFocussedArtboard(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	currentPageDidChange(): void;
    /* typeEncoding=v24@0:8@16 */
    	cut(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteNormalLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	didGridLayout(): void;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragGestureRecognizer(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	dragMode(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dragModeDidReset(): void;
    /* typeEncoding=v24@0:8@16 */
    	dragToSelect(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingEntered(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingUpdated(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	duplicate(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	duplicateOffset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	duplicatedObjectIDs(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	endAdjustingHandle(): void;
    /* typeEncoding=v64@0:8@16q24{CGPoint=dd}32Q48Q56 */
    	enterResizeModeForLine_pointIndex_mouse_clickCount_flags(...args: any[]): any;
    /* typeEncoding=v56@0:8q16{CGPoint=dd}24Q40Q48 */
    	enterResizeModeUsingHandle_mouse_clickCount_flags(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGPoint=dd}16Q32Q40 */
    	enterRotateModeWithMouse_clickCount_flags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	eventData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flagsChanged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flashSnaps(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	focusOnArtboard(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	handleSymbolInstanceDoubleClick_gestureRecognizer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@16@0:8 */
    	highlightedItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hoverHighlightOverlay(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	ignoreNextKeyDownEventUntilModifiersChange(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertBacktab(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertTab(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isDraggingSourceSketchLayerList(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLayerPastedFromLayerList(...args: any[]): any;
    /* typeEncoding=c32@0:8{CGPoint=dd}16 */
    	isMouseHoveringResizeHandle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=v28@0:8S16Q20 */
    	keyDownMoveCanvas_flags(...args: any[]): any;
    /* typeEncoding=v28@0:8S16Q20 */
    	keyDownMoveCanvasIncremental_flags(...args: any[]): any;
    /* typeEncoding=v28@0:8S16Q20 */
    	keyDownMoveLayers_flags(...args: any[]): any;
    /* typeEncoding=v20@0:8S16 */
    	keyDownMoveToEndOfCanvas(...args: any[]): any;
    /* typeEncoding=v28@0:8S16Q20 */
    	keyDownResizeLayers_flags(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	layerCanBeSelected(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	layerDoubleClicked(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	layerDragged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	measuringController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuBuilder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuForCanvas(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	menuForEvent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuForLayerList(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mouseDownHitTest(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mouseDraggedOutsideViewShouldMoveScrollOrigin(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	mouseExited(): void;
    /* typeEncoding=v16@0:8 */
    	moveToNextArtboard(): void;
    /* typeEncoding=v16@0:8 */
    	moveToPreviousArtboard(): void;
    /* typeEncoding=Q24@0:8@16 */
    	numberOfSelectableLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	opacityShortcutRecognized(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	opacityShortcutRecognizer(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	performDragOperation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadFollowingBackgroundChangesToDocument(): void;
    /* typeEncoding=v24@0:8@16 */
    	selectAll(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	selectHitTestResult_extendSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectLayer(...args: any[]): any;
    /* typeEncoding=c44@0:8{CGPoint=dd}16c32Q36 */
    	selectLayerAtPoint_toggle_modifierFlags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedOverridesOverlay(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedShapePathsOverlay(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionBoxOverlay(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionGestureRecognizer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionOverlayController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActiveLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDragController(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setDragMode(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGVector=dd}16 */
    	setDuplicateOffset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDuplicatedObjectIDs(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHighlightedItem(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsLayerPastedFromLayerList(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenuBuilder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMouseDownHitTest(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUndoActionName(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	shouldNotChangeSelectionForFlags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	siblingsOfSelectedShapePathLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snapsController(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	startDraggingAtPoint(...args: any[]): any;
    /* typeEncoding=c48@0:8@16{CGPoint=dd}24Q40 */
    	startResizingOrRotatingHandle_atPoint_flags(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	tabInForwardDirection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateDragWithGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateSelectedShapePathsOverlay(): void;
    /* typeEncoding=v24@0:8d16 */
    	zoomValueWillChangeTo(...args: any[]): any;
  }
}

declare const MSNormalEventHandler: sketchInternal.MSNormalEventHandler;

