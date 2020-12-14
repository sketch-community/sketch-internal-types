// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInspectorValueAdaptor extends NSObject {
    /* typeEncoding=@"NSHashTable", ivar=_changeObservers, attributes=(retain,nonatomic) */
    	changeObservers(): cocoascript.NSHashTable;
    /* typeEncoding=@"<MSInspectorValueAdaptorDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSSet", ivar=_diffKeysAffectingValue, attributes=(assign,nonatomic,readonly) */
    	diffKeysAffectingValue(): cocoascript.NSSet;
    /* typeEncoding=@"NSArray", ivar=_keyPathsToWatch, attributes=(retain,nonatomic) */
    	keyPathsToWatch(): cocoascript.NSArray;
    /* typeEncoding=@"NSArrayController", ivar=_modelsController, attributes=(retain,nonatomic) */
    	modelsController(): cocoascript.NSArrayController;
    /* typeEncoding=c, ivar=_showsDefaultAlerts, attributes=(assign,nonatomic) */
    	showsDefaultAlerts(): boolean;
    /* typeEncoding=@, ivar=(null), attributes=(retain,nonatomic) */
    	value(): any;
    /* typeEncoding=@?, ivar=_valueGetter, attributes=(copy,nonatomic) */
    	valueGetter(): any;
    /* typeEncoding=@?, ivar=_valueSetter, attributes=(copy,nonatomic) */
    	valueSetter(): any;
    /* typeEncoding=@"NSView", ivar=_view, attributes=(assign,nonatomic,weak) */
    	view(): cocoascript.NSView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addChangeObserver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	changeObservers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	diffKeysAffectingValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doSetValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleInvalidInputError(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithModelsController_modelKeyPath(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithModelsController_modelKeyPath_keyPathsToWatch(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@?24@?32 */
    	initWithModelsController_valueGetter_valueSetter(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@?24@?32@40 */
    	initWithModelsController_valueGetter_valueSetter_modelKeyPathsToWatch(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	keyPathsToWatch(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelsController(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	presentError(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeChangeObserver(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeKVOObservers(): void;
    /* typeEncoding=v24@0:8@16 */
    	setChangeObservers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setKeyPathsToWatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setModelsController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShowsDefaultAlerts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setValueGetter(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setValueSetter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	showsDefaultAlerts(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24^@32^@40 */
    	transformAdaptorValue_forModel_context_error(...args: any[]): any;
    /* typeEncoding=@40@0:8@16^@24^@32 */
    	transformedValuesFromAdaptorValue_contexts_error(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateOnDiffAffectedByKeys(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateValues(): void;
    /* typeEncoding=@16@0:8 */
    	value(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	value_isEqualToValue(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	valueGetter(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	valueSetter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	view(...args: any[]): any;
  }
}

declare const MSInspectorValueAdaptor: sketchInternal.MSInspectorValueAdaptor;

