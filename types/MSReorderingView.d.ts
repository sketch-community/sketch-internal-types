// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSReorderingView extends NSView {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSReorderingViewDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=:, ivar=_deleteAction, attributes=(assign,nonatomic) */
    	deleteAction(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=q, ivar=_reorderingTag, attributes=(assign,nonatomic) */
    	reorderingTag(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@, ivar=_target, attributes=(assign,nonatomic,weak) */
    	target(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=:16@0:8 */
    	deleteAction(...args: any[]): any;
    /* typeEncoding=v48@0:8@16{CGPoint=dd}24Q40 */
    	draggingSession_endedAtPoint_operation(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16q24 */
    	draggingSession_sourceOperationMaskForDraggingContext(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	reorderingTag(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8:16 */
    	setDeleteAction(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setReorderingTag(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTarget(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	startDragWithEvent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	target(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wantsSeparator(...args: any[]): any;
  }
}

declare const MSReorderingView: sketchInternal.MSReorderingView;

