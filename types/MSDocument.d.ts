// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocument extends NSDocument {
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	UIMetadata(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(copy,nonatomic) */
    	UIMetadata(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSActionController", ivar=_actionsController, attributes=(retain,nonatomic) */
    	actionsController(): MSActionController;
    /* typeEncoding=@"MSAssistantsConfiguration", ivar=_assistantsConfiguration, attributes=(retain,nonatomic) */
    	assistantsConfiguration(): MSAssistantsConfiguration;
    /* typeEncoding=@"_TtC10Assistants20AssistantsRunResults", ivar=_assistantsResults, attributes=(retain,nonatomic) */
    	assistantsResults(): _TtC10Assistants20AssistantsRunResults;
    /* typeEncoding=c, ivar=_attemptingToClose, attributes=(assign,nonatomic,getter=isAttemptingToClose) */
    	attemptingToClose(): boolean;
    /* typeEncoding=@"MSBackButtonController", ivar=_backButtonController, attributes=(retain,nonatomic) */
    	backButtonController(): MSBackButtonController;
    /* typeEncoding=@"MSBadgeController", ivar=_badgeController, attributes=(retain,nonatomic) */
    	badgeController(): MSBadgeController;
    /* typeEncoding=c, ivar=_cacheFlushInProgress, attributes=(assign) */
    	cacheFlushInProgress(): boolean;
    /* typeEncoding=@"MSCacheManager", ivar=_cacheManager, attributes=(assign,nonatomic,readonly) */
    	cacheManager(): MSCacheManager;
    /* typeEncoding=@"NSColorSpace", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canvasColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"MSCanvasView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canvasView(): MSCanvasView;
    /* typeEncoding=@"MSDocumentChangeNotifier", ivar=_changeNotifier, attributes=(assign,nonatomic,readonly) */
    	changeNotifier(): MSDocumentChangeNotifier;
    /* typeEncoding=@"MSCloudAction", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	cloudAction(): MSCloudAction;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	cloudName(): cocoascript.NSString;
    /* typeEncoding=@"SCKShare", ivar=(null), attributes=(retain,nonatomic) */
    	cloudShare(): SCKShare;
    /* typeEncoding=@"_TtC13SharedEditing18MSCoEditController", ivar=_coEditController, attributes=(retain,nonatomic) */
    	coEditController(): _TtC13SharedEditing18MSCoEditController;
    /* typeEncoding=@"NSColorSpace", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	colorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@, ivar=_colorSpaceMismatchWarning, attributes=(retain,nonatomic) */
    	colorSpaceMismatchWarning(): any;
    /* typeEncoding=@"MSComponentInspectorDriver", ivar=_componentInspectorDriver, attributes=(retain,nonatomic) */
    	componentInspectorDriver(): MSComponentInspectorDriver;
    /* typeEncoding=@"MSComponentsPanelController", ivar=_componentsPanelController, attributes=(retain,nonatomic) */
    	componentsPanelController(): MSComponentsPanelController;
    /* typeEncoding=@"MSCanvasView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	contentDrawView(): MSCanvasView;
    /* typeEncoding=Q, ivar=_contentType, attributes=(assign,nonatomic) */
    	contentType(): number;
    /* typeEncoding=@"MSCanvasViewController", ivar=_currentContentViewController, attributes=(retain,nonatomic) */
    	currentContentViewController(): MSCanvasViewController;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSResponder", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	defaultFirstResponder(): cocoascript.NSResponder;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"_TtC6Sketch23MSDocumentChangeCounter", ivar=_documentChangeCounter, attributes=(retain,nonatomic) */
    	documentChangeCounter(): _TtC6Sketch23MSDocumentChangeCounter;
    /* typeEncoding=@"NSColorSpace", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	documentColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"MSDocumentData", ivar=_documentData, attributes=(assign,nonatomic,readonly) */
    	documentData(): MSDocumentData;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	documentIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"MSDocumentWindow", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	documentWindow(): MSDocumentWindow;
    /* typeEncoding=@"MSDocumentWindowController", ivar=_documentWindowController, attributes=(retain,nonatomic) */
    	documentWindowController(): MSDocumentWindowController;
    /* typeEncoding=@"_TtC6Sketch24MSDocumentEditController", ivar=_editController, attributes=(retain,nonatomic) */
    	editController(): _TtC6Sketch24MSDocumentEditController;
    /* typeEncoding=@"_TtC11SketchModel16MSEditingContext", ivar=_editingContext, attributes=(assign,nonatomic,readonly) */
    	editingContext(): _TtC11SketchModel16MSEditingContext;
    /* typeEncoding=@, ivar=_editingLibraryWarning, attributes=(retain,nonatomic) */
    	editingLibraryWarning(): any;
    /* typeEncoding=@"MSEventHandlerManager", ivar=_eventHandlerManager, attributes=(retain,nonatomic) */
    	eventHandlerManager(): MSEventHandlerManager;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=(null), attributes=(retain,nonatomic) */
    	exportableImmutableData(): MSImmutableDocumentData;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_exportableImmutableData, attributes=(retain,nonatomic) */
    	exportableImmutableData(): MSImmutableDocumentData;
    /* typeEncoding=@"NSArray", ivar=_exportableLayerSelection, attributes=(retain,nonatomic) */
    	exportableLayerSelection(): cocoascript.NSArray;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	fileURL(): cocoascript.NSURL;
    /* typeEncoding=@"MSArtboardGroup", ivar=_focusedArtboard, attributes=(assign,nonatomic,weak) */
    	focusedArtboard(): MSArtboardGroup;
    /* typeEncoding=c, ivar=_hasOpenedImageFile, attributes=(assign,nonatomic) */
    	hasOpenedImageFile(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasPendingCloudDocumentUploadRequest(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_hideDocumentsWindowWhenDisplayingWindow, attributes=(assign,nonatomic) */
    	hideDocumentsWindowWhenDisplayingWindow(): boolean;
    /* typeEncoding=@"MSHistoryMaker", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	historyMaker(): MSHistoryMaker;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	immutableDocumentData(): MSImmutableDocumentData;
    /* typeEncoding=@"_TtC13SharedEditing29MSIncrementalUploadController", ivar=_incrementalUploadController, attributes=(retain,nonatomic) */
    	incrementalUploadController(): _TtC13SharedEditing29MSIncrementalUploadController;
    /* typeEncoding=@"_TtC6Sketch22MSInsertMenuController", ivar=_insertMenuController, attributes=(assign,nonatomic,readonly) */
    	insertMenuController(): _TtC6Sketch22MSInsertMenuController;
    /* typeEncoding=@"MSInspectorController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	inspectorController(): MSInspectorController;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isCloudDoc(): boolean;
    /* typeEncoding=c, ivar=_isComponentsPanelVisible, attributes=(assign,nonatomic) */
    	isComponentsPanelVisible(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isCurrent(): boolean;
    /* typeEncoding=c, ivar=_isLayerListVisible, attributes=(assign,nonatomic) */
    	isLayerListVisible(): boolean;
    /* typeEncoding=c, ivar=_isSidebarVisible, attributes=(assign,nonatomic) */
    	isSidebarVisible(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lastIntegratedPatchID(): cocoascript.NSString;
    /* typeEncoding=@"MSAssetLibraryController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	libraryController(): MSAssetLibraryController;
    /* typeEncoding=@"NSView", ivar=_messageView, attributes=(retain,nonatomic) */
    	messageView(): cocoascript.NSView;
    /* typeEncoding=d, ivar=_mostRecentCacheFlushingTime, attributes=(assign) */
    	mostRecentCacheFlushingTime(): number;
    /* typeEncoding=@"NSMutableDictionary", ivar=_mutableUIMetadata, attributes=(retain,nonatomic) */
    	mutableUIMetadata(): cocoascript.NSMutableDictionary;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	needsUploading(): boolean;
    /* typeEncoding=c, ivar=_nextReadFromURLIsReload, attributes=(assign,nonatomic) */
    	nextReadFromURLIsReload(): boolean;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic) */
    	numberOfUploadAttemptsSinceLastSuccessfulUpload(): number;
    /* typeEncoding=@"NSMutableDictionary", ivar=_originalViewportsForEditedSymbols, attributes=(retain,nonatomic) */
    	originalViewportsForEditedSymbols(): cocoascript.NSMutableDictionary;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	pageListCollapsed(): boolean;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pageListHeight(): number;
    /* typeEncoding=@"MSPatchContainer", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	patchContainer(): MSPatchContainer;
    /* typeEncoding=@"SCKOrganization", ivar=(null), attributes=(retain,nonatomic) */
    	preferredOrganization(): SCKOrganization;
    /* typeEncoding=@"SCKProject", ivar=(null), attributes=(retain,nonatomic) */
    	preferredProject(): SCKProject;
    /* typeEncoding=@"SCKUser", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	preferredUser(): SCKUser;
    /* typeEncoding=@"NSArray", ivar=_previousSelectedLayers, attributes=(copy,nonatomic) */
    	previousSelectedLayers(): cocoascript.NSArray;
    /* typeEncoding=@"_TtC11SketchModel23MSResolvedDocumentMaker", ivar=_resolvedDocumentMaker, attributes=(assign,nonatomic,readonly) */
    	resolvedDocumentMaker(): _TtC11SketchModel23MSResolvedDocumentMaker;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	scrollOrigin(): CGPoint;
    /* typeEncoding=@"BCSideBarViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sidebarController(): BCSideBarViewController;
    /* typeEncoding=@"MSMainSplitViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	splitViewController(): MSMainSplitViewController;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSToolbarConstructor", ivar=_toolbarConstructor, attributes=(retain,nonatomic) */
    	toolbarConstructor(): MSToolbarConstructor;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding=c16@0:8 */
    	static autosavesInPlace(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	static cleanCloudDirectoriesRemovingAllDocuments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static currentDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static didCleanCloudDirectoriesNotification(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static documentWithCloudShareID(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	static isNativeType(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	static localObjectForObjectReference_documentData_isForeign(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static numberOfFailedUploadsFileURLFromDocumentURL(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	static numberOfFailedUploadsForDocumentURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static readableTypes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static windowForSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static writableTypes(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	UIMetadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	actionClasses(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	actionForMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	actionsController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	activeSelectedTabIndicatorColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	addBlankPage(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24c32^@36 */
    	addLayerFromImageAtURL_toGroup_fitPixels_error(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	alertDocumentCorruptionWasDetected(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	allExportableLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsDocumentSharing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyCorrectSizeForNewWindow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	artboards(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	askForUserInput_initialValue(...args: any[]): any;
    /* typeEncoding=@40@0:8@16q24@32 */
    	askForUserInput_ofType_initialValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	askToOpenDocumentRepairingMetadata(...args: any[]): any;
    /* typeEncoding=c28@0:8@16c24 */
    	askToOpenDocumentWithMissingFonts_savingWillChangeFonts(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	askToOpenNewerDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assistantsConfiguration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assistantsResults(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	availabilityForLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	backButtonController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	backupFileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	badgeController(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	cacheFlushInProgress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cacheManager(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24Q32 */
    	canAsynchronouslyWriteToURL_ofType_forSaveOperation(...args: any[]): any;
    /* typeEncoding=v40@0:8@16:24^v32 */
    	canCloseDocumentWithDelegate_shouldCloseSelector_contextInfo(...args: any[]): any;
    /* typeEncoding=v44@0:8c16@20:28^v36 */
    	canCloseExecutedWithResult_delegate_shouldCloseSelector_contextInfo(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canGoToForeignSymbolInLibrary(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canRestoreViewportAfterArtboardEdit(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cancelAllUploads(): void;
    /* typeEncoding=@16@0:8 */
    	canvasColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasView(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	changeCountTokenForSaveOperation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	changeNotifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeToImmutableDocumentData(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	close(): void;
    /* typeEncoding=@24@0:8@16 */
    	closestVisibleIdentifierInToolbarForIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cloudAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cloudDocumentKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cloudName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cloudShare(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	coEditController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	coalescedDetermineArtboardNotification(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	colorPickerShouldSendEventsDuringMouseDrag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorSpaceMismatchWarning(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	componentInspectorDriver(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	componentsPanel_didSelectComponent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	componentsPanelController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	componentsPanelWillBeginDraggingSession(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	contactSupportAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentDrawView(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	contentType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	createActions(): void;
    /* typeEncoding=@16@0:8 */
    	currentContentViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	currentHandlerChanged(): void;
    /* typeEncoding=@16@0:8 */
    	currentPage(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	dataForRequest_ofType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	debugCountObject_counts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	debugCountObjects(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	debugRunJSAPIUnitTests(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultFirstResponder(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	defaultNewWindowSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteSymbolMasters(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	discardDraftDocumentWithError(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentChangeCounter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	documentData_layerDidChangeStyle(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	documentData_metadataForKey_object(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	documentData_storeMetadata_forKey_object(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentWindow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentWindowController(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    	duplicateAndReturnError(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	editForeignSymbolButtonsForLibrary(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	editForeignSymbolInfoTextForForeignSymbol_inLibrary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	editForeignSymbolMessageForLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editingContext(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	editingContext_didChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editingLibraryWarning(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeRestorableStateWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	eventHandlerManager(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	eventHandlerManager_didChangeCurrentHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	exportRequestForArtboardOrSlice(...args: any[]): any;
    /* typeEncoding=@56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	exportRequestWithName_rect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	exportSliceLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportableImmutableData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportableLayerSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flagsChangedNotification(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	flushCachesIfNecessary(): void;
    /* typeEncoding=@16@0:8 */
    	focusedArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleEditForeignSymbol(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	handleEditForeignSymbol_withInstance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleForeignSymbolInstanceDoubleClick(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleGoToForeignSymbolInLibrary(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	handleNewerDocument_error(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	handleUnlinkForeignSymbol_withInstance(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasArtboards(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasOpenedImageFile(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasPendingCloudDocumentUploadRequest(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	hideComponentsInspector(): void;
    /* typeEncoding=c16@0:8 */
    	hideDocumentsWindowWhenDisplayingWindow(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	hideRulersIfNecessary(): void;
    /* typeEncoding=v24@0:8@16 */
    	highlightHoverableItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	historyMaker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	hoveredItemDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableDocumentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inactiveSelectedTabIndicatorColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	incrementalUploadController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertMenuController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorController(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	inspectorViewControllersForLayers_standardControllers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	installedFontsDidChange(): void;
    /* typeEncoding=c16@0:8 */
    	isAttemptingToClose(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isCloudDoc(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isComponentsPanelVisible(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isCurrent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInspectorVisible(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLayerListVisible(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLibraryDocument(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isMatchToLibrary(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRulersVisible(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isSharableObjectReferenceForeign(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSidebarVisible(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastIntegratedPatchID(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	layerHasHoverStateInCanvas(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerStyles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	libraryControllerDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadInspectorPanel(): void;
    /* typeEncoding=v16@0:8 */
    	loadLayerListPanel(): void;
    /* typeEncoding=@24@0:8@16 */
    	localObjectForObjectReference(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeUnknownRenameError(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	makeUploadRequest(): void;
    /* typeEncoding=v16@0:8 */
    	makeWindowControllers(): void;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuWillOpen(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	messageView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migrateUIMetadataWithDocumentData(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	mostRecentCacheFlushingTime(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	moveToURL_completionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mutableUIMetadata(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	needsUploading(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	newExportableImmutableData(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	nextReadFromURLIsReload(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	normalHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	notifyIfDocumentBecameCurrent(): void;
    /* typeEncoding=v16@0:8 */
    	notifyIfDocumentResignedCurrent(): void;
    /* typeEncoding=q16@0:8 */
    	numberOfUploadAttemptsSinceLastSuccessfulUpload(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openLibrariesForForeignObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalViewportsForEditedSymbols(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	pageListCollapsed(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	pageListHeight(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	patchContainer(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	patchReceived_statusInfo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performPageSwitchUpdates(): void;
    /* typeEncoding=v16@0:8 */
    	performSelectionChangedUpdates(): void;
    /* typeEncoding=@16@0:8 */
    	pluginContext(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preferredOrganization(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preferredProject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preferredUser(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	prepareForSaveOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	presentCollaborationDebugMessageWithErrorWithError(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	presentCollaborationErrorWithError(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previousSelectedLayers(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	printOperationWithSettings_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	putSelectionBackInCanvasIfPossible(): void;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	readDocumentFromURL_ofType_error(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	readEPSFromURL_error(...args: any[]): any;
    /* typeEncoding=c48@0:8@16@24^c32^@40 */
    	readFromDocumentWrapper_ofType_corruptionDetected_error(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	readFromURL_ofType_error(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	readImageFromPath_error(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	readPDFFromURL_error(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	readSVGFromURL_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshAfterAppearanceChange(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshComponentsPanel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshLayerListIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshOverlay(): void;
    /* typeEncoding=v24@0:8Q16 */
    	refreshSidebarWithMask(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshSupplementaryViews(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshWindowBadge(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshWindowBadgeIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadEverythingFollowingDocumentDataChange(): void;
    /* typeEncoding=v16@0:8 */
    	reloadInspector(): void;
    /* typeEncoding=v16@0:8 */
    	reloadTouchBars(): void;
    /* typeEncoding=v24@0:8@16 */
    	removeViewportForArtboard(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	renamePage(): void;
    /* typeEncoding=v16@0:8 */
    	reportMigrationNoLongerAvailable(): void;
    /* typeEncoding=v28@0:8@16c24 */
    	reportSaveActionAtURL_wasAutosave(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resetImportedDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetPatchInfo(): void;
    /* typeEncoding=@16@0:8 */
    	resolvedDocumentMaker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreStateWithCoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreViewportAfterArtboardEdit(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	returnToDefaultFirstResponder(): void;
    /* typeEncoding=v16@0:8 */
    	returnToNormalHandler(): void;
    /* typeEncoding=v24@0:8Q16 */
    	revealComponentsOfType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	revealComponentsPanel(): void;
    /* typeEncoding=v16@0:8 */
    	revealLayerList(): void;
    /* typeEncoding=v24@0:8@16 */
    	revealLayerWithID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	revealShareableObject(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	revertToContentsOfURL_ofType_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	runAssistants(): void;
    /* typeEncoding=v16@0:8 */
    	runAssistantsAutomatically(): void;
    /* typeEncoding=v32@0:8Q16@?24 */
    	runModalSaveDraftCloudDocPanelForOperationType_completionHandler(...args: any[]): any;
    /* typeEncoding=v36@0:8Q16c24@?28 */
    	runModalSavePanelForSaveOperation_allowDeletion_completionHandler(...args: any[]): any;
    /* typeEncoding=v48@0:8Q16@24:32^v40 */
    	runModalSavePanelForSaveOperation_delegate_didSaveSelector_contextInfo(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	saveArtboardOrSlice_toFile(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@?40 */
    	saveCloudDocumentDraftAs_organization_project_completionHandler(...args: any[]): any;
    /* typeEncoding=v48@0:8@16Q24@32@40 */
    	saveDocumentToURL_saveMode_context_callback(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	saveExportRequest_toFile(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24Q32@?40 */
    	saveToURL_ofType_forSaveOperation_completionHandler(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	scrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectShareableObjectsIfVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectToolbarItemWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActionsController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssistantsConfiguration(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssistantsResults(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAttemptingToClose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackButtonController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBadgeController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setCacheFlushInProgress(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCloudShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCoEditController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorSpaceMismatchWarning(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponentInspectorDriver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponentsPanelController(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setContentType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentContentViewController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentPage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setDelegatesToNil(): void;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentChangeCounter(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	setDocumentData_reset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentWindowController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditingLibraryWarning(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventHandlerManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportableImmutableData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportableLayerSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFileURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFocusedArtboard(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasOpenedImageFile(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHideDocumentsWindowWhenDisplayingWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIncrementalUploadController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsComponentsPanelVisible(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsLayerListVisible(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsSidebarVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMessageView(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setMostRecentCacheFlushingTime(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMutableUIMetadata(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setNextReadFromURLIsReload(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setNumberOfUploadAttemptsSinceLastSuccessfulUpload(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalViewportsForEditedSymbols(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPageListCollapsed(...args: any[]): any;
    /* typeEncoding=v28@0:8d16c24 */
    	setPageListHeight_isUserInitiated(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreferredOrganization(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreferredProject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviousSelectedLayers(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setToolbarConstructor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUIMetadata(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setUp(): void;
    /* typeEncoding=v16@0:8 */
    	setViewControllersToNil(): void;
    /* typeEncoding=v16@0:8 */
    	setViewsToNil(): void;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupCoEditController(): void;
    /* typeEncoding=v16@0:8 */
    	setupIncrementalUploadController(): void;
    /* typeEncoding=@24@0:8@16 */
    	shareableObjectReferenceForDescriptor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	shareableObjectReferenceForObject(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24^v28 */
    	shouldCloseWithDocument_shouldClose_contextInfo(...args: any[]): any;
    /* typeEncoding=c36@0:8Q16@24c32 */
    	shouldCreateCloudVersionForSaveOperation_destinationType_documentWasEdited(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldRunSavePanelWithAccessoryView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	showCanvas(): void;
    /* typeEncoding=v24@0:8@?16 */
    	showCloudSaveOrRevertSheetWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	showComponents(): void;
    /* typeEncoding=v16@0:8 */
    	showComponentsBetaWarning(): void;
    /* typeEncoding=v16@0:8 */
    	showComponentsInspector(): void;
    /* typeEncoding=v24@0:8@16 */
    	showMessage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	showNonDefaultColorSpaceWarningIfApplicable(): void;
    /* typeEncoding=v16@0:8 */
    	showWindows(): void;
    /* typeEncoding=@16@0:8 */
    	sidebarController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	sidebarController_didChangeSelection(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	sidebarController_hoveredLayerDidChangeTo(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	sidebarController_validateRemovalOfPages_withRemovalBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sidebarControllerContextMenuItemsForCurrentSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sidebarControllerDidUpdate(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	sidebarViewController_viewControllerForSidebarTabIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	sketchrunnerMSDocument_showCanvas(): void;
    /* typeEncoding=@16@0:8 */
    	splitViewController(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	storeViewport_andInstance_forArtboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	swiftCompatibleComponentsPanelController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	tabConfigurationsForSidebarViewController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleClickThrough(...args: any[]): any;
    /* typeEncoding=@24@0:8#16 */
    	toggleHandlerClass(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarConstructor(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	updateChangeCount(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	updateChangeCountWithToken_forSaveOperation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateCountDownButton(): void;
    /* typeEncoding=v24@0:8@16 */
    	updateFocusedArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	updateLocalFileToMatchCloudNameWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateSelectionFollowingChangeToImmutableDocumentData(): void;
    /* typeEncoding=v16@0:8 */
    	updateWindowSubtitle(): void;
    /* typeEncoding=v24@0:8@16 */
    	uploadStateDidChangeWithController(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	validateDocument_error(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	validateMenuItemTitleAndState(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	validateSelectionOfLayer_proposedIDsOfLayersToSelect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validateToolbarItems(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateUserInterfaceItem(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	visibleCanvasRectForDocumentData(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	visitSymbolMaster_withReturnInstance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	visitSymbolMasterWithID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	warnIfEditingLibrary(): void;
    /* typeEncoding=v16@0:8 */
    	warnIfPluginsDisabled(): void;
    /* typeEncoding=@16@0:8 */
    	window(...args: any[]): any;
    /* typeEncoding=c56@0:8@16@24{CGPoint=dd}32@48 */
    	window_shouldDragDocumentWithEvent_from_withPasteboard(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	window_shouldPopUpDocumentPathMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidBecomeMain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidEnterVersionBrowser(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidExitFullScreen(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidExitVersionBrowser(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResignMain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowWillBeginSheet(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowWillClose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowWillEnterFullScreen(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	wireDocumentDataToUI(): void;
    /* typeEncoding=c48@0:8@16@24Q32^@40 */
    	writeSafelyToURL_ofType_forSaveOperation_error(...args: any[]): any;
    /* typeEncoding=c56@0:8@16@24Q32@40^@48 */
    	writeToURL_ofType_forSaveOperation_originalContentsURL_error(...args: any[]): any;
    /* typeEncoding=c48@0:8@16@24Q32^@40 */
    	writeToURL_ofType_options_error(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	zoomValueDidChange(): void;
  }
}

declare const MSDocument: sketchInternal.MSDocument;

