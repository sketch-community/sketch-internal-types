// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRotationGestureInterpreter extends NSObject {
    /* typeEncoding={CGPoint=dd}, ivar=_centerPoint, attributes=(assign,nonatomic) */
    	centerPoint(): CGPoint;
    /* typeEncoding=d40@0:8{CGPoint=dd}16@32 */
    	angleOfPoint_inLayer(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	centerPoint(...args: any[]): any;
    /* typeEncoding=d32@0:8d16@24 */
    	convertRotation_toLayer(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	rotationInDegreesInLayer(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	rotationInLayer(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setCenterPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateWithDragRecognizer(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	updateWithLocation(...args: any[]): any;
  }
}

declare const MSRotationGestureInterpreter: sketchInternal.MSRotationGestureInterpreter;

