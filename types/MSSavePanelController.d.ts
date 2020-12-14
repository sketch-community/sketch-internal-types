// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSavePanelController extends CHSheetController {
    /* typeEncoding=c, ivar=_allowDocumentDeletion, attributes=(assign,nonatomic) */
    	allowDocumentDeletion(): boolean;
    /* typeEncoding=@"NSView", ivar=_buttonContainer, attributes=(retain,nonatomic) */
    	buttonContainer(): cocoascript.NSView;
    /* typeEncoding=@?, ivar=_completionHandler, attributes=(copy,nonatomic) */
    	completionHandler(): any;
    /* typeEncoding=@"NSView", ivar=_contentView, attributes=(retain,nonatomic) */
    	contentView(): cocoascript.NSView;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSButton", ivar=_deleteButton, attributes=(retain,nonatomic) */
    	deleteButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=q, ivar=_destination, attributes=(assign,nonatomic) */
    	destination(): number;
    /* typeEncoding=@"NSSegmentedControl", ivar=_destinationControl, attributes=(retain,nonatomic) */
    	destinationControl(): cocoascript.NSSegmentedControl;
    /* typeEncoding=@"NSURL", ivar=_directoryURL, attributes=(retain,nonatomic) */
    	directoryURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_documentName, attributes=(retain,nonatomic) */
    	documentName(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSTextField", ivar=_headerDescriptionLabel, attributes=(retain,nonatomic) */
    	headerDescriptionLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSImageView", ivar=_headerImageView, attributes=(retain,nonatomic) */
    	headerImageView(): cocoascript.NSImageView;
    /* typeEncoding=@"NSTextField", ivar=_headerTitleLabel, attributes=(retain,nonatomic) */
    	headerTitleLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"MSHeaderView", ivar=_headerView, attributes=(retain,nonatomic) */
    	headerView(): MSHeaderView;
    /* typeEncoding=@"NSStackView", ivar=_inputStack, attributes=(retain,nonatomic) */
    	inputStack(): cocoascript.NSStackView;
    /* typeEncoding=@"NSButton", ivar=_learnMoreButton, attributes=(retain,nonatomic) */
    	learnMoreButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	localURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSView", ivar=_locationInputView, attributes=(retain,nonatomic) */
    	locationInputView(): cocoascript.NSView;
    /* typeEncoding=@"NSPopUpButton", ivar=_locationPopUpButton, attributes=(retain,nonatomic) */
    	locationPopUpButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSView", ivar=_nameInputView, attributes=(retain,nonatomic) */
    	nameInputView(): cocoascript.NSView;
    /* typeEncoding=@"SCKOrganization", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	organization(): SCKOrganization;
    /* typeEncoding=@"NSView", ivar=_organizationInputView, attributes=(retain,nonatomic) */
    	organizationInputView(): cocoascript.NSView;
    /* typeEncoding=@"NSPopUpButton", ivar=_organizationPopUpButton, attributes=(retain,nonatomic) */
    	organizationPopUpButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"SCKProject", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	project(): SCKProject;
    /* typeEncoding=@"NSView", ivar=_projectInputView, attributes=(retain,nonatomic) */
    	projectInputView(): cocoascript.NSView;
    /* typeEncoding=@"NSPopUpButton", ivar=_projectPopUpButton, attributes=(retain,nonatomic) */
    	projectPopUpButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"SCKAPIOperation", ivar=_projectsRequest, attributes=(retain,nonatomic) */
    	projectsRequest(): SCKAPIOperation;
    /* typeEncoding=@"_TtC6Sketch18MSRecentPlacesList", ivar=_recentPlaces, attributes=(assign,nonatomic,readonly) */
    	recentPlaces(): _TtC6Sketch18MSRecentPlacesList;
    /* typeEncoding=@"NSButton", ivar=_saveButton, attributes=(retain,nonatomic) */
    	saveButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSView", ivar=_signinView, attributes=(retain,nonatomic) */
    	signinView(): cocoascript.NSView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"SCKUser", ivar=_userWithProjects, attributes=(retain,nonatomic) */
    	userWithProjects(): SCKUser;
    /* typeEncoding=@28@0:8@16c24 */
    	static saveSheetWithDocumentName_allowDeletion(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addRecentLocation(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowDocumentDeletion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	authenticationDidChange(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	beginSheetModalForWindow_completionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	buttonContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirm(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	deleteButton(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	destination(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	destinationControl(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	directoryURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragTypes(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	finishWithSender(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerDescriptionLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerImageView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerTitleLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inputStack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	learnMoreAboutCloud(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	learnMoreButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	locationInputView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	locationPopUpButton(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	makeLocationMenuItemForSearchPathDirectory(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	makeLocationMenuItemWithURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeRecentLocationMenuItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nameInputView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	organization(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	organizationInputView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	organizationPopUpButton(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	performDragOperation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	project(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projectInputView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projectPopUpButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projectsMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	projectsRequest(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	rebuildLocationsMenu(): void;
    /* typeEncoding=@16@0:8 */
    	recentPlaces(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadCloudDestinations(): void;
    /* typeEncoding=v16@0:8 */
    	requestOrganizations(): void;
    /* typeEncoding=v16@0:8 */
    	requestProjects(): void;
    /* typeEncoding=@16@0:8 */
    	saveButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectDesktop(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectLocation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectOrganization(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectOtherLocation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectProject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLocation(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAllowDocumentDeletion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setButtonContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setCompletionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContentView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDeleteButton(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setDestination(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDestinationControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDirectoryURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderDescriptionLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderImageView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderTitleLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInputStack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLearnMoreButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocationInputView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocationPopUpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNameInputView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOrganizationInputView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOrganizationPopUpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProjectInputView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProjectPopUpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProjectsRequest(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSaveButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSigninView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSigninViewVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserWithProjects(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	signInToCloud(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	signinView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateButtonValidation(): void;
    /* typeEncoding=v16@0:8 */
    	updateProjectsMenu(): void;
    /* typeEncoding=v16@0:8 */
    	updateView(): void;
    /* typeEncoding=v24@0:8@16 */
    	userDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userWithProjects(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validateConfirmation(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
  }
}

declare const MSSavePanelController: sketchInternal.MSSavePanelController;

