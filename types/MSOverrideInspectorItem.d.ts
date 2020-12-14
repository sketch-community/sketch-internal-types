// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverrideInspectorItem extends MSInspectorItem {
    /* typeEncoding=@"NSView", ivar=_contentView, attributes=(retain,nonatomic) */
    	contentView(): cocoascript.NSView;
    /* typeEncoding=@"MSDataMenuProvider", ivar=_dataController, attributes=(retain,nonatomic) */
    	dataController(): MSDataMenuProvider;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_displaysLabel, attributes=(assign,nonatomic) */
    	displaysLabel(): boolean;
    /* typeEncoding=@"MSDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	documentData(): MSDocumentData;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasSingleOverride(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_indentationConstraint, attributes=(retain,nonatomic) */
    	indentationConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=@"MSAvailableOverride", ivar=(null), attributes=(retain) */
    	overrideItemForInspector(): MSAvailableOverride;
    /* typeEncoding=@"MSOverrideRepresentation", ivar=_overrideRepresentation, attributes=(assign,nonatomic,readonly) */
    	overrideRepresentation(): MSOverrideRepresentation;
    /* typeEncoding=@"NSPopUpButton", ivar=_popup, attributes=(retain,nonatomic) */
    	popup(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"MSAvailableOverride", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	primaryOverride(): MSAvailableOverride;
    /* typeEncoding=@"MSAvailableOverride", ivar=_secondaryOverride, attributes=(retain,nonatomic) */
    	secondaryOverride(): MSAvailableOverride;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTrackingArea", ivar=_trackingArea, attributes=(assign,nonatomic,weak) */
    	trackingArea(): cocoascript.NSTrackingArea;
    /* typeEncoding=c32@0:8@16@24 */
    	static allOverridesInLayers_match(...args: any[]): any;
    /* typeEncoding=d44@0:8@16@24c32Q36 */
    	static heightForOverride_layers_shouldShowLabel_indentationLevel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	addObserverForMSDataSupplierManagerDataChangedNotification(): void;
    /* typeEncoding=v24@0:8@16 */
    	applyOverrideToSelectedLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	build(): void;
    /* typeEncoding=@16@0:8 */
    	cellImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	controlViewForEditingOverride(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataController(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	displaysLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasAnyUsableDataProviders(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDataSupplier(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasSingleOverride(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	highlightItemInCanvas(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	indentationConstraint(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithPrimaryOverrideRepresentation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	labelView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseExited(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overrideItemForInspector(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overrideRepresentation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	overrideValueAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	primaryOverride(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshDataOnCurrentSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryOverride(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContentView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDisplaysLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIndentationConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setIndentationLevel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondaryOverride(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTrackingArea(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolTipString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	trackingArea(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateCanvasHighlight(): void;
    /* typeEncoding=v16@0:8 */
    	updatePopup(): void;
    /* typeEncoding=@24@0:8@16 */
    	valueFromControlView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	watchAppearanceChanges(): void;
  }
}

declare const MSOverrideInspectorItem: sketchInternal.MSOverrideInspectorItem;

