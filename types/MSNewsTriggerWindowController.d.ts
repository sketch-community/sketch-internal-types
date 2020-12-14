// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSNewsTriggerWindowController extends CHWindowController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSButton", ivar=_dontShowAgainButton, attributes=(assign,nonatomic) */
    	dontShowAgainButton(): cocoascript.NSButton;
    /* typeEncoding=c, ivar=_finishedLoadingData, attributes=(assign,nonatomic) */
    	finishedLoadingData(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSString", ivar=_newsID, attributes=(copy,nonatomic) */
    	newsID(): cocoascript.NSString;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSURL", ivar=_url, attributes=(copy,nonatomic) */
    	url(): cocoascript.NSURL;
    /* typeEncoding=@"WKWebView", ivar=_webView, attributes=(assign,nonatomic) */
    	webView(): WKWebView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	close(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dontShowAgainButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dontShowNewsWithIDAnymore(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	finishedLoadingData(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithURL_newsID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	newsID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDontShowAgainButton(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setFinishedLoadingData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNewsID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUrl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWebView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	url(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	webView(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	webView_decidePolicyForNavigationAction_decisionHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	webView_didCommitNavigation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
  }
}

declare const MSNewsTriggerWindowController: sketchInternal.MSNewsTriggerWindowController;

