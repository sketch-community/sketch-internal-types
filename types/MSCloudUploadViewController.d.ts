// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudUploadViewController extends MSCloudBaseViewController {
    /* typeEncoding=@"MSCloudUploadArrowView", ivar=_arrowView, attributes=(retain,nonatomic) */
    	arrowView(): MSCloudUploadArrowView;
    /* typeEncoding=@"NSStackView", ivar=_buttonStackView, attributes=(retain,nonatomic) */
    	buttonStackView(): cocoascript.NSStackView;
    /* typeEncoding=@"NSButton", ivar=_cancelButton, attributes=(retain,nonatomic) */
    	cancelButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSProgressIndicator", ivar=_progressIndicator, attributes=(retain,nonatomic) */
    	progressIndicator(): cocoascript.NSProgressIndicator;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	arrowView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	buttonStackView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cancelButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cloudBaseViewControllerDidAppear(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding={NSEdgeInsets=dddd}16@0:8 */
    	edgeInsets(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadView(): void;
    /* typeEncoding=v24@0:8@16 */
    	progressDidChangeNotification(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	progressIndicator(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArrowView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setButtonStackView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProgressIndicator(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateProgress(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLayout(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
  }
}

declare const MSCloudUploadViewController: sketchInternal.MSCloudUploadViewController;

