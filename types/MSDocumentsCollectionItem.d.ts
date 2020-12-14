// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentsCollectionItem extends NSObject {
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	URL(): cocoascript.NSURL;
    /* typeEncoding=@"NSError", ivar=_downloadError, attributes=(retain,nonatomic) */
    	downloadError(): cocoascript.NSError;
    /* typeEncoding=@"NSProgress", ivar=_downloadProgress, attributes=(retain,nonatomic) */
    	downloadProgress(): cocoascript.NSProgress;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isPlaceholder(): boolean;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	placeholderImage(): cocoascript.NSImage;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	providesPreviewImage(): boolean;
    /* typeEncoding=c, ivar=_showLibraryIcon, attributes=(assign,nonatomic,readonly) */
    	showLibraryIcon(): boolean;
    /* typeEncoding=c, ivar=_showPublicShareIcon, attributes=(assign,nonatomic,readonly) */
    	showPublicShareIcon(): boolean;
    /* typeEncoding=@"NSString", ivar=_status, attributes=(retain,nonatomic) */
    	status(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_statusColor, attributes=(assign,nonatomic,readonly) */
    	statusColor(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	supportsDeletion(): boolean;
    /* typeEncoding=c, ivar=_supportsRenaming, attributes=(assign,nonatomic,readonly) */
    	supportsRenaming(): boolean;
    /* typeEncoding=@"NSColor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	tintColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSString", ivar=_title, attributes=(retain,nonatomic) */
    	title(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_toolTip, attributes=(assign,nonatomic,readonly) */
    	toolTip(): cocoascript.NSString;
    /* typeEncoding=@16@0:8 */
    	static bundledTemplatesDirectoryURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static keyPathsForValuesAffectingStatus(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static keyPathsForValuesAffectingStatusColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static userTemplatesDirectoryURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	cancelDocumentDownload(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	downloadError(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadProgress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	getStatus(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	getStatusColor(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPlaceholder(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	placeholderImage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	providesPreviewImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDownloadError(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDownloadProgress(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStatus(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTitle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	showLibraryIcon(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	showPublicShareIcon(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	status(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	statusColor(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsDeletion(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsRenaming(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tintColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolTip(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateCloudStatus(): void;
  }
}

declare const MSDocumentsCollectionItem: sketchInternal.MSDocumentsCollectionItem;

