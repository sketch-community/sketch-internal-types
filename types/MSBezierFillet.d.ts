// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierFillet extends NSObject {
    /* typeEncoding={CGPoint=dd}, ivar=_arcCenter, attributes=(assign,nonatomic,readonly) */
    	arcCenter(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_arcEndPoint1, attributes=(assign,nonatomic,readonly) */
    	arcEndPoint1(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_arcEndPoint2, attributes=(assign,nonatomic,readonly) */
    	arcEndPoint2(): CGPoint;
    /* typeEncoding=d, ivar=_arcRadius, attributes=(assign,nonatomic,readonly) */
    	arcRadius(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	clockwise(): boolean;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	endAngle(): number;
    /* typeEncoding=@"MSBezierSegment", ivar=_segment1, attributes=(assign,nonatomic,readonly) */
    	segment1(): MSBezierSegment;
    /* typeEncoding=d, ivar=_segment1Offset, attributes=(assign,nonatomic,readonly) */
    	segment1Offset(): number;
    /* typeEncoding=@"MSBezierSegment", ivar=_segment2, attributes=(assign,nonatomic,readonly) */
    	segment2(): MSBezierSegment;
    /* typeEncoding=d, ivar=_segment2Offset, attributes=(assign,nonatomic,readonly) */
    	segment2Offset(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	startAngle(): number;
    /* typeEncoding=@40@0:8@16@24d32 */
    	bezierFilletWithSegment1_segment2_filletRadius(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24d32 */
    	bezierFilletWithSegment1_segment2_segment1Offset(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24d32 */
    	curveFilletWithSegment1_segment2_filletRadius(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24d32 */
    	curveFilletWithSegment1_segment2_segment1Offset(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24d32 */
    	lineFilletWithSegment1_segment2_filletRadius(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24d32 */
    	lineFilletWithSegment1_segment2_segment1Offset(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	zeroRadiusFilletWithSegment1_segment2(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16^{CGPath=}24 */
    	addArcToBezierPath_orCGPath(...args: any[]): any;
    /* typeEncoding=d32@0:8{CGPoint=dd}16 */
    	angleToPoint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	arcCenter(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	arcEndPoint1(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	arcEndPoint2(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	arcRadius(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	arcSegments(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	clockwise(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	endAngle(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithSegment1_segment2(...args: any[]): any;
    /* typeEncoding=@104@0:8@16@24d32d40{CGPoint=dd}48{CGPoint=dd}64{CGPoint=dd}80d96 */
    	initWithSegment1_segment2_segment1Offset_segment2Offset_arcEndPoint1_arcEndPoint2_arcCenter_arcRadius(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	reversedFillet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	segment1(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	segment1Offset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	segment2(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	segment2Offset(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	startAngle(...args: any[]): any;
  }
}

declare const MSBezierFillet: sketchInternal.MSBezierFillet;

