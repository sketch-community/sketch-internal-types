// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPreviewImageCache extends NSObject {
    /* typeEncoding=@"NSURL", ivar=_directoryURL, attributes=(assign,nonatomic,readonly) */
    	directoryURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSOperationQueue", ivar=_fetchQueue, attributes=(assign,nonatomic,readonly) */
    	fetchQueue(): cocoascript.NSOperationQueue;
    /* typeEncoding=@"NSString", ivar=_subdirectoryName, attributes=(copy,nonatomic,readonly) */
    	subdirectoryName(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@40@0:8@16d24^@32 */
    	cachedPreviewImageForDocumentFileURL_maximumPixelSize_error(...args: any[]): any;
    /* typeEncoding=@44@0:8@16d24c32^@36 */
    	cachedPreviewImageURLForDocumentFileURL_maximumPixelSize_createDirectoriesIfNeeded_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	directoryURL(...args: any[]): any;
    /* typeEncoding=@28@0:8c16^@20 */
    	directoryURLCreateIfNeeded_error(...args: any[]): any;
    /* typeEncoding=v40@0:8@16d24@?32 */
    	fetchPreviewImageForDocumentAtURL_maximumPixelSize_handler(...args: any[]): any;
    /* typeEncoding=v40@0:8@16d24@?32 */
    	fetchPreviewImageForDocumentFileURL_maximumPixelSize_handler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fetchQueue(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithSubdirectoryName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subdirectoryName(...args: any[]): any;
  }
}

declare const MSPreviewImageCache: sketchInternal.MSPreviewImageCache;

