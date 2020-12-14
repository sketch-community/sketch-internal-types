// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSnappingTarget extends NSObject {
    /* typeEncoding={CGVector=dd}, ivar=_directionVector, attributes=(assign,nonatomic,readonly) */
    	directionVector(): CGVector;
    /* typeEncoding=Q, ivar=_guideType, attributes=(assign,nonatomic,readonly) */
    	guideType(): number;
    /* typeEncoding={BCLine=ddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	line(): BCLine;
    /* typeEncoding={BCLineSegment={CGPoint=dd}{CGVector=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lineSegment(): BCLineSegment;
    /* typeEncoding={CGPoint=dd}, ivar=_point, attributes=(assign,nonatomic,readonly) */
    	point(): CGPoint;
    /* typeEncoding=@52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
    	static targetsForEdgesOfRect_includeCenter(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	directionVector(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	guideType(...args: any[]): any;
    /* typeEncoding=@48@0:8{BCLineSegment={CGPoint=dd}{CGVector=dd}}16 */
    	initWithGuideLine(...args: any[]): any;
    /* typeEncoding=@52@0:8{CGPoint=dd}16Q32c40d44 */
    	initWithPoint_axis_wantsGuide_length(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGPoint=dd}16{CGVector=dd}32Q48 */
    	initWithPoint_directionVector_guideType(...args: any[]): any;
    /* typeEncoding=@32@0:8d16Q24 */
    	initWithPosition_onAxis(...args: any[]): any;
    /* typeEncoding={BCLine=ddd}16@0:8 */
    	line(...args: any[]): any;
    /* typeEncoding={BCLineSegment={CGPoint=dd}{CGVector=dd}}16@0:8 */
    	lineSegment(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	point(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGAffineTransform=dddddd}16 */
    	targetByApplyingTransform(...args: any[]): any;
  }
}

declare const MSSnappingTarget: sketchInternal.MSSnappingTarget;

