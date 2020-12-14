// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTransparencyLayerSavedState extends NSObject {
    /* typeEncoding=^{CGContext=}, ivar=_contextRef, attributes=(assign,nonatomic) */
    	contextRef(): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_deviceRect, attributes=(assign,nonatomic) */
    	deviceRect(): CGRect;
    /* typeEncoding=@"NSGraphicsContext", ivar=_graphicsContext, attributes=(retain,nonatomic) */
    	graphicsContext(): cocoascript.NSGraphicsContext;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_shouldFlip, attributes=(assign,nonatomic) */
    	shouldFlip(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=^{CGContext=}16@0:8 */
    	contextRef(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	deviceRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	graphicsContext(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGContext=}16 */
    	setContextRef(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setDeviceRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGraphicsContext(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldFlip(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldFlip(...args: any[]): any;
  }
}

declare const MSTransparencyLayerSavedState: sketchInternal.MSTransparencyLayerSavedState;

