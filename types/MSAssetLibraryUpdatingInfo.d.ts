// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetLibraryUpdatingInfo extends NSObject {
    /* typeEncoding=Q, ivar=_downloadSize, attributes=(assign,nonatomic,readonly) */
    	downloadSize(): number;
    /* typeEncoding=@"NSString", ivar=_downloadTaskIdentifier, attributes=(copy,nonatomic) */
    	downloadTaskIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"NSURL", ivar=_downloadURL, attributes=(assign,nonatomic,readonly) */
    	downloadURL(): cocoascript.NSURL;
    /* typeEncoding=@"MSFolderMonitor", ivar=_folderMonitor, attributes=(retain,nonatomic) */
    	folderMonitor(): MSFolderMonitor;
    /* typeEncoding=@"NSURL", ivar=_imageURL, attributes=(assign,nonatomic,readonly) */
    	imageURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_libraryName, attributes=(assign,nonatomic,readonly) */
    	libraryName(): cocoascript.NSString;
    /* typeEncoding=@"NSURL", ivar=_shareLink, attributes=(assign,nonatomic,readonly) */
    	shareLink(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_versionNumberForUpdate, attributes=(retain,nonatomic) */
    	versionNumberForUpdate(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	downloadSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadTaskIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	folderMonitor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCloudShare(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24@32@40@48Q56 */
    	initWithDownloadURL_libraryName_imageURL_newVersionNumber_shareLink_downloadSize(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToAssetLibraryUpdatingInfo(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isHigherVersionThan(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDownloadTaskIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFolderMonitor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVersionNumberForUpdate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shareLink(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	versionNumberForUpdate(...args: any[]): any;
  }
}

declare const MSAssetLibraryUpdatingInfo: sketchInternal.MSAssetLibraryUpdatingInfo;

