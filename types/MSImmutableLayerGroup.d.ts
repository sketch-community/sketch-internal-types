// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableLayerGroup extends _MSImmutableLayerGroup {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasInferredLayout(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	mirrorExportScale(): number;
    /* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	mirrorViewPortSize(): CGSize;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@16@0:8 */
    	defaultName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	traitsForPropertyName(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	addChildrenToElement_exporter(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	addContentToElement_attributes_exporter(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsBlur(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsShadowSpread(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	axesForInferredLayouts(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	booleanOperationForLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	calculateContainedTraits(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	calculateInfluenceRectForBoundsInDocument_visitedSymbols(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	calculatePathInBoundsInDocument_visitedSymbols(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	canOverridePoint_withAncestors(...args: any[]): any;
    /* typeEncoding=c64@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16{CGSize=dd}48 */
    	childRectShouldResizeOnlyHorizontally_inParentOfSize(...args: any[]): any;
    /* typeEncoding=c64@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16{CGSize=dd}48 */
    	childRectShouldResizeOnlyVertically_inParentOfSize(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	constraintForLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	containedLayers(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	containedLayersCount(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	containedTraits(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsMultipleLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsNoOrOneLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsOneLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateLayers(...args: any[]): any;
    /* typeEncoding=c32@0:8Q16@?24 */
    	enumerateLayersWithOptions_block(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	firstFlowWithSymbolsFromDocument_visited(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	gatherForRenderPreparation(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasInferredLayout(...args: any[]): any;
    /* typeEncoding=@24@0:8q16 */
    	imageNameForInferredLayoutTraits(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	includeChildrenInCalculatingStyleSize(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	indexOfLayer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	influenceRectClipsToBounds(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	influenceRectForFrameInDocument_visitedSymbols(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initAsCopyOf_withLayers(...args: any[]): any;
    /* typeEncoding=@60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48c56 */
    	initWithRect_content_isMask(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualForDiffToObject(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	keysDifferingFromObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastLayer(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	layerAtIndex(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	layersAreEqualForDiffToLayersOfLayerGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV109OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV112OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV118OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV123OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV78OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV90OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	mirrorExportScale(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	mirrorViewPortSize(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	objectDidInit(): void;
    /* typeEncoding=@40@0:8@16@24@32 */
    	overridePointsWithParent_overrides_document(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	overridePreviewImageInDocument(...args: any[]): any;
    /* typeEncoding=#24@0:8@16 */
    	overrideViewControllerClassForOverridePoint(...args: any[]): any;
    /* typeEncoding=@24@0:8@?16 */
    	pathCombiningChildrenByApplyingBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8q16@24 */
    	previewImageForTraits_inDocument(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	rectByApplyingEdgePaddingsToRect(...args: any[]): any;
    /* typeEncoding=v24@0:8^{EKRasterCanvasStruct=}16 */
    	renderToCanvas(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	requiresPathDefinition(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	resolvedUsingDocumentData(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shadowsFollowRotation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subObjectsForTreeDiff(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	svgStyle(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	updatedResolvedCopyWithModelEquivalent_documentData_changedIndexes(...args: any[]): any;
  }
}

declare const MSImmutableLayerGroup: sketchInternal.MSImmutableLayerGroup;

