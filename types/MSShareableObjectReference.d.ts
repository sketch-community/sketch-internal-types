// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShareableObjectReference extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"MSShareableObjectReference", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	deepestReference(): MSShareableObjectReference;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSShareableObjectReferenceDescriptor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	descriptor(): MSShareableObjectReferenceDescriptor;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isForeign(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	locationPath(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"MSShareableObjectReference", ivar=_remoteReference, attributes=(retain,nonatomic) */
    	remoteReference(): MSShareableObjectReference;
    /* typeEncoding=@"MSModelObject<BCSortable><MSSharedObjectStyling>", ivar=_shareableObject, attributes=(retain,nonatomic) */
    	shareableObject(): any;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shareableObjectType(): number;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sharedObjectID(): cocoascript.NSString;
    /* typeEncoding=@"MSAssetLibrary", ivar=_sourceLibrary, attributes=(retain,nonatomic) */
    	sourceLibrary(): MSAssetLibrary;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static referenceForLocalCopy_ofRemote(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static referenceForLocalObject(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static referenceForRemoteObject_inLibrary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static referenceForShareableObject(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static referenceForShareableObject_inLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	addToDocument_withAssetLibraryController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyStyleToMenuItem_withColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	deepestReference(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	descriptor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	foreignObjectCollectionInDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8d16@?24 */
    	generatePreviewForManageSheetWithBackingScale_completionBlock(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24d32@?40 */
    	generatePreviewForMenuItem_withColorSpace_backingScale_completionBlock(...args: any[]): any;
    /* typeEncoding=@40@0:8@16d24@?32 */
    	generatePreviewForPopup_backingScale_completionBlock(...args: any[]): any;
    /* typeEncoding=v60@0:8{CGSize=dd}16d32c40@44@?52 */
    	generatePreviewForSyncSheetWithSize_backingScale_shadow_colorSpace_completionBlock(...args: any[]): any;
    /* typeEncoding=v72@0:8{CGSize=dd}16{CGSize=dd}32d48@56@?64 */
    	generatePreviewImageAtSize_maximumSizeWithDecorations_backingScale_colorSpace_completionHandler(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	idAndLibraryAreEqual(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToReference(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isForeign(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localLocationPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	locationPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	referenceWithUpdatedObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	remoteReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRemoteReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShareableObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSourceLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shareableObject(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shareableObjectType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedObjectID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sourceLibrary(...args: any[]): any;
  }
}

declare const MSShareableObjectReference: sketchInternal.MSShareableObjectReference;

