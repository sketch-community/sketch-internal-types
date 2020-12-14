// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSIntegratedStepper extends NSView {
    /* typeEncoding=q, ivar=_highlightMode, attributes=(assign,nonatomic) */
    	highlightMode(): number;
    /* typeEncoding=@"NSTimer", ivar=_initialSlowTimer, attributes=(retain,nonatomic) */
    	initialSlowTimer(): cocoascript.NSTimer;
    /* typeEncoding=c, ivar=_keepFiringTimer, attributes=(assign,nonatomic) */
    	keepFiringTimer(): boolean;
    /* typeEncoding=@"MSUpDownController", ivar=_target, attributes=(assign,nonatomic,weak) */
    	target(): MSUpDownController;
    /* typeEncoding=@"NSTimer", ivar=_timer, attributes=(retain,nonatomic) */
    	timer(): cocoascript.NSTimer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c24@0:8@16 */
    	acceptsFirstMouse(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	clickShouldDismissPopover(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	highlightMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initialSlowTimer(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	intrinsicContentSize(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFlipped(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	keepFiringTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	repeatStepEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setHighlightMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInitialSlowTimer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setKeepFiringTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTarget(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	stepWithEvent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	target(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	timer(...args: any[]): any;
    /* typeEncoding=@28@0:8d16c24 */
    	timerWithInterval_repeats(...args: any[]): any;
  }
}

declare const MSIntegratedStepper: sketchInternal.MSIntegratedStepper;

