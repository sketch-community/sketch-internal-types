// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSmoothBezierFillet extends MSBezierFillet {
    /* typeEncoding=@"NSArray", ivar=_arcSegments, attributes=(retain,nonatomic) */
    	arcSegments(): cocoascript.NSArray;
    /* typeEncoding=@40@0:8@16@24d32 */
    	static smoothBezierFilletWithLineSegment1_lineSegment2_filletRadius(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16^{CGPath=}24 */
    	addArcToBezierPath_orCGPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	arcSegments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	reversedFillet(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArcSegments(...args: any[]): any;
  }
}

declare const MSSmoothBezierFillet: sketchInternal.MSSmoothBezierFillet;

