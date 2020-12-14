// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudSignInViewController extends NSViewController {
    /* typeEncoding=@"NSButton", ivar=_actionButton, attributes=(retain,nonatomic) */
    	actionButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_actionButtonTopContainerConstraint, attributes=(retain,nonatomic) */
    	actionButtonTopContainerConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_actionButtonTopInputConstraint, attributes=(retain,nonatomic) */
    	actionButtonTopInputConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=c, ivar=_allowCancellation, attributes=(assign,nonatomic) */
    	allowCancellation(): boolean;
    /* typeEncoding=@"NSButton", ivar=_cancelButton, attributes=(retain,nonatomic) */
    	cancelButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSRegistrationWindowContentDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_didFinish, attributes=(assign,nonatomic) */
    	didFinish(): boolean;
    /* typeEncoding=@"NSString", ivar=_email, attributes=(copy,nonatomic) */
    	email(): cocoascript.NSString;
    /* typeEncoding=@"NSTextField", ivar=_emailField, attributes=(retain,nonatomic) */
    	emailField(): cocoascript.NSTextField;
    /* typeEncoding=@"SCKAPIEnvironment", ivar=(null), attributes=(retain,nonatomic) */
    	environment(): SCKAPIEnvironment;
    /* typeEncoding=@"NSPopUpButton", ivar=_environmentPopUpButton, attributes=(retain,nonatomic) */
    	environmentPopUpButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSError", ivar=_error, attributes=(retain,nonatomic) */
    	error(): cocoascript.NSError;
    /* typeEncoding=@"MSLinkButton", ivar=_forgotPasswordButton, attributes=(retain,nonatomic) */
    	forgotPasswordButton(): MSLinkButton;
    /* typeEncoding=c, ivar=_hasEmail, attributes=(assign,nonatomic) */
    	hasEmail(): boolean;
    /* typeEncoding=c, ivar=_hasPassword, attributes=(assign,nonatomic) */
    	hasPassword(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	headerBackgroundImage(): cocoascript.NSImage;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	headerDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	headerImage(): cocoascript.NSImage;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	headerLinkTitle(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	headerTitle(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_hidesInputViews, attributes=(assign,nonatomic) */
    	hidesInputViews(): boolean;
    /* typeEncoding=c, ivar=_isLoading, attributes=(assign,nonatomic) */
    	isLoading(): boolean;
    /* typeEncoding=c, ivar=_isSkippable, attributes=(assign,nonatomic) */
    	isSkippable(): boolean;
    /* typeEncoding=@"NSString", ivar=_password, attributes=(copy,nonatomic) */
    	password(): cocoascript.NSString;
    /* typeEncoding=@"NSSecureTextField", ivar=_passwordField, attributes=(retain,nonatomic) */
    	passwordField(): cocoascript.NSSecureTextField;
    /* typeEncoding=@"NSButton", ivar=_remoteActionButton, attributes=(retain,nonatomic) */
    	remoteActionButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_ssoButton, attributes=(retain,nonatomic) */
    	ssoButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSTextField", ivar=_statusLabel, attributes=(retain,nonatomic) */
    	statusLabel(): cocoascript.NSTextField;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTextField", ivar=_titleLabel, attributes=(retain,nonatomic) */
    	titleLabel(): cocoascript.NSTextField;
    /* typeEncoding=c, ivar=_wantsLicense, attributes=(assign,nonatomic) */
    	wantsLicense(): boolean;
    /* typeEncoding=@24@0:8@16 */
    	makeSuccesViewForTextField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	storyboardIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	actionButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	actionButtonTopContainerConstraint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	actionButtonTopInputConstraint(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowCancellation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeEnvironment(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	confirmRegistration(): void;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	didDismissAuthenticationSession(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didFinish(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	email(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	emailField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	environment(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	environmentPopUpButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	finishSignIn(): void;
    /* typeEncoding=@16@0:8 */
    	forgotPasswordButton(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEmail(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasPassword(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerBackgroundImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerDescription(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerLinkTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerTitle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hidesInputViews(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLoading(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSkippable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	obtainLicenseWithAuthentication(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	password(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	passwordField(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	presentationAnchorForWebAuthenticationSession(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	processSignInResult_error(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	registrationWindowDidClickHeaderLink(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	remoteActionButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resetPassword(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActionButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActionButtonTopContainerConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActionButtonTopInputConstraint(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAllowCancellation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidFinish(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEmail(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEmailField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEnvironment(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEnvironmentPopUpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setError(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setForgotPasswordButton(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasEmail(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasPassword(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHidesInputViews(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsLoading(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsSkippable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPassword(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPasswordField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRemoteActionButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSsoButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStatusLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTitleLabel(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setWantsLicense(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowSSO(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	signIn(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	signInWithSSO(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	signUp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	ssoButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	statusLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	titleLabel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateCancelButtonTitle(): void;
    /* typeEncoding=v16@0:8 */
    	updateEnvironmentMenuItems(): void;
    /* typeEncoding=v16@0:8 */
    	updateViewConstraints(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
    /* typeEncoding=v24@0:8@16 */
    	visitCloudDocumentation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	visitStore(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wantsLicense(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	willPresentError(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	willPresentLicensingError(...args: any[]): any;
  }
}

declare const MSCloudSignInViewController: sketchInternal.MSCloudSignInViewController;

