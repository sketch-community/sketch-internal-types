// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSVectorOverlayController extends NSObject {
    /* typeEncoding=@"_TtC6Sketch21MSVectorOverlayAction", ivar=_currentAction, attributes=(retain,nonatomic) */
    	currentAction(): _TtC6Sketch21MSVectorOverlayAction;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSVectorOverlayControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDragToSelectGestureRecognizer", ivar=_dragToSelectGestureRecognizer, attributes=(assign,nonatomic,readonly) */
    	dragToSelectGestureRecognizer(): MSDragToSelectGestureRecognizer;
    /* typeEncoding=@"MSShapeEditingBehavior", ivar=_editingBehavior, attributes=(retain,nonatomic) */
    	editingBehavior(): MSShapeEditingBehavior;
    /* typeEncoding=@"MSShapeEventHandler", ivar=_eventHandler, attributes=(assign,nonatomic,weak) */
    	eventHandler(): MSShapeEventHandler;
    /* typeEncoding=@"MSVectorHandleStateDecider", ivar=_handleStateDecider, attributes=(assign,nonatomic,readonly) */
    	handleStateDecider(): MSVectorHandleStateDecider;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSOverlayItemImageCache", ivar=_imageCache, attributes=(retain,nonatomic) */
    	imageCache(): MSOverlayItemImageCache;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isInteractivelySelecting) */
    	interactivelySelecting(): boolean;
    /* typeEncoding=@"MSVectorOverlay", ivar=_overlay, attributes=(assign,nonatomic,readonly) */
    	overlay(): MSVectorOverlay;
    /* typeEncoding=@"MSVectorOverlayLayout", ivar=_overlayLayout, attributes=(assign,nonatomic,readonly) */
    	overlayLayout(): MSVectorOverlayLayout;
    /* typeEncoding=@"MSPathController", ivar=_pathController, attributes=(retain,nonatomic) */
    	pathController(): MSPathController;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	selectedHandles(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_selectedLayers, attributes=(copy,nonatomic) */
    	selectedLayers(): cocoascript.NSArray;
    /* typeEncoding=@"_TtC17SketchControllers21MSSelectionBoxOverlay", ivar=_selectionBoxOverlay, attributes=(assign,nonatomic,readonly) */
    	selectionBoxOverlay(): _TtC17SketchControllers21MSSelectionBoxOverlay;
    /* typeEncoding=@"NSArray", ivar=_shapeCenterSnapTargets, attributes=(copy,nonatomic) */
    	shapeCenterSnapTargets(): cocoascript.NSArray;
    /* typeEncoding=@"MSAlignmentEngine", ivar=_snapper, attributes=(retain,nonatomic) */
    	snapper(): MSAlignmentEngine;
    /* typeEncoding=@"MSAlignmentEngineResult", ivar=_snaps, attributes=(copy,nonatomic) */
    	snaps(): MSAlignmentEngineResult;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSCanvasView", ivar=_view, attributes=(assign,nonatomic) */
    	view(): MSCanvasView;
    /* typeEncoding=@"NSArray", ivar=_visibleLayers, attributes=(copy,nonatomic,readonly) */
    	visibleLayers(): cocoascript.NSArray;
    /* typeEncoding=@"MSPath", ivar=_wirePath, attributes=(retain,nonatomic) */
    	wirePath(): MSPath;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addGuidesToSnapper(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	addHandlesToSnapperForDragging(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addOtherLayersToSnapper(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	addTargetsToSnapperForDragging(...args: any[]): any;
    /* typeEncoding=v40@0:8@16d24Q32 */
    	adjustHandle_toValue_onAxis(...args: any[]): any;
    /* typeEncoding=v32@0:8d16Q24 */
    	adjustHandlesToValue_onAxis(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	alignVectorPointsToKey(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8@16{CGPoint=dd}24 */
    	alignmentEngine_roundPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	changeContext(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	changeToCurveMode(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collectionOverlay_didDeselectItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collectionOverlay_didSelectItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=q32@0:8@16q24 */
    	collectionOverlay_numberOfItemsInSection(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForItemAtIndexPath_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForSupplementaryElementOfKind_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@40@0:8@16^{CGColorSpace=}24d32 */
    	collectionOverlay_overlayItemImagesForColorSpace_backingScale(...args: any[]): any;
    /* typeEncoding=c48@0:8@16{CGPoint=dd}24Q40 */
    	collectionOverlay_selectItemAtPoint_modifierFlags(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	collectionOverlay_shouldDeferSelectionAtIndexPath(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	collectionOverlay_shouldDeselectItemsAtIndexPaths(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	determineLocationAndSnappingOfDrag(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	didChangeAllowSelectionOnly(): void;
    /* typeEncoding=v16@0:8 */
    	didChangeSelection(): void;
    /* typeEncoding=v24@0:8Q16 */
    	distributeVectorPointsToAxis(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	dragSegmentToPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dragToSelect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragToSelectGestureRecognizer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editingBehavior(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	ensureCurrentSelectionIsValid(): void;
    /* typeEncoding=@16@0:8 */
    	eventHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flagsChanged(...args: any[]): any;
    /* typeEncoding=c48@0:8@16{CGPoint=dd}24Q40 */
    	gestureRecognizer_shouldAttemptToRecognizeAtPoint_modifierFlags(...args: any[]): any;
    /* typeEncoding=@24@0:8q16 */
    	hairlinePathForSection(...args: any[]): any;
    /* typeEncoding=v40@0:8@16{CGPoint=dd}24 */
    	handleOverlay_didClickAtPoint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8@16@24@32 */
    	handleOverlay_layout_locationOfHandleAtIndexPath(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	handleOverlay_layout_pathForConnectingHandlesInSection(...args: any[]): any;
    /* typeEncoding=c48@0:8@16{CGPoint=dd}24Q40 */
    	handleOverlay_prepareForDragAtPoint_modifierFlags(...args: any[]): any;
    /* typeEncoding=v48@0:8@16{CGPoint=dd}24Q40 */
    	handleOverlay_updateDragWithLocation_modifierFlags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleOverlayDidFinishDrag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	handleStateDecider(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageCache(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16@32 */
    	includePointForSnapping_inPathLayer(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	indexPathOfSegmentAtPoint(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	indexPathsForHandlesInRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	insertPointWithModifierFlags(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInteractivelySelecting(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGPoint=dd}16Q32 */
    	locationForAddingPoint_modifierFlags(...args: any[]): any;
    /* typeEncoding=@28@0:8c16@20 */
    	makeWirePathForClosingPath_indexPathForSelectedHandle(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	mouseUpAtPoint(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGPoint=dd}16Q32^c40 */
    	moveCurveAdjustmentHandleToPoint_modifierFlags_didChangeCurveMode(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfSectionsInCollectionOverlay(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlay(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	overlayItemsForInsertionPointWithLayoutAttributes(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	overlayItemsForPathForSection(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	overlayItemsForSupplementaryHandleOfKind_layoutAttributes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlayLayout(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	pathDidOpenOrClose(): void;
    /* typeEncoding=@24@0:8@16 */
    	pathLayersForLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareSnapper(): void;
    /* typeEncoding=@40@0:8{CGPoint=dd}16Q32 */
    	prepareToDragSegmentWithMouseLocation_modiferFlags(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	rebuildVisibleLayersMaintainingSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	registerWithEventHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	segmentAtIndexPath(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	selectHandle_extendSelection(...args: any[]): any;
    /* typeEncoding=@32@0:8@16c24c28 */
    	selectHandle_extendSelection_notifyDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectHandles(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	selectHandles_notifyDelegate(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	selectLayers_extendSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedHandles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionBoxOverlay(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditingBehavior(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageCache(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setNeedsUpdateCursor(): void;
    /* typeEncoding=v24@0:8@16 */
    	setPathController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShapeCenterSnapTargets(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSnapper(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSnaps(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVisibleLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWirePath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shapeCenterSnapTargets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snapper(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snaps(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateCursor(): void;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	updateStateWithMouseLocation_modifierFlags(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateWire(): void;
    /* typeEncoding={CGPoint=dd}40@0:8@16@24@32 */
    	vectorOverlay_layout_locationForInsertionPointAtIndexPath(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8@16@24@32 */
    	vectorOverlay_layout_locationOfCurveFromHandleAtIndexPath(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8@16@24@32 */
    	vectorOverlay_layout_locationOfCurveToHandleAtIndexPath(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	vectorOverlay_layout_wantsCurveFromHandleAtIndexPath(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	vectorOverlay_layout_wantsCurveToHandleAtIndexPath(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24Q32 */
    	vectorOverlay_toggleCurveModeAt_modifierFlags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	view(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	visibleLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	wirePath(...args: any[]): any;
  }
}

declare const MSVectorOverlayController: sketchInternal.MSVectorOverlayController;

