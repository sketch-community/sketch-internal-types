// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCanvasViewController extends NSViewController {
    /* typeEncoding=@"NSView", ivar=_canvasContainerView, attributes=(retain,nonatomic) */
    	canvasContainerView(): cocoascript.NSView;
    /* typeEncoding=@"MSCanvasView", ivar=_canvasView, attributes=(retain,nonatomic) */
    	canvasView(): MSCanvasView;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=@"MSFlashController", ivar=_flashController, attributes=(retain,nonatomic) */
    	flashController(): MSFlashController;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"_TtC6Sketch11MSRulerView", ivar=_horizontalRuler, attributes=(retain,nonatomic) */
    	horizontalRuler(): _TtC6Sketch11MSRulerView;
    /* typeEncoding=c, ivar=_observingDefaults, attributes=(assign,nonatomic,getter=isObservingDefaults) */
    	observingDefaults(): boolean;
    /* typeEncoding=@"NSView", ivar=_rulerCornerView, attributes=(retain,nonatomic) */
    	rulerCornerView(): cocoascript.NSView;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_rulerHeightConstraint, attributes=(assign,nonatomic,weak) */
    	rulerHeightConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_rulerWidthConstraint, attributes=(assign,nonatomic,weak) */
    	rulerWidthConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	scrollOrigin(): CGPoint;
    /* typeEncoding=c, ivar=_shouldHideOverlayControls, attributes=(assign,nonatomic) */
    	shouldHideOverlayControls(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"_TtC6Sketch11MSRulerView", ivar=_verticalRuler, attributes=(retain,nonatomic) */
    	verticalRuler(): _TtC6Sketch11MSRulerView;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding=@16@0:8 */
    	overlayOptionsDefaultsKeys(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	alignWithWindowContentLayoutGuide(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=v16@0:8 */
    	beginObservingDefaults(): void;
    /* typeEncoding=@16@0:8 */
    	canvasContainerView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	canvasViewDidChangeEffectiveAppearance(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	currentOverlayOptions(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentWindow(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	endObservingDefaults(): void;
    /* typeEncoding=@16@0:8 */
    	flashController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	horizontalRuler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isObservingDefaults(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForDealloc(): void;
    /* typeEncoding=v16@0:8 */
    	refreshRulers(): void;
    /* typeEncoding=@16@0:8 */
    	rulerCornerView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rulerHeightConstraint(...args: any[]): any;
    /* typeEncoding=v32@0:8@16d24 */
    	rulerView_didMoveTemporaryGuideToPosition(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rulerViewDidDisableTemporaryGuide(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rulerViewStartCoalescingHistory(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rulerViewStopCoalescingHistory(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rulerWidthConstraint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	scrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCanvasContainerView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCanvasView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlashController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHorizontalRuler(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setObservingDefaults(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRulerCornerView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRulerHeightConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRulerWidthConstraint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setScrollOrigin(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldHideOverlayControls(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVerticalRuler(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldHideOverlayControls(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateContentSettings(): void;
    /* typeEncoding=v16@0:8 */
    	updateOverlaySettings(): void;
    /* typeEncoding=v16@0:8 */
    	updateRulers(): void;
    /* typeEncoding=@16@0:8 */
    	verticalRuler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
  }
}

declare const MSCanvasViewController: sketchInternal.MSCanvasViewController;

