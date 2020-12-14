// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginManager extends NSObject {
    /* typeEncoding=c, ivar=_disableAllPlugins, attributes=(assign,nonatomic) */
    	disableAllPlugins(): boolean;
    /* typeEncoding=@"NSMutableArray", ivar=_downloadPluginsErrors, attributes=(retain,nonatomic) */
    	downloadPluginsErrors(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSArray", ivar=_folderMonitors, attributes=(retain,nonatomic) */
    	folderMonitors(): cocoascript.NSArray;
    /* typeEncoding=@"NSDictionary", ivar=_incompatiblePluginVersions, attributes=(retain,nonatomic) */
    	incompatiblePluginVersions(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	incompatiblePlugins(): cocoascript.NSArray;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	incompatiblePluginsWithCompatibleUpdates(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	incompatiblePluginsWithUpdates(): cocoascript.NSDictionary;
    /* typeEncoding=d, ivar=_lastTimerInterval, attributes=(assign,nonatomic) */
    	lastTimerInterval(): number;
    /* typeEncoding=@"<MSPluginLogAction>", ivar=_logAction, attributes=(assign,nonatomic,weak) */
    	logAction(): any;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	mainPluginsFolderURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSDictionary", ivar=_metadata, attributes=(copy,nonatomic) */
    	metadata(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSURL", ivar=_metadataURL, attributes=(copy,nonatomic) */
    	metadataURL(): cocoascript.NSURL;
    /* typeEncoding=c, ivar=_monitorForChanges, attributes=(assign,nonatomic,readonly) */
    	monitorForChanges(): boolean;
    /* typeEncoding=q, ivar=_numberOfIncompatiblePluginsDisabled, attributes=(assign,nonatomic) */
    	numberOfIncompatiblePluginsDisabled(): number;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	numberOfPluginsWithSketchCompatibleUpdates(): number;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	numberOfPluginsWithUpdates(): number;
    /* typeEncoding=@"MSPluginManagingState", ivar=_pluginStateManager, attributes=(assign,nonatomic,readonly) */
    	pluginStateManager(): MSPluginManagingState;
    /* typeEncoding=@"NSMutableDictionary", ivar=_pluginVersions, attributes=(retain,nonatomic) */
    	pluginVersions(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(copy,nonatomic) */
    	plugins(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSArray", ivar=_pluginsFolderURLs, attributes=(copy,nonatomic,readonly) */
    	pluginsFolderURLs(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_pluginsWithSketchCompatipleUpdates, attributes=(assign,nonatomic) */
    	pluginsWithSketchCompatipleUpdates(): cocoascript.NSArray;
    /* typeEncoding=@"NSMutableDictionary", ivar=_runningCommandCallbacks, attributes=(retain,nonatomic) */
    	runningCommandCallbacks(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSMutableDictionary", ivar=_runningCommands, attributes=(retain,nonatomic) */
    	runningCommands(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSTimer", ivar=_sessionTimer, attributes=(retain,nonatomic) */
    	sessionTimer(): cocoascript.NSTimer;
    /* typeEncoding=@"<MSPluginUpdater>", ivar=_updater, attributes=(copy,nonatomic,readonly) */
    	updater(): any;
    /* typeEncoding=q, ivar=_updatesAddedToWarehouse, attributes=(assign,nonatomic) */
    	updatesAddedToWarehouse(): number;
    /* typeEncoding=@16@0:8 */
    	defaultPluginURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initialisePlugins(): void;
    /* typeEncoding=c32@0:8@16@24 */
    	isPluginAtURL_newerThanPluginAtURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mainPluginsFolderURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginsURLs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginsWarehouseURL(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	warehousePluginFolderForIdentifier_withVersion(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v48@0:8@16@24@32:40 */
    	addCommands_toMenu_fromDescription_selector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addDownloadAndDecompressPluginError(...args: any[]): any;
    /* typeEncoding=v32@0:8@16:24 */
    	addPluginsToMenu_selector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	alertAboutUnsupportedPluginBundle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cancelDownloadingPluginVersions(): void;
    /* typeEncoding=v40@0:8@16@?24@?32 */
    	checkForPluginUpdates_handler_completionHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8@?16@?24 */
    	checkForPluginUpdatesWithHandler_completionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cleanupFinishedCommands(): void;
    /* typeEncoding=v16@0:8 */
    	clearFolderMonitors(): void;
    /* typeEncoding=v16@0:8 */
    	clearPluginsCache(): void;
    /* typeEncoding=@24@0:8@16 */
    	commandWithSpecifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	compatiblePluginUpdatesNotDownloaded(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	contentsSameForSmallTextFiles_file2(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8@16 */
    	didClearEventStack(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	disableAllPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	disablePlugin(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	disabledPlugins(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	downloadAndInstallPluginWithIdentifier_version_downloadCompletionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	downloadCompatiblePluginUpdatesWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	downloadLatestPluginUpdatesWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	downloadPluginUpdate_withVersion_completionHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	downloadPluginUpdates_withCompletionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadPluginsErrors(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	downloadRemotePluginsBlacklist(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	downloadedPluginURLWithIdentifier_version(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	editBundle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	enablePlugin(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	enabledPlugins(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	firstPluginBundleFoundInFolder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	folderMonitors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	folderNamesToIgnore(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	incompatiblePluginVersions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	incompatiblePlugins(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	incompatiblePluginsWithCompatibleUpdates(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	incompatiblePluginsWithUpdates(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithPluginsFolderURLs_updater_pluginStateManager(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	installPluginAtURL_withIdentifier_error(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	installPluginWithIdentifier_version_error(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isIncompatiblePlugin(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	isPluginUpdateDownloadedWithIdentifier_version(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	isPluginWithIdentifier_incompatibleWithVersion(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	lastTimerInterval(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	latestPluginUpdatesNotDownloaded(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mainPluginsFolderURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadataURL(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	monitorForChanges(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	numberOfIncompatiblePluginsDisabled(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	numberOfPluginsWithSketchCompatibleUpdates(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	numberOfPluginsWithUpdates(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginStateManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginVersions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	plugins(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	pluginsByResolvingFolderAtURL_visitedURLs_relativeFolderPath_ignoredNames(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginsFolderURLs(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	pluginsFromResolvedFolderAtURL_visitedURLs_relativeFolderPath_ignoredNames(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginsWithSketchCompatipleUpdates(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	registerIncompatiblePlugins(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	relativePathByDeletingCommonPathComponentsWithFileURL_fromURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadPlugins(): void;
    /* typeEncoding=v24@0:8@16 */
    	removePluginVersionsNotInIdentifiers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetAllPluginMetadataToBeDisabled(): void;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	runHandlerWithKey_fromCommand_inPlugin_withContext(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	runningCommandCallbacks(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	runningCommands(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sessionTimer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDisableAllPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDownloadPluginsErrors(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFolderMonitors(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIncompatiblePluginVersions(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setLastTimerInterval(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetadata(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetadataURL(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setNumberOfIncompatiblePluginsDisabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginVersions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPlugins(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginsWithSketchCompatipleUpdates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRunningCommandCallbacks(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRunningCommands(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSessionTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setUpdatesAddedToWarehouse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setupFolderMonitoringWithVisitedURLs(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	shouldEnablePluginIdentifier_withVersion(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	sketchrunnerMSPluginManager_reloadPlugins(): void;
    /* typeEncoding=v28@0:8@16c24 */
    	sortMenu_recursively(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	stopTrackingLongRunningCommandWithSpecifier(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	trackLongRunningCommand_onComplete(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updater(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	updatesAddedToWarehouse(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	versionsForPlugin(...args: any[]): any;
  }
}

declare const MSPluginManager: sketchInternal.MSPluginManager;

