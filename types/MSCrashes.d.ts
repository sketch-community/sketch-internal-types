// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCrashes extends MSServiceAbstract {
    /* typeEncoding=@"NSString", ivar=_analyzerInProgressFilePathComponent, attributes=(copy,nonatomic) */
    	analyzerInProgressFilePathComponent(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(retain,nonatomic) */
    	appSecret(): cocoascript.NSString;
    /* typeEncoding=@"NSDate", ivar=_appStartTime, attributes=(retain,nonatomic) */
    	appStartTime(): cocoascript.NSDate;
    /* typeEncoding=c, ivar=_automaticProcessingEnabled, attributes=(assign,nonatomic,getter=isAutomaticProcessingEnabled) */
    	automaticProcessingEnabled(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isAvailable) */
    	available(): boolean;
    /* typeEncoding=@"<MSChannelUnitProtocol>", ivar=_bufferChannelUnit, attributes=(retain,nonatomic) */
    	bufferChannelUnit(): any;
    /* typeEncoding=@"NSObject<OS_dispatch_group>", ivar=_bufferFileGroup, attributes=(retain,nonatomic) */
    	bufferFileGroup(): any;
    /* typeEncoding=@"NSObject<OS_dispatch_queue>", ivar=_bufferFileQueue, attributes=(retain,nonatomic) */
    	bufferFileQueue(): any;
    /* typeEncoding=@"<MSChannelGroupProtocol>", ivar=_channelGroup, attributes=(retain,nonatomic) */
    	channelGroup(): any;
    /* typeEncoding=@"<MSChannelUnitProtocol>", ivar=(null), attributes=(retain,nonatomic) */
    	channelUnit(): any;
    /* typeEncoding=@"MSChannelUnitConfiguration", ivar=_channelUnitConfiguration, attributes=(retain,nonatomic) */
    	channelUnitConfiguration(): MSChannelUnitConfiguration;
    /* typeEncoding=@"NSMutableArray", ivar=_crashFiles, attributes=(copy,nonatomic) */
    	crashFiles(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSString", ivar=_crashesPathComponent, attributes=(copy,nonatomic) */
    	crashesPathComponent(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(retain,nonatomic) */
    	defaultTransmissionTargetToken(): cocoascript.NSString;
    /* typeEncoding=@"NSObject<OS_dispatch_semaphore>", ivar=_delayedProcessingSemaphore, attributes=(retain) */
    	delayedProcessingSemaphore(): any;
    /* typeEncoding=@"<MSCrashesDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_didCrashInLastSession, attributes=(assign) */
    	didCrashInLastSession(): boolean;
    /* typeEncoding=c, ivar=_didReceiveMemoryWarningInLastSession, attributes=(assign) */
    	didReceiveMemoryWarningInLastSession(): boolean;
    /* typeEncoding=c, ivar=_enableMachExceptionHandler, attributes=(assign,nonatomic,getter=isMachExceptionHandlerEnabled) */
    	enableMachExceptionHandler(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=^?, ivar=_exceptionHandler, attributes=(assign,nonatomic) */
    	exceptionHandler(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	groupId(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	initializationPriority(): number;
    /* typeEncoding=@"MSErrorReport", ivar=_lastSessionCrashReport, attributes=(retain,getter=getLastSessionCrashReport) */
    	lastSessionCrashReport(): MSErrorReport;
    /* typeEncoding=@"NSString", ivar=_logBufferPathComponent, attributes=(copy,nonatomic) */
    	logBufferPathComponent(): cocoascript.NSString;
    /* typeEncoding=@"NSObject<OS_dispatch_source>", ivar=_memoryPressureSource, attributes=(retain) */
    	memoryPressureSource(): any;
    /* typeEncoding=@"MSPLCrashReporter", ivar=_plCrashReporter, attributes=(retain,nonatomic) */
    	plCrashReporter(): MSPLCrashReporter;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSEncrypter", ivar=_targetTokenEncrypter, attributes=(assign,nonatomic,readonly) */
    	targetTokenEncrypter(): MSEncrypter;
    /* typeEncoding=@"NSMutableArray", ivar=_unprocessedFilePaths, attributes=(retain) */
    	unprocessedFilePaths(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableArray", ivar=_unprocessedLogs, attributes=(retain) */
    	unprocessedLogs(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableArray", ivar=_unprocessedReports, attributes=(retain) */
    	unprocessedReports(): cocoascript.NSMutableArray;
    /* typeEncoding=@?, ivar=_userConfirmationHandler, attributes=(copy) */
    	userConfirmationHandler(): any;
    /* typeEncoding=v24@0:8@16 */
    	applicationDidReportException(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	disableMachExceptionHandler(): void;
    /* typeEncoding=v16@0:8 */
    	generateTestCrash(): void;
    /* typeEncoding=c16@0:8 */
    	hasCrashedInLastSession(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasReceivedMemoryWarningInLastSession(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastSessionCrashReport(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logTag(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	notifyWithUserConfirmation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetSharedInstance(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	sendErrorAttachments_withIncidentIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serviceName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setUserConfirmationHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedInstance(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validatePropertiesForAttachment(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	analyzerInProgressFilePathComponent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	appStartTime(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	applicationWillEnterForeground(): void;
    /* typeEncoding=v20@0:8c16 */
    	applyEnabledState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bufferChannelUnit(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bufferFileGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bufferFileQueue(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	buildHandledErrorReportWithErrorID(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	channel_didCompleteEnqueueingLog_internalId(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	channel_didFailSendingLog_withError(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32Q40 */
    	channel_didPrepareLog_internalId_flags(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_didSucceedSendingLog(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_willSendLog(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	channelGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	channelUnitConfiguration(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearContextHistoryAndKeepCurrentSession(): void;
    /* typeEncoding=v16@0:8 */
    	clearUnprocessedReports(): void;
    /* typeEncoding=v20@0:8c16 */
    	configureCrashReporterWithUncaughtExceptionHandlerEnabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	crashFiles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	crashesPathComponent(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	createAnalyzerFile(): void;
    /* typeEncoding=@16@0:8 */
    	delayedProcessingSemaphore(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	deleteAllFromCrashesDirectory(): void;
    /* typeEncoding=v24@0:8@16 */
    	deleteCrashReportWithFileURL(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didCrashInLastSession(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	didReceiveMemoryWarning(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didReceiveMemoryWarningInLastSession(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	emptyLogBufferFiles(): void;
    /* typeEncoding=^?16@0:8 */
    	exceptionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	getLastSessionCrashReport(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupId(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handleLatestCrashReport(): void;
    /* typeEncoding=v24@0:8Q16 */
    	handleUserConfirmation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	initializationPriority(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAutomaticProcessingEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isMachExceptionHandlerEnabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logBufferPathComponent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	memoryPressureSource(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	notifyWithUserConfirmation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	persistedCrashReports(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	plCrashReporter(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	processCrashReports(): void;
    /* typeEncoding=v16@0:8 */
    	processLogBufferAfterCrash(): void;
    /* typeEncoding=v16@0:8 */
    	processMemoryWarningInLastSession(): void;
    /* typeEncoding=v16@0:8 */
    	removeAnalyzerFile(): void;
    /* typeEncoding=c16@0:8 */
    	sendCrashReportsOrAwaitUserConfirmation(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	sendCrashReportsOrAwaitUserConfirmationForFilteredIds(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	sendErrorAttachments_withIncidentIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAnalyzerInProgressFilePathComponent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAppStartTime(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAutomaticProcessingEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBufferChannelUnit(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBufferFileGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBufferFileQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChannelGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChannelUnitConfiguration(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCrashFiles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCrashesPathComponent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelayedProcessingSemaphore(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidCrashInLastSession(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidReceiveMemoryWarningInLastSession(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnableMachExceptionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8^?16 */
    	setExceptionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastSessionCrashReport(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogBufferPathComponent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMemoryPressureSource(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPlCrashReporter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUnprocessedFilePaths(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUnprocessedLogs(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUnprocessedReports(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setUserConfirmationHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupLogBuffer(): void;
    /* typeEncoding=c16@0:8 */
    	shouldAlwaysSend(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldProcessErrorReport(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startCrashProcessing(): void;
    /* typeEncoding=v16@0:8 */
    	startDelayedCrashProcessing(): void;
    /* typeEncoding=v44@0:8@16@24@32c40 */
    	startWithChannelGroup_appSecret_transmissionTargetToken_fromApplication(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	targetTokenEncrypter(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	trackModelException_withProperties_withAttachments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unprocessedCrashReports(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unprocessedFilePaths(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unprocessedLogs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unprocessedReports(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	updateConfigurationWithAppSecret_transmissionTargetToken(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	userConfirmationHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	userPromptedForConfirmation(...args: any[]): any;
  }
}

declare const MSCrashes: sketchInternal.MSCrashes;

