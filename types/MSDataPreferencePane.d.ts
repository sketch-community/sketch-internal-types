// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataPreferencePane extends MSPreferencePane {
    /* typeEncoding=@"NSWindow", ivar=_chooseDataPanelWindow, attributes=(assign,nonatomic,weak) */
    	chooseDataPanelWindow(): cocoascript.NSWindow;
    /* typeEncoding=@"NSMenu", ivar=_contextMenu, attributes=(retain,nonatomic) */
    	contextMenu(): cocoascript.NSMenu;
    /* typeEncoding=@"NSArray", ivar=_data, attributes=(copy,nonatomic) */
    	data(): cocoascript.NSArray;
    /* typeEncoding=@"NSArrayController", ivar=_dataArrayController, attributes=(retain,nonatomic) */
    	dataArrayController(): cocoascript.NSArrayController;
    /* typeEncoding=@"NSPredicate", ivar=_dataFilterPredicate, attributes=(copy,nonatomic) */
    	dataFilterPredicate(): cocoascript.NSPredicate;
    /* typeEncoding=@"MSDataSupplierManager", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataSupplierManager(): MSDataSupplierManager;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_enableShowInFinder, attributes=(assign,nonatomic) */
    	enableShowInFinder(): boolean;
    /* typeEncoding=@"NSSearchField", ivar=_filterTextField, attributes=(retain,nonatomic) */
    	filterTextField(): cocoascript.NSSearchField;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectedData(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_selectedItemIdentifiers, attributes=(copy,nonatomic) */
    	selectedItemIdentifiers(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=_shouldEnableCogMenu, attributes=(assign,nonatomic) */
    	shouldEnableCogMenu(): boolean;
    /* typeEncoding=@"NSButton", ivar=_spyglassFilterButton, attributes=(retain,nonatomic) */
    	spyglassFilterButton(): cocoascript.NSButton;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSDataTableView", ivar=_tableView, attributes=(assign,nonatomic,weak) */
    	tableView(): MSDataTableView;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIcon(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	activateSearchField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addLocalDataFromURLs(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	alertMessageTextForRemovingDataSuppliers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	chooseDataPanelWindow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidEndEditing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataArrayController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataFilterPredicate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSupplierManager(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	didSwitchToPane(): void;
    /* typeEncoding=v16@0:8 */
    	dismissAlertSheet(): void;
    /* typeEncoding=@24@0:8@16 */
    	draggedTypesForView(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	draggedURLsFromPasteboard(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enableShowInFinder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filterTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	importLocalData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	learnMore(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	menuForEvent(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadData(): void;
    /* typeEncoding=v24@0:8@16 */
    	removeDataAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeLocalDataSupplierGroupsContainedByURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	revealInFinder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	revealInFinderAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	revealLocalDataItemInFinder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	searchString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	selectionDidChange(): void;
    /* typeEncoding=v24@0:8@16 */
    	setChooseDataPanelWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataArrayController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataFilterPredicate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnableShowInFinder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFilterTextField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setSelectedIndexesFromSelectionIdentifierArray(): void;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setSelectionIdentifierArrayFromSelectionIndexes(): void;
    /* typeEncoding=v20@0:8c16 */
    	setShouldEnableCogMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSpyglassFilterButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldEnableCogMenu(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	showAddLocalDataErrorWithMessage_info(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showContextMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showDataSupplierGroupAlreadyAddedMessage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showFailedToAddDataSupplierFromURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showPlugin(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	spyglassFilterButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableViewSelectionDidChange(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateRemoveDataMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateRevealInFinderMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateShowPluginMenuItem(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16@24 */
    	view_draggingEntered(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16@24 */
    	view_draggingUpdated(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	view_performDragOperation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSDataPreferencePane: sketchInternal.MSDataPreferencePane;

