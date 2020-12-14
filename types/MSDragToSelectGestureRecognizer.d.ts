// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDragToSelectGestureRecognizer extends MSDragGestureRecognizer {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	extendSelection(): boolean;
    /* typeEncoding=@"NSArray", ivar=_initialSelection, attributes=(copy,nonatomic) */
    	initialSelection(): cocoascript.NSArray;
    /* typeEncoding=Q, ivar=_selectionExtensionMask, attributes=(assign,nonatomic) */
    	selectionExtensionMask(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	extendSelection(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	initWithTarget_action(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initialSelection(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reset(): void;
    /* typeEncoding=Q16@0:8 */
    	selectionExtensionMask(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	selectionRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInitialSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setSelectionExtensionMask(...args: any[]): any;
  }
}

declare const MSDragToSelectGestureRecognizer: sketchInternal.MSDragToSelectGestureRecognizer;

