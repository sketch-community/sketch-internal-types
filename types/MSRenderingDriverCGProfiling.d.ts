// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRenderingDriverCGProfiling extends MSRenderingDriverCG {
    /* typeEncoding=@"<MSProfilingRendererDelegate>", ivar=_delegate, attributes=(assign,nonatomic,readonly) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=_traversalIndent, attributes=(assign,nonatomic,readonly) */
    	traversalIndent(): cocoascript.NSString;
    /* typeEncoding=@"NSMutableString", ivar=_traversalLog, attributes=(assign,nonatomic,readonly) */
    	traversalLog(): cocoascript.NSMutableString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	setupRendererMap(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	traversalIndent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	traversalLog(...args: any[]): any;
  }
}

declare const MSRenderingDriverCGProfiling: sketchInternal.MSRenderingDriverCGProfiling;

