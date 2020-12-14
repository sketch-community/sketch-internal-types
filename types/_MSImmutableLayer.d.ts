// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface _MSImmutableLayer extends MSImmutableModelObject {
    /* typeEncoding=q, ivar=_booleanOperation, attributes=(assign,nonatomic) */
    	booleanOperation(): number;
    /* typeEncoding=@"MSImmutableExportOptions", ivar=_exportOptions, attributes=(retain,nonatomic) */
    	exportOptions(): MSImmutableExportOptions;
    /* typeEncoding=@"MSImmutableFlowConnection", ivar=_flow, attributes=(retain,nonatomic) */
    	flow(): MSImmutableFlowConnection;
    /* typeEncoding=@"MSImmutableRect", ivar=_frame, attributes=(retain,nonatomic) */
    	frame(): MSImmutableRect;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasDefaultFlow(): boolean;
    /* typeEncoding=c, ivar=_isFixedToViewport, attributes=(assign,nonatomic) */
    	isFixedToViewport(): boolean;
    /* typeEncoding=c, ivar=_isFlippedHorizontal, attributes=(assign,nonatomic) */
    	isFlippedHorizontal(): boolean;
    /* typeEncoding=c, ivar=_isFlippedVertical, attributes=(assign,nonatomic) */
    	isFlippedVertical(): boolean;
    /* typeEncoding=c, ivar=_isLocked, attributes=(assign,nonatomic) */
    	isLocked(): boolean;
    /* typeEncoding=c, ivar=_isVisible, attributes=(assign,nonatomic) */
    	isVisible(): boolean;
    /* typeEncoding=q, ivar=_layerListExpandedType, attributes=(assign,nonatomic) */
    	layerListExpandedType(): number;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_nameIsFixed, attributes=(assign,nonatomic) */
    	nameIsFixed(): boolean;
    /* typeEncoding=@"NSString", ivar=_originalObjectID, attributes=(retain,nonatomic) */
    	originalObjectID(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_resizingConstraint, attributes=(assign,nonatomic) */
    	resizingConstraint(): number;
    /* typeEncoding=Q, ivar=_resizingType, attributes=(assign,nonatomic) */
    	resizingType(): number;
    /* typeEncoding=d, ivar=_rotation, attributes=(assign,nonatomic) */
    	rotation(): number;
    /* typeEncoding=c, ivar=_shouldBreakMaskChain, attributes=(assign,nonatomic) */
    	shouldBreakMaskChain(): boolean;
    /* typeEncoding=@"NSDictionary", ivar=_userInfo, attributes=(copy,nonatomic) */
    	userInfo(): cocoascript.NSDictionary;
    /* typeEncoding=@16@0:8 */
    	defaultFlow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultFrame(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	defaultLayerListExpandedType(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	mutableClass(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldBreakMaskChainDefault(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q16@0:8 */
    	booleanOperation(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collaborationDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collaborationDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	copyPropertiesFromObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	decodePropertiesWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodePropertiesWithCoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateChildrenUsingBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateProperties(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportOptions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frame(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDefaultFlow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDefaultFrame(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDefaultValues(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initWithMinimalSetup(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initializeUnsetObjectPropertiesWithDefaults(): void;
    /* typeEncoding=c24@0:8@16 */
    	isEqualForCollaborationDiffToObject(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualForDiffToObject(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFixedToViewport(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFlippedHorizontal(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFlippedVertical(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLocked(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isVisible(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	keysDifferingFromObject(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	layerListExpandedType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	nameIsFixed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalObjectID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performInitEmptyObject(): void;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithMutableModelObject(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	resizingConstraint(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	resizingType(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	rotation(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setBooleanOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrame(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsFixedToViewport(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsFlippedHorizontal(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsFlippedVertical(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsLocked(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setLayerListExpandedType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setNameIsFixed(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalObjectID(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setResizingConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setResizingType(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setRotation(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldBreakMaskChain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserInfo(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldBreakMaskChain(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userInfo(...args: any[]): any;
  }
}

declare const _MSImmutableLayer: sketchInternal._MSImmutableLayer;

