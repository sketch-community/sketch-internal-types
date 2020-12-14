// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorInspectorSectionColor extends MSColorInspectorSectionWithColorPicker {
    /* typeEncoding=c, ivar=_canCreateSwatch, attributes=(assign,nonatomic) */
    	canCreateSwatch(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSSwatch", ivar=_editedSwatch, attributes=(retain,nonatomic) */
    	editedSwatch(): MSSwatch;
    /* typeEncoding=@"NSView", ivar=_editmodeButtonsView, attributes=(assign,nonatomic,weak) */
    	editmodeButtonsView(): cocoascript.NSView;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_isEditingSwatch, attributes=(assign,nonatomic) */
    	isEditingSwatch(): boolean;
    /* typeEncoding=c, ivar=_isSavingSwatch, attributes=(assign,nonatomic) */
    	isSavingSwatch(): boolean;
    /* typeEncoding=@"MSColor", ivar=_pickedColor, attributes=(retain,nonatomic) */
    	pickedColor(): MSColor;
    /* typeEncoding=@"NSView", ivar=_saveColorSwatchView, attributes=(assign,nonatomic,weak) */
    	saveColorSwatchView(): cocoascript.NSView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSView", ivar=_swatchActionsView, attributes=(assign,nonatomic,weak) */
    	swatchActionsView(): cocoascript.NSView;
    /* typeEncoding=@"MSSwatchGridController", ivar=_swatchGridController, attributes=(retain,nonatomic) */
    	swatchGridController(): MSSwatchGridController;
    /* typeEncoding=@"NSString", ivar=_swatchName, attributes=(copy,nonatomic) */
    	swatchName(): cocoascript.NSString;
    /* typeEncoding=@"NSTextField", ivar=_swatchNameTextField, attributes=(assign,nonatomic,weak) */
    	swatchNameTextField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSButton", ivar=_swatchPrimaryActionButton, attributes=(assign,nonatomic,weak) */
    	swatchPrimaryActionButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_swatchSecondaryActionButton, attributes=(assign,nonatomic,weak) */
    	swatchSecondaryActionButton(): cocoascript.NSButton;
    /* typeEncoding=@16@0:8 */
    	static presetPickerVisibilityDefaultsKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	applySwatch(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	assetPickerController_shouldChangeToDisplayMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerDataSources(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	assetType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canCreateSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelEditingSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelSavingColorSwatchAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorPickerChangedTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	commitEditingSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	commitSaveToDocumentColorSwatchAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlDidSelectAsset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createPresetFromCurrentSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentSwatchReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	detachFromSwatchAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentForInspectorItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	editCurrentSwatchAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editedSwatch(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editmodeButtonsView(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	fillType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	finishEditingSwatch(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasAdvancedSettingsNib(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasValidSwatchProperties(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	highlightCurrentColor(): void;
    /* typeEncoding=c16@0:8 */
    	ignoreCollapsedState(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEditingSwatch(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSavingSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	itemDidResize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastKeyView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	performSaveColorToDocumentSwatches(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pickedColor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	popoverWillClose(): void;
    /* typeEncoding=@16@0:8 */
    	preferredFirstResponder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	saveColorSwatchView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	saveToDocumentColorsAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scrollableViews(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectColorInAssetPicker(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setCanCreateSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditedSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditmodeButtonsView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsEditingSwatch(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsSavingSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPickedColor(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	setPickedColor_multipleValues(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSaveColorSwatchView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyleParts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSwatchActionsView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSwatchGridController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSwatchName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSwatchNameTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSwatchPrimaryActionButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSwatchSecondaryActionButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	startEditingSwatch(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swatchActionsView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swatchGridController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	swatchGridController_didDetachFromSwatch(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	swatchGridController_didRequestEditSwatch(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	swatchGridController_didSelectSwatch(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	swatchGridController_shouldChangeToDisplayMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	swatchGridControllerDidChangeCollectionViewLayoutWithController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swatchName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swatchNameTextField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swatchPrimaryActionButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swatchSecondaryActionButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateRecentSwatchesWithSwatch(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateSwatchActions(): void;
    /* typeEncoding=@16@0:8 */
    	validatedSwatchName(...args: any[]): any;
  }
}

declare const MSColorInspectorSectionColor: sketchInternal.MSColorInspectorSectionColor;

