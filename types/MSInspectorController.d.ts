// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInspectorController extends NSViewController {
    /* typeEncoding=c, ivar=_alignmentBarHidden, attributes=(assign,nonatomic) */
    	alignmentBarHidden(): boolean;
    /* typeEncoding=@"NSView", ivar=_alignmentContainerView, attributes=(retain,nonatomic) */
    	alignmentContainerView(): cocoascript.NSView;
    /* typeEncoding=@"NSView", ivar=_alignmentView, attributes=(retain,nonatomic) */
    	alignmentView(): cocoascript.NSView;
    /* typeEncoding=@"_TtC6Sketch25MSComponentMenuController", ivar=_componentMenuController, attributes=(retain,nonatomic) */
    	componentMenuController(): _TtC6Sketch25MSComponentMenuController;
    /* typeEncoding=@"NSView", ivar=_contentContainerView, attributes=(retain,nonatomic) */
    	contentContainerView(): cocoascript.NSView;
    /* typeEncoding=@"NSViewController<MSInspectorChildController>", ivar=_currentController, attributes=(retain,nonatomic) */
    	currentController(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isRenamingSharedObject(): boolean;
    /* typeEncoding=@"MSNormalInspector", ivar=_normalInspector, attributes=(retain,nonatomic) */
    	normalInspector(): MSNormalInspector;
    /* typeEncoding=@"BCCache", ivar=_previewImageCache, attributes=(retain,nonatomic) */
    	previewImageCache(): BCCache;
    /* typeEncoding=@"MSLayerArray", ivar=_selectedLayers, attributes=(retain,nonatomic) */
    	selectedLayers(): MSLayerArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sharedStyleInspectorVisible(): boolean;
    /* typeEncoding=@"NSStackView", ivar=_stackView, attributes=(retain,nonatomic) */
    	stackView(): cocoascript.NSStackView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	adjustInspectorToColorPopover_sender(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	alignWithWindowContentLayoutGuide(): void;
    /* typeEncoding=c16@0:8 */
    	alignmentBarHidden(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	alignmentContainerView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	alignmentView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=v32@0:8@16@?24 */
    	beginRenameSharedObject_completionBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeTextLayerFont(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	checkAlignmentButtonsVisibility(): void;
    /* typeEncoding=@16@0:8 */
    	componentMenuController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	connectAlignmentButtons(): void;
    /* typeEncoding=@16@0:8 */
    	contentContainerView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	contentTypeDidChange(): void;
    /* typeEncoding=@16@0:8 */
    	currentController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	currentHandlerChanged(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	findFirstTextFieldInView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	focusOnFirstTextField(): void;
    /* typeEncoding=v24@0:8@16 */
    	focusOnTextFieldWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	handlerManager(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorController(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	inspectorForLayers_eventHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRenamingSharedObject(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layoutContentView(): void;
    /* typeEncoding=@16@0:8 */
    	makeTouchBar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	normalInspector(...args: any[]): any;
    /* typeEncoding=v36@0:8Q16Q24c32 */
    	openPopoverForStylePart_atIndex_preferringNative(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performSelectionChangedUpdates(): void;
    /* typeEncoding=@16@0:8 */
    	previewImageCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	recursivelyDismissAllPresentedViewControllersOfViewController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshAfterAppearanceChange(): void;
    /* typeEncoding=v16@0:8 */
    	refreshCurrentController(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reload(): void;
    /* typeEncoding=v16@0:8 */
    	reloadTouchBars(): void;
    /* typeEncoding=@16@0:8 */
    	selectedLayers(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAlignmentBarHidden(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAlignmentContainerView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAlignmentView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponentMenuController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContentContainerView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNormalInspector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewImageCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStackView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	sharedStyleInspectorVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showBorderOptionsAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showFillOptionsAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stackView(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	touchBar_makeItemForIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateOnPageChange(): void;
    /* typeEncoding=v16@0:8 */
    	validateAlignmentButtons(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidResize(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
  }
}

declare const MSInspectorController: sketchInternal.MSInspectorController;

