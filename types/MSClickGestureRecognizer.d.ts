// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSClickGestureRecognizer extends MSGestureRecognizer {
    /* typeEncoding=Q, ivar=_buttonMask, attributes=(assign,nonatomic) */
    	buttonMask(): number;
    /* typeEncoding=c, ivar=_isDrag, attributes=(assign,nonatomic) */
    	isDrag(): boolean;
    /* typeEncoding=q, ivar=_numberOfClicksRequired, attributes=(assign,nonatomic) */
    	numberOfClicksRequired(): number;
    /* typeEncoding=Q16@0:8 */
    	buttonMask(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	initWithTarget_action(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDrag(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	locationInLayer(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGPoint=dd}16Q32Q40 */
    	mouseDown_clickCount_modifierFlags(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseDragged_modifierFlags(...args: any[]): any;
    /* typeEncoding=v40@0:8@16{CGPoint=dd}24 */
    	mouseUp_location(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	numberOfClicksRequired(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setButtonMask(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsDrag(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setLocation(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setNumberOfClicksRequired(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldRecognizeMouseUpEvent(...args: any[]): any;
  }
}

declare const MSClickGestureRecognizer: sketchInternal.MSClickGestureRecognizer;

