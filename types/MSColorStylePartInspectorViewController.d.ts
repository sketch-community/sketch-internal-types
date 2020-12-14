// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorStylePartInspectorViewController extends MSStylePartInspectorViewController {
    /* typeEncoding=@"MSStylePartPreviewButton", ivar=_colorButton, attributes=(retain,nonatomic) */
    	colorButton(): MSStylePartPreviewButton;
    /* typeEncoding=@"MSColorInspector", ivar=_colorInspector, attributes=(assign,nonatomic,weak) */
    	colorInspector(): MSColorInspector;
    /* typeEncoding=@"MSNativeColorPanelPresenter", ivar=_colorPanelPresenter, attributes=(retain,nonatomic) */
    	colorPanelPresenter(): MSNativeColorPanelPresenter;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"BCPopover", ivar=_popover, attributes=(retain,nonatomic) */
    	popover(): BCPopover;
    /* typeEncoding=@"MSInspectorValueAdaptor", ivar=_stylePartAdaptor, attributes=(retain,nonatomic) */
    	stylePartAdaptor(): MSInspectorValueAdaptor;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8Q16 */
    	fillTypeStringForFillType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	supportedPasteboardTypesForColorPreviewButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	applyUserSelectedColors(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	checkBoxAction(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	closePopoverImmediately(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorInspector(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorInspector_didChangeToColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorInspectorDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorPanelPresenter(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorPanelPresenter_didChangeColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	companionPopoverForColorPanelPresenter(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	currentStylePartsContainGradient(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v16@0:8 */
    	didGetAddedToInspector(): void;
    /* typeEncoding=v24@0:8@16 */
    	dismissViewController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentForStylePartBlendButton(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	draggedTypesForView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	getFirstColorFromCurrentStyleParts(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	openColorPanelPreferringNative(): void;
    /* typeEncoding=v24@0:8@16 */
    	pickColorVariableAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popover(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepare(): void;
    /* typeEncoding=c16@0:8 */
    	previewButtonShouldShowColorVariablesButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	previewCellAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	readSwatchReferencesFromPasteboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=c40@0:8@16{CGPoint=dd}24 */
    	reorderingView_shouldDeleteItemForDragPosition(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreWithState_ms(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@24 */
    	setBlendMode_sender(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorInspector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorPanelPresenter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFirstColorForCurrentStyleParts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStylePartAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showColorVariablesPopoverMenu(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	showNativeColorPanelIfSuitable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stylePartAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	stylePartPreviewButtonDisabledAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	togglePopover(): void;
    /* typeEncoding=v16@0:8 */
    	updateBlendMode(): void;
    /* typeEncoding=v16@0:8 */
    	updateColorInActiveInspector(): void;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=Q32@0:8@16@24 */
    	view_draggingEntered(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	view_performDragOperation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@16@0:8 */
    	viewRestorationState_ms(...args: any[]): any;
  }
}

declare const MSColorStylePartInspectorViewController: sketchInternal.MSColorStylePartInspectorViewController;

