// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMouseTracker extends NSObject {
    /* typeEncoding=:, ivar=_action, attributes=(assign,nonatomic) */
    	action(): any;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canUpdateCursor(): boolean;
    /* typeEncoding=Q, ivar=_modifierFlags, attributes=(assign,nonatomic,readonly) */
    	modifierFlags(): number;
    /* typeEncoding=@, ivar=_target, attributes=(assign,nonatomic,weak) */
    	target(): any;
    /* typeEncoding=Q, ivar=_trackingState, attributes=(assign,nonatomic,readonly) */
    	trackingState(): number;
    /* typeEncoding=@"NSView", ivar=_view, attributes=(assign,nonatomic,weak) */
    	view(): cocoascript.NSView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=:16@0:8 */
    	action(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	addTrackingState(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canUpdateCursor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flagsChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	initWithTarget_action(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	locationInView(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	modifierFlags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDragged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseExited(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseMoved(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseUp(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	removeTrackingState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	sendAction(): void;
    /* typeEncoding=v24@0:8:16 */
    	setAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocationWithEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTarget(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	target(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	trackingState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	view(...args: any[]): any;
  }
}

declare const MSMouseTracker: sketchInternal.MSMouseTracker;

