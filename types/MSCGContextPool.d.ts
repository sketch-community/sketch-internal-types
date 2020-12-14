// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCGContextPool extends BCObjectPool {
    /* typeEncoding=^{CGColorSpace=}, ivar=_colorSpace, attributes=(assign,nonatomic) */
    	colorSpace(): any;
    /* typeEncoding={CGSize=dd}, ivar=_contextSize, attributes=(assign,nonatomic) */
    	contextSize(): CGSize;
    /* typeEncoding=^{CGColorSpace=}16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	contextSize(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@40@0:8{CGSize=dd}16^{CGColorSpace=}32 */
    	initWithSize_colorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGContext=}16 */
    	recycleContext(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGColorSpace=}16 */
    	setColorSpace(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setContextSize(...args: any[]): any;
    /* typeEncoding=^{CGContext=}32@0:8{CGSize=dd}16 */
    	vendOrCreateContextOfSize(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGSize=dd}16^{CGColorSpace=}32 */
    	vendsSize_colorSpace(...args: any[]): any;
  }
}

declare const MSCGContextPool: sketchInternal.MSCGContextPool;

