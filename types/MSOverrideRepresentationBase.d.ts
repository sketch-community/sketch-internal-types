// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverrideRepresentationBase extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_children, attributes=(retain,nonatomic) */
    	children(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	flattenedChildren(): cocoascript.NSArray;
    /* typeEncoding=@"MSSymbolInstance", ivar=_instance, attributes=(assign,nonatomic,readonly,weak) */
    	instance(): MSSymbolInstance;
    /* typeEncoding=c, ivar=_isEditable, attributes=(assign,nonatomic,readonly) */
    	isEditable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isExpanded(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isOpen(): boolean;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectedOverrides(): cocoascript.NSArray;
    /* typeEncoding=@"NSAffineTransform", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	transformForConvertingToInstance(): cocoascript.NSAffineTransform;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	children(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	childrenForLayerList(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerate(...args: any[]): any;
    /* typeEncoding=@24@0:8@?16 */
    	firstOverridePassingTest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flattenedChildren(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithInstance(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	instance(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEditable(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isExpanded(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isOpen(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	layerListExpandedType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedOverrides(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	selfOrChildrenSelected(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChildren(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	syncChildrenWithOverrides(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	syncChildrenWithOverridesIfNeeded(): void;
    /* typeEncoding=@16@0:8 */
    	transformForConvertingToInstance(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateAfterSelectingChild(): void;
  }
}

declare const MSOverrideRepresentationBase: sketchInternal.MSOverrideRepresentationBase;

