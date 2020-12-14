// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRunCustomScriptSheet extends CHSheetController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"JSTTextView", ivar=_inputField, attributes=(retain,nonatomic) */
    	inputField(): JSTTextView;
    /* typeEncoding=@"NSTextView", ivar=_logField, attributes=(retain,nonatomic) */
    	logField(): cocoascript.NSTextView;
    /* typeEncoding=@"NSButton", ivar=_runButton, attributes=(retain,nonatomic) */
    	runButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_saveButton, attributes=(retain,nonatomic) */
    	saveButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_saveButtonToScriptNameConstraint, attributes=(retain,nonatomic) */
    	saveButtonToScriptNameConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=@"NSTextField", ivar=_scriptNameField, attributes=(retain,nonatomic) */
    	scriptNameField(): cocoascript.NSTextField;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSButton", ivar=_touchBarRun, attributes=(assign,nonatomic,weak) */
    	touchBarRun(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_touchBarSave, attributes=(assign,nonatomic,weak) */
    	touchBarSave(): cocoascript.NSButton;
    /* typeEncoding=@"NSUndoManager", ivar=_undoManager, attributes=(retain,nonatomic) */
    	undoManager(): cocoascript.NSUndoManager;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@24@0:8@16 */
    	commandToRunWithName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inputField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logField(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	redoAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	runButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	runScript(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	saveAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	saveButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	saveButtonToScriptNameConstraint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scriptNameField(...args: any[]): any;
    /* typeEncoding=:24@0:8@16 */
    	selectorForTouchbarItemIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInputField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRunButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSaveButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSaveButtonToScriptNameConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScriptNameField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTouchBarRun(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTouchBarSave(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUndoManager(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	sheetWillClose(): void;
    /* typeEncoding=v24@0:8@16 */
    	showHelp(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	touchBar_makeItemForIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	touchBarItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	touchBarRun(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	touchBarSave(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	undoAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	undoManager(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	undoManagerForTextView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
  }
}

declare const MSRunCustomScriptSheet: sketchInternal.MSRunCustomScriptSheet;

