// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierIntersection extends NSObject {
    /* typeEncoding=@"MSBezierSegment", ivar=_segment1, attributes=(assign,nonatomic,readonly) */
    	segment1(): MSBezierSegment;
    /* typeEncoding=d, ivar=_segment1Offset, attributes=(assign,nonatomic,readonly) */
    	segment1Offset(): number;
    /* typeEncoding=@"MSBezierSegment", ivar=_segment2, attributes=(assign,nonatomic,readonly) */
    	segment2(): MSBezierSegment;
    /* typeEncoding=d, ivar=_segment2Offset, attributes=(assign,nonatomic,readonly) */
    	segment2Offset(): number;
    /* typeEncoding=@48@0:8@16@24d32d40 */
    	static intersectionWithSegment1_segment2_segment1Offset_segment2Offset(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24d32d40 */
    	initWithSegment1_segment2_segment1Offset_segment2Offset(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToIntersection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	segment1(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	segment1Offset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	segment2(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	segment2Offset(...args: any[]): any;
  }
}

declare const MSBezierIntersection: sketchInternal.MSBezierIntersection;

