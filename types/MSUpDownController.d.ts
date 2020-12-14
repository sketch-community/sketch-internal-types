// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSUpDownController extends NSResponder {
    /* typeEncoding=@"<MSIncrementDecrementDelegate>", ivar=_incrementDecrementDelegate, attributes=(assign,nonatomic,weak) */
    	incrementDecrementDelegate(): any;
    /* typeEncoding=@"MSIntegratedStepper", ivar=_stepper, attributes=(retain,nonatomic) */
    	stepper(): MSIntegratedStepper;
    /* typeEncoding=@"NSTextField<MSUpDownProtocol>", ivar=_textField, attributes=(assign,nonatomic,weak) */
    	textField(): any;
    /* typeEncoding=v16@0:8 */
    	static initialize(): void;
    /* typeEncoding=#16@0:8 */
    	static stepperClass(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=d24@0:8d16 */
    	adjustValueForMaximum(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	adjustValueForMinimum(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	becomeFirstResponder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	cancelTextEditingForInvalidReplacementString(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	decrement(): void;
    /* typeEncoding=c24@0:8:16 */
    	doCommandBySelector(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	eventIsInsideView(...args: any[]): any;
    /* typeEncoding=f16@0:8 */
    	floatValue(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	hideStepper(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	increment(): void;
    /* typeEncoding=c24@0:8d16 */
    	incrementBy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	incrementDecrementDelegate(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	incrementValue(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	incrementValueAccountingForModifierFlags(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	initWithTextField_createStepper(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertNewline(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEditable(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEditing(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	keyUp(): void;
    /* typeEncoding=v16@0:8 */
    	makeStepper(): void;
    /* typeEncoding=v24@0:8@16 */
    	mouseEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseExited(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseMoved(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setFloatValueAndNotifyBindings(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIncrementDecrementDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStepper(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stepper(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	stepperRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	textDidEndEditing(): void;
    /* typeEncoding=@16@0:8 */
    	textField(...args: any[]): any;
  }
}

declare const MSUpDownController: sketchInternal.MSUpDownController;

