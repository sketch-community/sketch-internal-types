// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmapRectangleEditor extends MSBitmapEditor {
    /* typeEncoding=c, ivar=_didDrag, attributes=(assign,nonatomic) */
    	didDrag(): boolean;
    /* typeEncoding=q, ivar=_dragMode, attributes=(assign,nonatomic) */
    	dragMode(): number;
    /* typeEncoding={CGPoint=dd}, ivar=_mouseDownPoint, attributes=(assign,nonatomic) */
    	mouseDownPoint(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_mouseEndPoint, attributes=(assign,nonatomic) */
    	mouseEndPoint(): CGPoint;
    /* typeEncoding=@"NSBezierPath", ivar=_selectionBeforeDrag, attributes=(retain,nonatomic) */
    	selectionBeforeDrag(): cocoascript.NSBezierPath;
    /* typeEncoding=@40@0:8@16@24q32 */
    	static accumulateSelectionWithPrevious_draggingRect_dragMode(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	didDrag(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	dragMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseDown_flags(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mouseDownPoint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	mouseDragged(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mouseEndPoint(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseUp_flags(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rectForLabel(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rectFromDraggingPoints(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetDraggingPoints(): void;
    /* typeEncoding=@16@0:8 */
    	selectionBeforeDrag(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidDrag(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setDragMode(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setMouseDownPoint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setMouseEndPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectionBeforeDrag(...args: any[]): any;
  }
}

declare const MSBitmapRectangleEditor: sketchInternal.MSBitmapRectangleEditor;

