// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlowSegment extends NSObject {
    /* typeEncoding=@"MSBezierSegment", ivar=_bezierSegment, attributes=(copy,nonatomic,readonly) */
    	bezierSegment(): MSBezierSegment;
    /* typeEncoding=Q, ivar=_endType, attributes=(assign,nonatomic,readonly) */
    	endType(): number;
    /* typeEncoding=Q, ivar=_startType, attributes=(assign,nonatomic,readonly) */
    	startType(): number;
    /* typeEncoding=@24@0:8@16 */
    	segmentWithBezierSegment(...args: any[]): any;
    /* typeEncoding=@40@0:8@16Q24Q32 */
    	segmentWithBezierSegment_startType_endType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	bezierSegment(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	endType(...args: any[]): any;
    /* typeEncoding=@40@0:8@16Q24Q32 */
    	initWithBezierSegment_startType_endType(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	segmentsByClippingToRect(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	startType(...args: any[]): any;
  }
}

declare const MSFlowSegment: sketchInternal.MSFlowSegment;

