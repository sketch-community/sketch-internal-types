// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLicenseRenewalWindowController extends NSWindowController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSButton", ivar=_learnMoreButton, attributes=(retain,nonatomic) */
    	learnMoreButton(): cocoascript.NSButton;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	showLicenseUpdateWindow(): void;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	closeDocumentsAndQuitWithURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	didCloseAllDocuments(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	downloadPreviousVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	learnMore(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	learnMoreButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	renewLicense(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	revertToTrial(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLearnMoreButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
    /* typeEncoding=v24@0:8@16 */
    	windowWillClose(...args: any[]): any;
  }
}

declare const MSLicenseRenewalWindowController: sketchInternal.MSLicenseRenewalWindowController;

