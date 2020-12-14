// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShapePathLayer extends _MSShapePathLayer {
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	CGTransformForFrame(): CGAffineTransform;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canFlatten(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	edited(): boolean;
    /* typeEncoding=@"MSCurvePoint", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstPoint(): MSCurvePoint;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasRoundedCorners(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasTransforms(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	isClosed(): boolean;
    /* typeEncoding=c, ivar=_isEditing, attributes=(assign,nonatomic) */
    	isEditing(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedHorizontal(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedVertical(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLayerExportable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isVisible(): boolean;
    /* typeEncoding=@"MSCurvePoint", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lastPoint(): MSCurvePoint;
    /* typeEncoding=d, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	length(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	numberOfCurvePoints(): number;
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
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	slope(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=d, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	x1(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	x2(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	y1(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	y2(): number;
    /* typeEncoding=@24@0:8@16 */
    	static layerWithPath(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	static layerWithPath_integralFrame(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static layerWithShapeGroupSubpath(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	static performBatchEdits(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	static shapeWithRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustAfterInsert(): void;
    /* typeEncoding=v24@0:8c16c20 */
    	adjustFrameAfterEditIntegral_fixAncestors(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	adjustGeometryToBoundsRect(...args: any[]): any;
    /* typeEncoding=v64@0:8{CGAffineTransform=dddddd}16 */
    	applyAffineTransformToPath(...args: any[]): any;
    /* typeEncoding=v32@0:8d16@24 */
    	applyUserVisibleRotation_explicitRotationCenter(...args: any[]): any;
    /* typeEncoding=c80@0:8@16@24{CGAffineTransform=dddddd}32 */
    	attemptToSimplifyBetweenPoint_andPoint_pathToLayerTransform(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bezierPathForCursorPreview(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	boundsForCursorPreview(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canFlatten(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canSmartRotate(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	copyPropertiesToObject_options(...args: any[]): any;
    /* typeEncoding=q24@0:8Q16 */
    	cornerForLinePointAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultCurvePoints(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	didEdit(): void;
    /* typeEncoding=d48@0:8Q16{CGPoint=dd}24d40 */
    	distanceSquaredToSegmentAtIndex_fromPoint_tolerance(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	editable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flattenedLayer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	handleDoubleClick(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	handlerClass(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasRoundedCorners(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hitTestAsPath(...args: any[]): any;
    /* typeEncoding=Q48@0:8{CGPoint=dd}16{CGSize=dd}32 */
    	indexOfSegmentAtPoint_tolerance(...args: any[]): any;
    /* typeEncoding=@28@0:8c16@?20 */
    	initWithDefaults_block(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertionCursor(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEditing(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isNearlyEmpty(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPartOfClippingMask(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPolygon(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRectangle(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	kindOfHandleAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastPoint(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	length(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	multiplyBy(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	numberOfCurvePoints(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}20@0:8c16 */
    	optimalBoundingBoxIntegral(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	p1(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	p2(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8Q16 */
    	pointCenteredAfterPointIndex(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	pointsAroundIndex(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetPoints(): void;
    /* typeEncoding=v16@0:8 */
    	resetPointsBasedOnUserInteraction(): void;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	resizeWithOldGroupSize(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reversePath(): void;
    /* typeEncoding=v24@0:8Q16 */
    	setEndMarkerType(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsEditing(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setLength(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNilValueForKey(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setP1(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setP2(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPathInFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setStartMarkerType(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setX1(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setX2(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setY1(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setY2(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shareableObjectType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawSelection(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawSelectionStroke(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldHitTestOnFill(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	simplify(): void;
    /* typeEncoding=c16@0:8 */
    	simplifyPathOnce(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	slope(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleForBooleanOperation(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsInnerOuterBorders(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	usedStyle(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	userVisibleRotation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	willMoveToParentObject(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	x1(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	x2(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	y1(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	y2(...args: any[]): any;
  }
}

declare const MSShapePathLayer: sketchInternal.MSShapePathLayer;

