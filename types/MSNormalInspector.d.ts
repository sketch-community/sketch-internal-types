// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSNormalInspector extends NSViewController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSEventHandler", ivar=_eventHandler, attributes=(retain,nonatomic) */
    	eventHandler(): MSEventHandler;
    /* typeEncoding=@"NSStackView", ivar=_footerView, attributes=(retain,nonatomic) */
    	footerView(): cocoascript.NSStackView;
    /* typeEncoding=c, ivar=_hasScheduledNextResponderFixing, attributes=(assign,nonatomic) */
    	hasScheduledNextResponderFixing(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isRenamingSharedObject(): boolean;
    /* typeEncoding=@"MSLayerArray", ivar=_layers, attributes=(copy,nonatomic) */
    	layers(): MSLayerArray;
    /* typeEncoding=@"NSScrollView", ivar=_scrollView, attributes=(retain,nonatomic) */
    	scrollView(): cocoascript.NSScrollView;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_scrollViewBottomConstraint, attributes=(retain,nonatomic) */
    	scrollViewBottomConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_scrollViewTopConstraint, attributes=(retain,nonatomic) */
    	scrollViewTopConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sharedStyleInspectorVisible(): boolean;
    /* typeEncoding=@"MSInspectorStackView", ivar=_stackView, attributes=(retain,nonatomic) */
    	stackView(): MSInspectorStackView;
    /* typeEncoding=@"MSStandardInspectorViewControllers", ivar=_standardInspectors, attributes=(assign,nonatomic,readonly) */
    	standardInspectors(): MSStandardInspectorViewControllers;
    /* typeEncoding=@"NSMutableDictionary", ivar=_storedPreferences, attributes=(assign,nonatomic,readonly) */
    	storedPreferences(): cocoascript.NSMutableDictionary;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c, ivar=_throttleNextResponderFixing, attributes=(assign,nonatomic) */
    	throttleNextResponderFixing(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	adjustInspectorToColorPopover_sender(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	beginRenameSharedObject_completionBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeTextLayerFont(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	closeAnyColorPopover(): void;
    /* typeEncoding=v24@0:8@16 */
    	colorMagnifierAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentForInspectorSection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	eventHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	fixNextResponder(): void;
    /* typeEncoding=@16@0:8 */
    	footerView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasScheduledNextResponderFixing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRenamingSharedObject(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isSectionWithIdentifierCollapsed(...args: any[]): any;
    /* typeEncoding=c28@0:8@16c24 */
    	isSectionWithIdentifierCollapsed_default(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=v36@0:8Q16Q24c32 */
    	openPopoverForStylePart_atIndex_preferringNative(...args: any[]): any;
    /* typeEncoding=v36@0:8c16@20@28 */
    	persistentlyCollapse_sectionWithIdentifier_reloadTarget(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForDisplay(): void;
    /* typeEncoding=v16@0:8 */
    	prepareViewControllers(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	reloadInspectorStack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	reloadItemsForSection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	reloadWithFooterViewControllers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	scheduleNextResponderFixing(): void;
    /* typeEncoding=@16@0:8 */
    	scrollView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scrollViewBottomConstraint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scrollViewTopConstraint(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sectionCollapseStateKeyWithIdentifer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sectionDidResize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFooterView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasScheduledNextResponderFixing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScrollView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScrollViewBottomConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScrollViewTopConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStackView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setThrottleNextResponderFixing(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	sharedStyleInspectorVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showBorderOptionsAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showFillOptionsAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	stackScrollViewDidScroll(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stackView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	standardInspectors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	storedPreferences(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	throttleNextResponderFixing(...args: any[]): any;
  }
}

declare const MSNormalInspector: sketchInternal.MSNormalInspector;

