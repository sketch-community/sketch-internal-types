// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRenderingDriver extends NSObject {
    /* typeEncoding=@"NSMapTable", ivar=_renderers, attributes=(retain,nonatomic) */
    	renderers(): cocoascript.NSMapTable;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@40@0:8@16^{CGContext=}24@32 */
    	contextWithName_forCGContext_renderingRequest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	rendererForObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	setupRendererMap(...args: any[]): any;
  }
}

declare const MSRenderingDriver: sketchInternal.MSRenderingDriver;

