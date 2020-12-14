// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierJoin extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_joinedSegments, attributes=(copy,nonatomic,readonly) */
    	joinedSegments(): cocoascript.NSArray;
    /* typeEncoding=@"MSBezierSegment", ivar=_segment1, attributes=(assign,nonatomic,readonly) */
    	segment1(): MSBezierSegment;
    /* typeEncoding=@"MSBezierSegment", ivar=_segment2, attributes=(assign,nonatomic,readonly) */
    	segment2(): MSBezierSegment;
    /* typeEncoding=@32@0:8@16@24 */
    	static joinWithSegment1_segment2(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	static joinWithSegment1_segment2_strategy(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static segmentsByJoiningSegment1_segment2(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithSegment1_segment2_joinedSegments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	joinedSegments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	segment1(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	segment2(...args: any[]): any;
  }
}

declare const MSBezierJoin: sketchInternal.MSBezierJoin;

