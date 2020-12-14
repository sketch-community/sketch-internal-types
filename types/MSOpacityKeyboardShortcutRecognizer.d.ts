// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOpacityKeyboardShortcutRecognizer extends NSObject {
    /* typeEncoding=:, ivar=_action, attributes=(assign,nonatomic) */
    	action(): any;
    /* typeEncoding=d, ivar=_concatenationDuration, attributes=(assign,nonatomic) */
    	concatenationDuration(): number;
    /* typeEncoding=d, ivar=_opacity, attributes=(assign,nonatomic,readonly) */
    	opacity(): number;
    /* typeEncoding=@, ivar=_target, attributes=(assign,nonatomic,weak) */
    	target(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=:16@0:8 */
    	action(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	concatenationDuration(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	discardAccumulatedEvents(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	initWithTarget_action(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	opacity(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	opacityFromCharacters(...args: any[]): any;
    /* typeEncoding=v24@0:8:16 */
    	setAction(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setConcatenationDuration(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTarget(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	target(...args: any[]): any;
  }
}

declare const MSOpacityKeyboardShortcutRecognizer: sketchInternal.MSOpacityKeyboardShortcutRecognizer;

