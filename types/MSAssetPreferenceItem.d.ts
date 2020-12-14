// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetPreferenceItem extends NSObject {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canViewLibraryWithQuicklook(): boolean;
    /* typeEncoding=@"<MSAssetPreferenceItemDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=_downloadButtonTitle, attributes=(retain,nonatomic) */
    	downloadButtonTitle(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	downloadFailed(): boolean;
    /* typeEncoding=Q, ivar=_downloadedSoFar, attributes=(assign,nonatomic) */
    	downloadedSoFar(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	enabled(): boolean;
    /* typeEncoding=Q, ivar=_fileSize, attributes=(assign,nonatomic) */
    	fileSize(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasAppcastURL(): boolean;
    /* typeEncoding=@"MSAssetLibrary", ivar=_library, attributes=(assign,nonatomic,readonly) */
    	library(): MSAssetLibrary;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	missingRemoteLibraryWithNoInternet(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	modificationDate(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	name(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_originalLibraryType, attributes=(assign,nonatomic) */
    	originalLibraryType(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	preferredViewHeight(): number;
    /* typeEncoding=@"NSImage", ivar=_preview, attributes=(retain,nonatomic) */
    	preview(): cocoascript.NSImage;
    /* typeEncoding=@"MSRemoteAssetLibrary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	remoteLibrary(): MSRemoteAssetLibrary;
    /* typeEncoding=@"NSString", ivar=_secondaryTitle, attributes=(retain,nonatomic) */
    	secondaryTitle(): cocoascript.NSString;
    /* typeEncoding=@"NSColor", ivar=_secondaryTitleColor, attributes=(retain,nonatomic) */
    	secondaryTitleColor(): cocoascript.NSColor;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldDisableEnableControl(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	updateAvailable(): boolean;
    /* typeEncoding=q, ivar=_updatingStatus, attributes=(assign,nonatomic) */
    	updatingStatus(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	validForSecondaryTextField(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	viewIdentifier(): cocoascript.NSString;
    /* typeEncoding=@16@0:8 */
    	static keyPathsForValuesAffectingUpdateAvailable(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static preferenceItemForLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	availableUpdateColor(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canViewLibraryWithQuicklook(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	checkUpdateStatus(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadButtonTitle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	downloadFailed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadProgress(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	downloadSizeStringWithMessage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadToAddString(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	downloadedSoFar(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enabled(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	fileSize(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasAppcastURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	infoText(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	library(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	libraryControllerDidChange(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	missingRemoteLibraryWithNoInternet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modificationDate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	originalLibraryType(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	preferredViewHeight(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preview(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	remoteLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryTitleColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryTitleErrorColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDownloadButtonTitle(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setDownloadedSoFar(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setFileSize(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setOriginalLibraryType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreview(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondaryTitle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondaryTitleColor(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setUpdatingStatus(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupObservers(): void;
    /* typeEncoding=c16@0:8 */
    	shouldDisableEnableControl(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	standardSecondaryTitleColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	tableRowViewForTableView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateAvailable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updateAvailableString(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDownloadButton(): void;
    /* typeEncoding=v16@0:8 */
    	updateSecondaryLabel(): void;
    /* typeEncoding=v16@0:8 */
    	updateSecondaryTitleFromStatus(): void;
    /* typeEncoding=v16@0:8 */
    	updateUI(): void;
    /* typeEncoding=q16@0:8 */
    	updatingStatus(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validForSecondaryTextField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	viewIdentifier(...args: any[]): any;
  }
}

declare const MSAssetPreferenceItem: sketchInternal.MSAssetPreferenceItem;

