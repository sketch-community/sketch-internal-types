// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSToolbarPopoverContentViewController extends NSViewController {
    /* typeEncoding=@"MSPopoverAction", ivar=_action, attributes=(assign,nonatomic,readonly,weak) */
    	action(): MSPopoverAction;
    /* typeEncoding=@"NSView", ivar=_actionView, attributes=(assign,nonatomic,readonly) */
    	actionView(): cocoascript.NSView;
    /* typeEncoding=@"NSTextField", ivar=_descriptionLabel, attributes=(assign,nonatomic,readonly) */
    	descriptionLabel(): cocoascript.NSTextField;
    /* typeEncoding={NSEdgeInsets=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	edgeInsets(): NSEdgeInsets;
    /* typeEncoding=@"NSTextField", ivar=_footerLabel, attributes=(assign,nonatomic,readonly) */
    	footerLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSImageView", ivar=_imageView, attributes=(assign,nonatomic,readonly) */
    	imageView(): cocoascript.NSImageView;
    /* typeEncoding=@"NSStackView", ivar=_stackView, attributes=(retain,nonatomic) */
    	stackView(): cocoascript.NSStackView;
    /* typeEncoding=@"NSTextField", ivar=_titleLabel, attributes=(assign,nonatomic,readonly) */
    	titleLabel(): cocoascript.NSTextField;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	action(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	actionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	animateFrameWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	descriptionLabel(...args: any[]): any;
    /* typeEncoding={NSEdgeInsets=dddd}16@0:8 */
    	edgeInsets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	footerLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageView(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadView(): void;
    /* typeEncoding=@32@0:8@16:24 */
    	makeActionButtonWithTitle_action(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	makeButtonWithTitle_action(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	makePopupButtonWithTitle_action(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	newLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStackView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stackView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	titleLabel(...args: any[]): any;
  }
}

declare const MSToolbarPopoverContentViewController: sketchInternal.MSToolbarPopoverContentViewController;

