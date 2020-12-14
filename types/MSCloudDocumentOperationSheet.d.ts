// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudDocumentOperationSheet extends CHSheetController {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canPerformCloudOperation(): boolean;
    /* typeEncoding=@?, ivar=_completionHandler, attributes=(copy,nonatomic) */
    	completionHandler(): any;
    /* typeEncoding=@"SCKOrganization", ivar=_defaultOrganization, attributes=(retain,nonatomic) */
    	defaultOrganization(): SCKOrganization;
    /* typeEncoding=@"SCKProject", ivar=_defaultProject, attributes=(retain,nonatomic) */
    	defaultProject(): SCKProject;
    /* typeEncoding=@"NSButton", ivar=_deleteButton, attributes=(retain,nonatomic) */
    	deleteButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=_documentName, attributes=(retain,nonatomic) */
    	documentName(): cocoascript.NSString;
    /* typeEncoding=@"NSTextField", ivar=_headerDescriptionLabel, attributes=(retain,nonatomic) */
    	headerDescriptionLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_headerTitleLabel, attributes=(retain,nonatomic) */
    	headerTitleLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSView", ivar=_nameInputView, attributes=(retain,nonatomic) */
    	nameInputView(): cocoascript.NSView;
    /* typeEncoding=Q, ivar=_operationType, attributes=(assign,nonatomic) */
    	operationType(): number;
    /* typeEncoding=@"SCKOrganization", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	organization(): SCKOrganization;
    /* typeEncoding=@"NSPopUpButton", ivar=_organizationButton, attributes=(retain,nonatomic) */
    	organizationButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSView", ivar=_organizationInputView, attributes=(retain,nonatomic) */
    	organizationInputView(): cocoascript.NSView;
    /* typeEncoding=@"SCKProject", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	project(): SCKProject;
    /* typeEncoding=@"NSPopUpButton", ivar=_projectButton, attributes=(retain,nonatomic) */
    	projectButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSView", ivar=_projectInputView, attributes=(retain,nonatomic) */
    	projectInputView(): cocoascript.NSView;
    /* typeEncoding=@"SCKAPIOperation", ivar=_projectsRequest, attributes=(retain,nonatomic) */
    	projectsRequest(): SCKAPIOperation;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	targetDocumentURLs(): cocoascript.NSArray;
    /* typeEncoding=@"SCKUser", ivar=_userWithProjects, attributes=(retain,nonatomic) */
    	userWithProjects(): SCKUser;
    /* typeEncoding=@16@0:8 */
    	keyPathsForValuesAffectingCanPerformCloudOperation(...args: any[]): any;
    /* typeEncoding=@40@0:8@16Q24@?32 */
    	runForDocument_performingOperation_completionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=c16@0:8 */
    	canPerformCloudOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirm(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultOrganization(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultProject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	deleteButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerDescriptionLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerTitleLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nameInputView(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	operationType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	organization(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	organizationButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	organizationInputView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	project(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projectButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projectInputView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projectsMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projectsRequest(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadOrganizations(): void;
    /* typeEncoding=v16@0:8 */
    	requestProjects(): void;
    /* typeEncoding=v24@0:8@16 */
    	selectOrganization(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectProject(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setCompletionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDefaultOrganization(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDefaultProject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDeleteButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderDescriptionLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderTitleLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNameInputView(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setOperationType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOrganizationButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOrganizationInputView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProjectButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProjectInputView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProjectsRequest(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserWithProjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	targetDocumentURLs(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateProjectsMenu(): void;
    /* typeEncoding=v16@0:8 */
    	updateView(): void;
    /* typeEncoding=@16@0:8 */
    	userWithProjects(...args: any[]): any;
  }
}

declare const MSCloudDocumentOperationSheet: sketchInternal.MSCloudDocumentOperationSheet;

