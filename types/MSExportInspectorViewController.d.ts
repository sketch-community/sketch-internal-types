// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportInspectorViewController extends MSInspectorItem {
    /* typeEncoding=@"NSButton", ivar=_addExportFormatButton, attributes=(retain,nonatomic) */
    	addExportFormatButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSView", ivar=_bottomLabelView, attributes=(retain,nonatomic) */
    	bottomLabelView(): cocoascript.NSView;
    /* typeEncoding=@"NSTextField", ivar=_exportFormatLabelTextField, attributes=(retain,nonatomic) */
    	exportFormatLabelTextField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSButton", ivar=_exportPresetsMenuButton, attributes=(retain,nonatomic) */
    	exportPresetsMenuButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSArray", ivar=_formatViewControllers, attributes=(copy,nonatomic) */
    	formatViewControllers(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasExports(): boolean;
    /* typeEncoding=@"MSHeaderInspectorItem", ivar=_headerItem, attributes=(retain,nonatomic) */
    	headerItem(): MSHeaderInspectorItem;
    /* typeEncoding=@"NSTextField", ivar=_headerLabel, attributes=(retain,nonatomic) */
    	headerLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSButton", ivar=_knifeButton, attributes=(retain,nonatomic) */
    	knifeButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSView", ivar=_nameView, attributes=(retain,nonatomic) */
    	nameView(): cocoascript.NSView;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_textLabelRightConstraint, attributes=(retain,nonatomic) */
    	textLabelRightConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=d, ivar=_textLabelRightConstraintExpandedWidth, attributes=(assign,nonatomic) */
    	textLabelRightConstraintExpandedWidth(): number;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	views(): cocoascript.NSArray;
    /* typeEncoding=c24@0:8@16 */
    	static canHandleLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addExportFormat(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	addExportFormatButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addExportPreset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyExportPreset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bottomLabelView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	createSliceAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	editExportPresets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportFormatLabelTextField(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	exportPresetAppliesToSelectedLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportPresetsMenuButton(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	findExportFormatAmong_equalToFormat(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstResponderIgnoringFieldEditor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	formatViewControllers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledStyle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasExports(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	knifeButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nameView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepare(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rotatedSlices(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAddExportFormatButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBottomLabelView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportFormatLabelTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportPresetsMenuButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFormatViewControllers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setKnifeButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNameView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextLabelRightConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTextLabelRightConstraintExpandedWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showExportPresetMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textLabelRightConstraint(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	textLabelRightConstraintExpandedWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	unApplyAllExportPresets(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
  }
}

declare const MSExportInspectorViewController: sketchInternal.MSExportInspectorViewController;

