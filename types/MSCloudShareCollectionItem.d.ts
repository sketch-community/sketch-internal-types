// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudShareCollectionItem extends MSExistingDocumentCollectionItem {
    /* typeEncoding=@"SCKShare", ivar=_cloudShare, attributes=(assign,nonatomic,readonly) */
    	cloudShare(): SCKShare;
    /* typeEncoding=@"SCKCloudDocument", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	latestDocument(): SCKCloudDocument;
    /* typeEncoding=c, ivar=_loading, attributes=(assign,nonatomic,getter=isLoading) */
    	loading(): boolean;
    /* typeEncoding=@"NSImage", ivar=_previewImage, attributes=(retain,nonatomic) */
    	previewImage(): cocoascript.NSImage;
    /* typeEncoding=@"NSString", ivar=_shareName, attributes=(retain,nonatomic) */
    	shareName(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	URL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cancelDocumentDownload(): void;
    /* typeEncoding=@16@0:8 */
    	cloudShare(...args: any[]): any;
    /* typeEncoding=v40@0:8d16@24@?32 */
    	fetchPreviewImageWithMaximumPixelSize_previewImageCache_completionHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCloudShare(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithCloudShare_previewImage(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLoading(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPlaceholder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	latestDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	providesPreviewImage(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setLoading(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShareName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shareName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	showLibraryIcon(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	showPublicShareIcon(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsDeletion(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsRenaming(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateCloudStatus(): void;
    /* typeEncoding=v16@0:8 */
    	updateDownloadProgress(): void;
  }
}

declare const MSCloudShareCollectionItem: sketchInternal.MSCloudShareCollectionItem;

