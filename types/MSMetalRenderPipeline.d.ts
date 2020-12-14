// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMetalRenderPipeline extends NSObject {
    /* typeEncoding=@"<MTLDepthStencilState>", ivar=_depthStencilState, attributes=(assign,nonatomic,readonly) */
    	depthStencilState(): any;
    /* typeEncoding=@"<MTLLibrary>", ivar=_library, attributes=(assign,nonatomic,readonly) */
    	library(): any;
    /* typeEncoding=@"<MTLRenderPipelineState>", ivar=_pipelineState, attributes=(assign,nonatomic,readonly) */
    	pipelineState(): any;
    /* typeEncoding=c, ivar=_useDepthStencil, attributes=(assign,nonatomic,readonly) */
    	useDepthStencil(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8Q16Q24 */
    	createPipelineState_depthStencilFormat(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	depthStencilDescriptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	depthStencilState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fragmentFunctionName(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	initWithLibrary_pixelFormat(...args: any[]): any;
    /* typeEncoding=@40@0:8@16Q24Q32 */
    	initWithLibrary_pixelFormat_depthStencilFormat(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	library(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pipelineState(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16Q24 */
    	pipelineStateDescriptor_depthStencilFormat(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	useDepthStencil(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	vertexDescriptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	vertexFunctionName(...args: any[]): any;
  }
}

declare const MSMetalRenderPipeline: sketchInternal.MSMetalRenderPipeline;

