// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMainSplitViewController extends NSSplitViewController {
    /* typeEncoding=@"MSCanvasViewController", ivar=_canvasController, attributes=(retain,nonatomic) */
    	canvasController(): MSCanvasViewController;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canvasView(): cocoascript.NSView;
    /* typeEncoding=@"MSComponentGridController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	componentsController(): MSComponentGridController;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	contentModeSplitViewItemIndex(): number;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSInspectorController", ivar=_inspectorController, attributes=(retain,nonatomic) */
    	inspectorController(): MSInspectorController;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	inspectorView(): cocoascript.NSView;
    /* typeEncoding=c, ivar=_inspectorVisible, attributes=(assign,nonatomic,getter=isInspectorVisible) */
    	inspectorVisible(): boolean;
    /* typeEncoding=c, ivar=_isInVersionBrowser, attributes=(assign,nonatomic) */
    	isInVersionBrowser(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isSidebarVisible(): boolean;
    /* typeEncoding=q, ivar=_leftSide, attributes=(assign,nonatomic) */
    	leftSide(): number;
    /* typeEncoding=d, ivar=_restorableSidebarWidth, attributes=(assign,nonatomic) */
    	restorableSidebarWidth(): number;
    /* typeEncoding=q, ivar=_rightSide, attributes=(assign,nonatomic) */
    	rightSide(): number;
    /* typeEncoding=@"NSView", ivar=_savedInspectorView, attributes=(retain,nonatomic) */
    	savedInspectorView(): cocoascript.NSView;
    /* typeEncoding=c, ivar=_shouldEncodeCurrentSidebarWidth, attributes=(assign,nonatomic) */
    	shouldEncodeCurrentSidebarWidth(): boolean;
    /* typeEncoding=@"BCSideBarViewController", ivar=_sidebarController, attributes=(retain,nonatomic) */
    	sidebarController(): BCSideBarViewController;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sidebarView(): cocoascript.NSView;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_sidebarWidthConstraint, attributes=(retain,nonatomic) */
    	sidebarWidthConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSWindow", ivar=_window, attributes=(retain,nonatomic) */
    	window(): cocoascript.NSWindow;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	alignWithWindowContentLayoutGuide(): void;
    /* typeEncoding=@16@0:8 */
    	canvasController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	componentsController(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	contentModeSplitViewItemIndex(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v16@0:8 */
    	didEnterVersionBrowser(): void;
    /* typeEncoding=v16@0:8 */
    	didExitVersionBrowser(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeRestorableStateWithCoder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	hideCanvas(): void;
    /* typeEncoding=v16@0:8 */
    	hideComponents(): void;
    /* typeEncoding=v16@0:8 */
    	hideInspector(): void;
    /* typeEncoding=v16@0:8 */
    	hideSidebar(): void;
    /* typeEncoding=Q24@0:8@16 */
    	indexOfSplitViewItemForViewController(...args: any[]): any;
    /* typeEncoding=c32@0:8@16d24 */
    	insertAccessoryViewAtopCanvas_constrainingHeight(...args: any[]): any;
    /* typeEncoding=c32@0:8@16d24 */
    	insertAccessoryViewBeneathCanvas_constrainingHeight(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInVersionBrowser(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInspectorVisible(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSidebarVisible(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	leftSide(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	removeAccessoryViewAtopCanvas(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	removeAccessoryViewBeneathCanvas(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	restorableSidebarWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreStateWithCoder(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	rightSide(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	savedInspectorView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCanvasController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInspectorController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setInspectorVisible(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsInVersionBrowser(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setLeftSide(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setRestorableSidebarWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setRightSide(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSavedInspectorView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldEncodeCurrentSidebarWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSidebarController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSidebarWidthConstraint(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setUp(): void;
    /* typeEncoding=v24@0:8@16 */
    	setWindow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldEncodeCurrentSidebarWidth(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	showCanvas(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	showComponentsView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	showInspector(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	showSidebar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sidebarController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sidebarView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sidebarWidthConstraint(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}96@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24{CGRect={CGPoint=dd}{CGSize=dd}}56q88 */
    	splitView_effectiveRect_forDrawnRect_ofDividerAtIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	splitViewDidResizeSubviews(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	tearDown(): void;
    /* typeEncoding=@16@0:8 */
    	window(...args: any[]): any;
  }
}

declare const MSMainSplitViewController: sketchInternal.MSMainSplitViewController;

