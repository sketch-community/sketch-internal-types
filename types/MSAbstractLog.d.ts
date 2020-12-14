// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAbstractLog extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDevice", ivar=_device, attributes=(retain,nonatomic) */
    	device(): MSDevice;
    /* typeEncoding=@"NSString", ivar=_distributionGroupId, attributes=(copy,nonatomic) */
    	distributionGroupId(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSString", ivar=_sid, attributes=(copy,nonatomic) */
    	sid(): cocoascript.NSString;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSObject", ivar=_tag, attributes=(retain,nonatomic) */
    	tag(): cocoascript.NSObject;
    /* typeEncoding=@"NSDate", ivar=_timestamp, attributes=(retain,nonatomic) */
    	timestamp(): cocoascript.NSDate;
    /* typeEncoding=@"NSSet", ivar=_transmissionTargetTokens, attributes=(retain,nonatomic) */
    	transmissionTargetTokens(): cocoascript.NSSet;
    /* typeEncoding=@"NSString", ivar=_type, attributes=(copy,nonatomic) */
    	type(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_userId, attributes=(copy,nonatomic) */
    	userId(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addTransmissionTargetToken(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	combineOsVersion_withBuild(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	combineSDKLibVer_withVersion(...args: any[]): any;
    /* typeEncoding=@24@0:8q16 */
    	convertTimeZoneOffsetToISO8601(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	device(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	distributionGroupId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	serializeLogWithPrettyPrinting(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDevice(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDistributionGroupId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSid(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTag(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTimestamp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTransmissionTargetTokens(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	timestamp(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	toCommonSchemaLogForTargetToken_flags(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	toCommonSchemaLogsWithFlags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transmissionTargetTokens(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	type(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userId(...args: any[]): any;
  }
}

declare const MSAbstractLog: sketchInternal.MSAbstractLog;

