// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPastingViewport extends NSObject {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_visibleRect, attributes=(assign,nonatomic) */
    	visibleRect(): CGRect;
    /* typeEncoding=d, ivar=_zoomValue, attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16d48 */
    	static viewportWithVisibleRect_zoom(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setVisibleRect(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	viewportContainingLayers(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	visibleRect(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
  }
}

declare const MSPastingViewport: sketchInternal.MSPastingViewport;

