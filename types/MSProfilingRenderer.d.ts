// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSProfilingRenderer extends NSObject {
    /* typeEncoding=@"<MSRenderer>", ivar=_baseRenderer, attributes=(assign,nonatomic,readonly) */
    	baseRenderer(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_isGroup, attributes=(assign,nonatomic,readonly) */
    	isGroup(): boolean;
    /* typeEncoding=@"NSString", ivar=_label, attributes=(assign,nonatomic,readonly) */
    	label(): cocoascript.NSString;
    /* typeEncoding=@"<MSProfilingRendererDelegate>", ivar=_profilingDelegate, attributes=(assign,nonatomic,readonly) */
    	profilingDelegate(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	baseRenderer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	forwardInvocation(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24c32@36 */
    	initWithBaseRenderer_profilingDelegate_isGroup_label(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	profilingDelegate(...args: any[]): any;
  }
}

declare const MSProfilingRenderer: sketchInternal.MSProfilingRenderer;

