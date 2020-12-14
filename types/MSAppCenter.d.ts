// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAppCenter extends NSObject {
    /* typeEncoding=@"NSString", ivar=_appSecret, attributes=(copy,nonatomic) */
    	appSecret(): cocoascript.NSString;
    /* typeEncoding=@"<MSChannelGroupProtocol>", ivar=_channelGroup, attributes=(retain,nonatomic) */
    	channelGroup(): any;
    /* typeEncoding=@"<MSChannelUnitProtocol>", ivar=_channelUnit, attributes=(retain,nonatomic) */
    	channelUnit(): any;
    /* typeEncoding=c, ivar=_configuredFromApplication, attributes=(assign,nonatomic,getter=isConfiguredFromApplication) */
    	configuredFromApplication(): boolean;
    /* typeEncoding=@"NSString", ivar=_defaultTransmissionTargetToken, attributes=(copy,nonatomic) */
    	defaultTransmissionTargetToken(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=c, ivar=_enabledStateUpdating, attributes=(assign,nonatomic,getter=isEnabledStateUpdating) */
    	enabledStateUpdating(): boolean;
    /* typeEncoding=@"NSUUID", ivar=_installId, attributes=(assign,nonatomic,readonly) */
    	installId(): cocoascript.NSUUID;
    /* typeEncoding=@"NSString", ivar=_logUrl, attributes=(copy) */
    	logUrl(): cocoascript.NSString;
    /* typeEncoding=@?, ivar=_maxStorageSizeCompletionHandler, attributes=(copy,nonatomic) */
    	maxStorageSizeCompletionHandler(): any;
    /* typeEncoding=@"MSOneCollectorChannelDelegate", ivar=_oneCollectorChannelDelegate, attributes=(retain,nonatomic) */
    	oneCollectorChannelDelegate(): MSOneCollectorChannelDelegate;
    /* typeEncoding=@"NSNumber", ivar=_requestedMaxStorageSizeInBytes, attributes=(retain,nonatomic) */
    	requestedMaxStorageSizeInBytes(): cocoascript.NSNumber;
    /* typeEncoding=c, ivar=_sdkConfigured, attributes=(assign,nonatomic,getter=isSdkConfigured) */
    	sdkConfigured(): boolean;
    /* typeEncoding=@"NSMutableArray", ivar=_services, attributes=(retain,nonatomic) */
    	services(): cocoascript.NSMutableArray;
    /* typeEncoding=c, ivar=_setMaxStorageSizeHasBeenCalled, attributes=(assign) */
    	setMaxStorageSizeHasBeenCalled(): boolean;
    /* typeEncoding=@"NSMutableArray", ivar=_startedServiceNames, attributes=(retain,nonatomic) */
    	startedServiceNames(): cocoascript.NSMutableArray;
    /* typeEncoding=v16@0:8 */
    	static configure(): void;
    /* typeEncoding=v24@0:8@16 */
    	static configureWithAppSecret(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static groupId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static installId(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	static isAppDelegateForwarderEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	static isConfigured(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	static isDebuggerAttached(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	static isEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	static isRunningInAppCenterTestCloud(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	static logLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static logTag(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	static resetSharedInstance(): void;
    /* typeEncoding=@16@0:8 */
    	static sdkVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static setCountryCode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static setCustomProperties(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	static setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	static setLogHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	static setLogLevel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static setLogUrl(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@?24 */
    	static setMaxStorageSize_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static setUserId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static setWrapperSdk(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static sharedInstance(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	static start_withServices(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static startFromLibraryWithServices(...args: any[]): any;
    /* typeEncoding=v24@0:8#16 */
    	static startService(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static startWithServices(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	appSecret(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	applyPipelineEnabledState(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBeUsed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	channelGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	channelUnit(...args: any[]): any;
    /* typeEncoding=c36@0:8@16@24c32 */
    	configureWithAppSecret_transmissionTargetToken_fromApplication(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultTransmissionTargetToken(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initializeChannelGroup(): void;
    /* typeEncoding=@16@0:8 */
    	installId(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isConfiguredFromApplication(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabledStateUpdating(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSdkConfigured(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logUrl(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	maxStorageSizeCompletionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oneCollectorChannelDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	requestedMaxStorageSizeInBytes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendCustomPropertiesLog(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendStartServiceLog(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	services(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAppSecret(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChannelGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChannelUnit(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setConfiguredFromApplication(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCustomProperties(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDefaultTransmissionTargetToken(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabledStateUpdating(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogUrl(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@?24 */
    	setMaxStorageSize_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setMaxStorageSizeCompletionHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	setMaxStorageSizeHasBeenCalled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOneCollectorChannelDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRequestedMaxStorageSizeInBytes(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSdkConfigured(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setServices(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSetMaxStorageSizeHasBeenCalled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStartedServiceNames(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserId(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldDisable(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sortServices(...args: any[]): any;
    /* typeEncoding=v36@0:8@16@24c32 */
    	start_withServices_fromApplication(...args: any[]): any;
    /* typeEncoding=c44@0:8#16@24@32c40 */
    	startService_withAppSecret_transmissionTargetToken_fromApplication(...args: any[]): any;
    /* typeEncoding=v44@0:8@16@24@32c40 */
    	startServices_withAppSecret_transmissionTargetToken_fromApplication(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	startedServiceNames(...args: any[]): any;
  }
}

declare const MSAppCenter: sketchInternal.MSAppCenter;

