// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSHttpCall extends NSObject {
    /* typeEncoding=@?, ivar=_completionHandler, attributes=(copy,nonatomic) */
    	completionHandler(): any;
    /* typeEncoding=@"NSData", ivar=_data, attributes=(retain,nonatomic) */
    	data(): cocoascript.NSData;
    /* typeEncoding=@"NSDictionary", ivar=_headers, attributes=(retain,nonatomic) */
    	headers(): cocoascript.NSDictionary;
    /* typeEncoding=c, ivar=_inProgress, attributes=(assign,getter=isInProgress) */
    	inProgress(): boolean;
    /* typeEncoding=@"NSString", ivar=_method, attributes=(copy,nonatomic) */
    	method(): cocoascript.NSString;
    /* typeEncoding=i, ivar=_retryCount, attributes=(assign,nonatomic) */
    	retryCount(): number;
    /* typeEncoding=@"NSArray", ivar=_retryIntervals, attributes=(retain,nonatomic) */
    	retryIntervals(): cocoascript.NSArray;
    /* typeEncoding=@"NSObject<OS_dispatch_source>", ivar=_timerSource, attributes=(retain,nonatomic) */
    	timerSource(): any;
    /* typeEncoding=@"NSURL", ivar=_url, attributes=(retain,nonatomic) */
    	url(): cocoascript.NSURL;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@?16@0:8 */
    	completionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=I24@0:8Q16 */
    	delayForRetryCount(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasReachedMaxRetries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headers(...args: any[]): any;
    /* typeEncoding=@68@0:8@16@24@32@40@48c56@?60 */
    	initWithUrl_method_headers_data_retryIntervals_compressionEnabled_completionHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInProgress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	method(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetRetry(): void;
    /* typeEncoding=i16@0:8 */
    	retryCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	retryIntervals(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setCompletionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaders(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setInProgress(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMethod(...args: any[]): any;
    /* typeEncoding=v20@0:8i16 */
    	setRetryCount(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRetryIntervals(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTimerSource(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUrl(...args: any[]): any;
    /* typeEncoding=v40@0:8Q16@24@?32 */
    	startRetryTimerWithStatusCode_retryAfter_event(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	timerSource(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	url(...args: any[]): any;
  }
}

declare const MSHttpCall: sketchInternal.MSHttpCall;

