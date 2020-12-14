// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSManageForeignSymbolsView extends NSViewController {
    /* typeEncoding=c, ivar=_cogEnabled, attributes=(assign,nonatomic) */
    	cogEnabled(): boolean;
    /* typeEncoding=@"NSMenu", ivar=_contextMenu, attributes=(retain,nonatomic) */
    	contextMenu(): cocoascript.NSMenu;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSArray", ivar=_symbols, attributes=(retain,nonatomic) */
    	symbols(): cocoascript.NSArray;
    /* typeEncoding=@"NSTableView", ivar=_tableView, attributes=(retain,nonatomic) */
    	tableView(): cocoascript.NSTableView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	buildSymbolList(): void;
    /* typeEncoding=c16@0:8 */
    	cogEnabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	editInLibrary(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setCogEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showContextMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_objectValueForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableViewSelectionDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	unlinkFromLibrary(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSManageForeignSymbolsView: sketchInternal.MSManageForeignSymbolsView;

