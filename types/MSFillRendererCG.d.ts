// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFillRendererCG extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v52@0:8@16@24q32c40@44 */
    	drawColorFill_path_index_hasInnerStroke_context(...args: any[]): any;
    /* typeEncoding=v84@0:8@16@24@32c40{CGRect={CGPoint=dd}{CGSize=dd}}44@76 */
    	drawGradientFill_path_layer_hasInnerStroke_rect_context(...args: any[]): any;
    /* typeEncoding=v80@0:8@16@24@32{CGRect={CGPoint=dd}{CGSize=dd}}40@72 */
    	drawPatternFill_path_layer_rect_context(...args: any[]): any;
    /* typeEncoding=v72@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24d56@64 */
    	drawPatternImageFill_rect_parentLayerOpacity_context(...args: any[]): any;
    /* typeEncoding=v80@0:8@16@24Q32{CGRect={CGPoint=dd}{CGSize=dd}}40@72 */
    	drawPatternTiledImageFill_path_winding_rect_context(...args: any[]): any;
    /* typeEncoding=v92@0:8@16@24@32q40{CGRect={CGPoint=dd}{CGSize=dd}}48c80@84 */
    	renderFill_path_layer_index_rect_hasInnerStroke_context(...args: any[]): any;
  }
}

declare const MSFillRendererCG: sketchInternal.MSFillRendererCG;

