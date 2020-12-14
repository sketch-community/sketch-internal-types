// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPatch extends NSObject {
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	addedObjectIDs(): cocoascript.NSSet;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	archiveReferenceIdentifier_bc(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_patchID, attributes=(assign,nonatomic,readonly) */
    	patchID(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_patchOperations, attributes=(retain,nonatomic) */
    	patchOperations(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	load(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	patchWithOldDocument_currentDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	addedObjectIDs(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	applyTo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	archiveReferenceIdentifier_bc(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithPatchOperations(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	patchID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	patchOperations(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	performPostPatchCleanupInDocument(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	replacementObjectForJSONEncoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPatchOperations(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateForeignSymbolsInDocument(...args: any[]): any;
  }
}

declare const MSPatch: sketchInternal.MSPatch;

