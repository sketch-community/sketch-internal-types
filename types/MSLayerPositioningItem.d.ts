// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerPositioningItem extends NSObject {
    /* typeEncoding=@"MSLayer", ivar=layer, attributes=(retain,nonatomic) */
    	layer(): MSLayer;
    /* typeEncoding={CGVector=dd}, ivar=offset, attributes=(assign,nonatomic,readonly) */
    	offset(): CGVector;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@40@0:8@16{CGVector=dd}24 */
    	initWithLayer_offset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layer(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	offset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayer(...args: any[]): any;
  }
}

declare const MSLayerPositioningItem: sketchInternal.MSLayerPositioningItem;

