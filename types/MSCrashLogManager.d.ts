// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCrashLogManager extends NSObject {
    /* typeEncoding=@"NSString", ivar=_attachmentText, attributes=(retain,nonatomic) */
    	attachmentText(): cocoascript.NSString;
    /* typeEncoding=@"NSTextField", ivar=_commentsField, attributes=(assign,nonatomic,weak) */
    	commentsField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSTextField", ivar=_emailField, attributes=(assign,nonatomic,weak) */
    	emailField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	environment(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	environmentURL(): cocoascript.NSURL;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSTextField", ivar=_header, attributes=(assign,nonatomic,weak) */
    	header(): cocoascript.NSTextField;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	items(): cocoascript.NSArray;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	logURL(): cocoascript.NSURL;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSString", ivar=_text, attributes=(assign,nonatomic,readonly) */
    	text(): cocoascript.NSString;
    /* typeEncoding=@"NSDictionary", ivar=_userProvidedInfo, attributes=(retain,nonatomic) */
    	userProvidedInfo(): cocoascript.NSDictionary;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_didFinishActionWithID_context(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_didInstantActionWithID_context(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_willBeginActionWithID_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	appSupportURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	attachmentText(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	attachmentsWithCrashes_forErrorReport(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearEnvironment(): void;
    /* typeEncoding=@16@0:8 */
    	commentsField(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24:32 */
    	control_textView_doCommandBySelector(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	emailField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	environment(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	environmentURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	header(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	items(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	log(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	logActionWithName_actionID_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	prepareContextForLog(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	send(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAttachmentText(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCommentsField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEmailField(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setEnvironmentValue_forKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserProvidedInfo(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	setup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	text(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userProvidedInfo(...args: any[]): any;
  }
}

declare const MSCrashLogManager: sketchInternal.MSCrashLogManager;

