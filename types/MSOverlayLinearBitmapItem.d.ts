// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlayLinearBitmapItem extends MSOverlayBitmapItem {
    /* typeEncoding={CGVector=dd}, ivar=_endDisplacement, attributes=(assign,nonatomic,readonly) */
    	endDisplacement(): CGVector;
    /* typeEncoding={CGPoint=dd}, ivar=_endPoint, attributes=(assign,nonatomic,readonly) */
    	endPoint(): CGPoint;
    /* typeEncoding={CGVector=dd}, ivar=_startDisplacement, attributes=(assign,nonatomic,readonly) */
    	startDisplacement(): CGVector;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	startPoint(): CGPoint;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	endDisplacement(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	endPoint(...args: any[]): any;
    /* typeEncoding=@56@0:8@16{CGPoint=dd}24{CGPoint=dd}40 */
    	initWithImageID_startPoint_endPoint(...args: any[]): any;
    /* typeEncoding=@88@0:8@16{CGPoint=dd}24{CGPoint=dd}40{CGVector=dd}56{CGVector=dd}72 */
    	initWithImageID_startPoint_endPoint_startDisplacement_endDisplacement(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	startDisplacement(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	startPoint(...args: any[]): any;
  }
}

declare const MSOverlayLinearBitmapItem: sketchInternal.MSOverlayLinearBitmapItem;

