// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGradientRendererCG extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@88@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56@64@72@80 */
    	angularGradientImage_inRect_colorSpace_tint_cache_cacheKey(...args: any[]): any;
    /* typeEncoding=^{CGGradient=}32@0:8@16@24 */
    	createMaskForGradient_withContext(...args: any[]): any;
    /* typeEncoding=v72@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56@64 */
    	drawAngularGradient_inRect_context_cacheKey(...args: any[]): any;
    /* typeEncoding=v80@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24d56@64@72 */
    	drawGradient_inRect_forBorderThickness_context_cacheKey(...args: any[]): any;
    /* typeEncoding=v80@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24^{CGGradient=}56@64@?72 */
    	drawGradient_withTransparentStopsInRect_gradientRef_context_gradientDrawingBlock(...args: any[]): any;
    /* typeEncoding=v72@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24^{CGGradient=}56@64 */
    	drawLinearGradient_inRect_gradient_context(...args: any[]): any;
    /* typeEncoding=v72@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24^{CGGradient=}56@64 */
    	drawRadialGradient_inRect_gradient_context(...args: any[]): any;
    /* typeEncoding=v136@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16^{CGGradient=}48{CGPoint=dd}56d72{CGAffineTransform=dddddd}80^{CGContext=}128 */
    	drawRadialGradientInRect_gradient_firstPoint_length_ellipseTransform_context(...args: any[]): any;
  }
}

declare const MSGradientRendererCG: sketchInternal.MSGradientRendererCG;

