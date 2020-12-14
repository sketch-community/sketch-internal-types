// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginUpdaterImplementation extends NSObject {
    /* typeEncoding=q, ivar=_downloadingAppcastsStatus, attributes=(assign,nonatomic) */
    	downloadingAppcastsStatus(): number;
    /* typeEncoding=q, ivar=_downloadingPluginVersionsStatus, attributes=(assign,nonatomic) */
    	downloadingPluginVersionsStatus(): number;
    /* typeEncoding=@"BCDownloadManager", ivar=_pluginDownloader, attributes=(retain,nonatomic) */
    	pluginDownloader(): BCDownloadManager;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	cancelDownloadingPluginVersions(): void;
    /* typeEncoding=c40@0:8^v16@24^@32 */
    	decompressCurrentFile_toURL_error(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	decompressPluginZip_toFolder_error(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@?24@?32 */
    	downloadPluginAppcasts_downloadAppcastHandler_completionHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	downloadPluginFromURL_completionHandler(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@?24@?32 */
    	downloadPlugins_downloadPluginHandler_completionHandler(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	downloadingAppcastsStatus(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	downloadingPluginVersionsStatus(...args: any[]): any;
    /* typeEncoding=c32@0:8^@16@24 */
    	makeDecompressError_withDescription(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginDownloader(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setDownloadingAppcastsStatus(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setDownloadingPluginVersionsStatus(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginDownloader(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	versionsDictionaryFromAppcast(...args: any[]): any;
  }
}

declare const MSPluginUpdaterImplementation: sketchInternal.MSPluginUpdaterImplementation;

