// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArc extends NSObject {
    /* typeEncoding={CGPoint=dd}, ivar=_center, attributes=(assign,nonatomic,readonly) */
    	center(): CGPoint;
    /* typeEncoding=c, ivar=_clockwise, attributes=(assign,nonatomic,readonly,getter=isClockwise) */
    	clockwise(): boolean;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	endAngle(): number;
    /* typeEncoding={CGVector=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	endNormal(): CGVector;
    /* typeEncoding={CGPoint=dd}, ivar=_endPoint1, attributes=(assign,nonatomic,readonly) */
    	endPoint1(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_endPoint2, attributes=(assign,nonatomic,readonly) */
    	endPoint2(): CGPoint;
    /* typeEncoding={BCLine=ddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	endTangent(): BCLine;
    /* typeEncoding=c, ivar=_isALine, attributes=(assign,nonatomic,readonly) */
    	isALine(): boolean;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	radius(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	startAngle(): number;
    /* typeEncoding={CGVector=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	startNormal(): CGVector;
    /* typeEncoding={BCLine=ddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	startTangent(): BCLine;
    /* typeEncoding=@96@0:8{BCBezierSegment=(?=[4{CGPoint=dd}]{?={CGPoint=dd}{CGPoint=dd}{CGPoint=dd}{CGPoint=dd}})i}16^d88 */
    	static arcApproximationForSegment_absoluteError(...args: any[]): any;
    /* typeEncoding=@96@0:8{BCBezierSegment=(?=[4{CGPoint=dd}]{?={CGPoint=dd}{CGPoint=dd}{CGPoint=dd}{CGPoint=dd}})i}16d88 */
    	static arcApproximationForSegment_maximumError(...args: any[]): any;
    /* typeEncoding=@68@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48c64 */
    	static arcWithEndPoint1_endPoint2_center_clockwise(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
    	static arcWithPoints_endPoint2_onCurvePoint(...args: any[]): any;
    /* typeEncoding=@96@0:8{BCBezierSegment=(?=[4{CGPoint=dd}]{?={CGPoint=dd}{CGPoint=dd}{CGPoint=dd}{CGPoint=dd}})i}16^d88 */
    	static biarcApproximationForSegment_absoluteError(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	static lineWithEndPoint1_endPoint2(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static singleArcApproximationForSegment(...args: any[]): any;
    /* typeEncoding=d88@0:8{BCBezierSegment=(?=[4{CGPoint=dd}]{?={CGPoint=dd}{CGPoint=dd}{CGPoint=dd}{CGPoint=dd}})i}16 */
    	absoluteErrorWithSegment(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bezierPath(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	center(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	endAngle(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	endNormal(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	endPoint1(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	endPoint2(...args: any[]): any;
    /* typeEncoding={BCLine=ddd}16@0:8 */
    	endTangent(...args: any[]): any;
    /* typeEncoding={BCLine=ddd}16@0:8 */
    	endpoint1Tangent(...args: any[]): any;
    /* typeEncoding={BCLine=ddd}16@0:8 */
    	endpoint2Tangent(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	initLineWithEndPoint1_endPoint2(...args: any[]): any;
    /* typeEncoding=@68@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48c64 */
    	initWithEndPoint1_endPoint2_center_clockwise(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isALine(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isClockwise(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	radius(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	startAngle(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	startNormal(...args: any[]): any;
    /* typeEncoding={BCLine=ddd}16@0:8 */
    	startTangent(...args: any[]): any;
  }
}

declare const MSArc: sketchInternal.MSArc;

