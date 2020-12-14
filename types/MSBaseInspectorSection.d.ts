// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBaseInspectorSection extends NSViewController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSInspectorSectionDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=_items, attributes=(retain,nonatomic) */
    	items(): cocoascript.NSArray;
    /* typeEncoding=@"MSLayerArray", ivar=_layers, attributes=(retain,nonatomic) */
    	layers(): MSLayerArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectionContainsChildrenOfCompoundPath(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	assignItemLayers(): void;
    /* typeEncoding=v24@0:8@16 */
    	changeTextLayerFont(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentForInspectorItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	itemDidResize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	items(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadView(): void;
    /* typeEncoding=v16@0:8 */
    	prepareForDisplay(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sectionWithIdentifierWillCollapse(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	selectionContainsChildrenOfCompoundPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding={NSEdgeInsets=dddd}16@0:8 */
    	separatorInset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateItems(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wantsSeparatorAfterViews(...args: any[]): any;
  }
}

declare const MSBaseInspectorSection: sketchInternal.MSBaseInspectorSection;

