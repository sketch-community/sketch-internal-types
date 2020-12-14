// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSymbolInstanceSection extends MSBaseInspectorSection {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSSymbolInstanceSectionDelegate>", ivar=(null), attributes=(assign,dynamic,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSCollapsibleHeaderInspectorItem", ivar=_headerItem, attributes=(retain,nonatomic) */
    	headerItem(): MSCollapsibleHeaderInspectorItem;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	numberOfItems(): number;
    /* typeEncoding=@"MSTableContainerInspectorItem", ivar=_overrideContainerItem, attributes=(retain,nonatomic) */
    	overrideContainerItem(): MSTableContainerInspectorItem;
    /* typeEncoding=@"NSMutableArray<MSSymbolOverrideItemDescription>", ivar=_overrideItemDescriptions, attributes=(retain,nonatomic) */
    	overrideItemDescriptions(): any;
    /* typeEncoding=@"NSMutableDictionary", ivar=_rowHeightCache, attributes=(retain,nonatomic) */
    	rowHeightCache(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSArray", ivar=_selectedOverrides, attributes=(copy,nonatomic) */
    	selectedOverrides(): cocoascript.NSArray;
    /* typeEncoding=@"MSSharedSymbolStylesInspectorItem", ivar=_sharedStyleItem, attributes=(retain,nonatomic) */
    	sharedStyleItem(): MSSharedSymbolStylesInspectorItem;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"_TtC6Sketch29MSSymbolInstanceInspectorItem", ivar=_symbolItem, attributes=(retain,nonatomic) */
    	symbolItem(): _TtC6Sketch29MSSymbolInstanceInspectorItem;
    /* typeEncoding=@"MSInspectorTableViewManager", ivar=_tableViewManager, attributes=(retain,nonatomic) */
    	tableViewManager(): MSInspectorTableViewManager;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v44@0:8@16@24c32q36 */
    	cacheHeight_forOverrideRepresentation_shouldShowLabel_indentationLevel(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	containedByOverrideFor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	containedOverrideFor(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	diffContainsChangeRequiringReload(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	displaysLabelAtIndex(...args: any[]): any;
    /* typeEncoding=d36@0:8@16c24q28 */
    	getAndCacheHeightForOverrideRepresentation_shouldShowLabel_indentationLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerItem(...args: any[]): any;
    /* typeEncoding=d24@0:8Q16 */
    	heightOfItemViewAtIndex(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	item_wantsSectionToCollapse(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	numberOfItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overrideContainerItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overrideItemDescriptions(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	parentViewControllerForTableViewManager(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	recursivelyGatherOverrideItemsForOverrides_into(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	recycleItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreWithState_ms(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rowHeightCache(...args: any[]): any;
    /* typeEncoding=@36@0:8@16c24q28 */
    	rowHeightCacheKeyForOverrideRepresentation_shouldShowLabel_indentationLevel(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sectionsForTableViewManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedOverrides(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverrideContainerItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverrideItemDescriptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRowHeightCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedOverrides(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSharedStyleItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSymbolItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableViewManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedStyleItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableViewManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	uniqueArtboardIDsOfSelectedLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateItems(): void;
    /* typeEncoding=@24@0:8@16 */
    	userInterfaceCacheForItem(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	vendItemAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	viewRestorationState_ms(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	wantSeparatorAtIndex(...args: any[]): any;
  }
}

declare const MSSymbolInstanceSection: sketchInternal.MSSymbolInstanceSection;

