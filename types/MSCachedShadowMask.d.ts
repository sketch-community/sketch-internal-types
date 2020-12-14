// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCachedShadowMask extends NSObject {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_drawingRect, attributes=(assign,nonatomic,readonly) */
    	drawingRect(): CGRect;
    /* typeEncoding=^{CGImage=}, ivar=_image, attributes=(assign,nonatomic,readonly) */
    	image(): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	drawingRect(...args: any[]): any;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding=@56@0:8^{CGImage=}16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	initWithCGImage_drawingRect(...args: any[]): any;
  }
}

declare const MSCachedShadowMask: sketchInternal.MSCachedShadowMask;

