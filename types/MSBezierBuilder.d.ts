// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierBuilder extends NSObject {
    /* typeEncoding=@"NSMutableDictionary", ivar=_filletCache, attributes=(retain,nonatomic) */
    	filletCache(): cocoascript.NSMutableDictionary;
    /* typeEncoding=c, ivar=_pathShouldClose, attributes=(assign,nonatomic) */
    	pathShouldClose(): boolean;
    /* typeEncoding=q, ivar=_pointRadiusBehaviour, attributes=(assign,nonatomic,readonly) */
    	pointRadiusBehaviour(): number;
    /* typeEncoding=@"NSArray", ivar=_points, attributes=(retain,nonatomic) */
    	points(): cocoascript.NSArray;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_rect, attributes=(assign,nonatomic) */
    	rect(): CGRect;
    /* typeEncoding=@64@0:8Q16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    	static pathForSegmentAtIndex_inPath_inRect(...args: any[]): any;
    /* typeEncoding=@68@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24c56q60 */
    	static pathWithPoints_inRect_shouldClose_pointRadiusBehaviour(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	_path(...args: any[]): any;
    /* typeEncoding=v84@0:8Q16Q24@32{CGRect={CGPoint=dd}{CGSize=dd}}40c72^{CGPath=}76 */
    	addCurveFromPointAtIndex_toPointAtIndex_inArray_inRect_includingTrailingArc_toCGPath(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16^{CGPath=}32 */
    	addLineToPoint_toCGPath(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24^{CGPath=}32 */
    	appendCurveFromPoint_toPoint_toCGPath(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGPath=}16 */
    	buildCGPath(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGPath=}16 */
    	buildV0CGPath(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGPath=}16 */
    	buildV1CGPath(...args: any[]): any;
    /* typeEncoding=v72@0:8^{CGPath=}16{CGPoint=dd}24{CGPoint=dd}40{CGPoint=dd}56 */
    	extendCGPath_toPoint_controlPoint1_controlPoint2(...args: any[]): any;
    /* typeEncoding=@64@0:8Q16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    	filletAtIndex_inPointArray_rect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filletCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8q16 */
    	initWithPointRadiusBehavior(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isStraightLine(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	pathFromCurvePoint_toPoint(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	pathShouldClose(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	pointRadiusBehaviour(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	points(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFilletCache(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPathShouldClose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPoints(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setRect(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	treatCurvePointAsRounded(...args: any[]): any;
  }
}

declare const MSBezierBuilder: sketchInternal.MSBezierBuilder;

