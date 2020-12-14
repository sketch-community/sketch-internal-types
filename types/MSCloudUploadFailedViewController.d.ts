// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudUploadFailedViewController extends MSCloudBaseViewController {
    /* typeEncoding=@"NSError", ivar=_error, attributes=(retain,nonatomic) */
    	error(): cocoascript.NSError;
    /* typeEncoding=@"SCKShare", ivar=_existingShare, attributes=(retain,nonatomic) */
    	existingShare(): SCKShare;
    /* typeEncoding=@"NSButton", ivar=_retryButton, attributes=(retain,nonatomic) */
    	retryButton(): cocoascript.NSButton;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	existingShare(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadView(): void;
    /* typeEncoding=@16@0:8 */
    	retryButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	retryUpload(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setError(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExistingShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRetryButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateErrorDescription(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSCloudUploadFailedViewController: sketchInternal.MSCloudUploadFailedViewController;

