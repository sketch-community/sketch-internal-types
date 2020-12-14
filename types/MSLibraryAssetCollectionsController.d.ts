// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLibraryAssetCollectionsController extends NSObject {
    /* typeEncoding=@"NSMutableDictionary", ivar=_collectionInfoDictionary, attributes=(retain,nonatomic) */
    	collectionInfoDictionary(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"MSAssetLibraryController", ivar=_libraryController, attributes=(retain,nonatomic) */
    	libraryController(): MSAssetLibraryController;
    /* typeEncoding=@"NSArray", ivar=_supportedAssetTypes, attributes=(retain,nonatomic) */
    	supportedAssetTypes(): cocoascript.NSArray;
    /* typeEncoding=v24@0:8@16 */
    	cleanupPersistedHashesNotIncludedInHelpersInBackground(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	containerDataURLForLibraryIdentifier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	dataURLForLibraryIdentifier_assetKind(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dispatchQueue(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	identifierForLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastReadAssetsDataContainer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	allHelpers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collectionInfoDictionary(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	dataSourceWithIdentifier_forAssetType(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	dataSourcesForAssetType(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16@24 */
    	dataSourcesWithContentForAssetType_exludingDocumentsAtURLs(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithAssetLibraryController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	libraryDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshAllHelpers(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshHelpersForLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reload(): void;
    /* typeEncoding=v24@0:8@16 */
    	setCollectionInfoDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSupportedAssetTypes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	supportedAssetTypes(...args: any[]): any;
  }
}

declare const MSLibraryAssetCollectionsController: sketchInternal.MSLibraryAssetCollectionsController;

