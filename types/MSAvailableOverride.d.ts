// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAvailableOverride extends NSObject {
    /* typeEncoding=@"MSImmutableLayer", ivar=_affectedLayer, attributes=(assign,nonatomic,readonly,weak) */
    	affectedLayer(): MSImmutableLayer;
    /* typeEncoding=@, ivar=_affectedLayerDefault, attributes=(assign,nonatomic,readonly) */
    	affectedLayerDefault(): any;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	allowsOverrides(): boolean;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	ancestorCount(): number;
    /* typeEncoding=c, ivar=_appearsOnCanvas, attributes=(assign,nonatomic) */
    	appearsOnCanvas(): boolean;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	children(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	containedByPropertyID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	containedPropertyID(): cocoascript.NSString;
    /* typeEncoding=@, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentValue(): any;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataType(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	defaultIsItselfAnOverride(): boolean;
    /* typeEncoding=@, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	defaultValue(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	handlerClass(): any;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasOverride(): boolean;
    /* typeEncoding=@"MSOverrideValue", ivar=_internalOverrideValue, attributes=(assign,nonatomic,readonly) */
    	internalOverrideValue(): MSOverrideValue;
    /* typeEncoding=c, ivar=_isEditable, attributes=(assign,nonatomic,readonly) */
    	isEditable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isHidden(): boolean;
    /* typeEncoding=c, ivar=_isVisible, attributes=(assign,nonatomic,readonly) */
    	isVisible(): boolean;
    /* typeEncoding=@"MSImmutableSymbolMaster", ivar=_master, attributes=(assign,nonatomic,readonly,weak) */
    	master(): MSImmutableSymbolMaster;
    /* typeEncoding=@"MSOverridePoint", ivar=_overridePoint, attributes=(assign,nonatomic,readonly) */
    	overridePoint(): MSOverridePoint;
    /* typeEncoding=@, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	overrideValue(): any;
    /* typeEncoding=@"MSAvailableOverride", ivar=_parent, attributes=(assign,nonatomic,readonly,weak) */
    	parent(): MSAvailableOverride;
    /* typeEncoding=@72@0:8@16@24@32@40@48@56@64 */
    	availableOverrideWithOverridePoint_master_overrideValue_otherOverrides_overrideProperties_inParent_document(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	enumerateOverrides_withBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	flattenAvailableOverrides(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	overrideInOverrides_withPath_andPropertyName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	affectedLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	affectedLayerDefault(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	affectsSameLayerAs(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsOverrides(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	ancestorCount(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	appearsOnCanvas(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	calculateAppearsOnCanvasWithAncestors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	children(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	containedByPropertyID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	containedPropertyID(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	currentSharedStyle_libraryController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentValue(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	dataType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	defaultIsItselfAnOverride(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultValue(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	detachedLayerGroupForInstance_inDocument(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	handlerClass(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasOverride(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	importableDefaultSharedStyle_libraryController(...args: any[]): any;
    /* typeEncoding=@72@0:8@16@24@32@40@48@56@64 */
    	initWithOverridePoint_master_affectedLayer_overrideValue_otherOverrides_inParent_document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	internalOverrideValue(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isComplimentaryTo(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEditable(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isHidden(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isVisible(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	libraryForOwningSymbolIn_libraryController(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	libraryForStyleWithID_inDocument_libraryController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	master(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	modifiedAffectedLayerForInstance_inDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	originalSharedStyle_libraryController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overridePoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overrideValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parent(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAppearsOnCanvas(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	sharedStyleWithID_inDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	symbolDefaultSharedStyle_libraryController(...args: any[]): any;
  }
}

declare const MSAvailableOverride: sketchInternal.MSAvailableOverride;

