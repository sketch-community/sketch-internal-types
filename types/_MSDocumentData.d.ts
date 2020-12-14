// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface _MSDocumentData extends MSModelObject {
    /* typeEncoding=@"MSAssetCollection", ivar=_assets, attributes=(retain,nonatomic) */
    	assets(): MSAssetCollection;
    /* typeEncoding=Q, ivar=_colorSpace, attributes=(assign,nonatomic) */
    	colorSpace(): number;
    /* typeEncoding=Q, ivar=_currentPageIndex, attributes=(assign,nonatomic) */
    	currentPageIndex(): number;
    /* typeEncoding=@"NSArray", ivar=_fontReferences, attributes=(retain,nonatomic) */
    	fontReferences(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_foreignLayerStyles, attributes=(retain,nonatomic) */
    	foreignLayerStyles(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_foreignSwatches, attributes=(retain,nonatomic) */
    	foreignSwatches(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_foreignSymbols, attributes=(retain,nonatomic) */
    	foreignSymbols(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_foreignTextStyles, attributes=(retain,nonatomic) */
    	foreignTextStyles(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasDefaultPageArray(): boolean;
    /* typeEncoding=@"MSSharedStyleContainer", ivar=_layerStyles, attributes=(retain,nonatomic) */
    	layerStyles(): MSSharedStyleContainer;
    /* typeEncoding=@"MSSymbolContainer", ivar=_layerSymbols, attributes=(retain,nonatomic) */
    	layerSymbols(): MSSymbolContainer;
    /* typeEncoding=@"MSSharedTextStyleContainer", ivar=_layerTextStyles, attributes=(retain,nonatomic) */
    	layerTextStyles(): MSSharedTextStyleContainer;
    /* typeEncoding=@"NSArray", ivar=_pages, attributes=(retain,nonatomic) */
    	pages(): cocoascript.NSArray;
    /* typeEncoding=@"MSPatchInfo", ivar=_patchInfo, attributes=(retain,nonatomic) */
    	patchInfo(): MSPatchInfo;
    /* typeEncoding=@"_TtC11SketchModel17MSSwatchContainer", ivar=_sharedSwatches, attributes=(retain,nonatomic) */
    	sharedSwatches(): _TtC11SketchModel17MSSwatchContainer;
    /* typeEncoding=@"NSDictionary", ivar=_userInfo, attributes=(copy,nonatomic) */
    	userInfo(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSArray", ivar=_workspaceItems, attributes=(retain,nonatomic) */
    	workspaceItems(): cocoascript.NSArray;
    /* typeEncoding=c16@0:8 */
    	static allowsFaulting(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static defaultPageArray(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	static immutableClass(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	static initialPageNumber(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static localizedNewPageName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addFontReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addFontReferences(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addForeignLayerStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addForeignLayerStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addForeignSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addForeignSwatchs(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addForeignSymbol(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addForeignSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addForeignTextStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addForeignTextStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addPage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addPages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addWorkspaceItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addWorkspaceItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assets(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	childCollaborationObjectWithID_removing(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	copyPropertiesToObject_options(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	currentPageIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateChildrenUsingBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateProperties(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontReferences(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignLayerStyles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignSwatches(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignSymbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignTextStyles(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDefaultPageArray(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDefaultValues(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initializeUnsetObjectPropertiesWithDefaults(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	insertFontReference_afterFontReference(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertFontReference_atIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertFontReference_beforeFontReference(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertFontReferences_afterFontReference(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertFontReferences_beforeFontReference(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignLayerStyle_afterForeignLayerStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertForeignLayerStyle_atIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignLayerStyle_beforeForeignLayerStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignLayerStyles_afterForeignLayerStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignLayerStyles_beforeForeignLayerStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignSwatch_afterForeignSwatch(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertForeignSwatch_atIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignSwatch_beforeForeignSwatch(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignSwatchs_afterForeignSwatch(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignSwatchs_beforeForeignSwatch(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignSymbol_afterForeignSymbol(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertForeignSymbol_atIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignSymbol_beforeForeignSymbol(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignSymbols_afterForeignSymbol(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignSymbols_beforeForeignSymbol(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignTextStyle_afterForeignTextStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertForeignTextStyle_atIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignTextStyle_beforeForeignTextStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignTextStyles_afterForeignTextStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertForeignTextStyles_beforeForeignTextStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertPage_afterPage(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertPage_atIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertPage_beforePage(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertPages_afterPage(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertPages_beforePage(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertWorkspaceItem_afterWorkspaceItem(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertWorkspaceItem_atIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertWorkspaceItem_beforeWorkspaceItem(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertWorkspaceItems_afterWorkspaceItem(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertWorkspaceItems_beforeWorkspaceItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerStyles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerSymbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerTextStyles(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	moveFontReferenceFromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	moveForeignLayerStyleFromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	moveForeignSwatchFromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	moveForeignSymbolFromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	moveForeignTextStyleFromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	movePageFromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	moveWorkspaceItemFromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	patchInfo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performInitEmptyObject(): void;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithImmutableModelObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	propertiesAreEqual_forPurpose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refaultChildrenAgainst(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeAllFontReferences(): void;
    /* typeEncoding=v16@0:8 */
    	removeAllForeignLayerStyles(): void;
    /* typeEncoding=v16@0:8 */
    	removeAllForeignSwatchs(): void;
    /* typeEncoding=v16@0:8 */
    	removeAllForeignSymbols(): void;
    /* typeEncoding=v16@0:8 */
    	removeAllForeignTextStyles(): void;
    /* typeEncoding=v16@0:8 */
    	removeAllPages(): void;
    /* typeEncoding=v16@0:8 */
    	removeAllWorkspaceItems(): void;
    /* typeEncoding=v24@0:8@16 */
    	removeFontReference(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	removeFontReferenceAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeFontReferencesAtIndexes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeForeignLayerStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	removeForeignLayerStyleAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeForeignLayerStylesAtIndexes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeForeignSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	removeForeignSwatchAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeForeignSwatchsAtIndexes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeForeignSymbol(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	removeForeignSymbolAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeForeignSymbolsAtIndexes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeForeignTextStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	removeForeignTextStyleAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeForeignTextStylesAtIndexes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removePage(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	removePageAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removePagesAtIndexes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeWorkspaceItem(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	removeWorkspaceItemAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeWorkspaceItemsAtIndexes(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setAsParentOnChildren(): void;
    /* typeEncoding=v24@0:8@16 */
    	setAssets(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setCurrentPageIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontReferences(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setForeignLayerStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setForeignSwatches(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setForeignSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setForeignTextStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayerStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayerSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayerTextStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPatchInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_assets(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setRaw_colorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_fontReferences(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_foreignLayerStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_foreignSwatches(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_foreignSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_foreignTextStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_layerStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_layerSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_layerTextStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_pages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_sharedSwatches(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_userInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_workspaceItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSharedSwatches(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWorkspaceItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedSwatches(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	syncPropertiesFromObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	workspaceItems(...args: any[]): any;
  }
}

declare const _MSDocumentData: sketchInternal._MSDocumentData;

