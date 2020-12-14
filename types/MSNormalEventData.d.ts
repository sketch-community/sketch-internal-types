// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSNormalEventData extends NSObject {
    /* typeEncoding=c, ivar=_didMouseDown, attributes=(assign,nonatomic) */
    	didMouseDown(): boolean;
    /* typeEncoding=c, ivar=_hasMultipleTouches, attributes=(assign,nonatomic) */
    	hasMultipleTouches(): boolean;
    /* typeEncoding={CGPoint=dd}, ivar=_midPoint, attributes=(assign,nonatomic) */
    	midPoint(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_mouseDown, attributes=(assign,nonatomic) */
    	mouseDown(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_originalScrollOrigin, attributes=(assign,nonatomic) */
    	originalScrollOrigin(): CGPoint;
    /* typeEncoding=c16@0:8 */
    	didMouseDown(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMultipleTouches(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	midPoint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	originalScrollOrigin(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidMouseDown(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasMultipleTouches(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setMidPoint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setMouseDown(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setOriginalScrollOrigin(...args: any[]): any;
  }
}

declare const MSNormalEventData: sketchInternal.MSNormalEventData;

