// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOneCollectorChannelDelegate extends NSObject {
    /* typeEncoding=@"NSString", ivar=_baseUrl, attributes=(copy,nonatomic) */
    	baseUrl(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSMutableDictionary", ivar=_epochsAndSeqsByIKey, attributes=(retain,nonatomic) */
    	epochsAndSeqsByIKey(): cocoascript.NSMutableDictionary;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSUUID", ivar=_installId, attributes=(retain,nonatomic) */
    	installId(): cocoascript.NSUUID;
    /* typeEncoding=@"NSMutableDictionary", ivar=_oneCollectorChannels, attributes=(retain,nonatomic) */
    	oneCollectorChannels(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"MSOneCollectorIngestion", ivar=_oneCollectorIngestion, attributes=(retain,nonatomic) */
    	oneCollectorIngestion(): MSOneCollectorIngestion;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	baseUrl(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_didPauseWithIdentifyingObject(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32Q40 */
    	channel_didPrepareLog_internalId_flags(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_didResumeWithIdentifyingObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16c24c28 */
    	channel_didSetEnabled_andDeleteDataOnDisabled(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_prepareLog(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channelGroup_didAddChannelUnit(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	channelUnit_shouldFilterLog(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	epochsAndSeqsByIKey(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithHttpClient_installId_baseUrl(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	installId(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isOneCollectorGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oneCollectorChannels(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oneCollectorIngestion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBaseUrl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEpochsAndSeqsByIKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInstallId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogUrl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOneCollectorChannels(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOneCollectorIngestion(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldSendLogToOneCollector(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateLog(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateLogName(...args: any[]): any;
  }
}

declare const MSOneCollectorChannelDelegate: sketchInternal.MSOneCollectorChannelDelegate;

