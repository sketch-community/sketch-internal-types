// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetCollectionViewDataSource extends NSObject {
    /* typeEncoding=@"MSAssetCollection", ivar=_assetCollection, attributes=(retain,nonatomic) */
    	assetCollection(): MSAssetCollection;
    /* typeEncoding=Q, ivar=_assetType, attributes=(assign,nonatomic) */
    	assetType(): number;
    /* typeEncoding=@"_TtC17SketchControllers26MSModelObjectChangeTracker", ivar=_changeTracker, attributes=(assign,nonatomic,readonly) */
    	changeTracker(): _TtC17SketchControllers26MSModelObjectChangeTracker;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSAssetCollectionViewSourceDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	editable(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"<MSAsset>", ivar=_highlightedAsset, attributes=(retain,nonatomic) */
    	highlightedAsset(): any;
    /* typeEncoding=@"NSString", ivar=_identifier, attributes=(retain,nonatomic) */
    	identifier(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_isLibrary, attributes=(assign,nonatomic) */
    	isLibrary(): boolean;
    /* typeEncoding=@"<MSAssetCollectionViewSourceItemProvider>", ivar=_itemProvider, attributes=(assign,nonatomic,weak) */
    	itemProvider(): any;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSString", ivar=_title, attributes=(assign,nonatomic,readonly) */
    	title(): cocoascript.NSString;
    /* typeEncoding=@32@0:8@16Q24 */
    	static pasteboardRepresentationForAsset_ofType(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	static pasteboardTypeForAssetType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	addAsset_withName(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	assetAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetCollection(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	assetType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	changeTracker(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collectionView_itemForRepresentedObjectAtIndexPath(...args: any[]): any;
    /* typeEncoding=q32@0:8@16q24 */
    	collectionView_numberOfItemsInSection(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	collectionView_viewForSupplementaryElementOfKind_atIndexPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteAssetAtIndexPath(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	editable(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	getUpdatedIndexes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	highlightedAsset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	indicesForAsset(...args: any[]): any;
    /* typeEncoding=@68@0:8@16Q24@32@40@48c56@60 */
    	initWithAssetCollection_assetType_identifier_name_title_isLibrary_delegate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	itemProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	markAssetToHighlight(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	markUpdatedIndexesAsRead(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	moveAssetAtIndexPath_toIndexPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	nameOfAssetAtIndexPath(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	numberOfAssets(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pasteboardRepresentationForIndexPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	prepareCollectionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	registerDraggedTypesForCollectionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssetCollection(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setAssetType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHighlightedAsset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIdentifier(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsLibrary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setItemProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setName_ofAssetAtIndexPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
  }
}

declare const MSAssetCollectionViewDataSource: sketchInternal.MSAssetCollectionViewDataSource;

