// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginManagerWithActions extends MSPluginManager {
    /* typeEncoding=@"NSDictionary", ivar=_commandsWithHandler, attributes=(retain,nonatomic) */
    	commandsWithHandler(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSDataSupplierManager", ivar=_dataManager, attributes=(assign,nonatomic,weak) */
    	dataManager(): MSDataSupplierManager;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c, ivar=_wilcardsEnabled, attributes=(assign,nonatomic) */
    	wilcardsEnabled(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_didFinishActionWithID_context(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_didInstantActionWithID_context(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_willBeginActionWithID_context(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applicationWillTerminate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	buildHandlerIndex(): void;
    /* typeEncoding=@16@0:8 */
    	commandsWithHandler(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	contextForActionWithID_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataManager(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	document_didChangeFrom(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	enabledPluginsWithPlugins(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithPluginsFolderURLs_updater_pluginStateManager(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pluginAndCommandIdentifiersForPlugins(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	pluginsToSendShutdownMessageToWithOldPlugins_andNewPlugins(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	pluginsToSendStartupMessageToWithOldPlugins_andNewPlugins(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	runCommand_handlerKey_withContext(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	runHandlerWithKey_fromCommand_inPlugin_withContext(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	sendCommandActionWithID_toPlugins_withIdentifiers_context(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	sendToCommandActionsForCommand_withID_context(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	sendToCommandActionsForPlugin_withID_context(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	sendToInterestedCommandsActionWithID_context(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCommandsWithHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPlugins(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setWilcardsEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wilcardsEnabled(...args: any[]): any;
  }
}

declare const MSPluginManagerWithActions: sketchInternal.MSPluginManagerWithActions;

