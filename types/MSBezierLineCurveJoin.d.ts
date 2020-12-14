// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierLineCurveJoin extends MSBezierJoin {
    /* typeEncoding=c32@0:8@16@24 */
    	checkCurviness_curve2(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	checkLineLengthIsSane_oldCurve(...args: any[]): any;
    /* typeEncoding=@32@0:8d16@24 */
    	closestOffsetGreaterThan_inSet(...args: any[]): any;
    /* typeEncoding=@32@0:8d16@24 */
    	closestOffsetLessThan_inSet(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	joinWithSegment1_segment2(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	joinWithSegment1_segment2_strategy(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24N@32 */
    	segmentsWithIntersectionOfLine_withCurve_intersectionOffsets(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24N@32 */
    	segmentsWithIntersectionOfLine_withExtendedCurve_intersectionOffsets(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	segmentsWithIntersectionOfLine_withExtendedTangentFromCurve(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	segmentsWithIntersectionOfLine_withMirroredCurve(...args: any[]): any;
  }
}

declare const MSBezierLineCurveJoin: sketchInternal.MSBezierLineCurveJoin;

