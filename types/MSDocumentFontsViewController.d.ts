// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentFontsViewController extends NSViewController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSDocument;
    /* typeEncoding=@"NSButton", ivar=_doneButton, attributes=(assign,nonatomic,weak) */
    	doneButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSArray", ivar=_fonts, attributes=(copy,nonatomic) */
    	fonts(): cocoascript.NSArray;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSTextField", ivar=_headerMessageField, attributes=(assign,nonatomic,weak) */
    	headerMessageField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_headerTitleField, attributes=(assign,nonatomic,weak) */
    	headerTitleField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSView", ivar=_noFontsView, attributes=(assign,nonatomic,weak) */
    	noFontsView(): cocoascript.NSView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTableView", ivar=_tableView, attributes=(retain,nonatomic) */
    	tableView(): cocoascript.NSTableView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	applyPendingFontChanges(): void;
    /* typeEncoding=v32@0:8q16@24 */
    	beginReplaceActionForRow_button(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirm(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	doneButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fonts(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerMessageField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerTitleField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	noFontsView(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	prepareForSegue_sender(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@24 */
    	replaceFontAtRow_withFont(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDoneButton(...args: any[]): any;
    /* typeEncoding=v28@0:8c16@20 */
    	setEmbedded_forDocumentFont(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFonts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderMessageField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderTitleField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNoFontsView(...args: any[]): any;
    /* typeEncoding=v28@0:8c16q20 */
    	setShouldEmbed_forFontAtRow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showContextHelp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	systemFontsChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=c32@0:8@16q24 */
    	tableView_shouldSelectRow(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateFonts(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
  }
}

declare const MSDocumentFontsViewController: sketchInternal.MSDocumentFontsViewController;

