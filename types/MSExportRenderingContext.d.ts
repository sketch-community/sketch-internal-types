// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportRenderingContext extends MSRenderingContextCG {
    /* typeEncoding=@"MSExportRequest", ivar=_exportRequest, attributes=(retain,nonatomic) */
    	exportRequest(): MSExportRequest;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	exportRequest(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24^{CGContext=}32@40 */
    	initWithName_driver_context_renderingRequest(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	rendererShouldSkipDrawingLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportRequest(...args: any[]): any;
    /* typeEncoding=c36@0:8@16@24c32 */
    	shouldDrawLayer_withMaskingShapeGroup_ignoreDrawingArea(...args: any[]): any;
  }
}

declare const MSExportRenderingContext: sketchInternal.MSExportRenderingContext;

