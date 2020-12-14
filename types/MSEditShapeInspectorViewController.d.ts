// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSEditShapeInspectorViewController extends NSViewController {
    /* typeEncoding=@"MSShapeButtonInspectorItem", ivar=_buttonItem, attributes=(retain,nonatomic) */
    	buttonItem(): MSShapeButtonInspectorItem;
    /* typeEncoding=@"NSButton", ivar=_closePathButton, attributes=(retain,nonatomic) */
    	closePathButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_cornerRadiusField, attributes=(retain,nonatomic) */
    	cornerRadiusField(): MSInlineUpDownTextField;
    /* typeEncoding=@"NSSlider", ivar=_cornerRadiusSlider, attributes=(retain,nonatomic) */
    	cornerRadiusSlider(): cocoascript.NSSlider;
    /* typeEncoding=@"NSView", ivar=_curveModeBackgroundView, attributes=(retain,nonatomic) */
    	curveModeBackgroundView(): cocoascript.NSView;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_curvePointXField, attributes=(retain,nonatomic) */
    	curvePointXField(): MSInlineUpDownTextField;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_curvePointYField, attributes=(retain,nonatomic) */
    	curvePointYField(): MSInlineUpDownTextField;
    /* typeEncoding=c, ivar=_isMakingRectSelection, attributes=(assign,nonatomic) */
    	isMakingRectSelection(): boolean;
    /* typeEncoding=@"NSButton", ivar=_makeRectSelectionButton, attributes=(retain,nonatomic) */
    	makeRectSelectionButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSPathController", ivar=_pathController, attributes=(retain,nonatomic) */
    	pathController(): MSPathController;
    /* typeEncoding=@"NSArrayController", ivar=_pointsController, attributes=(retain,nonatomic) */
    	pointsController(): cocoascript.NSArrayController;
    /* typeEncoding=@"NSPopUpButton", ivar=_roundingPopUpButton, attributes=(retain,nonatomic) */
    	roundingPopUpButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"MSShapeEventHandler", ivar=_shapeEventHandler, attributes=(assign,nonatomic) */
    	shapeEventHandler(): MSShapeEventHandler;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_xAdapter, attributes=(retain,nonatomic) */
    	xAdapter(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_yAdapter, attributes=(retain,nonatomic) */
    	yAdapter(): MSMathInspectorValueAdaptor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	buttonItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeTool(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	closePathButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cornerRadiusAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cornerRadiusField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cornerRadiusSlider(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	curveModeBackgroundView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	curvePointXField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	curvePointYField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8@16 */
    	finishEditingAction(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isMakingRectSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeRectSelectionButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pointsController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForDisplay(): void;
    /* typeEncoding=v16@0:8 */
    	refresh(): void;
    /* typeEncoding=v16@0:8 */
    	refreshClosePathButton(): void;
    /* typeEncoding=v16@0:8 */
    	refreshCoordinates(): void;
    /* typeEncoding=v16@0:8 */
    	refreshCornerRadiusButton(): void;
    /* typeEncoding=v16@0:8 */
    	refreshCurveModeControls(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshRoundingPopUpTitle(): void;
    /* typeEncoding=v24@0:8@16 */
    	roundingPopUpAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	roundingPopUpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setButtonItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setClosePathButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCornerRadiusField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCornerRadiusSlider(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurveModeBackgroundView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurvePointXField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurvePointYField(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsMakingRectSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMakeRectSelectionButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPathController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPointsController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRoundingPopUpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShapeEventHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setXAdapter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setYAdapter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shapeEventHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	titleForRoundingPopUp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	vectorModeSegmentedButtonAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	xAdapter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	yAdapter(...args: any[]): any;
  }
}

declare const MSEditShapeInspectorViewController: sketchInternal.MSEditShapeInspectorViewController;

