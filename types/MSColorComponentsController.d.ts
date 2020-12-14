// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorComponentsController extends NSViewController {
    /* typeEncoding=@"MSFlexibleColor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	color(): MSFlexibleColor;
    /* typeEncoding=q, ivar=_colorModel, attributes=(assign,nonatomic) */
    	colorModel(): number;
    /* typeEncoding=@"MSAutoSelectingArrayController", ivar=_colorsController, attributes=(retain,nonatomic) */
    	colorsController(): MSAutoSelectingArrayController;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_component1Adaptor, attributes=(retain,nonatomic) */
    	component1Adaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"NSTextField", ivar=_component1Field, attributes=(retain,nonatomic) */
    	component1Field(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_component1Label, attributes=(retain,nonatomic) */
    	component1Label(): cocoascript.NSTextField;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_component2Adaptor, attributes=(retain,nonatomic) */
    	component2Adaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"NSTextField", ivar=_component2Field, attributes=(retain,nonatomic) */
    	component2Field(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_component2Label, attributes=(retain,nonatomic) */
    	component2Label(): cocoascript.NSTextField;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_component3Adaptor, attributes=(retain,nonatomic) */
    	component3Adaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"NSTextField", ivar=_component3Field, attributes=(retain,nonatomic) */
    	component3Field(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_component3Label, attributes=(retain,nonatomic) */
    	component3Label(): cocoascript.NSTextField;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_component4Adaptor, attributes=(retain,nonatomic) */
    	component4Adaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"NSTextField", ivar=_component4Field, attributes=(retain,nonatomic) */
    	component4Field(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_component4Label, attributes=(retain,nonatomic) */
    	component4Label(): cocoascript.NSTextField;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSColorComponentsControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstKeyView(): cocoascript.NSView;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSInspectorValueAdaptor", ivar=_hexAdaptor, attributes=(retain,nonatomic) */
    	hexAdaptor(): MSInspectorValueAdaptor;
    /* typeEncoding=@"NSTextField", ivar=_hexField, attributes=(retain,nonatomic) */
    	hexField(): cocoascript.NSTextField;
    /* typeEncoding=@"MSFlexibleColorHexStringTransformer", ivar=_hexTransformer, attributes=(retain,nonatomic) */
    	hexTransformer(): MSFlexibleColorHexStringTransformer;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lastKeyView(): cocoascript.NSView;
    /* typeEncoding=@"NSUndoManager", ivar=_localUndoManager, attributes=(retain,nonatomic) */
    	localUndoManager(): cocoascript.NSUndoManager;
    /* typeEncoding=@"MSColorModelPicker", ivar=_modelPicker, attributes=(retain,nonatomic) */
    	modelPicker(): MSColorModelPicker;
    /* typeEncoding=@"NSView", ivar=_modelPickerContainer, attributes=(retain,nonatomic) */
    	modelPickerContainer(): cocoascript.NSView;
    /* typeEncoding=c, ivar=_multipleColors, attributes=(assign,nonatomic) */
    	multipleColors(): boolean;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	preferredFirstResponder(): cocoascript.NSView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=d32@0:8Q16q24 */
    	static displayScaleValueForComponentIndex_colorModel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=@40@0:8d16q24@32 */
    	colorBySettingComponentDisplayValue_atIndex_forColor(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	colorModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorModelPickerDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorsController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component1Adaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component1Field(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component1Label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component2Adaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component2Field(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component2Label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component3Adaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component3Field(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component3Label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component4Adaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component4Field(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	component4Label(...args: any[]): any;
    /* typeEncoding=d32@0:8q16@24 */
    	componentDisplayValueAt_forColor(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	createAndSetupValueAdaptorForComponentIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstKeyView(...args: any[]): any;
    /* typeEncoding=v32@0:8[4d]16@24 */
    	getComponents_forColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hexAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hexField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hexTransformer(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	inspectorValueAdaptorDidChangeValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastKeyView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localUndoManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelPicker(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelPickerContainer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	multipleColors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preferredFirstResponder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	redo(...args: any[]): any;
    /* typeEncoding=c24@0:8:16 */
    	respondsToSelector(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	setColor_multipleValues(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setColorModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorsController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent1Adaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent1Field(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent1Label(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent2Adaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent2Field(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent2Label(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent3Adaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent3Field(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent3Label(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent4Adaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent4Field(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponent4Label(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHexAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHexField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHexTransformer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocalUndoManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setModelPicker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setModelPickerContainer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setMultipleColors(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldForceMultipleValuesForAdaptor(...args: any[]): any;
    /* typeEncoding=@24@0:8:16 */
    	textFieldEligibleForAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textFields(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	undo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	undoManager(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateUI(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSColorComponentsController: sketchInternal.MSColorComponentsController;

