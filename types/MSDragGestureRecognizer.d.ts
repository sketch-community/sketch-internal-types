// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDragGestureRecognizer extends MSGestureRecognizer {
    /* typeEncoding=c, ivar=_beginsUponMouseDown, attributes=(assign,nonatomic) */
    	beginsUponMouseDown(): boolean;
    /* typeEncoding=Q, ivar=_modifierFlags, attributes=(assign,nonatomic,readonly) */
    	modifierFlags(): number;
    /* typeEncoding=c, ivar=_translationLocked, attributes=(assign,nonatomic,getter=isTranslationLocked) */
    	translationLocked(): boolean;
    /* typeEncoding=c16@0:8 */
    	beginsUponMouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flagsChanged(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isTranslationLocked(...args: any[]): any;
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
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	originInLayer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setBeginsUponMouseDown(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGVector=dd}16@32 */
    	setTranslation_inLayer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setTranslationLocked(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	translationAsPointInLayer(...args: any[]): any;
    /* typeEncoding={CGVector=dd}24@0:8@16 */
    	translationInLayer(...args: any[]): any;
  }
}

declare const MSDragGestureRecognizer: sketchInternal.MSDragGestureRecognizer;

