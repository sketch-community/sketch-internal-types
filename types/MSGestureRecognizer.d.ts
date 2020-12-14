// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGestureRecognizer extends NSObject {
    /* typeEncoding=:, ivar=_action, attributes=(assign) */
    	action(): any;
    /* typeEncoding=@"<MSGestureRecognizerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic) */
    	state(): number;
    /* typeEncoding=q, ivar=_state, attributes=(assign,nonatomic,readonly) */
    	state(): number;
    /* typeEncoding=@, ivar=_target, attributes=(assign,weak) */
    	target(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=:16@0:8 */
    	action(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flagsChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	initWithTarget_action(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=v28@0:8S16Q20 */
    	keyUp_flags(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	locationInLayer(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGPoint=dd}16Q32Q40 */
    	mouseDown_clickCount_modifierFlags(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseDragged_modifierFlags(...args: any[]): any;
    /* typeEncoding=v40@0:8@16{CGPoint=dd}24 */
    	mouseUp_location(...args: any[]): any;
    /* typeEncoding=v32@0:8q16q24 */
    	preflightTransitionFromState_toState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reset(): void;
    /* typeEncoding=v24@0:8:16 */
    	setAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setState(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTarget(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	state(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	target(...args: any[]): any;
  }
}

declare const MSGestureRecognizer: sketchInternal.MSGestureRecognizer;

