// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSelectHandleGestureRecognizer extends MSGestureRecognizer {
    /* typeEncoding=@"<MSSelectHandleGestureRecognizerDelegate>", ivar=(null), attributes=(assign,dynamic,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=Q, ivar=_modifierFlags, attributes=(assign,nonatomic,readonly) */
    	modifierFlags(): number;
    /* typeEncoding=Q, ivar=_multipleSelectionMask, attributes=(assign,nonatomic) */
    	multipleSelectionMask(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	toggleSelection(): boolean;
    /* typeEncoding=@32@0:8@16:24 */
    	initWithTarget_action(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	locationInLayer(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	modifierFlags(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGPoint=dd}16Q32Q40 */
    	mouseDown_clickCount_modifierFlags(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseDragged_modifierFlags(...args: any[]): any;
    /* typeEncoding=v40@0:8@16{CGPoint=dd}24 */
    	mouseUp_location(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	multipleSelectionMask(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reset(): void;
    /* typeEncoding=v24@0:8Q16 */
    	setMultipleSelectionMask(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	toggleSelection(...args: any[]): any;
  }
}

declare const MSSelectHandleGestureRecognizer: sketchInternal.MSSelectHandleGestureRecognizer;

