// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSymbolInstanceOverrideInspectorItem extends MSOverrideInspectorItem {
    /* typeEncoding=@"MSStylePartPreviewButton", ivar=_colorButton, attributes=(retain,nonatomic) */
    	colorButton(): MSStylePartPreviewButton;
    /* typeEncoding=@"MSColorInspector", ivar=_colorInspector, attributes=(retain,nonatomic) */
    	colorInspector(): MSColorInspector;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentMasterID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSSymbolInstance", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstInstance(): MSSymbolInstance;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSControl", ivar=_labelView, attributes=(retain,nonatomic) */
    	labelView(): cocoascript.NSControl;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=_menuBuilder, attributes=(retain,nonatomic) */
    	menuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=@"NSButton", ivar=_navigateToMasterButton, attributes=(retain,nonatomic) */
    	navigateToMasterButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSSymbolMaster", ivar=_originalMaster, attributes=(assign,nonatomic,readonly) */
    	originalMaster(): MSSymbolMaster;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	originalMasterID(): cocoascript.NSString;
    /* typeEncoding=@"BCPopover", ivar=_popover, attributes=(retain,nonatomic) */
    	popover(): BCPopover;
    /* typeEncoding=@"MSInspectorPopoverButton", ivar=_popoverButton, attributes=(retain,nonatomic) */
    	popoverButton(): MSInspectorPopoverButton;
    /* typeEncoding=@"MSInspectorPopUpButton", ivar=_popupButton, attributes=(retain,nonatomic) */
    	popupButton(): MSInspectorPopUpButton;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	build(): void;
    /* typeEncoding=v16@0:8 */
    	closePopover(): void;
    /* typeEncoding=@16@0:8 */
    	colorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorInspector(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorInspector_didChangeToColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentMasterID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentReference(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentSelectionMenuItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	draggedTypesForView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstInstance(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithPrimaryOverrideRepresentation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	labelView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuBuilder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuWillOpen(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nameOfCurrentNestedSymbol(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	navigateToMasterButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	navigateToOverridesMaster(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalMaster(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalMasterID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	overrideValueAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pickSymbol(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popover(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popoverButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popupButton(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	previewButtonShouldShowColorVariablesButton(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	replaceOverrideSymbolAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreWithState_ms(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorInspector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLabelView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenuBuilder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNavigateToMasterButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopoverButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopupButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	showPopover(): void;
    /* typeEncoding=v16@0:8 */
    	togglePopover(): void;
    /* typeEncoding=v16@0:8 */
    	updateNavigateButton(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16@24 */
    	view_draggingUpdated(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	view_performDragOperation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	viewRestorationState_ms(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
  }
}

declare const MSSymbolInstanceOverrideInspectorItem: sketchInternal.MSSymbolInstanceOverrideInspectorItem;

