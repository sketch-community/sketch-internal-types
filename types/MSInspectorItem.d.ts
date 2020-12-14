// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInspectorItem extends NSViewController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSInspectorItemDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	document(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSView", ivar=_initialFirstResponder, attributes=(retain,nonatomic) */
    	initialFirstResponder(): cocoascript.NSView;
    /* typeEncoding=@"MSLayerArray", ivar=_layers, attributes=(retain,nonatomic) */
    	layers(): MSLayerArray;
    /* typeEncoding=@"NSArrayController", ivar=_layersController, attributes=(retain,nonatomic) */
    	layersController(): cocoascript.NSArrayController;
    /* typeEncoding=@"NSMapTable", ivar=_managedControls, attributes=(retain,nonatomic) */
    	managedControls(): cocoascript.NSMapTable;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c24@0:8@16 */
    	static adjustLayerHierarchyAfterEditingLayers(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	static canHandleLayer(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	static canHandleSomeLayersOfSelection(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static filterSelection(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static itemForSection(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	bumpLayersControllerKVOObservers(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	cacheUserInterfaceElement_withKey(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	cachedUserInterfaceElementForKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initialFirstResponder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layersController(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24@32@40@48 */
    	manageTextField_adaptor_identifier_inlineToolTip_touchBarItems(...args: any[]): any;
    /* typeEncoding=v64@0:8@16@24@32@40@48@56 */
    	manageTextField_adaptor_identifier_inlineToolTip_touchBarItems_bindingOptions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	managedControls(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v80@0:8@16@24{CGSize=dd}32{CGSize=dd}48d64@?72 */
    	reuseCachedPreviewImageForComponent_cachingKey_size_maximumSizeWithDecorations_scale_orMakeAsynchronouslyUsing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sectionWithIdentifierWillCollapse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInitialFirstResponder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayersController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setManagedControls(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSInspectorItem: sketchInternal.MSInspectorItem;

