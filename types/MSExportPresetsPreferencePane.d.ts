// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportPresetsPreferencePane extends MSPreferencePane {
    /* typeEncoding=@"NSButton", ivar=_addButton, attributes=(assign,nonatomic,weak) */
    	addButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_addFormatButton, attributes=(assign,nonatomic,weak) */
    	addFormatButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=d, ivar=_designedExportFormatFooterBottomDistance, attributes=(assign,nonatomic,readonly) */
    	designedExportFormatFooterBottomDistance(): number;
    /* typeEncoding={CGSize=dd}, ivar=_designedSize, attributes=(assign,nonatomic,readonly) */
    	designedSize(): CGSize;
    /* typeEncoding=@"NSView", ivar=_exportFormatEditorView, attributes=(assign,nonatomic,weak) */
    	exportFormatEditorView(): cocoascript.NSView;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_exportFormatFooterBottomConstraint, attributes=(assign,nonatomic,weak) */
    	exportFormatFooterBottomConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=@"NSView", ivar=_exportFormatFooterView, attributes=(assign,nonatomic,weak) */
    	exportFormatFooterView(): cocoascript.NSView;
    /* typeEncoding=@"NSArray", ivar=_exportFormatViewControllers, attributes=(retain,nonatomic) */
    	exportFormatViewControllers(): cocoascript.NSArray;
    /* typeEncoding=@"NSStackView", ivar=_exportFormatsView, attributes=(assign,nonatomic,weak) */
    	exportFormatsView(): cocoascript.NSStackView;
    /* typeEncoding=@"MSExportFormatViewController", ivar=_exportFormatsViewController, attributes=(assign,nonatomic,weak) */
    	exportFormatsViewController(): MSExportFormatViewController;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSView", ivar=_noPresetsPlaceholderView, attributes=(assign,nonatomic,weak) */
    	noPresetsPlaceholderView(): cocoascript.NSView;
    /* typeEncoding=@"NSTextField", ivar=_presetNameTextField, attributes=(assign,nonatomic,weak) */
    	presetNameTextField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	presets(): cocoascript.NSArray;
    /* typeEncoding=@"NSButton", ivar=_removeButton, attributes=(assign,nonatomic,weak) */
    	removeButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSExportPreset", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectedPreset(): MSExportPreset;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTableView", ivar=_tableView, attributes=(assign,nonatomic,weak) */
    	tableView(): cocoascript.NSTableView;
    /* typeEncoding=c24@0:8@16 */
    	static exportPresetWithNameExists(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static identifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static localizedNewExportPresetName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static title(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static toolbarIcon(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	addButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addExportFormat(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addExportPreset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	addFormatButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustFirstResponderIfNeeded(): void;
    /* typeEncoding=v24@0:8@16 */
    	commitExportPresetName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	commitPendingTextEditsIfNeeded(): void;
    /* typeEncoding=d16@0:8 */
    	designedExportFormatFooterBottomDistance(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	designedSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	editExportPreset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportFormatEditorView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportFormatFooterBottomConstraint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportFormatFooterView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportFormatViewControllers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportFormatsView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportFormatsViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	globalAssets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	noPresetsPlaceholderView(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pickDefaultExportPreset(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	preferredSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presetNameTextField(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	presetWithDisplayName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presets(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshExportFormats(): void;
    /* typeEncoding=v16@0:8 */
    	refreshExportPresets(): void;
    /* typeEncoding=@16@0:8 */
    	removeButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeExportFormatFromPreset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeExportPreset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreDefaultExportPresets(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	selectPreset(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	selectPresetAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedPreset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAddButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAddFormatButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportFormatEditorView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportFormatFooterBottomConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportFormatFooterView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportFormatViewControllers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportFormatsView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportFormatsViewController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNoPresetsPlaceholderView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPresetNameTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRemoveButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_objectValueForTableColumn_row(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableViewSelectionDidChange(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	uniqueNonEmptyName_forPreset(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSExportPresetsPreferencePane: sketchInternal.MSExportPresetsPreferencePane;

