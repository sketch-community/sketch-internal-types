// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSViewPort extends NSObject {
    /* typeEncoding={CGPoint=dd}, ivar=_scrollOrigin, attributes=(assign,nonatomic) */
    	scrollOrigin(): CGPoint;
    /* typeEncoding=d, ivar=_zoomValue, attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding=d24@0:8d16 */
    	cappedZoom(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	maximumZoomValue(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	minimumZoomValue(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGPoint=dd}16d32 */
    	viewPortWithScrollOrigin_zoom(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	scrollOrigin(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
  }
}

declare const MSViewPort: sketchInternal.MSViewPort;

