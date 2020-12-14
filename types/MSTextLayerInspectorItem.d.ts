// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextLayerInspectorItem extends MSInspectorItem {
    /* typeEncoding=@"MSInspectorValueAdaptor", ivar=_alignmentAdaptor, attributes=(retain,nonatomic) */
    	alignmentAdaptor(): MSInspectorValueAdaptor;
    /* typeEncoding=@"MSInspectorSegmentedControl", ivar=_alignmentButton, attributes=(retain,nonatomic) */
    	alignmentButton(): MSInspectorSegmentedControl;
    /* typeEncoding=@"NSView", ivar=_basicView, attributes=(retain,nonatomic) */
    	basicView(): cocoascript.NSView;
    /* typeEncoding=@"MSInspectorValueAdaptor", ivar=_colorAdapor, attributes=(retain,nonatomic) */
    	colorAdapor(): MSInspectorValueAdaptor;
    /* typeEncoding=@"MSNativeColorPanelPresenter", ivar=_colorPanelPresenter, attributes=(retain,nonatomic) */
    	colorPanelPresenter(): MSNativeColorPanelPresenter;
    /* typeEncoding=@"MSStylePartPreviewButton", ivar=_colorPickerButton, attributes=(retain,nonatomic) */
    	colorPickerButton(): MSStylePartPreviewButton;
    /* typeEncoding=@"MSTextInspectorItemDataSource", ivar=_dataSource, attributes=(retain,nonatomic) */
    	dataSource(): MSTextInspectorItemDataSource;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSTextLayerItemDelegate>", ivar=(null), attributes=(assign,dynamic,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSTextAttributeEditingContext", ivar=_editingContext, attributes=(retain,nonatomic) */
    	editingContext(): MSTextAttributeEditingContext;
    /* typeEncoding=@"NSButton", ivar=_fontFamilyButton, attributes=(retain,nonatomic) */
    	fontFamilyButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSSet", ivar=_fontPostscriptNames, attributes=(copy,nonatomic) */
    	fontPostscriptNames(): cocoascript.NSSet;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_fontSizeAdaptor, attributes=(retain,nonatomic) */
    	fontSizeAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSInlineUpDownTextFieldWithMenu", ivar=_fontSizeField, attributes=(retain,nonatomic) */
    	fontSizeField(): MSInlineUpDownTextFieldWithMenu;
    /* typeEncoding=@"NSPopUpButton", ivar=_fontWeightPopUpButton, attributes=(retain,nonatomic) */
    	fontWeightPopUpButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_fontWeightPopUpButtonTrailingConstraint, attributes=(retain,nonatomic) */
    	fontWeightPopUpButtonTrailingConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_kerningAdaptor, attributes=(retain,nonatomic) */
    	kerningAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_kerningField, attributes=(retain,nonatomic) */
    	kerningField(): MSInlineUpDownTextField;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_lineHeightAdaptor, attributes=(retain,nonatomic) */
    	lineHeightAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_lineHeightField, attributes=(retain,nonatomic) */
    	lineHeightField(): MSInlineUpDownTextField;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_paragraphHeightField, attributes=(retain,nonatomic) */
    	paragraphHeightField(): MSInlineUpDownTextField;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_paragraphSpacingAdaptor, attributes=(retain,nonatomic) */
    	paragraphSpacingAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"BCPopover", ivar=_popover, attributes=(retain,nonatomic) */
    	popover(): BCPopover;
    /* typeEncoding=@"NSTextField", ivar=_sizingLabel, attributes=(retain,nonatomic) */
    	sizingLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSSegmentedControl", ivar=_sizingSegmentedControl, attributes=(assign,nonatomic,weak) */
    	sizingSegmentedControl(): cocoascript.NSSegmentedControl;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSImmutableColor", ivar=_textColor, attributes=(retain,nonatomic) */
    	textColor(): MSImmutableColor;
    /* typeEncoding=@"NSButton", ivar=_variableFontsButton, attributes=(retain,nonatomic) */
    	variableFontsButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSSegmentedControl", ivar=_verticalAlignmentButton, attributes=(retain,nonatomic) */
    	verticalAlignmentButton(): cocoascript.NSSegmentedControl;
    /* typeEncoding=c24@0:8@16 */
    	canHandleLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initialize(): void;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	alignmentAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	alignmentButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyTextColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyUserSelectedColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	basicView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeFontFamilyTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeTextLayerFont(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorAdapor(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorInspector_didChangeToColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	colorInspectorUndoManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorInspectorWillClose(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorPanelPresenter(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorPanelPresenter_didChangeColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorPickerButton(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	companionPopoverForColorPanelPresenter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentSwatch(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentSwatchReference(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSource(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=d16@0:8 */
    	defaultLineHeight(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dismissViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	editTextPropertiesInBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editingContext(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	fontFamilyAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontFamilyButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontPostscriptNames(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontSizeAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontSizeField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontSizeMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	fontSizeMenuAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	fontWeightAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontWeightPopUpButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontWeightPopUpButtonTrailingConstraint(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	inspectorValueAdaptor_changeValueUsingBlock(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	inspectorValueAdaptor_didEncounterError(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32d40 */
    	inspectorValueAdaptor_nilOperandDropInForModel_operator_operand2(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	kerningAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	kerningField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lineHeightAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lineHeightField(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	maintainTextLayerBaselinesInBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	paragraphHeightField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	paragraphSpacingAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	popoverWillClose(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	previewButtonShouldShowColorVariablesButton(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	putFocusOnTextView(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadFontWeightPopUp(): void;
    /* typeEncoding=v16@0:8 */
    	reloadFontWeightPopUpIfNecessary(): void;
    /* typeEncoding=v16@0:8 */
    	reloadVerticalAlignmentButton(): void;
    /* typeEncoding=v24@0:8@16 */
    	setAlignmentAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAlignmentButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBasicView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorAdapor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorPanelPresenter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorPickerButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataSource(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditingContext(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontFamilyButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontPostscriptNames(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontSizeAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontSizeField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontWeightPopUpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontWeightPopUpButtonTrailingConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setKerningAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setKerningField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLineHeightAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLineHeightField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setParagraphHeightField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setParagraphSpacingAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSizingLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSizingSegmentedControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVariableFontsButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVerticalAlignmentButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showColorPickerAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showColorVariablesPopoverMenu(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	showNativeColorPanel(): void;
    /* typeEncoding=v24@0:8@16 */
    	showVariableFontsPopover(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sizingLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sizingSegmentedControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textBehaviourButtonAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textBehaviourLabelString(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	textBehaviourSegmentTag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textEventHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textViewDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	toggleColorPopover(): void;
    /* typeEncoding=v40@0:8#16@24@?32 */
    	togglePopoverOfContentClass_attachedToControl_inBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	togglePopoverWithBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	uniqueMembersByPSNameIn(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateColorButton(): void;
    /* typeEncoding=v16@0:8 */
    	updateColorPicker(): void;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=v16@0:8 */
    	updateTextBehaviour(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validateVariableFontButton(): void;
    /* typeEncoding=@16@0:8 */
    	variableFontsButton(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	variableFontsWindowController_didUpdateToFont(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	verticalAlignmentAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	verticalAlignmentButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
    /* typeEncoding=v24@0:8@16 */
    	writeRun(...args: any[]): any;
  }
}

declare const MSTextLayerInspectorItem: sketchInternal.MSTextLayerInspectorItem;

