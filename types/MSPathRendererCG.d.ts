// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPathRendererCG extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v56@0:8@16@24@32@40@?48 */
    	clipFillsWithPath_style_layer_context_block(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	clipPathForOuterStrokeForStyle_path_layer_context(...args: any[]): any;
    /* typeEncoding=v88@0:8@16@24@32^{CGColor=}40{CGRect={CGPoint=dd}{CGSize=dd}}48@80 */
    	drawFillsForPath_style_layer_fillColor_rect_context(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	drawInnerShadowsForPath_style_layer_context(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	drawShadowsForPath_style_layer_context(...args: any[]): any;
    /* typeEncoding=v76@0:8@16@24c32{CGRect={CGPoint=dd}{CGSize=dd}}36@68 */
    	renderBordersForPath_style_applyClip_rect_context(...args: any[]): any;
    /* typeEncoding=v80@0:8@16@24@32{CGRect={CGPoint=dd}{CGSize=dd}}40@72 */
    	renderFillsForPath_style_layer_rect_context(...args: any[]): any;
    /* typeEncoding=v88@0:8@16@24@32{CGRect={CGPoint=dd}{CGSize=dd}}40^{CGColor=}72@80 */
    	renderPath_style_layer_inRect_fillColor_context(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shadowFillShouldClipForStyle(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	shouldAdvanceClipToAvoidInnerStrokeBleedForStyle_layer(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldAdvanceClipToAvoidOuterStrokeStrokeBleedForStyle(...args: any[]): any;
  }
}

declare const MSPathRendererCG: sketchInternal.MSPathRendererCG;

