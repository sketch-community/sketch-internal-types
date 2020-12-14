// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMirrorWindowController extends NSWindowController {
    /* typeEncoding=@"NSPopUpButton", ivar=_artboardButton, attributes=(retain,nonatomic) */
    	artboardButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSToolbarItem", ivar=_artboardToolbarItem, attributes=(retain,nonatomic) */
    	artboardToolbarItem(): cocoascript.NSToolbarItem;
    /* typeEncoding=@"NSButton", ivar=_backButton, attributes=(retain,nonatomic) */
    	backButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSToolbarItem", ivar=_backToolbarItem, attributes=(retain,nonatomic) */
    	backToolbarItem(): cocoascript.NSToolbarItem;
    /* typeEncoding=@"MSColorView", ivar=_backgroundView, attributes=(retain,nonatomic) */
    	backgroundView(): MSColorView;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentArtboardID(): cocoascript.NSString;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentDocument(): MSImmutableDocumentData;
    /* typeEncoding=@"MSDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentMutableDocument(): MSDocumentData;
    /* typeEncoding=@"MSImmutableArtboardGroup", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentStartpoint(): MSImmutableArtboardGroup;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentURL(): cocoascript.NSURL;
    /* typeEncoding=@"MSMirrorDataProvider", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataProvider(): MSMirrorDataProvider;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	defaultArtboardID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstArtboardID(): cocoascript.NSString;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	fittingWindowFrame(): CGRect;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSButton", ivar=_startpointButton, attributes=(retain,nonatomic) */
    	startpointButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSToolbarItem", ivar=_startpointToolbarItem, attributes=(retain,nonatomic) */
    	startpointToolbarItem(): cocoascript.NSToolbarItem;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	startpoints(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,dynamic,nonatomic,readonly) */
    	viewPort(): CGRect;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	visibleArtboardID(): cocoascript.NSString;
    /* typeEncoding=@"WKWebView", ivar=(null), attributes=(retain,dynamic,nonatomic) */
    	webView(): WKWebView;
    /* typeEncoding=@"WKWebView", ivar=_webView, attributes=(retain,nonatomic) */
    	webView(): WKWebView;
    /* typeEncoding=v16@0:8 */
    	static close(): void;
    /* typeEncoding=@16@0:8 */
    	static sharedController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	static show(): void;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	artboardButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	artboardToolbarItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	backButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	backToolbarItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	backgroundView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeVisibleArtboardID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	currentArtboardDidChangeNotification(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentArtboardID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentMutableDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentStartpoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataProvider(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	defaultArtboardID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChangeNotification(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidUpdateNotification(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstArtboardID(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	fittingWindowFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	goBack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	goWithTheFlow(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithWindowNibName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadWindow(): void;
    /* typeEncoding=v16@0:8 */
    	localizeFrontend(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	menuItemForArtboard_shownArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDragged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseExited(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseMoved(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseUp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openStartpoint(...args: any[]): any;
    /* typeEncoding=v32@0:8:16@24 */
    	relayResponderAction_with(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rightMouseUp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	scrollWheel(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	selectArtboardMenuItem_shownArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArtboardButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArtboardToolbarItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackToolbarItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackgroundView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStartpointButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStartpointToolbarItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWebView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showContextualMenuWithEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showWindow(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sortedArtboards(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startLoading(): void;
    /* typeEncoding=@16@0:8 */
    	startpointButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	startpointToolbarItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	startpoints(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	startpointsMenu(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	startpointsMenuShowingArtboardID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleFlowHome(...args: any[]): any;
    /* typeEncoding=v32@0:8@16q24 */
    	transitionToArtboardID_animatedBy(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateArtboardButtonShowingArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateArtboardButtonShowingArtboardID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateBackButtonEnabled(): void;
    /* typeEncoding=@16@0:8 */
    	urlRequest(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	userContentController_didReceiveScriptMessage(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	viewPort(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	visibleArtboardID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	webView(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	webView_didFailNavigation_withError(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	webView_didFinishNavigation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	whitelistClientID(): void;
    /* typeEncoding=Q32@0:8@16Q24 */
    	window_willUseFullScreenPresentationOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidChangeBackingProperties(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
    /* typeEncoding=v24@0:8@16 */
    	windowWillClose(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	windowWillUseStandardFrame_defaultFrame(...args: any[]): any;
  }
}

declare const MSMirrorWindowController: sketchInternal.MSMirrorWindowController;

