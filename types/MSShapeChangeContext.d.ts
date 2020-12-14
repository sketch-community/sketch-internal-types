// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShapeChangeContext extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_componentSpecifiers, attributes=(copy,nonatomic,readonly) */
    	componentSpecifiers(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_layers, attributes=(copy,nonatomic,readonly) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	orderedComponentSpecifiers(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	componentSpecifiers(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	curvePointAtIndexPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateCurvePointsUsingBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithLayers_components(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8@16@24 */
    	locationOfHandle_inCoordinateSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	orderedComponentSpecifiers(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rectOfSelectedPoints(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	selectedHandlesSortedByAxis(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16@32 */
    	setLocation_ofHandle(...args: any[]): any;
  }
}

declare const MSShapeChangeContext: sketchInternal.MSShapeChangeContext;

