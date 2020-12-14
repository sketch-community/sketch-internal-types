// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetSyncSheet extends CHSheetController {
    /* typeEncoding=@"MSSharedObjectView", ivar=_currentSharedObjectView, attributes=(assign,nonatomic,weak) */
    	currentSharedObjectView(): MSSharedObjectView;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	document(): MSDocument;
    /* typeEncoding=c, ivar=_hasSyncableItems, attributes=(assign,nonatomic) */
    	hasSyncableItems(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSSplitView", ivar=_splitView, attributes=(assign,nonatomic,weak) */
    	splitView(): cocoascript.NSSplitView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSArray", ivar=_tableViewData, attributes=(assign,nonatomic,readonly) */
    	tableViewData(): cocoascript.NSArray;
    /* typeEncoding=@"MSSharedObjectView", ivar=_updatedSharedObjectView, attributes=(assign,nonatomic,weak) */
    	updatedSharedObjectView(): MSSharedObjectView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	buildTableViewData(): void;
    /* typeEncoding=q32@0:8@16@24 */
    	compareSyncSheetItem_toItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentSharedObjectView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasSyncableItems(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentSharedObjectView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasSyncableItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSplitView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpdatedSharedObjectView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	splitView(...args: any[]): any;
    /* typeEncoding=d40@0:8@16d24q32 */
    	splitView_constrainMaxCoordinate_ofSubviewAt(...args: any[]): any;
    /* typeEncoding=d40@0:8@16d24q32 */
    	splitView_constrainSplitPosition_ofSubviewAt(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	splitView_shouldAdjustSizeOfSubview(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24q32 */
    	tableView_didAddRowView_forRow(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_objectValueForTableColumn_row(...args: any[]): any;
    /* typeEncoding=c32@0:8@16q24 */
    	tableView_shouldSelectRow(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableViewData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableViewSelectionDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateSelectedForSync(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateSymbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updatedSharedObjectView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
  }
}

declare const MSAssetSyncSheet: sketchInternal.MSAssetSyncSheet;

