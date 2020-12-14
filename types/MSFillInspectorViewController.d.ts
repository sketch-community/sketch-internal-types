// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFillInspectorViewController extends MSColorStylePartInspectorViewController {
    /* typeEncoding=@"NSTextField", ivar=_contextPopUpLabel, attributes=(retain,nonatomic) */
    	contextPopUpLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSPopUpButton", ivar=_fillPropertiesPopUp, attributes=(retain,nonatomic) */
    	fillPropertiesPopUp(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSTextField", ivar=_fillTypeLabel, attributes=(retain,nonatomic) */
    	fillTypeLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSArrayController", ivar=_fills, attributes=(retain,nonatomic) */
    	fills(): cocoascript.NSArrayController;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSTextField", ivar=_hexField, attributes=(retain,nonatomic) */
    	hexField(): cocoascript.NSTextField;
    /* typeEncoding=@"MSColorHexStringTransformer", ivar=_hexTransformer, attributes=(retain,nonatomic) */
    	hexTransformer(): MSColorHexStringTransformer;
    /* typeEncoding=c, ivar=_isDisplayingTint, attributes=(assign,nonatomic) */
    	isDisplayingTint(): boolean;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_opacityAdaptor, attributes=(retain,nonatomic) */
    	opacityAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSInlineUpDownNanoTextField", ivar=_opacityField, attributes=(retain,nonatomic) */
    	opacityField(): MSInlineUpDownNanoTextField;
    /* typeEncoding=@"NSTextField", ivar=_opacityLabel, attributes=(retain,nonatomic) */
    	opacityLabel(): cocoascript.NSTextField;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	applyUserSelectedColors(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	bumpKVOValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextPopUpLabel(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	currentColorValueForTransformer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@24@0:8@16 */
    	draggedTypesForView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	fillPropertiesAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillPropertiesPopUp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillTypeLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fills(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hexField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	hexFieldAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hexTransformer(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDisplayingTint(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	opacityAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	opacityField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	opacityLabel(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	readImagesFromPasteboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextPopUpLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillPropertiesPopUp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillTypeLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFills(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHexField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHexTransformer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsDisplayingTint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOpacityAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOpacityField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOpacityLabel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedSwatchValues(): void;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=v16@0:8 */
    	updateFillPropertyPopUp(): void;
    /* typeEncoding=Q32@0:8@16@24 */
    	view_draggingEntered(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	view_performDragOperation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSFillInspectorViewController: sketchInternal.MSFillInspectorViewController;

