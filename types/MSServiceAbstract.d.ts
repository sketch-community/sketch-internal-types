// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSServiceAbstract extends NSObject {
    /* typeEncoding=@"NSString", ivar=_appSecret, attributes=(retain,nonatomic) */
    	appSecret(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isAvailable) */
    	available(): boolean;
    /* typeEncoding=@"<MSChannelGroupProtocol>", ivar=_channelGroup, attributes=(retain,nonatomic) */
    	channelGroup(): any;
    /* typeEncoding=@"<MSChannelUnitProtocol>", ivar=_channelUnit, attributes=(retain,nonatomic) */
    	channelUnit(): any;
    /* typeEncoding=@"MSChannelUnitConfiguration", ivar=(null), attributes=(retain,nonatomic) */
    	channelUnitConfiguration(): MSChannelUnitConfiguration;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_defaultTransmissionTargetToken, attributes=(retain,nonatomic) */
    	defaultTransmissionTargetToken(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	groupId(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	initializationPriority(): number;
    /* typeEncoding=@"NSString", ivar=_isEnabledKey, attributes=(copy,nonatomic,readonly) */
    	isEnabledKey(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_started, attributes=(assign,nonatomic,getter=isStarted) */
    	started(): boolean;
    /* typeEncoding=c, ivar=_startedFromApplication, attributes=(assign,nonatomic) */
    	startedFromApplication(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	appSecret(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	applyEnabledState(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBeUsed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	channelGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	channelUnit(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultTransmissionTargetToken(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	initializationPriority(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAppSecretRequired(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAvailable(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	isEnabledKey(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isStarted(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isStartedFromApplication(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAppSecret(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChannelGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChannelUnit(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDefaultTransmissionTargetToken(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setStarted(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setStartedFromApplication(...args: any[]): any;
    /* typeEncoding=v44@0:8@16@24@32c40 */
    	startWithChannelGroup_appSecret_transmissionTargetToken_fromApplication(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	startedFromApplication(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	updateConfigurationWithAppSecret_transmissionTargetToken(...args: any[]): any;
  }
}

declare const MSServiceAbstract: sketchInternal.MSServiceAbstract;

