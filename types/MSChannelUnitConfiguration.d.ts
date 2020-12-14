// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSChannelUnitConfiguration extends NSObject {
    /* typeEncoding=Q, ivar=_batchSizeLimit, attributes=(assign,nonatomic,readonly) */
    	batchSizeLimit(): number;
    /* typeEncoding=Q, ivar=_flushInterval, attributes=(assign,nonatomic,readonly) */
    	flushInterval(): number;
    /* typeEncoding=@"NSString", ivar=_groupId, attributes=(copy,nonatomic,readonly) */
    	groupId(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_pendingBatchesLimit, attributes=(assign,nonatomic,readonly) */
    	pendingBatchesLimit(): number;
    /* typeEncoding=q, ivar=_priority, attributes=(assign,nonatomic,readonly) */
    	priority(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	batchSizeLimit(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	flushInterval(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupId(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initDefaultConfigurationWithGroupId(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	initDefaultConfigurationWithGroupId_flushInterval(...args: any[]): any;
    /* typeEncoding=@56@0:8@16q24Q32Q40Q48 */
    	initWithGroupId_priority_flushInterval_batchSizeLimit_pendingBatchesLimit(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	pendingBatchesLimit(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	priority(...args: any[]): any;
  }
}

declare const MSChannelUnitConfiguration: sketchInternal.MSChannelUnitConfiguration;

