// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmapShadowRendererCG extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v80@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56@64@?72 */
    	clipAndTransformForShadow_forBounds_context_cacheObject_inBlock(...args: any[]): any;
    /* typeEncoding=v80@0:8@16@24@32Q40@48Q56d64@72 */
    	fillAndStrokeShadow_path_cacheObject_windingRule_options_strokeType_lineWidth_context(...args: any[]): any;
    /* typeEncoding=v64@0:8@16@24@32Q40d48@56 */
    	fillShadow_path_cacheObject_windingRule_spread_context(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24Q32@40@48 */
    	renderInnerShadow_path_windingRule_cacheObject_context(...args: any[]): any;
    /* typeEncoding=v92@0:8@16@24Q32@40Q48Q56c64d68@76@84 */
    	renderShadow_path_windingRule_options_type_strokeType_fillShouldClip_lineWidth_cacheObject_context(...args: any[]): any;
    /* typeEncoding=v72@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56@?64 */
    	renderShadow_rect_context_block(...args: any[]): any;
    /* typeEncoding=v80@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56@64@?72 */
    	renderShadowMask_forBounds_context_cacheObject_inBlock(...args: any[]): any;
    /* typeEncoding=v72@0:8@16@24@32Q40@48d56@64 */
    	strokeShadow_path_cacheObject_strokeType_options_lineWidth_context(...args: any[]): any;
  }
}

declare const MSBitmapShadowRendererCG: sketchInternal.MSBitmapShadowRendererCG;

