// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInferredLayoutChangedRegion extends NSObject {
    /* typeEncoding={_NSRange=QQ}, ivar=_calculatedRange, attributes=(assign,nonatomic) */
    	calculatedRange(): _NSRange;
    /* typeEncoding=@"NSMutableSet", ivar=_layerPairs, attributes=(retain,nonatomic) */
    	layerPairs(): cocoascript.NSMutableSet;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addLayerPair(...args: any[]): any;
    /* typeEncoding={_NSRange=QQ}16@0:8 */
    	calculatedRange(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	changeInSize(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	containsLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerPairs(...args: any[]): any;
    /* typeEncoding=v32@0:8{_NSRange=QQ}16 */
    	setCalculatedRange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayerPairs(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldIncludeLayerPair(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	unionRect(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	updatedLayerUnionRect(...args: any[]): any;
  }
}

declare const MSInferredLayoutChangedRegion: sketchInternal.MSInferredLayoutChangedRegion;

