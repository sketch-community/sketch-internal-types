// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSChannelGroupDefault extends NSObject {
    /* typeEncoding=@"NSMutableArray", ivar=_channels, attributes=(retain,nonatomic) */
    	channels(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSHashTable", ivar=_delegates, attributes=(retain,nonatomic) */
    	delegates(): cocoascript.NSHashTable;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSAppCenterIngestion", ivar=_ingestion, attributes=(retain,nonatomic) */
    	ingestion(): MSAppCenterIngestion;
    /* typeEncoding=@"NSObject<OS_dispatch_queue>", ivar=_logsDispatchQueue, attributes=(retain,nonatomic) */
    	logsDispatchQueue(): any;
    /* typeEncoding=@"<MSStorage>", ivar=_storage, attributes=(retain,nonatomic) */
    	storage(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	addChannelUnitWithConfiguration(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	addChannelUnitWithConfiguration_withIngestion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addDelegate(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	channel_didCompleteEnqueueingLog_internalId(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	channel_didFailSendingLog_withError(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_didPauseWithIdentifyingObject(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32Q40 */
    	channel_didPrepareLog_internalId_flags(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_didResumeWithIdentifyingObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16c24c28 */
    	channel_didSetEnabled_andDeleteDataOnDisabled(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_didSucceedSendingLog(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_prepareLog(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	channel_willSendLog(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	channelUnit_shouldFilterLog(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	channelUnitForGroupId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	channels(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegates(...args: any[]): any;
    /* typeEncoding=v32@0:8:16@?24 */
    	enumerateDelegatesForSelector_withBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	ingestion(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithHttpClient_installId_logUrl(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithIngestion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logsDispatchQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pauseWithIdentifyingObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resumeWithIdentifyingObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAppSecret(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChannels(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegates(...args: any[]): any;
    /* typeEncoding=v24@0:8c16c20 */
    	setEnabled_andDeleteDataOnDisabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIngestion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogUrl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogsDispatchQueue(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@?24 */
    	setMaxStorageSize_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStorage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	storage(...args: any[]): any;
  }
}

declare const MSChannelGroupDefault: sketchInternal.MSChannelGroupDefault;

