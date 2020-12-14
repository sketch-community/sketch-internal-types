// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerGroup extends _MSLayerGroup {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_disableAutomaticScalingCounter, attributes=(assign,nonatomic) */
    	disableAutomaticScalingCounter(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	hasInferredLayout(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isAutomaticScalingEnabled(): boolean;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=q, ivar=_preCalculatedHasSelectedLayer, attributes=(assign,nonatomic) */
    	preCalculatedHasSelectedLayer(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8@16 */
    	static groupWithLayer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static groupWithLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	CSSAttributeString(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	ancestorsOrSelfHaveInferredLayout(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	applyData_fromDataSupplier_identifier(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyData_fromSupplier(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyOverride_document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyTransformsToLayers(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	calculateMinimumSize(...args: any[]): any;
    /* typeEncoding=q24@0:8Q16 */
    	calculatePreviewIconTraitsForState(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canContainLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	candidatesForMasking(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	containedLayers(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	containedLayersAvoidingFaultingMatchingTraits(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16@?24 */
    	containedLayersAvoidingFaultingMatchingTraits_test(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	containedLayersCount(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsMultipleLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsNoOrOneLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsOneLayer(...args: any[]): any;
    /* typeEncoding=c20@0:8c16 */
    	containsSelectedItemIncludingSelf(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	correctInvalidGamma(): void;
    /* typeEncoding=@24@0:8@16 */
    	createChildLayerWithImageData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	createChildLayerWithTextData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultStyle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	deselectLayerAndParent(): void;
    /* typeEncoding=Q16@0:8 */
    	disableAutomaticScalingCounter(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	disableAutomaticScalingInBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateLayers(...args: any[]): any;
    /* typeEncoding=v40@0:8Q16@?24@?32 */
    	enumerateLayersAvoidingFaultingWithOptions_passingTest_usingBlock(...args: any[]): any;
    /* typeEncoding=v44@0:8Q16c24@?28@?36 */
    	enumerateLayersAvoidingFaultingWithOptions_recursively_passingTest_usingBlock(...args: any[]): any;
    /* typeEncoding=c32@0:8Q16@?24 */
    	enumerateLayersWithOptions_block(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	expandableInLayerList(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstLayer(...args: any[]): any;
    /* typeEncoding=c24@0:8q16 */
    	fixGeometryWithOptions(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	groupBoundsShouldBeIntegral(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	handleDoubleClick(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasInferredLayout(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasStyleOrTransform(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hoverPath(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	indexOfLayer(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	insertLayer_afterLayerOrAtEnd(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorSections(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAutomaticScalingEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isExpanded(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	isOpenForSelectionWithOptions(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	isSelectableOnCanvasWithOptions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastLayer(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	layerAtIndex(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layerDidEndResize(): void;
    /* typeEncoding=@24@0:8Q16 */
    	layerEnumeratorAvoidingFaultingWithOptions(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16@?24 */
    	layerEnumeratorAvoidingFaultingWithOptions_passingTest(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layerWillStartResize(): void;
    /* typeEncoding=v24@0:8@?16 */
    	moveInLayerTreeInBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	moveLayersToParent(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	moveTransformsToChildren(): void;
    /* typeEncoding=v24@0:8d16 */
    	multiplyBy(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	objectDidInit(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	optimalBoundingBox(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentGroupRecursive(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	preCalculatedHasSelectedLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareAsMaskContainer(): void;
    /* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	rect_didChangeFromRect(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	resizeChildrenWithOldSize(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setDisableAutomaticScalingCounter(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasInferredLayout(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	setInferredLayoutOnAxis_direction(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setPreCalculatedHasSelectedLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldGrowSizeOfGroupForInferredLayout(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldRefreshOverlayForFlows(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldStripShadowsAndInnerShadow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleForBooleanOperation(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8@16{CGPoint=dd}24 */
    	tileLayer_atPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	translateChildrenFrameToLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	ungroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	ungroupReturningNextUngroupGroup(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	ungroupSingleChildDescendentGroups(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	updateSharedStyleReferencesFrom_to(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	updateSwatchReferencesFrom_to(...args: any[]): any;
  }
}

declare const MSLayerGroup: sketchInternal.MSLayerGroup;

