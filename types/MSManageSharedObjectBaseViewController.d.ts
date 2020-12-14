// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSManageSharedObjectBaseViewController extends NSViewController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sharedObjectsSortedByName(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTableView", ivar=_tableView, attributes=(retain,nonatomic) */
    	tableView(): cocoascript.NSTableView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8@16 */
    	deleteSelectedObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeSharedObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedObjectsSortedByName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_objectValueForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32q40 */
    	tableView_setObjectValue_forTableColumn_row(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidAppear(): void;
  }
}

declare const MSManageSharedObjectBaseViewController: sketchInternal.MSManageSharedObjectBaseViewController;

