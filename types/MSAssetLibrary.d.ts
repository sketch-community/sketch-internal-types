// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetLibrary extends NSObject {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canLibraryBeRemoved(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canOpen(): boolean;
    /* typeEncoding=@"NSDate", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dateLastModified(): cocoascript.NSDate;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSAssetLibraryDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocumentData", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSDocumentData;
    /* typeEncoding=c, ivar=_enabled, attributes=(assign,nonatomic) */
    	enabled(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLocal(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isRemote(): boolean;
    /* typeEncoding=q, ivar=_lastSavedDocumentVersion, attributes=(assign,nonatomic,readonly) */
    	lastSavedDocumentVersion(): number;
    /* typeEncoding=@"NSString", ivar=_libraryID, attributes=(retain,nonatomic) */
    	libraryID(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_libraryType, attributes=(assign,nonatomic,readonly) */
    	libraryType(): number;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(retain) */
    	locationOnDisk(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@, ivar=(null), attributes=(assign,readonly) */
    	previewItemDisplayState(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,readonly) */
    	previewItemTitle(): cocoascript.NSString;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,readonly) */
    	previewItemURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	previewURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSDictionary", ivar=_propertyListDictionaryRepresentation, attributes=(assign,nonatomic,readonly) */
    	propertyListDictionaryRepresentation(): cocoascript.NSDictionary;
    /* typeEncoding=Q, ivar=_status, attributes=(assign,nonatomic) */
    	status(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	valid(): boolean;
    /* typeEncoding=@24@0:8@16 */
    	static URLForTemplateLibraryNamed(...args: any[]): any;
    /* typeEncoding=Q24@0:8Q16 */
    	static assetLibraryStatusForDocumentErrorCode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static keyPathsForValuesAffectingValid(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	canLibraryBeRemoved(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canOpen(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dateLastModified(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	handleAssetLibraryUpdateWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleDocumentLoaded(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocumentAtURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLocal(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRemote(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	lastSavedDocumentVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryID(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	libraryType(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	loadAsyncWithDispatchGroup_completionHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8^Q16 */
    	loadDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	loadSynchronously(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	locationOnDisk(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	openWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewItemTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewItemURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	propertyListDictionaryRepresentation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resolveLocationOnDisk(): void;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocationOnDisk(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setStatus(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	status(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	unload(): void;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
  }
}

declare const MSAssetLibrary: sketchInternal.MSAssetLibrary;

