// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginsPreferencePane extends MSPreferencePane {
    /* typeEncoding=@"NSMenu", ivar=_contextMenu, attributes=(assign,nonatomic,weak) */
    	contextMenu(): cocoascript.NSMenu;
    /* typeEncoding=@"NSControl", ivar=_contextMenuControl, attributes=(assign,nonatomic,weak) */
    	contextMenuControl(): cocoascript.NSControl;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_enableUpdateAllButton, attributes=(assign,nonatomic) */
    	enableUpdateAllButton(): boolean;
    /* typeEncoding=@"NSSearchField", ivar=_filterTextField, attributes=(assign,nonatomic,weak) */
    	filterTextField(): cocoascript.NSSearchField;
    /* typeEncoding=@"NSArray", ivar=_filteredPlugins, attributes=(copy,nonatomic) */
    	filteredPlugins(): cocoascript.NSArray;
    /* typeEncoding=@"NSButton", ivar=_getPluginsButton, attributes=(assign,nonatomic,weak) */
    	getPluginsButton(): cocoascript.NSButton;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_observingPlugins, attributes=(assign,nonatomic) */
    	observingPlugins(): boolean;
    /* typeEncoding=q, ivar=_originalHeightIncompatiblePlugin, attributes=(assign,nonatomic) */
    	originalHeightIncompatiblePlugin(): number;
    /* typeEncoding=q, ivar=_originalHeightUpdatesAvailable, attributes=(assign,nonatomic) */
    	originalHeightUpdatesAvailable(): number;
    /* typeEncoding=@"MSPluginsPreferenceTableCellView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pluginCellViewForHeightCalculations(): MSPluginsPreferenceTableCellView;
    /* typeEncoding=@"NSPredicate", ivar=_pluginFilterPredicate, attributes=(copy,nonatomic) */
    	pluginFilterPredicate(): cocoascript.NSPredicate;
    /* typeEncoding=@"MSPluginManager", ivar=_pluginManager, attributes=(assign,nonatomic,weak) */
    	pluginManager(): MSPluginManager;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	pluginSortDescriptors(): cocoascript.NSArray;
    /* typeEncoding=@"NSArrayController", ivar=_pluginsArrayController, attributes=(retain,nonatomic) */
    	pluginsArrayController(): cocoascript.NSArrayController;
    /* typeEncoding=@"NSCache", ivar=_rowHeightCache, attributes=(retain,nonatomic) */
    	rowHeightCache(): cocoascript.NSCache;
    /* typeEncoding=@"NSArray", ivar=_selectedItemIdentifiers, attributes=(retain,nonatomic) */
    	selectedItemIdentifiers(): cocoascript.NSArray;
    /* typeEncoding=@"NSButton", ivar=_spyglassFilterButton, attributes=(assign,nonatomic,weak) */
    	spyglassFilterButton(): cocoascript.NSButton;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSNib", ivar=_tableCellViewNib, attributes=(retain,nonatomic) */
    	tableCellViewNib(): cocoascript.NSNib;
    /* typeEncoding=@"BCKeyEventActionTableView", ivar=_tableView, attributes=(assign,nonatomic,weak) */
    	tableView(): BCKeyEventActionTableView;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	updatesAvailable(): boolean;
    /* typeEncoding=@"NSImage", ivar=_zeroPluginsImage, attributes=(retain,nonatomic) */
    	zeroPluginsImage(): cocoascript.NSImage;
    /* typeEncoding=@"NSImageView", ivar=_zeroPluginsImageView, attributes=(assign,nonatomic,weak) */
    	zeroPluginsImageView(): cocoascript.NSImageView;
    /* typeEncoding=@"NSString", ivar=_zeroPluginsText, attributes=(copy,nonatomic) */
    	zeroPluginsText(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_zeroPluginsTitle, attributes=(copy,nonatomic) */
    	zeroPluginsTitle(): cocoascript.NSString;
    /* typeEncoding=@"NSFont", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	zeroPluginsTitleFont(): cocoascript.NSFont;
    /* typeEncoding=@16@0:8 */
    	static identifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static openWithPluginToHighlight(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static title(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static toolbarIcon(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	activateSearchField(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	addPluginEnableToggleMenuItemWithPluginInfos_toMenu(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	areAllPluginsDisabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	areAnyPluginsDisabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	areAnyPluginsEnabled(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	attributedStringUpdateAvailableLinkForString(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	configurePluginUpdateInfoButton_withPluginInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextMenuControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidEndEditing(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v16@0:8 */
    	didSwitchToPane(): void;
    /* typeEncoding=v24@0:8@16 */
    	disableAllPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	disablePluginInfo(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	doAnyPluginsSupplyData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	draggedTypesForView(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	draggedURLsFromPasteboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	editCode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	enableAllPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	enablePluginInfo(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enableUpdateAllButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filterTextField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filteredPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	getPlugins(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	getPluginsButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	highlightPluginWithIdentifier(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithPreferencesController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	installPluginUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	installPluginUpdates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	installPluginsWithURLArray(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makePluginCellView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	observingPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openPluginURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openPluginsFolder(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	originalHeightIncompatiblePlugin(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	originalHeightUpdatesAvailable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginCellViewForHeightCalculations(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginFilterPredicate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginSortDescriptors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginsArrayController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	revealInFinder(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	rowForControl(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rowHeightCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	searchString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextMenuControl(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnableUpdateAllButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFilterTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFilteredPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGetPluginsButton(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setObservingPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setOriginalHeightIncompatiblePlugin(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setOriginalHeightUpdatesAvailable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginFilterPredicate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginsArrayController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRowHeightCache(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setSelectedIndexesFromSelectionIdentifierArray(): void;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setSelectionIdentifierArrayFromSelectionIndexes(): void;
    /* typeEncoding=v24@0:8@16 */
    	setSpyglassFilterButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableCellViewNib(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setZeroPluginsImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setZeroPluginsImageView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setZeroPluginsText(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setZeroPluginsTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	spyglassFilterButton(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	tableCellViewContainingControl(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableCellViewNib(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableContextMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=d32@0:8@16q24 */
    	tableView_heightOfRow(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableViewSelectionDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleItemsEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	togglePluginEnabled(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	toggleSelectedItemsEnabled(): void;
    /* typeEncoding=v24@0:8@16 */
    	toggleSelectedItemsEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	uninstallPlugins(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	uninstallSelectedPlugins(): void;
    /* typeEncoding=v24@0:8@16 */
    	uninstallSelectedPlugins(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	uninstallSheetInfoTextForPlugins(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	uninstallSheetMessageTextForPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	updateAndReloadPluginsWithBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateUIForPluginsChange(): void;
    /* typeEncoding=c16@0:8 */
    	updatesAvailable(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16@24 */
    	view_draggingEntered(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16@24 */
    	view_draggingUpdated(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	view_performDragOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	viewDocumentation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zeroPluginsImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zeroPluginsImageView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zeroPluginsText(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zeroPluginsTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zeroPluginsTitleFont(...args: any[]): any;
  }
}

declare const MSPluginsPreferencePane: sketchInternal.MSPluginsPreferencePane;

