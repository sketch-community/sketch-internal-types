// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSUnavailableUpdatesWindowController extends NSWindowController {
    /* typeEncoding=q, ivar=_blockedUpdateReason, attributes=(assign,nonatomic) */
    	blockedUpdateReason(): number;
    /* typeEncoding=@"NSButton", ivar=_confirmationButton, attributes=(assign,nonatomic,weak) */
    	confirmationButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSTextField", ivar=_descriptionTextField, attributes=(assign,nonatomic,weak) */
    	descriptionTextField(): cocoascript.NSTextField;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSTextField", ivar=_headerTextField, attributes=(assign,nonatomic,weak) */
    	headerTextField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSString", ivar=_lastBuildNumber, attributes=(retain,nonatomic) */
    	lastBuildNumber(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_lastVersion, attributes=(retain,nonatomic) */
    	lastVersion(): cocoascript.NSString;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v40@0:8@16@24q32 */
    	showModalWithVersion_buildNumber_reason(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q16@0:8 */
    	blockedUpdateReason(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirmationAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	confirmationButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	descriptionTextField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerTextField(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32q40 */
    	initWithWindowNibName_version_buildNumber_reason(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastBuildNumber(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	learnMore(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openUpdatesPage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	renewalRequired(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setBlockedUpdateReason(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setConfirmationButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDescriptionTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastBuildNumber(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastVersion(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
    /* typeEncoding=v24@0:8@16 */
    	windowWillClose(...args: any[]): any;
  }
}

declare const MSUnavailableUpdatesWindowController: sketchInternal.MSUnavailableUpdatesWindowController;

