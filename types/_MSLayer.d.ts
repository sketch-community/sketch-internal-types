// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface _MSLayer extends MSModelObject {
    /* typeEncoding=q, ivar=_booleanOperation, attributes=(assign,nonatomic) */
    	booleanOperation(): number;
    /* typeEncoding=@"MSExportOptions", ivar=_exportOptions, attributes=(retain,nonatomic) */
    	exportOptions(): MSExportOptions;
    /* typeEncoding=@"MSFlowConnection", ivar=_flow, attributes=(retain,nonatomic) */
    	flow(): MSFlowConnection;
    /* typeEncoding=@"MSRect", ivar=_frame, attributes=(retain,nonatomic) */
    	frame(): MSRect;
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
    /* typeEncoding=c16@0:8 */
    	static allowsFaulting(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static defaultFlow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static defaultFrame(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	static defaultLayerListExpandedType(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	static immutableClass(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	static shouldBreakMaskChainDefault(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q16@0:8 */
    	booleanOperation(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	childCollaborationObjectWithID_removing(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	copyPropertiesToObject_options(...args: any[]): any;
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
    /* typeEncoding=v16@0:8 */
    	initializeUnsetObjectPropertiesWithDefaults(): void;
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
    	performInitWithImmutableModelObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	propertiesAreEqual_forPurpose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refaultChildrenAgainst(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	resizingConstraint(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	resizingType(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	rotation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setAsParentOnChildren(): void;
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
    /* typeEncoding=v24@0:8q16 */
    	setRaw_booleanOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_exportOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_flow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_frame(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRaw_isFixedToViewport(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRaw_isFlippedHorizontal(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRaw_isFlippedVertical(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRaw_isLocked(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRaw_isVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_name(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRaw_nameIsFixed(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_originalObjectID(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setRaw_resizingConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setRaw_resizingType(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setRaw_rotation(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRaw_shouldBreakMaskChain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRaw_userInfo(...args: any[]): any;
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
    /* typeEncoding=v24@0:8@16 */
    	syncPropertiesFromObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userInfo(...args: any[]): any;
  }
}

declare const _MSLayer: sketchInternal._MSLayer;

