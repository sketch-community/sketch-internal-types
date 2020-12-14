// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRulerCoordinateSpace extends NSObject {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding=@"MSLayer<MSRootLayer>", ivar=_layer, attributes=(assign,nonatomic,readonly,weak) */
    	layer(): any;
    /* typeEncoding=@"<MSLayerCoordinateSpace>", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	parentCoordinateSpace(): any;
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	transformForConvertingFromParentCoordinateSpace(): CGAffineTransform;
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	transformForConvertingToParentCoordinateSpace(): CGAffineTransform;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	bounds(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
    	convertPoint_fromCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
    	convertPoint_toCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	convertRect_fromCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	convertRect_toCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGVector=dd}40@0:8{CGVector=dd}16@32 */
    	convertVector_fromCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGVector=dd}40@0:8{CGVector=dd}16@32 */
    	convertVector_toCoordinateSpace(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}24@0:8@16 */
    	transformForConvertingFromCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	transformForConvertingFromParentCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}24@0:8@16 */
    	transformForConvertingToCoordinateSpace(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	transformForConvertingToParentCoordinateSpace(...args: any[]): any;
  }
}

declare const MSRulerCoordinateSpace: sketchInternal.MSRulerCoordinateSpace;

