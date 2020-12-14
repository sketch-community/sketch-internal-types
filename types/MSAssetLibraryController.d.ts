// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetLibraryController extends NSObject {
    /* typeEncoding=@"MSAssetLibraryUpdater", ivar=_assetLibraryUpdater, attributes=(assign,nonatomic,readonly) */
    	assetLibraryUpdater(): MSAssetLibraryUpdater;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	availableLibraries(): cocoascript.NSArray;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	checkForLibraryUpdatesPeriod(): number;
    /* typeEncoding=@"MSCloudAssetLibraryController", ivar=_cloudAssetLibraryController, attributes=(assign,nonatomic,readonly) */
    	cloudAssetLibraryController(): MSCloudAssetLibraryController;
    /* typeEncoding=@"NSString", ivar=_cloudUserID, attributes=(copy) */
    	cloudUserID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSHashTable", ivar=_delegates, attributes=(retain,nonatomic) */
    	delegates(): cocoascript.NSHashTable;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_includeCloudLibraries, attributes=(assign,nonatomic) */
    	includeCloudLibraries(): boolean;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,dynamic,nonatomic,readonly) */
    	libraries(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_remoteLibraries, attributes=(retain,nonatomic) */
    	remoteLibraries(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSMutableArray", ivar=_userLibraries, attributes=(assign,nonatomic,readonly) */
    	userLibraries(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableSet", ivar=_validatedCloudLibraries, attributes=(retain,nonatomic) */
    	validatedCloudLibraries(): cocoascript.NSMutableSet;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q24@0:8@16 */
    	addAssetLibraryAtURL(...args: any[]): any;
    /* typeEncoding=v52@0:8@16@24@32c40@?44 */
    	addCloudLibraryFromAppcastURL_teamName_libraryID_editable_completionHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	addCloudLibraryFromShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addRemoteAssetLibrary(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	addRemoteLibraryFromAppcastURL_context_callback(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	addRemoteLibraryFromAppcastURL_withCompletionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	assetLibraryChangedOnDisk(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	assetLibraryEnableStateChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetLibraryUpdater(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	availableLibraries(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelDownloadOfLibrary(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	checkForLibraryUpdatesPeriod(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	checkForRemoteAssetLibraryUpdates(): void;
    /* typeEncoding=@16@0:8 */
    	cloudAssetLibraryController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cloudAuthenticationDidChange(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	cloudDocumentAtLocalURL_uploadedWithShare(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cloudLibrariesDidFinishUpdate(): void;
    /* typeEncoding=v16@0:8 */
    	cloudLibrariesWillUpdate(): void;
    /* typeEncoding=@24@0:8@16 */
    	cloudLibraryWithShare(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cloudUserID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	copyInternalLibraryToApplicationSupport(): void;
    /* typeEncoding=v16@0:8 */
    	createAssetLibraryFolder(): void;
    /* typeEncoding=@16@0:8 */
    	delegates(...args: any[]): any;
    /* typeEncoding=c28@0:8@16c24 */
    	disableLibrariesMatchingLibrary_afterAdding(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidUploadNotification(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	downloadAssetLibraryAppcasts_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	downloadAssetLibraryAppcastsWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	embeddedFontReferencesExcludingDocumentID(...args: any[]): any;
    /* typeEncoding=v44@0:8@16@24c32@?36 */
    	enumerateForeignObjects_inDocument_includeDisabled_block(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	existingLibraryForDocumentAtURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	existingLibraryMatchingLibrary(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	generatePreviewImageForLibrary_completionHandler(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	importShareableObjectReference_intoDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	includeCloudLibraries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initialRemoteLibraryDefinitions(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	internalSyncForeignObject_withMaster_fromLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	librariesWithUpdates(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	libraryForShareableObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	linkCloudLibraryWithShare_toCloudDocAtURL(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	loadLibrariesForKey_dispatchGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	loadLibrariesWithDispatchGroup(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	loadVersionZeroLibrariesFromUnarchiver_forKey_dispatchGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	loadVersionZeroLibrariesWithDispatchGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeDuplicateRemoteLibraryError(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	migrateGlobalColorsToSwatches(): void;
    /* typeEncoding=v24@0:8@16 */
    	migratePublicLibrariesWithDispatchGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	notifyLibraryChange(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewFromDocumentReader(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewPageWithSwatches(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	publicCloudLibraries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	readSwatchesLibraryDocumentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	reloadLibrary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	remoteAssetLibraryForShare(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	remoteLibraries(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	remoteLibraryWithAppcast(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeAssetLibrary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeRemoteAssetLibrary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeUserAssetLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	saveLibraries(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	saveLibraries_withLibrariesKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCloudUserID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegates(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIncludeCloudLibraries(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRemoteLibraries(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setValidatedCloudLibraries(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setupInitialRemoteLibrariesWithDispatchGroup(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	shareableObjectReferenceForObject_forDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldAttemptToLoadVersionZeroLibraries(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldLoadPreviouslySavedLibraries(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldMigrateGlobalColorsToSwatches(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldMigratePublicCloudLibrary(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@?24@?32@?40 */
    	startDownloadingAssetLibrary_progressHandler_downloadCompletionHandler_completionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swatchesLibraryPreviewPage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swatchesLibraryURL(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	symbolIDsMappingFrom_toLibrary(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	syncForeignObject_withMaster_fromLibrary(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	syncNestedSwatchesOf_fromRemote_fromLibrary(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	syncNestedSymbolsOf_withMaster_fromLibrary(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	updateAndLoadAssetLibrary_completionHandler(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	updateCloudLibraryShare_editable(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24@?28 */
    	updateCloudLibraryShare_editable_completionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userLibraries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	validatedCloudLibraries(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	writeSwatchesLibraryDocumentData(...args: any[]): any;
  }
}

declare const MSAssetLibraryController: sketchInternal.MSAssetLibraryController;

