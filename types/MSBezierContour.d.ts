// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierContour extends NSObject {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isClockwise) */
    	clockwise(): boolean;
    /* typeEncoding=c, ivar=_closed, attributes=(assign,nonatomic,readonly,getter=isClosed) */
    	closed(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	controlPointBounds(): CGRect;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLinear(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isRectangular(): boolean;
    /* typeEncoding=@"MSPath", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	path(): MSPath;
    /* typeEncoding=@"NSArray", ivar=_segments, attributes=(copy,nonatomic,readonly) */
    	segments(): cocoascript.NSArray;
    /* typeEncoding=@48@0:8{CGPoint=dd}16d32Q40 */
    	contourWithPolygonAtPoint_radius_sides(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	contourWithRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	_calculateIsLinear(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	bounds(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	calculateBounds(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	calculateIsClockwise(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	closedContour(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	contourWithInset(...args: any[]): any;
    /* typeEncoding=@32@0:8d16Q24 */
    	contourWithInset_joinStrategy(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	controlPointBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=c28@0:8@16c24 */
    	doSegmentsFormARectangle_closed(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	initWithSegments_closed(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	intersectionsWithSegment(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isClockwise(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isClosed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLinear(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRectangular(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding=@36@0:8@16Q24c32 */
    	rejoinSegments_joinStrategy_closed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	reversedContour(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	segmentAfter(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	segmentAfterSegment_inArray_closed(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	segmentBefore(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	segmentBeforeSegment_inArray_closed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	segments(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	segmentsByCheckingForPointsInJoin(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	segmentsByDiscardingTinySegments_closed(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	segmentsWithFlatness(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	simplifiedSegments(...args: any[]): any;
    /* typeEncoding=@32@0:8@16d24 */
    	simplifiedSegmentsBySplittingSegment_atOffset(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	simplifySegment(...args: any[]): any;
  }
}

declare const MSBezierContour: sketchInternal.MSBezierContour;

