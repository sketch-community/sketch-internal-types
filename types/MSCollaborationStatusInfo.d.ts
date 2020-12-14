// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCollaborationStatusInfo extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	archiveReferenceIdentifier_bc(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_baseVersionID, attributes=(retain,nonatomic) */
    	baseVersionID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_isConsolidating, attributes=(assign,nonatomic) */
    	isConsolidating(): boolean;
    /* typeEncoding=@"NSString", ivar=_shareID, attributes=(retain,nonatomic) */
    	shareID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_status, attributes=(retain,nonatomic) */
    	status(): cocoascript.NSString;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSArray", ivar=_uploadedPatches, attributes=(retain,nonatomic) */
    	uploadedPatches(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=_versionID, attributes=(retain,nonatomic) */
    	versionID(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	load(): void;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	baseVersionID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=@60@0:8@16@24c32@36@44@52 */
    	initWithStatus_uploadedPatches_isConsolidating_shareID_baseVersionID_versionID(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isConsolidating(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBaseVersionID(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsConsolidating(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShareID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStatus(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUploadedPatches(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVersionID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shareID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	status(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	uploadedPatches(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	versionID(...args: any[]): any;
  }
}

declare const MSCollaborationStatusInfo: sketchInternal.MSCollaborationStatusInfo;

