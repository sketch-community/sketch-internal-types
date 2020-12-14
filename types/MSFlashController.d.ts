// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlashController extends NSObject {
    /* typeEncoding=@"MSFlashViewController", ivar=_flash, attributes=(retain,nonatomic) */
    	flash(): MSFlashViewController;
    /* typeEncoding=@"NSMutableArray", ivar=_messages, attributes=(retain,nonatomic) */
    	messages(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSStackView", ivar=_stackView, attributes=(retain,nonatomic) */
    	stackView(): cocoascript.NSStackView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	clearFlash(): void;
    /* typeEncoding=@32@0:8@16@?24 */
    	displayFixedMessage_withHelpHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	displayFlashMessage(...args: any[]): any;
    /* typeEncoding=@36@0:8@16c24@?28 */
    	displayMessage_userClosable_helpBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@?24 */
    	displayWarningMessage_withHelpHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flash(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	messages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeMessage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlash(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMessages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStackView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stackView(...args: any[]): any;
  }
}

declare const MSFlashController: sketchInternal.MSFlashController;

