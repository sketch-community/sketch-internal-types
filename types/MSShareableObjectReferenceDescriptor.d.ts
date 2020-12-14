// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShareableObjectReferenceDescriptor extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSURL", ivar=_libraryLocation, attributes=(copy,nonatomic) */
    	libraryLocation(): cocoascript.NSURL;
    /* typeEncoding=Q, ivar=_shareableObjectType, attributes=(assign,nonatomic) */
    	shareableObjectType(): number;
    /* typeEncoding=@"NSString", ivar=_sharedObjectID, attributes=(copy,nonatomic) */
    	sharedObjectID(): cocoascript.NSString;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8@16 */
    	descriptorsFromPasteboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pasteboardType(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	readableTypesForPasteboard(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithPasteboardPropertyList_ofType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryLocation(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pasteboardPropertyListForType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryLocation(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setShareableObjectType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSharedObjectID(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shareableObjectType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedObjectID(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	writableTypesForPasteboard(...args: any[]): any;
  }
}

declare const MSShareableObjectReferenceDescriptor: sketchInternal.MSShareableObjectReferenceDescriptor;

