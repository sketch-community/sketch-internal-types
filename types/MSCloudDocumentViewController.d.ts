// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudDocumentViewController extends MSCloudBaseViewController {
    /* typeEncoding=@"NSStackView", ivar=_buttonStackView, attributes=(retain,nonatomic) */
    	buttonStackView(): cocoascript.NSStackView;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canUpdateShare(): boolean;
    /* typeEncoding=@"MSCursorButton", ivar=_linkButton, attributes=(retain,nonatomic) */
    	linkButton(): MSCursorButton;
    /* typeEncoding=@"NSTextField", ivar=_permissionLabel, attributes=(retain,nonatomic) */
    	permissionLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSButton", ivar=_settingsButton, attributes=(retain,nonatomic) */
    	settingsButton(): cocoascript.NSButton;
    /* typeEncoding=@"SCKShare", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	share(): SCKShare;
    /* typeEncoding=@"NSTimer", ivar=_timeLabelUpdateTimer, attributes=(retain,nonatomic) */
    	timeLabelUpdateTimer(): cocoascript.NSTimer;
    /* typeEncoding=@"NSButton", ivar=_updateButton, attributes=(retain,nonatomic) */
    	updateButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_uploadButton, attributes=(retain,nonatomic) */
    	uploadButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_uploadButtonWidthConstraint, attributes=(retain,nonatomic) */
    	uploadButtonWidthConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	buttonStackView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canUpdateShare(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChangeNotification(...args: any[]): any;
    /* typeEncoding={NSEdgeInsets=dddd}16@0:8 */
    	edgeInsets(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	linkButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadView(): void;
    /* typeEncoding=v24@0:8@16 */
    	openPublicURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openShareSettings(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	permissionLabel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadData(): void;
    /* typeEncoding=v16@0:8 */
    	reloadTimeLabel(): void;
    /* typeEncoding=v16@0:8 */
    	reloadTitleLabel(): void;
    /* typeEncoding=v16@0:8 */
    	scheduleTimeLabelUpdate(): void;
    /* typeEncoding=v24@0:8@16 */
    	scheduledTimeLabelUpdateFired(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setButtonStackView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLinkButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPermissionLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSettingsButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTimeLabelUpdateTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpdateButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUploadButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUploadButtonWidthConstraint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	settingsButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	share(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	timeLabelUpdateTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	update(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updateButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	upload(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	uploadButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	uploadButtonWidthConstraint(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLayout(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
  }
}

declare const MSCloudDocumentViewController: sketchInternal.MSCloudDocumentViewController;

