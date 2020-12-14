// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMetalRenderer extends NSObject {
    /* typeEncoding=@"MSArcVertexRenderPipeline", ivar=_arcVertexPipeline, attributes=(retain,nonatomic) */
    	arcVertexPipeline(): MSArcVertexRenderPipeline;
    /* typeEncoding=@"MSColorVertexRenderPipeline", ivar=_colorVertexPipeline, attributes=(retain,nonatomic) */
    	colorVertexPipeline(): MSColorVertexRenderPipeline;
    /* typeEncoding=@"MSColorVertexRenderPipeline", ivar=_colorVertexPipelineWithStencil, attributes=(retain,nonatomic) */
    	colorVertexPipelineWithStencil(): MSColorVertexRenderPipeline;
    /* typeEncoding=@"MSConstantColorRenderPipeline", ivar=_constantColorPipeline, attributes=(retain,nonatomic) */
    	constantColorPipeline(): MSConstantColorRenderPipeline;
    /* typeEncoding=@"MSConstantColorRenderPipeline", ivar=_constantColorPipelineWithStencil, attributes=(retain,nonatomic) */
    	constantColorPipelineWithStencil(): MSConstantColorRenderPipeline;
    /* typeEncoding=@"<MTLCommandBuffer>", ivar=_currentCommands, attributes=(retain,nonatomic) */
    	currentCommands(): any;
    /* typeEncoding=@"<CAMetalDrawable>", ivar=_currentDrawable, attributes=(retain,nonatomic) */
    	currentDrawable(): any;
    /* typeEncoding={?=[4]}, ivar=_currentProjectionMatrix, attributes=(assign,nonatomic) */
    	currentProjectionMatrix(): any;
    /* typeEncoding=@"<MTLRenderCommandEncoder>", ivar=_currentRenderEncoder, attributes=(retain,nonatomic) */
    	currentRenderEncoder(): any;
    /* typeEncoding=@?, ivar=_drawCompletionHandler, attributes=(copy,nonatomic) */
    	drawCompletionHandler(): any;
    /* typeEncoding=c, ivar=_drawing, attributes=(assign,getter=isDrawing) */
    	drawing(): boolean;
    /* typeEncoding=c, ivar=_hasScissor, attributes=(assign,nonatomic) */
    	hasScissor(): boolean;
    /* typeEncoding=@"<MTLCommandQueue>", ivar=_metalCommandQueue, attributes=(retain,nonatomic) */
    	metalCommandQueue(): any;
    /* typeEncoding=@"CAMetalLayer", ivar=_metalLayer, attributes=(retain,nonatomic) */
    	metalLayer(): CAMetalLayer;
    /* typeEncoding=@"<MTLLibrary>", ivar=_metalLibrary, attributes=(retain,nonatomic) */
    	metalLibrary(): any;
    /* typeEncoding={?=iiii}, ivar=_scissorRect, attributes=(assign,nonatomic) */
    	scissorRect(): any;
    /* typeEncoding=@"<MTLTexture>", ivar=_stencilTexture, attributes=(retain,nonatomic) */
    	stencilTexture(): any;
    /* typeEncoding={_opaque_pthread_mutex_t=q[56c]}, ivar=_textureLock, attributes=(assign,nonatomic,readonly) */
    	textureLock(): _opaque_pthread_mutex_t;
    /* typeEncoding=@"MSTexturedVertexRenderPipeline", ivar=_texturedVertexNearestPipeline, attributes=(retain,nonatomic) */
    	texturedVertexNearestPipeline(): MSTexturedVertexRenderPipeline;
    /* typeEncoding=@"MSTexturedVertexRenderPipeline", ivar=_texturedVertexPipeline, attributes=(retain,nonatomic) */
    	texturedVertexPipeline(): MSTexturedVertexRenderPipeline;
    /* typeEncoding=@24@0:8@?16 */
    	static createWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	_resetScissorRect_forTargetTexture(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	_setupScissorRect_forTargetTexture(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	arcVertexPipeline(...args: any[]): any;
    /* typeEncoding=c64@0:8{?=ffff}16{CGSize=dd}32d48^{CGColorSpace=}56 */
    	beginFrameWithClearColor_drawableSize_backingScaleFactor_colorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	blitCommandEncoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorVertexPipeline(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorVertexPipelineWithStencil(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	constantColorPipeline(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	constantColorPipelineWithStencil(...args: any[]): any;
    /* typeEncoding=@40@0:8r^v16Q24Q32 */
    	createBufferWithBytes_length_count(...args: any[]): any;
    /* typeEncoding=@44@0:8r^v16Q24Q32c40 */
    	createBufferWithBytes_length_count_readonly(...args: any[]): any;
    /* typeEncoding=@32@0:8{?=ii}16^{__IOSurface=}24 */
    	createTextureWithSize_ioSurface(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16Q24 */
    	createTextureWithWidth_height(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentCommands(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentDrawable(...args: any[]): any;
    /* typeEncoding={?=[4]}16@0:8 */
    	currentProjectionMatrix(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentRenderEncoder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v88@0:8@16r^{?=ffff}24{CGAffineTransform=dddddd}32d80 */
    	drawArcVertexBuffer_color_modelViewTransform_backingScale(...args: any[]): any;
    /* typeEncoding=v156@0:8r^{MSColorVertexMesh=}16{?=[4]}24{?=[4]}88c152 */
    	drawColorTriangleMesh_modelViewMatrix_projectionMatrix_disableOverlappingFragmentBlending(...args: any[]): any;
    /* typeEncoding=v76@0:8r^{MSColorVertexMesh=}16{CGAffineTransform=dddddd}24c72 */
    	drawColorTriangleMesh_modelViewTransform_disableOverlappingFragmentBlending(...args: any[]): any;
    /* typeEncoding=v156@0:8@16{?=[4]}24{?=[4]}88c152 */
    	drawColorTriangleMeshFromBuffer_modelViewMatrix_projectionMatrix_disableOverlappingFragmentBlending(...args: any[]): any;
    /* typeEncoding=v76@0:8@16{CGAffineTransform=dddddd}24c72 */
    	drawColorTriangleMeshFromBuffer_modelViewTransform_disableOverlappingFragmentBlending(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	drawCompletionHandler(...args: any[]): any;
    /* typeEncoding=v92@0:8@16{?=ffff}24{CGAffineTransform=dddddd}40c88 */
    	drawConstantColorTriangleMeshFromBuffer_color_modelViewTransform_disableOverlappingFragmentBlending(...args: any[]): any;
    /* typeEncoding=v80@0:8@16@24{CGAffineTransform=dddddd}32 */
    	drawTextureVertexBuffer_sourceTexture_modelViewTransform(...args: any[]): any;
    /* typeEncoding=v60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48c56 */
    	drawTexturedQuadInDestinationRect_sourceTexture_bilinearFilter(...args: any[]): any;
    /* typeEncoding=v92@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48{CGRect={CGPoint=dd}{CGSize=dd}}56c88 */
    	drawTexturedQuadInDestinationRect_sourceTexture_sourceRect_bilinearFilter(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	endFrameAndWaitForFrame(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	getRenderCommandEncoder(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasScissor(...args: any[]): any;
    /* typeEncoding=@24@0:8@?16 */
    	initWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDrawing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	lockTextures(): void;
    /* typeEncoding={?=ii}16@0:8 */
    	maximumTextureSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metalCommandQueue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metalLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metalLibrary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	ms_createStencilTextureForColorAttachment(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetScissorRect(): void;
    /* typeEncoding={?=iiii}16@0:8 */
    	scissorRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArcVertexPipeline(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorVertexPipeline(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorVertexPipelineWithStencil(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setConstantColorPipeline(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setConstantColorPipelineWithStencil(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentCommands(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentDrawable(...args: any[]): any;
    /* typeEncoding=v80@0:8{?=[4]}16 */
    	setCurrentProjectionMatrix(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentRenderEncoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setDrawCompletionHandler(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDrawing(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasScissor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetalCommandQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetalLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetalLibrary(...args: any[]): any;
    /* typeEncoding=v32@0:8{?=iiii}16 */
    	setScissorRect(...args: any[]): any;
    /* typeEncoding=v32@0:8i16i20i24i28 */
    	setScissorRectWithX_y_width_height(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStencilTexture(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTexturedVertexNearestPipeline(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTexturedVertexPipeline(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stencilTexture(...args: any[]): any;
    /* typeEncoding={_opaque_pthread_mutex_t=q[56c]}16@0:8 */
    	textureLock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	texturedVertexNearestPipeline(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	texturedVertexPipeline(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	unlockTextures(): void;
  }
}

declare const MSMetalRenderer: sketchInternal.MSMetalRenderer;

