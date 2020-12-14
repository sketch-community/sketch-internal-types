// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPage extends _MSPage {
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	artboards(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_cachedArtboards, attributes=(retain,nonatomic) */
    	cachedArtboards(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_cachedExportableLayers, attributes=(retain,nonatomic) */
    	cachedExportableLayers(): cocoascript.NSArray;
    /* typeEncoding=@"MSLayerArray", ivar=_cachedSelectedLayers, attributes=(retain,nonatomic) */
    	cachedSelectedLayers(): MSLayerArray;
    /* typeEncoding=@"NSArray", ivar=_cachedSymbolMasters, attributes=(retain,nonatomic) */
    	cachedSymbolMasters(): cocoascript.NSArray;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	contentBounds(): CGRect;
    /* typeEncoding=@"MSArtboardGroup", ivar=_currentArtboard, attributes=(assign,nonatomic,weak) */
    	currentArtboard(): MSArtboardGroup;
    /* typeEncoding=@"MSRulerData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentHorizontalRulerData(): MSRulerData;
    /* typeEncoding=@"MSLayerGroup<MSRootLayer>", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentRoot(): any;
    /* typeEncoding=@"MSRulerData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentVerticalRulerData(): MSRulerData;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	exportableLayers(): cocoascript.NSArray;
    /* typeEncoding=@"MSSimpleGrid", ivar=(null), attributes=(copy,nonatomic) */
    	grid(): MSSimpleGrid;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSRulerData", ivar=(null), attributes=(copy,nonatomic) */
    	horizontalRulerData(): MSRulerData;
    /* typeEncoding=@"MSLayoutGrid", ivar=(null), attributes=(copy,nonatomic) */
    	layout(): MSLayoutGrid;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rect(): CGRect;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	rulerBase(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	scrollOrigin(): CGPoint;
    /* typeEncoding=@"NSMutableSet", ivar=_selectedLayerIDs, attributes=(retain,nonatomic) */
    	selectedLayerIDs(): cocoascript.NSMutableSet;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	symbols(): cocoascript.NSArray;
    /* typeEncoding=@"MSRulerData", ivar=(null), attributes=(copy,nonatomic) */
    	verticalRulerData(): MSRulerData;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding=@16@0:8 */
    	static defaultSymbolsPageName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static page(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c32@0:8@16Q24 */
    	addOrRemoveLayerFromArtboardIfNecessary_options(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustRulerDataToTopLeftInViewBounds(): void;
    /* typeEncoding=@16@0:8 */
    	ancestorsAndSelfTransforms(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	ancestorsOrSelfHaveInferredLayout(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	artboardForSlice_inArtboards(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	artboardWithID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	artboards(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	artboardsMatchingWidth(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedArtboards(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedExportableLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedSelectedLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedSymbolMasters(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canBeHoveredOnPage(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canContainLayer(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	canCopyToLayer_beforeLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	changeLayerExpandedTypeToAutomaticIfCollapsed(): void;
    /* typeEncoding=v24@0:8@16 */
    	changeSelectionByDeselectingLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeSelectionBySelectingLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeSelectionBySelectingLayersInSet(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	changeSelectionUsingBlock(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16d32 */
    	containsPoint_zoomValue(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	contentBounds(...args: any[]): any;
    /* typeEncoding=c48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	contentIntersectsWithRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentArtboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentHorizontalRulerData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentRoot(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentVerticalRulerData(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	destinationArtboardForLayers_artboards(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	displayType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	ensureSelectedLayersAreStillValid(): void;
    /* typeEncoding=@16@0:8 */
    	exportableLayers(...args: any[]): any;
    /* typeEncoding=c24@0:8q16 */
    	fixGeometryWithOptions(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasClickThrough(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isExportableViaDragAndDrop(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isLayerSelected(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLocked(...args: any[]): any;
    /* typeEncoding=c24@0:8d16 */
    	isTooSmallForPreciseHitTestingAtZoomValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isVisible(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	layers_fitOnArtboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layersByObjectID(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layersWithIDs(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	limitsSelectionToBounds(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	moveLayersToArtboards(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	object_didChangeProperty(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	objectDidInit(): void;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	origin(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8{CGSize=dd}16 */
    	originForNewArtboardWithSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentGroupForInserting(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentPage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentRoot(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithImmutableModelObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImages(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rectSizeDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refaultChildrenAgainst(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resetSelectedLayerIDs(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	rulerBase(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rulerCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	scrollOrigin(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	scrollOriginToCenterContentInViewBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayerIDs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedArtboards(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedExportableLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedSelectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedSymbolMasters(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentArtboard(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsLocked(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsVisible(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setRulerBase(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedLayerIDs(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sketchrunnerMSPage_setSelectedLayerIDs(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	symbolLayersInGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbols(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	topLevelLayersMatchingTrait(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transform(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	tryToMoveLayer_toArtboards(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
  }
}

declare const MSPage: sketchInternal.MSPage;

