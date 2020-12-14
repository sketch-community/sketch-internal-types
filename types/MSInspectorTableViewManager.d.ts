// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInspectorTableViewManager extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSInspectorTableViewManagerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	itemIndexPathForRowIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	manageTableView(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	refreshTableView_ifNecessary(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	sectionForRow(...args: any[]): any;
    /* typeEncoding=@32@0:8^Q16Q24 */
    	sectionItemIndex_forRowIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sections(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24q32 */
    	tableView_didAddRowView_forRow(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24q32 */
    	tableView_didRemoveRowView_forRow(...args: any[]): any;
    /* typeEncoding=d32@0:8@16q24 */
    	tableView_heightOfRow(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	visibleItemsInTableView(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	wantsSeparatorForRow(...args: any[]): any;
  }
}

declare const MSInspectorTableViewManager: sketchInternal.MSInspectorTableViewManager;

