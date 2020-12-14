// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudAction extends MSPopoverAction {
    /* typeEncoding=@?, ivar=_closeAlertUploadDidFinishHandler, attributes=(copy,nonatomic) */
    	closeAlertUploadDidFinishHandler(): any;
    /* typeEncoding=@"NSTimer", ivar=_displayErrorSheetTimer, attributes=(retain,nonatomic) */
    	displayErrorSheetTimer(): cocoascript.NSTimer;
    /* typeEncoding=@"<MSCloudExportableDocument>", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	exportedDocument(): any;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isCloudDocument(): boolean;
    /* typeEncoding=@"NSViewController", ivar=_popoverViewController, attributes=(retain,nonatomic) */
    	popoverViewController(): cocoascript.NSViewController;
    /* typeEncoding=@"NSArray", ivar=_progressImages, attributes=(assign,nonatomic,readonly) */
    	progressImages(): cocoascript.NSArray;
    /* typeEncoding=@"SCKAPIOperation", ivar=_refreshOperation, attributes=(retain,nonatomic) */
    	refreshOperation(): SCKAPIOperation;
    /* typeEncoding=@"MSDocumentUpload", ivar=_upload, attributes=(assign,nonatomic,readonly) */
    	upload(): MSDocumentUpload;
    /* typeEncoding=v32@0:8@16Q24 */
    	attemptRecoveryFromCloudError_optionIndex(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	cloudEnabled(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	cloudError_addingRecoveryOptionsWithAttempter(...args: any[]): any;
    /* typeEncoding=v52@0:8@16@24c32@36@?44 */
    	finishOpenCloudDocument_displayingShare_wasAlreadyOpen_withError_completionHandler(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isErrorRecoverable(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	openCloudDocumentWithApplicationURL_completionHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	openCloudDocumentWithShare_completionHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	openCloudShareURL_completionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	requestCloudUser(): void;
    /* typeEncoding=v16@0:8 */
    	signIn(): void;
    /* typeEncoding=@16@0:8 */
    	userController(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	userPresentableErrorWithCloudError_document(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v56@0:8@16Q24@32:40^v48 */
    	attemptRecoveryFromError_optionIndex_delegate_didRecoverSelector_contextInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	authenticationDidChangeNotification(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	clearErrorSheetTimer(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	closeAlertUploadDidFinishHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deeplinkCloudDocumentWithShare(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	displayErrorSheetPeriod(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayErrorSheetTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	displayUploadFailedError(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	documentUpload_didChangeProgress(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	documentUpload_didFailWithError(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	documentUpload_didUploadShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentUploadDidCancel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportedDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasSubMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isCloudDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSelectable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mayShowInToolbar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	popoverShouldAnimateOnContentFrameDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popoverViewController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	progressDidChangeNotification(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	progressImages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	refreshOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	refreshShareWithHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setCloseAlertUploadDidFinishHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCloudPlatform(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDisplayErrorSheetTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopoverViewController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRefreshOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpload(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupDisplayErrorSheetTimer(): void;
    /* typeEncoding=v40@0:8@16@24@32 */
    	startUploadUpdating_orCreateWithOrganization_project(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	submenuActionIDs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tooltip(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateProgressImage(): void;
    /* typeEncoding=@16@0:8 */
    	upload(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	uploadProviderUpdating_owner_project(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	willPresentError(...args: any[]): any;
  }
}

declare const MSCloudAction: sketchInternal.MSCloudAction;

