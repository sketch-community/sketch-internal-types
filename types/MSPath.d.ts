// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPath extends NSObject {
    /* typeEncoding=r^{CGPath=}, ivar=_CGPath, attributes=(assign,nonatomic,readonly) */
    	CGPath(): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding=@"NSArray", ivar=_contours, attributes=(copy,nonatomic) */
    	contours(): cocoascript.NSArray;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	controlPointBounds(): CGRect;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	elementCount(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isEmpty(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLinear(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isRectangular(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	safeBounds(): CGRect;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	subpaths(): cocoascript.NSArray;
    /* typeEncoding=@16@0:8 */
    	new(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pathWithBezierPath(...args: any[]): any;
    /* typeEncoding=@24@0:8^{CGPath=}16 */
    	pathWithCGPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pathWithContours(...args: any[]): any;
    /* typeEncoding=@80@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48{CGPoint=dd}64 */
    	pathWithCurveFromPoint_to_controlPoint1_controlPoint2(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	pathWithEllipseInRect(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	pathWithLineFrom_to(...args: any[]): any;
    /* typeEncoding=@32@0:8r^{CGPoint=dd}16i24c28 */
    	pathWithPoints_pointCount_close(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	pathWithRect(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	pathWithSegments_closed(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pathWithSubpaths(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=r^{CGPath=}16@0:8 */
    	CGPath(...args: any[]): any;
    /* typeEncoding={MSPathCachedProperties={CGPoint=dd}{CGPoint=dd}Qc}16@0:8 */
    	_calculateCachedProperies(...args: any[]): any;
    /* typeEncoding={MSPathCachedProperties={CGPoint=dd}{CGPoint=dd}Qc}16@0:8 */
    	_initCachedProperties(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	_pathByScalingToBounds(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16^{CGContext=}24 */
    	addClipForWindingRule_context(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	booleanExclusiveOrWith(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	booleanIntersectWith(...args: any[]): any;
    /* typeEncoding=@32@0:8q16@24 */
    	booleanOp_withPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	booleanSubtractWith(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	booleanUnionWith(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	bounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cleanedPath(...args: any[]): any;
    /* typeEncoding=v40@0:8^{CGContext=}16Q24@?32 */
    	clipContext_windingRule_inBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	closedPath(...args: any[]): any;
    /* typeEncoding=c32@0:8{CGPoint=dd}16 */
    	containsPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contours(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	controlPointBounds(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createContours(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding={?=i[2{CGPoint=dd}]{CGPoint=dd}}24@0:8Q16 */
    	elementAtIndex(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	elementCount(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	endPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithBezierPath(...args: any[]): any;
    /* typeEncoding=@24@0:8^{CGPath=}16 */
    	initWithCGPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithContours(...args: any[]): any;
    /* typeEncoding=@80@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48{CGPoint=dd}64 */
    	initWithCurveFromPoint_to_controlPoint1_controlPoint2(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithEllipseInRect(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	initWithLineFrom_to(...args: any[]): any;
    /* typeEncoding=@32@0:8r^{CGPoint=dd}16i24c28 */
    	initWithPoints_pointCount_close(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithRect(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16d48 */
    	initWithRoundedRect_radius(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16d48 */
    	initWithSquircleInRect_radius(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isClosed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEmpty(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToPath(...args: any[]): any;
    /* typeEncoding=c32@0:8@16d24 */
    	isEqualToPath_epsilon(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLinear(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRectangular(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	length(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	lengthWithMaximumError(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	outerPathWithRect(...args: any[]): any;
    /* typeEncoding=@40@0:8q16d24@32 */
    	outlinePathWithBorderPosition_lineWidth_borderOptions(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	outlinePathWithWidth(...args: any[]): any;
    /* typeEncoding=@32@0:8d16i24i28 */
    	outlinePathWithWidth_lineCap_lineJoin(...args: any[]): any;
    /* typeEncoding=@44@0:8q16d24@32c40 */
    	outlinedSubPathWithBorderPosition_lineWidth_borderOptions_clockwise(...args: any[]): any;
    /* typeEncoding=@72@0:8@16{CGAffineTransform=dddddd}24 */
    	pathByAppendingSubpaths_transform(...args: any[]): any;
    /* typeEncoding=@24@0:8@?16 */
    	pathByApplyingModifierBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pathByJoiningWithPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pathByRemovingSegmentAtIndexPath(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	pathByScalingToBounds(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	pathByTrimmingToLength(...args: any[]): any;
    /* typeEncoding=@32@0:8d16d24 */
    	pathByTrimmingToLength_withMaximumError(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16Q24 */
    	pathFromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathUsingNonZeroWindingRule(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pathWithDashPattern(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	pathWithInset(...args: any[]): any;
    /* typeEncoding=@32@0:8d16Q24 */
    	pathWithInset_joinStrategy(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	pathWithOuterPathOfSize(...args: any[]): any;
    /* typeEncoding=v32@0:8^@16^@24 */
    	pathsUsingNonZeroWindingRule_holes(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8Q16 */
    	pointAtIndex(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8d16 */
    	pointOnPathAtLength(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	pointsInRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	reversedPath(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	safeBounds(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	segmentAtIndexPath(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGPoint=dd}16d32 */
    	segmentIndexPathForPoint_tolerance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContours(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16d24 */
    	shadowPathForStrokeType_lineWidth(...args: any[]): any;
    /* typeEncoding=@48@0:8Q16d24@32@40 */
    	shadowPathForStrokeType_lineWidth_cacheObject_context(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	shadowPathWithSpread(...args: any[]): any;
    /* typeEncoding=@48@0:8d16@24Q32d40 */
    	shadowPathWithSpread_borderOptions_strokeType_lineWidth(...args: any[]): any;
    /* typeEncoding=@64@0:8d16@24Q32d40@48@56 */
    	shadowPathWithSpread_borderOptions_strokeType_lineWidth_cacheObject_context(...args: any[]): any;
    /* typeEncoding=@40@0:8d16@24@32 */
    	shadowPathWithSpread_cacheObject_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	simplifiedPath(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	startPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subpaths(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGAffineTransform=dddddd}16 */
    	transformedPathUsingAffineTransform(...args: any[]): any;
    /* typeEncoding=@24@0:8@?16 */
    	transformedPathUsingMapBlock(...args: any[]): any;
  }
}

declare const MSPath: sketchInternal.MSPath;

