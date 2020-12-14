// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetLibrariesPreferencePane extends MSPreferencePane {
    /* typeEncoding=@"MSAssetLibraryController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	assetLibraryController(): MSAssetLibraryController;
    /* typeEncoding=@"NSWindow", ivar=_chooseLibraryPanelWindow, attributes=(assign,nonatomic,weak) */
    	chooseLibraryPanelWindow(): cocoascript.NSWindow;
    /* typeEncoding=@"NSMenu", ivar=_contextMenu, attributes=(retain,nonatomic) */
    	contextMenu(): cocoascript.NSMenu;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSWindow", ivar=_duplicateLibraryAlertWindow, attributes=(assign,nonatomic,weak) */
    	duplicateLibraryAlertWindow(): cocoascript.NSWindow;
    /* typeEncoding=@"NSSearchField", ivar=_filterTextField, attributes=(retain,nonatomic) */
    	filterTextField(): cocoascript.NSSearchField;
    /* typeEncoding=@"NSWindow", ivar=_genericAlertWindow, attributes=(assign,nonatomic,weak) */
    	genericAlertWindow(): cocoascript.NSWindow;
    /* typeEncoding=c, ivar=_hasAssets, attributes=(assign,nonatomic) */
    	hasAssets(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=_items, attributes=(retain,nonatomic) */
    	items(): cocoascript.NSArray;
    /* typeEncoding=@"NSArrayController", ivar=_librariesArrayController, attributes=(retain,nonatomic) */
    	librariesArrayController(): cocoascript.NSArrayController;
    /* typeEncoding=@"NSPredicate", ivar=_librariesFilterPredicate, attributes=(copy,nonatomic) */
    	librariesFilterPredicate(): cocoascript.NSPredicate;
    /* typeEncoding=@"NSWindow", ivar=_libraryInstallerAlertWindow, attributes=(assign,nonatomic,weak) */
    	libraryInstallerAlertWindow(): cocoascript.NSWindow;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	previewableItems(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectedLibraries(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selection(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=_shouldEnableCogMenu, attributes=(assign,nonatomic) */
    	shouldEnableCogMenu(): boolean;
    /* typeEncoding=@"NSButton", ivar=_spyglassFilterButton, attributes=(retain,nonatomic) */
    	spyglassFilterButton(): cocoascript.NSButton;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSAssetLibraryTableView", ivar=_tableView, attributes=(assign,nonatomic,weak) */
    	tableView(): MSAssetLibraryTableView;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIcon(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c24@0:8@16 */
    	acceptsPreviewPanelControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	activateSearchField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addLibrariesFromURLS(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addNextLibraryFromURLs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetLibraryController(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	availableUserLibrariesFromLibraries(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	beginPreviewPanelControl(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canLocateLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	chooseLibraryPanelWindow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidEndEditing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dismissAlertSheet(): void;
    /* typeEncoding=@56@0:8@16@24@32@40@?48 */
    	displayAlertSheetWithMessageText_informativeText_buttonTitle_cancelButton_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	displayCloudAlertSheetForError(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	displayDuplicateAlertSheetForRemoteAssetLibrary(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	displayGenericAlertSheetWithError_completionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	displayInstallerAlertSheetForRemoteAssetLibrary(): void;
    /* typeEncoding=c24@0:8@16 */
    	doesNewPredicateGiveDifferentResult(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doubleClickOpenAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	draggedTypesForView(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	draggedURLsFromPasteboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	duplicateLibraryAlertWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	duplicateLibraryDisabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	endPreviewPanelControl(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filterTextField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	genericAlertWindow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasAssets(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDisabledLibrariesSelected(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	importLibraryAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	items(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	learnMoreAboutLibraries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	librariesArrayController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	librariesFilterPredicate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	libraryControllerDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryInstallerAlertWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	libraryNameDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	locateLibraryAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	menuForEvent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	multipleLibrariesSelected(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfPreviewItemsInPreviewPanel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openInSketchAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	preferenceItemHasUpdated(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	previewPanel_handleEvent(...args: any[]): any;
    /* typeEncoding=@32@0:8@16q24 */
    	previewPanel_previewItemAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewableItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	reloadSelectingLibrary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeLibraryAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	revealInFinderAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	scrollToFirstLibraryWithUpdateAvailable(): void;
    /* typeEncoding=@16@0:8 */
    	searchString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLibraries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChooseLibraryPanelWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDuplicateLibraryAlertWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFilterTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGenericAlertWindow(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasAssets(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibrariesArrayController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibrariesFilterPredicate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryInstallerAlertWindow(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldEnableCogMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSpyglassFilterButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldEnableCogMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showContextMenu(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sketchShareURLsFromLibraries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	spyglassFilterButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	startDownloadForRemoteLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	syncLibraryItems(): void;
    /* typeEncoding=@24@0:8@16 */
    	tableCellForLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=d32@0:8@16q24 */
    	tableView_heightOfRow(...args: any[]): any;
    /* typeEncoding=@32@0:8@16q24 */
    	tableView_rowViewForRow(...args: any[]): any;
    /* typeEncoding=c32@0:8@16q24 */
    	tableView_shouldSelectRow(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	tableView_shouldTypeSelectForEvent_withCurrentSearchString(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableViewSelectionDidChange(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	teamNameForLibrary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleLibraryEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleQLPreview(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateQLPreview(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateLocateLibraryMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateOpenInSketchMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateRemoveLibraryMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateRevealInFinderMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateToggleLibraryMenuItem(...args: any[]): any;
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
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
  }
}

declare const MSAssetLibrariesPreferencePane: sketchInternal.MSAssetLibrariesPreferencePane;

