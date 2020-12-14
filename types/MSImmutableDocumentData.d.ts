// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableDocumentData extends _MSImmutableDocumentData {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	UIMetadataKey(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	allSymbols(): cocoascript.NSArray;
    /* typeEncoding=@"SCKShare", ivar=(null), attributes=(retain,nonatomic) */
    	cloudShare(): SCKShare;
    /* typeEncoding=@"MSImmutablePage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentPage(): MSImmutablePage;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocumentState", ivar=(null), attributes=(copy) */
    	documentState(): MSDocumentState;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	fontNames(): cocoascript.NSSet;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	localSymbols(): cocoascript.NSArray;
    /* typeEncoding=@"NSDictionary", ivar=_metadata, attributes=(retain,nonatomic) */
    	metadata(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pages(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_selectedOverrides, attributes=(assign,nonatomic,readonly) */
    	selectedOverrides(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=_sessionIdentifier, attributes=(retain,nonatomic) */
    	sessionIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"MSStateContainer", ivar=_stateContainer, attributes=(retain,nonatomic) */
    	stateContainer(): MSStateContainer;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSDictionary", ivar=_symbolsIndexedByID, attributes=(retain,nonatomic) */
    	symbolsIndexedByID(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSData", ivar=_textPreviewData, attributes=(retain,nonatomic) */
    	textPreviewData(): cocoascript.NSData;
    /* typeEncoding=@"NSData", ivar=_textPreviewMetadata, attributes=(retain,nonatomic) */
    	textPreviewMetadata(): cocoascript.NSData;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	unavailableFontNames(): cocoascript.NSSet;
    /* typeEncoding=c16@0:8 */
    	isRunningHeadless(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@?40 */
    	loadDocumentDataWithMetadata_textPreviewData_textPreviewMetadata_loadBlock(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	persistsObjectID(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsRunningHeadless(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	traitsForPropertyName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	UIMetadataKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	allArtboards(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	allLayerStyles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	allSymbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	allTextStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	arrangeMigratedSymbolsInGrid(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	artboardWithID(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	artboardWithID_page(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cloudShare(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	containedLayers(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	containedLayersCount(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsMultipleLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsNoOrOneLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsOneLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentPage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	decodePropertiesWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultPagesArray(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	embeddedFontReferences(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodePropertiesWithCoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateLayers(...args: any[]): any;
    /* typeEncoding=c32@0:8Q16@?24 */
    	enumerateLayersWithOptions_block(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontNames(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableDocumentState(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	indexOfLayer(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	influenceRectForAncestors_document(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initAsCopyOf_withPages(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithMutableDocumentDataMetadataCopy(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initializeUnsetObjectPropertiesWithDefaults(): void;
    /* typeEncoding=@16@0:8 */
    	lastLayer(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	layerAtIndex(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layerStyleWithID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localSymbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	metadataForKey_inDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV113OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV132OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV54OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV60OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV62OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV78OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV91OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	migratedSymbolFromSymbol_group(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	migratedSymbolsFromOldSymbols(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	newPageForMigratedSymbols(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	objectDidInit(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	overlayRectForAncestors_document(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pageWithID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pagesAndArtboardsMetadata(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performInitEmptyObject(): void;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithMutableModelObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	performPostMigrationTidyupFromV131WithUnarchiver_UIMetadata(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	performPostMigrationTidyupWithUnarchiver_UIMetadata(...args: any[]): any;
    /* typeEncoding=@?24@0:8@16 */
    	prepareForRender(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareSymbolDictionary(): void;
    /* typeEncoding=v24@0:8@16 */
    	regenerateObjectIDOnSymbolMaster(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetStateAndMetadataForDuplication(): void;
    /* typeEncoding=@16@0:8 */
    	resolvedDocumentDataCopy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedOverrides(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sessionIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCloudShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentState(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetadata(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSessionIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStateContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSymbolsIndexedByID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextPreviewData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextPreviewMetadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stateContainer(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	storeMetadata_forKey_inDictionary(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	stripRedundantOverridesFromInstances_ofSymbol(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	stripRedundantOverridesFromInstancesOfSymbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subObjectsForTreeDiff(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	symbolWithID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolsIndexedByID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textLayersWithUnsafeFonts(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textPreviewData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textPreviewMetadata(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	textStyleWithID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unavailableFontNames(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	updatedResolvedCopyWithModelEquivalent_changedIndexes(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wasSavedByOldVersion(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wasSavedByTestVersion(...args: any[]): any;
  }
}

declare const MSImmutableDocumentData: sketchInternal.MSImmutableDocumentData;

