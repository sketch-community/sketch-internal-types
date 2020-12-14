// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSHttpClient extends NSObject {
    /* typeEncoding=@"<MSHttpClientDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=c, ivar=_enabled, attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=c, ivar=_paused, attributes=(assign,nonatomic,getter=isPaused) */
    	paused(): boolean;
    /* typeEncoding=@"NSMutableSet", ivar=_pendingCalls, attributes=(retain,nonatomic) */
    	pendingCalls(): cocoascript.NSMutableSet;
    /* typeEncoding=@"MS_Reachability", ivar=_reachability, attributes=(retain,nonatomic) */
    	reachability(): MS_Reachability;
    /* typeEncoding=@"NSURLSession", ivar=_session, attributes=(retain,nonatomic) */
    	session(): cocoascript.NSURLSession;
    /* typeEncoding=@"NSURLSessionConfiguration", ivar=_sessionConfiguration, attributes=(retain,nonatomic) */
    	sessionConfiguration(): cocoascript.NSURLSessionConfiguration;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8q16 */
    	initWithMaxHttpConnectionsPerHost(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithMaxHttpConnectionsPerHost_reachability(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPaused(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	networkStateChanged(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	pause(): void;
    /* typeEncoding=@16@0:8 */
    	pendingCalls(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	reachability(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	requestCompletedWithHttpCall_data_response_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resume(): void;
    /* typeEncoding=v56@0:8@16@24@32@40@?48 */
    	sendAsync_method_headers_data_completionHandler(...args: any[]): any;
    /* typeEncoding=v68@0:8@16@24@32@40@48c56@?60 */
    	sendAsync_method_headers_data_retryIntervals_compressionEnabled_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendCallAsync(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	session(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sessionConfiguration(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8c16c20 */
    	setEnabled_andDeleteDataOnDisabled(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPaused(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPendingCalls(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReachability(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSession(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSessionConfiguration(...args: any[]): any;
  }
}

declare const MSHttpClient: sketchInternal.MSHttpClient;

