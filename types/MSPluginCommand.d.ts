// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginCommand extends NSObject {
    /* typeEncoding=@"MSPluginCommandSpecifier", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	commandSpecifier(): MSPluginCommandSpecifier;
    /* typeEncoding=@"NSMutableDictionary", ivar=_context, attributes=(retain,nonatomic) */
    	context(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSMutableDictionary", ivar=_coreModuleMap, attributes=(retain,nonatomic) */
    	coreModuleMap(): cocoascript.NSMutableDictionary;
    /* typeEncoding=c, ivar=_disableCocoaScriptPreprocessor, attributes=(assign,nonatomic) */
    	disableCocoaScriptPreprocessor(): boolean;
    /* typeEncoding=c, ivar=_errorInScript, attributes=(assign,nonatomic) */
    	errorInScript(): boolean;
    /* typeEncoding=@"NSString", ivar=_executingScript, attributes=(retain,nonatomic) */
    	executingScript(): cocoascript.NSString;
    /* typeEncoding=@"NSDictionary", ivar=_handlers, attributes=(copy,nonatomic,readonly) */
    	handlers(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSString", ivar=_identifier, attributes=(copy,nonatomic,readonly) */
    	identifier(): cocoascript.NSString;
    /* typeEncoding=@"NSMutableArray", ivar=_logsWhenRunViaTests, attributes=(retain,nonatomic) */
    	logsWhenRunViaTests(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSPluginManager", ivar=_manager, attributes=(assign,nonatomic,weak) */
    	manager(): MSPluginManager;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic,readonly) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(retain,nonatomic) */
    	performanceData(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSPluginBundle", ivar=_pluginBundle, attributes=(assign,nonatomic,weak) */
    	pluginBundle(): MSPluginBundle;
    /* typeEncoding=Q, ivar=_scope, attributes=(assign,nonatomic,readonly) */
    	scope(): number;
    /* typeEncoding=@"MSPluginScript", ivar=_script, attributes=(assign,nonatomic,readonly) */
    	script(): MSPluginScript;
    /* typeEncoding=@"COScript", ivar=_session, attributes=(retain,nonatomic) */
    	session(): COScript;
    /* typeEncoding=@"NSString", ivar=_shortcut, attributes=(assign,nonatomic,readonly) */
    	shortcut(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	stayRunning(): boolean;
    /* typeEncoding=@16@0:8 */
    	actionIDsNotToReload(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	commandWithJSON_scripts_scriptsURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	URLForPerformanceDocumentWithName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	URLForPerformanceTempFileWithName(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	beginPerformanceTesting_minimumAPI(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	beginTestingMultipleItems_withItemCallback_finishCallback(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32d40 */
    	callCallback_withBlockArguments_data_timestamp(...args: any[]): any;
    /* typeEncoding=@40@0:8@16Q24@32 */
    	callback_asBlockWithArguments_data(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	commandSpecifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	coreModuleMap(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=c16@0:8 */
    	disableCocoaScriptPreprocessor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	error(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	errorInScript(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	executeScript(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	executingScript(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	finishPerformanceTestingWithResults(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	finishTestingItem_results(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	finishTestingMultipleItems(): void;
    /* typeEncoding=@24@0:8@16 */
    	flattenedHandlerIndexWithHandlers(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	fullContextFromContext_url(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	handlers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasRunHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24@32@40@48Q56 */
    	initWithScript_identifier_name_handlers_shortcut_scope(...args: any[]): any;
    /* typeEncoding=@56@0:8@16@24@32@40Q48 */
    	initWithScript_identifier_name_runHandler_scope(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadJSGlobals(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	log_atLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logsWhenRunViaTests(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	manager(...args: any[]): any;
    /* typeEncoding=@24@0:8:16 */
    	menuItemWithAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	newSessionForURL_shouldReload(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	performanceData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginBundle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginBundleIdentifierForMetadata(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForPerformanceTesting(): void;
    /* typeEncoding=v24@0:8@16 */
    	print(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	run_manager(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@?32 */
    	run_manager_onComplete(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	runCallback_withDocumentAtURL_data(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	runHandler_context_manager(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@?40 */
    	runHandler_context_manager_onComplete(...args: any[]): any;
    /* typeEncoding=@56@0:8@16@24@32@40@?48 */
    	runHandler_withOptionalKey_context_manager_onComplete(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	runHandlerWithKey_context_manager(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@?40 */
    	runHandlerWithKey_context_manager_onComplete(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	scope(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	script(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	scriptEncounteredException(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	session(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContext(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCoreModuleMap(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDisableCocoaScriptPreprocessor(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setErrorInScript(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExecutingScript(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogsWhenRunViaTests(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPerformanceData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginBundle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSession(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setStayRunning(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpSessionWithContext(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	setValue_forKey_onDocument(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	setValue_forKey_onDocument_forPluginIdentifier(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	setValue_forKey_onLayer(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	setValue_forKey_onLayer_forPluginIdentifier(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	setValue_forKey_onObject_forPluginIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shortcut(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shortcutKey(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shortcutModifiers(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldReloadWithActionID(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	stayRunning(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	tearDownIfFinished(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	tearDownSession(): void;
    /* typeEncoding=v16@0:8 */
    	testNextItem(): void;
    /* typeEncoding=d40@0:8@16@24Q32 */
    	timeToExecuteSelector_target_iterations(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	valueForKey_onDocument(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	valueForKey_onDocument_forPluginIdentifier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	valueForKey_onLayer(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	valueForKey_onLayer_forPluginIdentifier(...args: any[]): any;
  }
}

declare const MSPluginCommand: sketchInternal.MSPluginCommand;

