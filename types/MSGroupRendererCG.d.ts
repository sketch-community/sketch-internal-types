// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGroupRendererCG extends MSLayerRendererCG {
    /* typeEncoding=v32@0:8@16@24 */
    	beginAlphaMask_context(...args: any[]): any;
    /* typeEncoding=d32@0:8@16@24 */
    	beginMask_context(...args: any[]): any;
    /* typeEncoding=v32@0:8@16d24 */
    	endMaskWithContext_oldAlpha(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24d32 */
    	maskImageForShape_context_scale(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24@28 */
    	renderLayerUncached_ignoreDrawingArea_context(...args: any[]): any;
    /* typeEncoding=v48@0:8@16c24c28@32@40 */
    	renderSubLayer_skipFills_ignoreDrawingArea_maskShapeGroup_context(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24@28 */
    	renderSubLayersOfGroup_ignoreDrawingArea_context(...args: any[]): any;
  }
}

declare const MSGroupRendererCG: sketchInternal.MSGroupRendererCG;

