// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetLibraryTableCellView extends NSTableCellView {
    /* typeEncoding=@"MSAssetPreferenceItem", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	assetPreferenceItem(): MSAssetPreferenceItem;
    /* typeEncoding=c, ivar=_downloadCancelled, attributes=(assign,nonatomic) */
    	downloadCancelled(): boolean;
    /* typeEncoding=@"NSProgressIndicator", ivar=_downloadProgress, attributes=(assign,nonatomic,weak) */
    	downloadProgress(): cocoascript.NSProgressIndicator;
    /* typeEncoding=c, ivar=_downloadProgressHidden, attributes=(assign,nonatomic) */
    	downloadProgressHidden(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	enabled(): boolean;
    /* typeEncoding=@"MSAssetLibrariesPreferencePane", ivar=_libraryPreferencePane, attributes=(assign,nonatomic,weak) */
    	libraryPreferencePane(): MSAssetLibrariesPreferencePane;
    /* typeEncoding=@"MSAssetLibraryPreview", ivar=_previewContainer, attributes=(assign,nonatomic,weak) */
    	previewContainer(): MSAssetLibraryPreview;
    /* typeEncoding=@"NSTextField", ivar=_primaryTextField, attributes=(assign,nonatomic,weak) */
    	primaryTextField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_secondaryTextField, attributes=(assign,nonatomic,weak) */
    	secondaryTextField(): cocoascript.NSTextField;
    /* typeEncoding=@24@0:8@16 */
    	static keyPathsForValuesAffectingValueForKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static missingLibraryPlaceholderImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static sketchRemoteLibraryPlaceholderImage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	assetPreferenceItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cancelDownload(): void;
    /* typeEncoding=c16@0:8 */
    	downloadCancelled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	downloadLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	downloadProgress(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	downloadProgressHidden(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enabled(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	generatePreviewImage(): void;
    /* typeEncoding=@16@0:8 */
    	libraryPreferencePane(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewContainer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	primaryTextField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setBackgroundStyle(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDownloadCancelled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDownloadProgress(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDownloadProgressHidden(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryPreferencePane(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObjectValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPrimaryTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPrimaryTextFieldTextColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondaryTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondaryTextFieldTextColor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupButtons(): void;
    /* typeEncoding=v16@0:8 */
    	startDownload(): void;
    /* typeEncoding=v16@0:8 */
    	startDownloading(): void;
    /* typeEncoding=v16@0:8 */
    	updateTextFieldTextColors(): void;
  }
}

declare const MSAssetLibraryTableCellView: sketchInternal.MSAssetLibraryTableCellView;

