// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierSegment extends NSObject {
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	arcLength(): number;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	controlPoint1(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	controlPoint2(): CGPoint;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	curviness(): number;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	endPoint1(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	endPoint2(): CGPoint;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	flatness(): number;
    /* typeEncoding={?=dd}, ivar=_fromRange, attributes=(assign,nonatomic) */
    	fromRange(): any;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	inflectionOffsets(): cocoascript.NSSet;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isAPoint(): boolean;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lineLength(): number;
    /* typeEncoding={BCLineSegment={CGPoint=dd}{CGVector=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lineSegment(): BCLineSegment;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	looksLikeALine(): boolean;
    /* typeEncoding={BCBezierSegment=(?=[4{CGPoint=dd}]{?={CGPoint=dd}{CGPoint=dd}{CGPoint=dd}{CGPoint=dd}})i}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	segmentData(): BCBezierSegment;
    /* typeEncoding=i, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	segmentType(): number;
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	transformForXAxisAlignment(): CGAffineTransform;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	xAxisRoots(): cocoascript.NSSet;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	yAxisRoots(): cocoascript.NSSet;
    /* typeEncoding=@80@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48{CGPoint=dd}64 */
    	cubicSegmentWithEndPoint1_endPoint2_controlPoint1_controlPoint2(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	lineSegmentWithEndPoint1_endPoint2(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
    	quadraticSegmentWithEndPoint1_endPoint2_controlPoint(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8^{CGPath=}16@24 */
    	appendToCGPath_orBezierPath(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	arcLength(...args: any[]): any;
    /* typeEncoding=d24@0:8Q16 */
    	arcLengthWithSegments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bezierPath(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	bounds(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16d32 */
    	containsPoint_tolerance(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	controlPoint1(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	controlPoint2(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	controlPointBounds(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=v32@0:8d16^{CGPoint=dd}24 */
    	cubicDeCasteljauAt_points(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cubicRepresentation(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	curvatureAtEndPoint1(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	curvatureAtEndPoint2(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	curvatureAtOffset(...args: any[]): any;
    /* typeEncoding=d64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
    	curvatureFromPoint1_point2_point3(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	curviness(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	derivative(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	endPoint1(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	endPoint2(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16@?24 */
    	enumeratePoints_inBlock(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	flatness(...args: any[]): any;
    /* typeEncoding={?=dd}16@0:8 */
    	fromRange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inflectionOffsets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	initWithEndPoint1_endPoint2(...args: any[]): any;
    /* typeEncoding=@80@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48{CGPoint=dd}64 */
    	initWithEndPoint1_endPoint2_controlPoint1_controlPoint2(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
    	initWithEndPoint1_endPoint2_controlPoint(...args: any[]): any;
    /* typeEncoding=@88@0:8{BCBezierSegment=(?=[4{CGPoint=dd}]{?={CGPoint=dd}{CGPoint=dd}{CGPoint=dd}{CGPoint=dd}})i}16 */
    	initWithSegmentData(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	intersectionsWithHorizontalLineAt(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	intersectionsWithSegment(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	intersectionsWithVerticalLineAt(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAPoint(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToBezierSegment(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	lineLength(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lineRepresentation(...args: any[]): any;
    /* typeEncoding={BCLineSegment={CGPoint=dd}{CGVector=dd}}16@0:8 */
    	lineSegment(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	looksLikeALine(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	normalizedSegment(...args: any[]): any;
    /* typeEncoding=d32@0:8{CGPoint=dd}16 */
    	offsetForNormalToPoint(...args: any[]): any;
    /* typeEncoding=@40@0:8{BCLine=ddd}16 */
    	offsetsOfIntersectionsWithTangent(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8d16 */
    	pointAtOffset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	quadraticApproximation(...args: any[]): any;
    /* typeEncoding=v32@0:8d16^{CGPoint=dd}24 */
    	quadraticDeCasteljauAt_points(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	quadraticRepresentation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	repr(...args: any[]): any;
    /* typeEncoding=@20@0:8i16 */
    	representationUsingType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	reversedSegment(...args: any[]): any;
    /* typeEncoding=@40@0:8d16{CGPoint=dd}24 */
    	segmentByMovingPointAtOffset_toLocation(...args: any[]): any;
    /* typeEncoding=@32@0:8d16d24 */
    	segmentBySmoothingEndPoints_decay(...args: any[]): any;
    /* typeEncoding={BCBezierSegment=(?=[4{CGPoint=dd}]{?={CGPoint=dd}{CGPoint=dd}{CGPoint=dd}{CGPoint=dd}})i}16@0:8 */
    	segmentData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	segmentForJoiningWithC1ContinuityToSegment(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	segmentFromOffset(...args: any[]): any;
    /* typeEncoding=@32@0:8{?=dd}16 */
    	segmentInRange(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	segmentMirroredAtOffset(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	segmentToOffset(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	segmentType(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	segmentWithEndPoint1(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	segmentWithEndPoint2(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	segmentWithInset(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGAffineTransform=dddddd}16 */
    	segmentWithTransform(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	segmentsByClippingToRect(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	segmentsBySplittingAtOffsets(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	segmentsWithFlatness(...args: any[]): any;
    /* typeEncoding=v32@0:8{?=dd}16 */
    	setFromRange(...args: any[]): any;
    /* typeEncoding=v40@0:8^{BCLine=ddd}16^{CGPoint=dd}24d32 */
    	tangent_andPoint_atOffset(...args: any[]): any;
    /* typeEncoding={BCLine=ddd}24@0:8d16 */
    	tangentAtOffset(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	transformForXAxisAlignment(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	xAxisRoots(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	yAxisRoots(...args: any[]): any;
  }
}

declare const MSBezierSegment: sketchInternal.MSBezierSegment;

