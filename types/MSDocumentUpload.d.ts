// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentUpload extends NSObject {
    /* typeEncoding=c, ivar=cancelled, attributes=(assign,nonatomic) */
    	cancelled(): boolean;
    /* typeEncoding=@"SCKShare", ivar=createdShare, attributes=(retain,nonatomic) */
    	createdShare(): SCKShare;
    /* typeEncoding=@"<MSDocumentUploadDelegate>", ivar=delegate, attributes=(retain,nonatomic) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	documentName(): cocoascript.NSString;
    /* typeEncoding=@"SCKShare", ivar=existingShare, attributes=(retain,nonatomic) */
    	existingShare(): SCKShare;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(copy,nonatomic) */
    	fileURL(): cocoascript.NSURL;
    /* typeEncoding=c, ivar=finalized, attributes=(assign,nonatomic) */
    	finalized(): boolean;
    /* typeEncoding=c, ivar=isLibrary, attributes=(assign,nonatomic) */
    	isLibrary(): boolean;
    /* typeEncoding=@"SCKObject<SCKContentOwner>", ivar=owner, attributes=(retain,nonatomic) */
    	owner(): any;
    /* typeEncoding=@"NSProgress", ivar=progress, attributes=(assign,nonatomic,readonly) */
    	progress(): cocoascript.NSProgress;
    /* typeEncoding=@"SCKProject", ivar=project, attributes=(retain,nonatomic) */
    	project(): SCKProject;
    /* typeEncoding=@16@0:8 */
    	didProcessNotification(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	didProcessNotificationUserInfoKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v40@0:8@16@24@32 */
    	URLSession_task_didCompleteWithError(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24q32q40q48 */
    	URLSession_task_didSendBodyData_totalBytesSent_totalBytesExpectedToSend(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cancel(): void;
    /* typeEncoding=c16@0:8 */
    	cancelled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createdShare(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	existingShare(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fileURL(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	finalized(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithDocumentData_name(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	initWithFileURL_error(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	owner(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	progress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	project(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setCancelled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCreatedShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExistingShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFileURL(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setFinalized(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsLibrary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOwner(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProject(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startUpload(): void;
  }
}

declare const MSDocumentUpload: sketchInternal.MSDocumentUpload;

