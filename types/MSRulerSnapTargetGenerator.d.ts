// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRulerSnapTargetGenerator extends NSObject {
    /* typeEncoding=Q, ivar=mask, attributes=(assign,nonatomic) */
    	mask(): number;
    /* typeEncoding=d, ivar=zoomScale, attributes=(assign,nonatomic) */
    	zoomScale(): number;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	mask(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	provideTargetsForPage_toOutput(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setMask(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomScale(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomScale(...args: any[]): any;
  }
}

declare const MSRulerSnapTargetGenerator: sketchInternal.MSRulerSnapTargetGenerator;

