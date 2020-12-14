// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSComponentInsertionTool extends NSObject {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	frame(): CGRect;
    /* typeEncoding=@"MSPage", ivar=page, attributes=(assign,nonatomic,readonly) */
    	page(): MSPage;
    /* typeEncoding={CGSize=dd}, ivar=size, attributes=(assign,nonatomic,readonly) */
    	size(): CGSize;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic) */
    	snapMask(): number;
    /* typeEncoding=c, ivar=snappingEnabled, attributes=(assign,nonatomic) */
    	snappingEnabled(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=visibleRect, attributes=(assign,nonatomic) */
    	visibleRect(): CGRect;
    /* typeEncoding=d, ivar=zoomScale, attributes=(assign,nonatomic) */
    	zoomScale(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
    	convertPoint_toCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	convertRect_toCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	frame(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGSize=dd}16@32 */
    	initWithComponentSize_targetPage(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	locationIn(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	page(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setSnapMask(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSnappingEnabled(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setVisibleRect(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomScale(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	size(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	snapMask(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	snappingEnabled(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	updateWithPoint(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	visibleRect(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomScale(...args: any[]): any;
  }
}

declare const MSComponentInsertionTool: sketchInternal.MSComponentInsertionTool;

