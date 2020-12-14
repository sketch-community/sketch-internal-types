// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorInspectorSectionGradient extends MSColorInspectorSectionWithColorPicker {
    /* typeEncoding=@"NSArrayController", ivar=_arrayController, attributes=(retain,nonatomic) */
    	arrayController(): cocoascript.NSArrayController;
    /* typeEncoding=@"MSAssetPickerCollectionHeaderController", ivar=_colorHeader, attributes=(retain,nonatomic) */
    	colorHeader(): MSAssetPickerCollectionHeaderController;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSGradientBarView", ivar=_gradientBarView, attributes=(assign,nonatomic,weak) */
    	gradientBarView(): MSGradientBarView;
    /* typeEncoding=@"MSGradientEventHandler", ivar=_gradientHandler, attributes=(retain,nonatomic) */
    	gradientHandler(): MSGradientEventHandler;
    /* typeEncoding=@"MSAssetPickerCollectionHeaderController", ivar=_gradientHeader, attributes=(retain,nonatomic) */
    	gradientHeader(): MSAssetPickerCollectionHeaderController;
    /* typeEncoding=q, ivar=_gradientType, attributes=(assign,nonatomic) */
    	gradientType(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_opacityAdaptor, attributes=(retain,nonatomic) */
    	opacityAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSInlineUpDownNanoTextField", ivar=_opacityField, attributes=(retain,nonatomic) */
    	opacityField(): MSInlineUpDownNanoTextField;
    /* typeEncoding=@"MSTextLabelForUpDownField", ivar=_opacityLabel, attributes=(retain,nonatomic) */
    	opacityLabel(): MSTextLabelForUpDownField;
    /* typeEncoding=@"NSButton", ivar=_rotateLeftButton, attributes=(assign,nonatomic,weak) */
    	rotateLeftButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_rotateRightButton, attributes=(assign,nonatomic,weak) */
    	rotateRightButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSAssetPickerController", ivar=_secondaryAssetPickerController, attributes=(retain,nonatomic) */
    	secondaryAssetPickerController(): MSAssetPickerController;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c24@0:8@16 */
    	static canHandleStylePart(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static filterSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static presetPickerVisibilityDefaultsKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	allSecondaryAssetPickerDataSources(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	arrayController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	assetPickerController_didSelectDataSource(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	assetPickerController_shouldChangeToDisplayMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerDataSources(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	assetType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	closeGradientHandler(): void;
    /* typeEncoding=@16@0:8 */
    	colorHeader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorPickerChangedTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlDidSelectAsset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createPresetFromCurrentSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentlySelectedColor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=Q16@0:8 */
    	fillType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flipGradient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	gradientBarChanged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	gradientBarDidChangeSelectedStop(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradientBarView(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	gradientBarViewPreviewColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradientHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	gradientHandlerDidChangeCurrentPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	gradientHandlerDidChangeGradient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	gradientHandlerWillLoseFocus(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradientHeader(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	gradientType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	gradientTypeSelected(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradients(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerViews(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	highlightCurrentGradient(): void;
    /* typeEncoding=@16@0:8 */
    	opacityAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	opacityField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	opacityLabel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	popoverWillClose(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreWithState_ms(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rotateGradientAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rotateLeftButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rotateRightButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scrollableViews(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryAssetPickerController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryAssetPickerDataSources(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArrayController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorHeader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGradientBarView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGradientHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGradientHeader(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setGradientType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOpacityAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOpacityField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOpacityLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRotateLeftButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRotateRightButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondaryAssetPickerController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyleParts(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	switchToGradientHandler(): void;
    /* typeEncoding=v16@0:8 */
    	switchToGradientHandlerIfNecessary(): void;
    /* typeEncoding=@28@0:8@16c24 */
    	toolTipForAltButton_alternate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateOtherGradientsToReflectChanges(): void;
    /* typeEncoding=v16@0:8 */
    	updateUIAfterGradientChange(): void;
    /* typeEncoding=v16@0:8 */
    	validate(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@16@0:8 */
    	viewRestorationState_ms(...args: any[]): any;
  }
}

declare const MSColorInspectorSectionGradient: sketchInternal.MSColorInspectorSectionGradient;

