// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierLineCurveJoin extends MSBezierJoin {
    /* typeEncoding=c32@0:8@16@24 */
    	static checkCurviness_curve2(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	static checkLineLengthIsSane_oldCurve(...args: any[]): any;
    /* typeEncoding=@32@0:8d16@24 */
    	static closestOffsetGreaterThan_inSet(...args: any[]): any;
    /* typeEncoding=@32@0:8d16@24 */
    	static closestOffsetLessThan_inSet(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static joinWithSegment1_segment2(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	static joinWithSegment1_segment2_strategy(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24N@32 */
    	static segmentsWithIntersectionOfLine_withCurve_intersectionOffsets(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24N@32 */
    	static segmentsWithIntersectionOfLine_withExtendedCurve_intersectionOffsets(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static segmentsWithIntersectionOfLine_withExtendedTangentFromCurve(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static segmentsWithIntersectionOfLine_withMirroredCurve(...args: any[]): any;
  }
}

declare const MSBezierLineCurveJoin: sketchInternal.MSBezierLineCurveJoin;

