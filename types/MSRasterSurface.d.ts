// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRasterSurface extends NSObject {
    /* typeEncoding=^{CGContext=}, ivar=_contextRef, attributes=(assign,nonatomic) */
    	contextRef(): any;
    /* typeEncoding=^{__IOSurface=}, ivar=_ioSurfaceRef, attributes=(assign,nonatomic) */
    	ioSurfaceRef(): any;
    /* typeEncoding={?=ii}, ivar=_size, attributes=(assign,nonatomic,readonly) */
    	size(): any;
    /* typeEncoding=@"MSMetalTexture", ivar=_texture, attributes=(retain,nonatomic) */
    	texture(): MSMetalTexture;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=^{CGContext=}16@0:8 */
    	contextRef(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8@?16 */
    	drawOnCGContext(...args: any[]): any;
    /* typeEncoding=v96@0:8{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}16@?88 */
    	drawOnCGContextForRenderingParameters_withBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8{?=ii}16^{CGColorSpace=}24 */
    	initWithSize_colorSpace(...args: any[]): any;
    /* typeEncoding=^{__IOSurface=}16@0:8 */
    	ioSurfaceRef(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	metalTextureForRenderer(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGContext=}16 */
    	setContextRef(...args: any[]): any;
    /* typeEncoding=v24@0:8^{__IOSurface=}16 */
    	setIoSurfaceRef(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTexture(...args: any[]): any;
    /* typeEncoding={?=ii}16@0:8 */
    	size(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	texture(...args: any[]): any;
  }
}

declare const MSRasterSurface: sketchInternal.MSRasterSurface;

