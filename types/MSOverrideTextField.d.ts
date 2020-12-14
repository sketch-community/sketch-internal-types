// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverrideTextField extends NSTextField {
    /* typeEncoding=c, ivar=_didChangeTextDuringEditing, attributes=(assign,nonatomic) */
    	didChangeTextDuringEditing(): boolean;
    /* typeEncoding=@"NSString", ivar=_prefixString, attributes=(retain,nonatomic) */
    	prefixString(): cocoascript.NSString;
    /* typeEncoding=#16@0:8 */
    	static cellClass(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={NSEdgeInsets=dddd}16@0:8 */
    	alignmentRectInsets(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	becomeFirstResponder(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didChangeTextDuringEditing(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	giveUpFirstResponder(): void;
    /* typeEncoding=v24@0:8@16 */
    	insertNewline(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertTabIgnoringFieldEditor(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	intrinsicContentSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	prefixString(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidChangeTextDuringEditing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPrefixString(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textDidBeginEditing(...args: any[]): any;
    /* typeEncoding=c32@0:8@16:24 */
    	textView_doCommandBySelector(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	tryGivingUpFirstResponderToSketchDocument(...args: any[]): any;
  }
}

declare const MSOverrideTextField: sketchInternal.MSOverrideTextField;

