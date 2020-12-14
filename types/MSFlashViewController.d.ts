// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlashViewController extends NSViewController {
    /* typeEncoding=@?, ivar=_closeBlock, attributes=(copy,nonatomic) */
    	closeBlock(): any;
    /* typeEncoding=@"NSButton", ivar=_closeButton, attributes=(retain,nonatomic) */
    	closeButton(): cocoascript.NSButton;
    /* typeEncoding=@?, ivar=_helpBlock, attributes=(copy,nonatomic) */
    	helpBlock(): any;
    /* typeEncoding=@"NSButton", ivar=_helpButton, attributes=(retain,nonatomic) */
    	helpButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSTextField", ivar=_message, attributes=(retain,nonatomic) */
    	message(): cocoascript.NSTextField;
    /* typeEncoding=@40@0:8@16@?24@?32 */
    	flashViewControllerWithMessage_closeBlock_helpBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@?16@0:8 */
    	closeBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	closeButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	closeFlash(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	helpBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	helpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	helpPressed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	message(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setCloseBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCloseButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setHelpBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHelpButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMessage(...args: any[]): any;
  }
}

declare const MSFlashViewController: sketchInternal.MSFlashViewController;

