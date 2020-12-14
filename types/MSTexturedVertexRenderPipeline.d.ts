// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTexturedVertexRenderPipeline extends MSMetalRenderPipeline {
    /* typeEncoding=c, ivar=_nearestSampling, attributes=(assign,nonatomic,readonly) */
    	nearestSampling(): boolean;
    /* typeEncoding=v184@0:8r^{MSTextureVertex=}16Q24Q32@40{?=[4]}48{?=[4]}112@176 */
    	drawVertices_length_count_sourceTexture_modelViewMatrix_projectionMatrix_renderEncoder(...args: any[]): any;
    /* typeEncoding=v176@0:8@16@24@32{?=[4]}40{?=[4]}104@168 */
    	drawVerticesFromBuffer_indexBuffer_sourceTexture_modelViewMatrix_projectionMatrix_renderEncoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fragmentFunctionName(...args: any[]): any;
    /* typeEncoding=@44@0:8@16Q24Q32c40 */
    	initWithLibrary_pixelFormat_depthStencilFormat_nearestSampling(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	nearestSampling(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	vertexDescriptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	vertexFunctionName(...args: any[]): any;
  }
}

declare const MSTexturedVertexRenderPipeline: sketchInternal.MSTexturedVertexRenderPipeline;

