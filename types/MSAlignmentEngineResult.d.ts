// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAlignmentEngineResult extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_guides, attributes=(copy,nonatomic,readonly) */
    	guides(): cocoascript.NSArray;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding={CGPoint=dd}, ivar=_point, attributes=(assign,nonatomic,readonly) */
    	point(): CGPoint;
    /* typeEncoding=Q, ivar=_snappedAxes, attributes=(assign,nonatomic,readonly) */
    	snappedAxes(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	snappingResultWithPoint(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	drawAtZoomValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	guides(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16@32Q40 */
    	initWithPoint_guides_snappedAxes(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	point(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	snappedAxes(...args: any[]): any;
  }
}

declare const MSAlignmentEngineResult: sketchInternal.MSAlignmentEngineResult;

