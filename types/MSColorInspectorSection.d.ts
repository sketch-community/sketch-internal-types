// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorInspectorSection extends NSViewController {
    /* typeEncoding=@"MSGenericButtonController", ivar=_addButtonController, attributes=(retain,nonatomic) */
    	addButtonController(): MSGenericButtonController;
    /* typeEncoding=@"MSAssetPickerController", ivar=_assetPickerController, attributes=(retain,nonatomic) */
    	assetPickerController(): MSAssetPickerController;
    /* typeEncoding=@"MSCollapsibleHeaderInspectorItem", ivar=_assetPickerHeaderItem, attributes=(retain,nonatomic) */
    	assetPickerHeaderItem(): MSCollapsibleHeaderInspectorItem;
    /* typeEncoding=@"MSAssetPickerScrubberController", ivar=_assetPickerScrubberController, attributes=(retain,nonatomic) */
    	assetPickerScrubberController(): MSAssetPickerScrubberController;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSColorInspectorSectionDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstKeyView(): cocoascript.NSView;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lastKeyView(): cocoascript.NSView;
    /* typeEncoding=@"NSViewController", ivar=_noContentController, attributes=(retain,nonatomic) */
    	noContentController(): cocoascript.NSViewController;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	preferredFirstResponder(): cocoascript.NSView;
    /* typeEncoding=@"NSArray", ivar=_styleParts, attributes=(copy,nonatomic) */
    	styleParts(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v72@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16d48^{CGColor=}56^{CGColor=}64 */
    	static drawCheckerboardBackgroundInRect_size_foreColor_backgroundColor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	static initialize(): void;
    /* typeEncoding=@16@0:8 */
    	static presetPickerVisibilityDefaultsKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addAsset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	addAssetButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	addButtonController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	adjustFirstResponder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	allAssetPickerDataSources(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	assetPickerController_didSelectAsset(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	assetPickerController_didSelectDataSource(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerDataSources(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerHeaderAccessoryViews(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerHeaderItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerScrubberController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	assetPickerScrubberController_didSelectAsset(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	assetType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorPickerChangedTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlDidSelectAsset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createPresetFromCurrentSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	customTouchBarItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@40@0:8Q16@24@32 */
    	documentAssetPickerDataSourceWithAssetType_name_title(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	fillType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstKeyView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignAssetPickerDataSources(...args: any[]): any;
    /* typeEncoding=@40@0:8Q16@24@32 */
    	globalAssetPickerDataSourceWithAssetType_name_title(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerViews(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDelegate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAssetPickerCollapsed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	item_wantsSectionToCollapse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastKeyView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	layoutChangedForAssetPickerCollection(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	makeTouchBarItemForIdentifier(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	minimumHeight(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	noContentController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	popoverWillClose(): void;
    /* typeEncoding=@16@0:8 */
    	preferredFirstResponder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	scrollViewWithStackedViews(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scrollableViews(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAddButtonController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAssetPickerCollapsed(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssetPickerController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssetPickerHeaderItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssetPickerScrubberController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNoContentController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyleParts(...args: any[]): any;
    /* typeEncoding=@56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	stackViewsInVerticalScrollView_frame(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleParts(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validate(): void;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
  }
}

declare const MSColorInspectorSection: sketchInternal.MSColorInspectorSection;

