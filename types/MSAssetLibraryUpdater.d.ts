// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetLibraryUpdater extends NSObject {
    /* typeEncoding=@"BCDownloadManager", ivar=_downloadManager, attributes=(retain,nonatomic) */
    	downloadManager(): BCDownloadManager;
    /* typeEncoding=@"NSMutableDictionary", ivar=_downloadTasks, attributes=(retain,nonatomic) */
    	downloadTasks(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@24@0:8@16 */
    	appcastForURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	assignUpdatingInfo_toAssetLibrary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelDownloadTaskWithIdentifier(...args: any[]): any;
    /* typeEncoding=@?24@0:8@16 */
    	completionHandlerForIdentifier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	dictionaryValueForDownloadTaskWithIdentifier_key(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	downloadAppcastAtURL_withCompletionHandler(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@?24@?32 */
    	downloadAssetLibraryAppcasts_downloadAppcastHandler_completionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadManager(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32q40 */
    	downloadManager_downloadTaskFinishedForIdentifier_downloadedURL_httpStatusCode(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24Q32Q40 */
    	downloadManager_downloadTaskHasUpdatedForIdentifier_downloadedSoFar_withDownloadSize(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	downloadManager_downloadTaskWithIdentifier_failedWithError(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadTasks(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@?24@0:8@16 */
    	progressHandlerForIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDownloadManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDownloadTasks(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@?24@?32 */
    	startDownloadingAssetLibrary_progressHandler_completionHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	startFileDownload_completionHandler(...args: any[]): any;
    /* typeEncoding=c36@0:8@16@24c32 */
    	updateAssetLibrary_withLibraryDownloadedTo_linking(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	updatingInfoForLatestVersionInAppcast(...args: any[]): any;
  }
}

declare const MSAssetLibraryUpdater: sketchInternal.MSAssetLibraryUpdater;

