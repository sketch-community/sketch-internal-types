// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSEditArtboardPresetViewController extends NSViewController {
    /* typeEncoding=@"NSButton", ivar=_cancelButton, attributes=(retain,nonatomic) */
    	cancelButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_confirmButton, attributes=(retain,nonatomic) */
    	confirmButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSEditArtboardPresetViewControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSArtboardPreset", ivar=_preset, attributes=(retain,nonatomic) */
    	preset(): MSArtboardPreset;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirm(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	confirmButton(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	control_isValidObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeTouchBar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setConfirmButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreset(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	touchBar_makeItemForIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSEditArtboardPresetViewController: sketchInternal.MSEditArtboardPresetViewController;

