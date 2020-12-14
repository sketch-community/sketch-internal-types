// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSStyleInspectorSection extends MSNestedInspectorSection {
    /* typeEncoding=@"MSBlurInspectorViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	blurViewController(): MSBlurInspectorViewController;
    /* typeEncoding=@"MSMultipleBorderInspectorViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	borderViewController(): MSMultipleBorderInspectorViewController;
    /* typeEncoding=@"MSColorControlsInspectorViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	colorControlsViewController(): MSColorControlsInspectorViewController;
    /* typeEncoding=@"NSArray", ivar=_currentControllers, attributes=(retain,nonatomic) */
    	currentControllers(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSMultipleFillInspectorViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	fillViewController(): MSMultipleFillInspectorViewController;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasContent(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSCollapsibleHeaderInspectorItem", ivar=_headerItem, attributes=(retain,nonatomic) */
    	headerItem(): MSCollapsibleHeaderInspectorItem;
    /* typeEncoding=@"MSMultipleInnerShadowInspectorViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	innerShadowViewController(): MSMultipleInnerShadowInspectorViewController;
    /* typeEncoding=@"NSDictionary", ivar=_restorationInfo, attributes=(retain,nonatomic) */
    	restorationInfo(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSMultipleShadowInspectorViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shadowViewController(): MSMultipleShadowInspectorViewController;
    /* typeEncoding=@"NSMutableDictionary", ivar=_stylePartViewControllers, attributes=(retain,nonatomic) */
    	stylePartViewControllers(): cocoascript.NSMutableDictionary;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSMultipleFillInspectorViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	tintViewController(): MSMultipleFillInspectorViewController;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	blurViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderViewController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	closeAnyColorPopover(): void;
    /* typeEncoding=v20@0:8c16 */
    	closeAnyColorPopoverImmediately(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorControlsViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentControllers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillViewController(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasContent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerItem(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	innerShadowViewController(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	item_wantsSectionToCollapse(...args: any[]): any;
    /* typeEncoding=v36@0:8Q16Q24c32 */
    	openPopoverForStylePart_atIndex_preferringNative(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	restorationInfo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	restorePopover(): void;
    /* typeEncoding=v24@0:8@16 */
    	restoreWithState_ms(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sectionWithIdentifierWillCollapse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentControllers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRestorationInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStylePartViewControllers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shadowViewController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showBorderOptionsAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showFillOptionsAction(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	stylePartViewControllerOfType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stylePartViewControllers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tintViewController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateItems(): void;
    /* typeEncoding=#24@0:8Q16 */
    	viewControllerClassForType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	viewRestorationState_ms(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
  }
}

declare const MSStyleInspectorSection: sketchInternal.MSStyleInspectorSection;

