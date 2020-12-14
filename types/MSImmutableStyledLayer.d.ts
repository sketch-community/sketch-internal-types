// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableStyledLayer extends _MSImmutableStyledLayer {
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	CGTransformForFrame(): CGAffineTransform;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	allowsBlur(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	allowsShadowSpread(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSColor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	fillColor(): MSColor;
    /* typeEncoding=@"MSImmutableStyleFill", ivar=_firstFill, attributes=(assign,nonatomic,readonly) */
    	firstFill(): MSImmutableStyleFill;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasTransforms(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedHorizontal(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedVertical(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLayerExportable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isVisible(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	objectID(): cocoascript.NSString;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	origin(): CGPoint;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rect(): CGRect;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rotation(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shadowsFollowRotation(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@56@0:8@16Q24d32{CGSize=dd}40 */
    	adjustPath_forDecotationType_strokeWidth_scale(...args: any[]): any;
    /* typeEncoding=@44@0:8^@16d24i32Q36 */
    	bezierPathForEndDecorationOnPath_strokeWidth_lineCap_decorationType(...args: any[]): any;
    /* typeEncoding=@44@0:8^@16d24i32Q36 */
    	bezierPathForStartDecorationOnPath_strokeWidth_lineCap_decorationType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cacheDecorations(): void;
    /* typeEncoding=@16@0:8 */
    	filledArrowDecoration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filledArrowRoundedDecoration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filledCircleDecoration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filledSquareDecoration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filledSquareRoundedDecoration(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initialize(): void;
    /* typeEncoding=@56@0:8@16{CGPoint=dd}24d40d48 */
    	intersectionPolygonForDecoration_atPoint_scale_strokeWidth(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lineDecoration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	openArrowDecoration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	openCircleDecoration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	openSquareDecoration(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	orderedIntersectionsForContour_withSegment(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	pathForDecorationType(...args: any[]): any;
    /* typeEncoding=@32@0:8@16d24 */
    	roundedPath_cornerRadius(...args: any[]): any;
    /* typeEncoding={CGSize=dd}32@0:8Q16d24 */
    	scaleForDecoration_stokeWidth(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
    /* typeEncoding=@68@0:8@16{CGPoint=dd}24d40{CGSize=dd}48c64 */
    	transformedPath_atPoint_rotation_scale_flipped(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	absoluteInfluenceRectForAncestorGroups_document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addGradientsToDocument(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	addGroupContentToElement_attributes_exporter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addPathDefinitionToDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsBlur(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsShadowSpread(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    	bezierPathForEndDecorationOnPath(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    	bezierPathForStartDecorationOnPath(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	canOverridePoint_withAncestors(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	decoratedPathInBoundsInDocument(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	defaultValueForOverridePoint_relatedOverrides_document(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateColors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillColor(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    	fillPathWithDecorations(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillStyleForDecoratedPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMarkers(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	imageFillForOverridePoint_applyingStyleOverridesFrom_inDocument(...args: any[]): any;
    /* typeEncoding={BCEdgePaddings=dddd}16@0:8 */
    	influenceRectEdgePaddingsThatCascadeToContainedLayers(...args: any[]): any;
    /* typeEncoding={BCEdgePaddings=dddd}24@0:8@16 */
    	influenceRectEdgePaddingsThatDoNotCascadeInDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overridePointAttributeNamesForOverridePropertyMigration(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	overridePointsWithParent_overrides_document(...args: any[]): any;
    /* typeEncoding=#24@0:8@16 */
    	overrideViewControllerClassForOverridePoint(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	pathWithExporter_border(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithMutableModelObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	prepareDrawingInContext_inBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	renderBitmapEffects(...args: any[]): any;
    /* typeEncoding=Q24@0:8Q16 */
    	roundDecorationTypeIfNecessary(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shadowsFollowRotation(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldBeIncludedInParentPath(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldRasterizeInContext(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldRenderInTransparencyLayerInContext(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldSkipDrawingInContext(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	strokeStyleForDecoratedPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	svgPathAttribute(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	trackColorsForBasicFill_enumeratorBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateSharedStyleIDFromMigration(...args: any[]): any;
  }
}

declare const MSImmutableStyledLayer: sketchInternal.MSImmutableStyledLayer;

