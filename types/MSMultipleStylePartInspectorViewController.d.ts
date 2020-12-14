// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMultipleStylePartInspectorViewController extends NSViewController {
    /* typeEncoding=@"NSButton", ivar=_addStylePartButton, attributes=(retain,nonatomic) */
    	addStylePartButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_addStylePartHeaderWideButton, attributes=(retain,nonatomic) */
    	addStylePartHeaderWideButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_advancedOptionsButton, attributes=(retain,nonatomic) */
    	advancedOptionsButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSStylePartBlendModeButton", ivar=_blendModeButton, attributes=(retain,nonatomic) */
    	blendModeButton(): MSStylePartBlendModeButton;
    /* typeEncoding=@"NSButton", ivar=_dataButton, attributes=(retain,nonatomic) */
    	dataButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSMenu", ivar=_dataMenu, attributes=(retain,nonatomic) */
    	dataMenu(): cocoascript.NSMenu;
    /* typeEncoding=@"MSDataMenuProvider", ivar=_dataMenuProvider, attributes=(retain,nonatomic) */
    	dataMenuProvider(): MSDataMenuProvider;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSInspectorSectionDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSButton", ivar=_disabledStylePartsButton, attributes=(retain,nonatomic) */
    	disabledStylePartsButton(): cocoascript.NSButton;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=_layers, attributes=(copy,nonatomic) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=@"NSButton", ivar=_learnMoreButton, attributes=(retain,nonatomic) */
    	learnMoreButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuTitleCopy(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuTitleDuplicate(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuTitlePaste(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuTitleRemove(): cocoascript.NSString;
    /* typeEncoding=@"NSTextField", ivar=_nameField, attributes=(retain,nonatomic) */
    	nameField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSView", ivar=_nameView, attributes=(retain,nonatomic) */
    	nameView(): cocoascript.NSView;
    /* typeEncoding=@"MSReorderingContainerView", ivar=_reorderingContainer, attributes=(retain,nonatomic) */
    	reorderingContainer(): MSReorderingContainerView;
    /* typeEncoding=@"NSButton", ivar=_resetStylePartsButton, attributes=(retain,nonatomic) */
    	resetStylePartsButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSArray", ivar=_stylePartViewControllers, attributes=(retain,nonatomic) */
    	stylePartViewControllers(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	addNewStylePart(): void;
    /* typeEncoding=@16@0:8 */
    	addStylePartButonTooltip(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	addStylePartButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addStylePartButtonAction(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	addStylePartButtonState(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addStylePartHeaderWideAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	addStylePartHeaderWideButton(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	addStylePartHeaderWideButtonState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	addStylePartsForSelection(): void;
    /* typeEncoding=@16@0:8 */
    	advancedOptionsButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	advancedOptionsButtonAction(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	advancedOptionsButtonState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	advancedOptionsButtonTooltip(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	blendModeButton(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	blendModeButtonState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	closePopovers(): void;
    /* typeEncoding=v40@0:8@16Q24Q32 */
    	containerBackground_dragDidReorderChildAtIndex_toIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentViews(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16q24 */
    	contextMenuForSupportedActions_atIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	copyStylePartAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	createInspectorForStyleParts(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataButton(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	dataButtonState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataButtonTooltip(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataMenuProvider(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteStylePartAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	disabledStylePartsButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	disabledStylePartsButtonAction(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	disabledStylePartsButtonState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	disabledStylePartsButtonTooltip(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentForStylePartBlendButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	duplicateStylePartAction(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledStyle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasPopOver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertStylePart_atIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	learnMoreButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	learnMoreButtonAction(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	learnMoreButtonState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	learnMoreButtonTooltip(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadViewControllers(): void;
    /* typeEncoding=@16@0:8 */
    	menuTitleCopy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuTitleDuplicate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuTitlePaste(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuTitleRemove(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nameField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nameView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nibName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pasteStylePartAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepare(): void;
    /* typeEncoding=v16@0:8 */
    	prepareForReuse(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadInspectorStack(): void;
    /* typeEncoding=@16@0:8 */
    	reorderingContainer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	resetStylePartsButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resetStylePartsButtonAction(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	resetStylePartsButtonState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resizeViewToFit(): void;
    /* typeEncoding=@16@0:8 */
    	rotatedStyleParts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAddStylePartButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAddStylePartHeaderWideButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAdvancedOptionsButton(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@24 */
    	setBlendMode_sender(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBlendModeButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataMenuProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDisabledStylePartsButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLearnMoreButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNameField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNameView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReorderingContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setResetStylePartsButton(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@24 */
    	setStatus_forButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStylePartViewControllers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showDataMenu(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	startingOffsetForStackingContainerBackground(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	styleDidEnableOrDisable(): void;
    /* typeEncoding=#16@0:8 */
    	stylePartInspectorClass(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	stylePartType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stylePartViewControllers(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	stylePartsAtIndex(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	supportedActionsForLayers(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	tagFromSender(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	updateInspector_index(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validateDataButtonState(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validateSpecialButtons(): void;
    /* typeEncoding=@32@0:8q16Q24 */
    	viewForStyleAtOffset_index(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
  }
}

declare const MSMultipleStylePartInspectorViewController: sketchInternal.MSMultipleStylePartInspectorViewController;

