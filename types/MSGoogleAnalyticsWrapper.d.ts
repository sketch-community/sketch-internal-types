// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGoogleAnalyticsWrapper extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSMutableArray", ivar=_queue, attributes=(retain,nonatomic) */
    	queue(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSString", ivar=_siteID, attributes=(copy,nonatomic) */
    	siteID(): cocoascript.NSString;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"WebView", ivar=_webView, attributes=(retain,nonatomic) */
    	webView(): WebView;
    /* typeEncoding=c, ivar=_webViewReady, attributes=(assign,nonatomic) */
    	webViewReady(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	callMethod_arguments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	queue(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	sendAction_arguments(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSiteID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWebView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setWebViewReady(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	siteID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	start(): void;
    /* typeEncoding=v16@0:8 */
    	stop(): void;
    /* typeEncoding=@16@0:8 */
    	webView(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	webView_addMessageToConsole(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	webView_didFinishLoadForFrame(...args: any[]): any;
    /* typeEncoding=@56@0:8@16@24@32@40@48 */
    	webView_resource_willSendRequest_redirectResponse_fromDataSource(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	webViewReady(...args: any[]): any;
  }
}

declare const MSGoogleAnalyticsWrapper: sketchInternal.MSGoogleAnalyticsWrapper;

