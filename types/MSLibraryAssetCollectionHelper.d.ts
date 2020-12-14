// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLibraryAssetCollectionHelper extends NSObject {
    /* typeEncoding=@"MSImmutableAssetCollection", ivar=_assetCollection, attributes=(retain,nonatomic) */
    	assetCollection(): MSImmutableAssetCollection;
    /* typeEncoding=Q, ivar=_assetType, attributes=(assign,nonatomic) */
    	assetType(): number;
    /* typeEncoding=@"NSURL", ivar=_dataURL, attributes=(retain,nonatomic) */
    	dataURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSObject<OS_dispatch_queue>", ivar=_dispatchQueue, attributes=(retain,nonatomic) */
    	dispatchQueue(): any;
    /* typeEncoding=@, ivar=_lastReadData, attributes=(retain,nonatomic) */
    	lastReadData(): any;
    /* typeEncoding=@"NSString", ivar=_libraryIdentifier, attributes=(retain,nonatomic) */
    	libraryIdentifier(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_markedAsRead, attributes=(assign,nonatomic) */
    	markedAsRead(): boolean;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSIndexSet", ivar=_updatedIndexes, attributes=(retain,nonatomic) */
    	updatedIndexes(): cocoascript.NSIndexSet;
    /* typeEncoding=v40@0:8Q16@24@32 */
    	static gatherSetForType_fromCollection_andWriteToURL(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static hashableRepresentationForAsset_withName(...args: any[]): any;
    /* typeEncoding=@40@0:8@16Q24@32 */
    	static indicesForAssetsInCollection_ofType_notContainedIn(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static readSetFromURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	assetCollection(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	assetType(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	collectionViewSource_getUpdatedIndexes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	collectionViewSourceMarkUpdatedIndexesAsRead(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSource(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dispatchQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	getIndexesOfNewAssets(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24@32Q40@48@56 */
    	initWithCollection_libraryIdentifier_name_assetType_dataURL_ioQueue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastReadData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	markCollectionAsRead(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	markedAsRead(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	readLastReadAssetsIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssetCollection(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setAssetType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDispatchQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastReadData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryIdentifier(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setMarkedAsRead(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpdatedIndexes(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	updateNewIndexesIfNecessary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updatedIndexes(...args: any[]): any;
  }
}

declare const MSLibraryAssetCollectionHelper: sketchInternal.MSLibraryAssetCollectionHelper;

