// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierCurveCurveJoin extends MSBezierLineCurveJoin {
    /* typeEncoding=c64@0:8{CGPoint=dd}16{CGPoint=dd}32@48@56 */
    	checkLineLengthIsSaneForEndPoint_endPoint2_line1_line2(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	firstIntersectionOnSegment1InSet(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	joinWithSegment1_segment2_strategy(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	segmentsWithIntersectionOfCurve1_withCurve2(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	segmentsWithIntersectionOfExtendTangentFromCurve_withExtendedTangentFromCurve(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	segmentsWithIntersectionOfMirrorOfCurve1_withMirrorOfCurve2(...args: any[]): any;
  }
}

declare const MSBezierCurveCurveJoin: sketchInternal.MSBezierCurveCurveJoin;

