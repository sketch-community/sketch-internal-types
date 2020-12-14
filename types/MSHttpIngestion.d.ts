// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSHttpIngestion extends NSObject {
    /* typeEncoding=@"NSString", ivar=_apiPath, attributes=(copy,nonatomic) */
    	apiPath(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_baseURL, attributes=(copy,nonatomic) */
    	baseURL(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_callsRetryIntervals, attributes=(retain,nonatomic) */
    	callsRetryIntervals(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_enabled, attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"<MSHttpClientProtocol>", ivar=_httpClient, attributes=(retain,nonatomic) */
    	httpClient(): any;
    /* typeEncoding=@"NSDictionary", ivar=_httpHeaders, attributes=(retain,nonatomic) */
    	httpHeaders(): cocoascript.NSDictionary;
    /* typeEncoding=q, ivar=_maxNumberOfConnections, attributes=(assign,nonatomic,readonly) */
    	maxNumberOfConnections(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isReadyToSend) */
    	readyToSend(): boolean;
    /* typeEncoding=@"NSURL", ivar=_sendURL, attributes=(retain,nonatomic) */
    	sendURL(): cocoascript.NSURL;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8@16 */
    	eTagFromResponse(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	apiPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	baseURL(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	buildURLWithBaseURL_apiPath_queryStrings(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	callsRetryIntervals(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	getHeadersWithData_eTag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	getHttpMethod(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	getPayloadWithData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	httpClient(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	httpHeaders(...args: any[]): any;
    /* typeEncoding=@56@0:8@16@24@32@40@48 */
    	initWithHttpClient_baseUrl_apiPath_headers_queryStrings(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24@32@40@48@56 */
    	initWithHttpClient_baseUrl_apiPath_headers_queryStrings_retryIntervals(...args: any[]): any;
    /* typeEncoding=@72@0:8@16@24@32@40@48@56q64 */
    	initWithHttpClient_baseUrl_apiPath_headers_queryStrings_retryIntervals_maxNumberOfConnections(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isReadyToSend(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	maxNumberOfConnections(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	obfuscateResponsePayload(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	printResponse_body_error(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	sendAsync_completionHandler(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@?40 */
    	sendAsync_eTag_callId_completionHandler(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	sendAsync_eTag_completionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sendURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setApiPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBaseURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCallsRetryIntervals(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8c16c20 */
    	setEnabled_andDeleteDataOnDisabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHttpClient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHttpHeaders(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSendURL(...args: any[]): any;
  }
}

declare const MSHttpIngestion: sketchInternal.MSHttpIngestion;

