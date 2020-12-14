// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAppCenterIngestion extends MSHttpIngestion {
    /* typeEncoding=@"NSString", ivar=_appSecret, attributes=(copy,nonatomic) */
    	appSecret(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	appSecret(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	getHeadersWithData_eTag(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	getPayloadWithData(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithHttpClient_baseUrl_installId(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isReadyToSend(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	obfuscateResponsePayload(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	sendAsync_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAppSecret(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	willSendHTTPRequestToURL_withHeaders(...args: any[]): any;
  }
}

declare const MSAppCenterIngestion: sketchInternal.MSAppCenterIngestion;

