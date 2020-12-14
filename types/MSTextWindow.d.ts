// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextWindow extends NSWindow {
    /* typeEncoding=@"MSCanvasView", ivar=_canvasView, attributes=(retain,nonatomic) */
    	canvasView(): MSCanvasView;
    /* typeEncoding=@"NSTextView", ivar=_textView, attributes=(retain,nonatomic) */
    	textView(): cocoascript.NSTextView;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	static adjustFrameHeight(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16q48 */
    	static adjustFrameWidth_alignment(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}64@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16q48q56 */
    	static makeBiggerRect_withBehaviour_alignment(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	addTextView_toView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBecomeKeyWindow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasView(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v88@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16{CGRect={CGPoint=dd}{CGSize=dd}}48q80 */
    	moveToRect_canvasViewRect_behaviour(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCanvasView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textView(...args: any[]): any;
  }
}

declare const MSTextWindow: sketchInternal.MSTextWindow;

