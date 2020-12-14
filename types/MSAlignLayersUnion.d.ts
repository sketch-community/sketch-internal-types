// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAlignLayersUnion extends BCRect {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic) */
    	absoluteBoundingBox(): CGRect;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@, ivar=_layers, attributes=(retain,nonatomic) */
    	layers(): any;
    /* typeEncoding=@"MSPath", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pathForAbsoluteRect(): MSPath;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rect(): CGRect;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8@16 */
    	unionWithLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	absoluteBoundingBox(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLocked(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	makeOriginIntegral(): void;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	moveInAbsoluteCoordinatesBy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathForAbsoluteRect(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setAbsoluteBoundingBox(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setHeightRespectingProportions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setValue_forKey(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setWidthRespectingProportions(...args: any[]): any;
  }
}

declare const MSAlignLayersUnion: sketchInternal.MSAlignLayersUnion;

