// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSChannelUnitDefault extends NSObject {
    /* typeEncoding=c, ivar=_availableBatchFromStorage, attributes=(assign,nonatomic) */
    	availableBatchFromStorage(): boolean;
    /* typeEncoding=@"MSChannelUnitConfiguration", ivar=_configuration, attributes=(retain,nonatomic) */
    	configuration(): MSChannelUnitConfiguration;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSHashTable", ivar=_delegates, attributes=(retain,nonatomic) */
    	delegates(): cocoascript.NSHashTable;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_discardLogs, attributes=(assign,nonatomic) */
    	discardLogs(): boolean;
    /* typeEncoding=c, ivar=_enabled, attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"<MSIngestionProtocol>", ivar=_ingestion, attributes=(retain,nonatomic) */
    	ingestion(): any;
    /* typeEncoding=Q, ivar=_itemsCount, attributes=(assign,nonatomic) */
    	itemsCount(): number;
    /* typeEncoding=@"NSObject<OS_dispatch_queue>", ivar=_logsDispatchQueue, attributes=(retain,nonatomic) */
    	logsDispatchQueue(): any;
    /* typeEncoding=c, ivar=_paused, attributes=(assign,nonatomic,getter=isPaused) */
    	paused(): boolean;
    /* typeEncoding=@"NSHashTable", ivar=_pausedIdentifyingObjects, attributes=(retain,nonatomic) */
    	pausedIdentifyingObjects(): cocoascript.NSHashTable;
    /* typeEncoding=@"NSMutableSet", ivar=_pausedTargetKeys, attributes=(retain,nonatomic) */
    	pausedTargetKeys(): cocoascript.NSMutableSet;
    /* typeEncoding=@"NSMutableArray", ivar=_pendingBatchIds, attributes=(retain,nonatomic) */
    	pendingBatchIds(): cocoascript.NSMutableArray;
    /* typeEncoding=c, ivar=_pendingBatchQueueFull, attributes=(assign,nonatomic) */
    	pendingBatchQueueFull(): boolean;
    /* typeEncoding=@"<MSStorage>", ivar=_storage, attributes=(retain,nonatomic) */
    	storage(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSObject<OS_dispatch_source>", ivar=_timerSource, attributes=(retain,nonatomic) */
    	timerSource(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addDelegate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	availableBatchFromStorage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	checkPendingLogs(): void;
    /* typeEncoding=@16@0:8 */
    	configuration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteAllLogsWithError(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteAllLogsWithErrorSync(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	discardLogs(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	enqueueItem_flags(...args: any[]): any;
    /* typeEncoding=v32@0:8:16@?24 */
    	enumerateDelegatesForSelector_withBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	flushQueue(): void;
    /* typeEncoding=@16@0:8 */
    	ingestion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	initWithIngestion_storage_configuration_logsDispatchQueue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPaused(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	itemsCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logsDispatchQueue(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	notifyFailureBeforeSendingForItem_withError(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oldestPendingLogTimestampKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pauseSendingLogsWithToken(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pauseWithIdentifyingObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pauseWithIdentifyingObjectSync(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pausedIdentifyingObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pausedTargetKeys(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pendingBatchIds(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	pendingBatchQueueFull(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeDelegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetTimer(): void;
    /* typeEncoding=Q16@0:8 */
    	resolveFlushInterval(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resumeSendingLogsWithToken(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resumeWithIdentifyingObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resumeWithIdentifyingObjectSync(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendLogContainer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAvailableBatchFromStorage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setConfiguration(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegates(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDiscardLogs(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8c16c20 */
    	setEnabled_andDeleteDataOnDisabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIngestion(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setItemsCount(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogsDispatchQueue(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPaused(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPausedIdentifyingObjects(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPausedTargetKeys(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPendingBatchIds(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPendingBatchQueueFull(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStorage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTimerSource(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	startTimer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	storage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	timerSource(...args: any[]): any;
  }
}

declare const MSChannelUnitDefault: sketchInternal.MSChannelUnitDefault;

