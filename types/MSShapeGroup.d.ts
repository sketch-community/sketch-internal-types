// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShapeGroup extends _MSShapeGroup {
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	CGTransformForFrame(): CGAffineTransform;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	edited(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasMarkers(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasTransforms(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	isClosed(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedHorizontal(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedVertical(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLayerExportable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isPartOfClippingMask(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isVisible(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	objectID(): cocoascript.NSString;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	origin(): CGPoint;
    /* typeEncoding=@"MSPath", ivar=(null), attributes=(copy,dynamic,nonatomic) */
    	pathInFrame(): MSPath;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rect(): CGRect;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rotation(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyStyleForBooleanOperationFrom_toShapeGroup(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	groupWithLayers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layerWithPath(...args: any[]): any;
    /* typeEncoding=@32@0:8q16@24 */
    	shapeWithBooleanOperation_onLayers(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	shapeWithRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	CSSAttributeString(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canContainLayer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canFlatten(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canProbablyFlatten(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canRotate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canSmartRotate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	changeInnerOuterBordersIfHasOpenPaths(): void;
    /* typeEncoding=@16@0:8 */
    	defaultName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	edited(...args: any[]): any;
    /* typeEncoding=c24@0:8q16 */
    	fixGeometryWithOptions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flatten(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	groupBoundsShouldBeIntegral(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	handleDoubleClick(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	handlerClass(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasBooleanOperations(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasFlattenablePath(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasLines(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMarkers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hitTestAsPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hoverPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorSections(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isClosed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isHorizontalLine(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPartOfClippingMask(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isVerticalLine(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	object_didChangeProperty(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	optimalBoundingBox(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reversePath(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	safeFrameForBezierPath(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEdited(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsClosed(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPathInFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawSelectionStroke(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldHitTestOnFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldStripShadowsAndInnerShadow(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	simplify(): void;
    /* typeEncoding=@16@0:8 */
    	styleForBooleanOperation(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsInnerOuterBorders(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	usedStyle(...args: any[]): any;
  }
}

declare const MSShapeGroup: sketchInternal.MSShapeGroup;

