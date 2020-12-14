// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRemoteAssetLibrary extends MSAssetLibrary {
    /* typeEncoding=@"NSURL", ivar=_appcastURL, attributes=(retain,nonatomic) */
    	appcastURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_displayName, attributes=(copy,nonatomic) */
    	displayName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	downloadAvailable(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	fileName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_infoText, attributes=(retain,nonatomic) */
    	infoText(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_isCloudLibrary, attributes=(assign,nonatomic) */
    	isCloudLibrary(): boolean;
    /* typeEncoding=c, ivar=_isEditable, attributes=(assign,nonatomic) */
    	isEditable(): boolean;
    /* typeEncoding=@"NSString", ivar=_libraryVersion, attributes=(retain,nonatomic) */
    	libraryVersion(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_newUpdatingInfo, attributes=(assign,nonatomic) */
    	newUpdatingInfo(): boolean;
    /* typeEncoding=@"NSString", ivar=_originalName, attributes=(copy,nonatomic) */
    	originalName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_teamName, attributes=(copy,nonatomic) */
    	teamName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	updateAvailable(): boolean;
    /* typeEncoding=c, ivar=_updatesRestricted, attributes=(assign,nonatomic) */
    	updatesRestricted(): boolean;
    /* typeEncoding=@"MSAssetLibraryUpdatingInfo", ivar=_updatingInfo, attributes=(retain,nonatomic) */
    	updatingInfo(): MSAssetLibraryUpdatingInfo;
    /* typeEncoding=@24@0:8@16 */
    	URLForApplicationSupportLibraryNamed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetLibraryFolder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	appcastURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	assetLibraryUpdated(): void;
    /* typeEncoding=c16@0:8 */
    	canLibraryBeRemoved(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canOpen(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	downloadAvailable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fileName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	infoText(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocumentAtURL(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	initWithName_appcastURL_version_infoText(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isCloudLibrary(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEditable(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRemote(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	libraryType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	newUpdatingInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	openWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resolveLocationOnDisk(): void;
    /* typeEncoding=v24@0:8@16 */
    	setAppcastURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDisplayName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInfoText(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsCloudLibrary(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsEditable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryVersion(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setNewUpdatingInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTeamName(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setUpdatesRestricted(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpdatingInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	teamName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateAvailable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateLibraryID(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updatesRestricted(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updatingInfo(...args: any[]): any;
  }
}

declare const MSRemoteAssetLibrary: sketchInternal.MSRemoteAssetLibrary;

