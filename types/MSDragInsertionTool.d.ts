// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDragInsertionTool extends NSObject {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	frame(): CGRect;
    /* typeEncoding=c, ivar=isAboutCenter, attributes=(assign,nonatomic) */
    	insertAboutCenter(): boolean;
    /* typeEncoding=@"<MSLayerCoordinateSpace>", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	parentCoordinateSpace(): any;
    /* typeEncoding={CGPoint=dd}, ivar=position, attributes=(assign,nonatomic) */
    	position(): CGPoint;
    /* typeEncoding=d, ivar=zoomScale, attributes=(assign,nonatomic) */
    	zoomScale(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	beginDragging(): void;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	beginDraggingWithLocation(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	frame(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDestination(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	insertAboutCenter(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	locationIn(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	position(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setInsertAboutCenter(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setPosition(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomScale(...args: any[]): any;
    /* typeEncoding=v44@0:8{CGPoint=dd}16c32Q36 */
    	updateWithLocation_lockSize_alignedAxes(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomScale(...args: any[]): any;
  }
}

declare const MSDragInsertionTool: sketchInternal.MSDragInsertionTool;

