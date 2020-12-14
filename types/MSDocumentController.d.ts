// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentController extends NSDocumentController {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canShowDocumentsWindowAtLaunch(): boolean;
    /* typeEncoding=@"NSMutableDictionary", ivar=_documentClassOverrides, attributes=(retain,nonatomic) */
    	documentClassOverrides(): cocoascript.NSMutableDictionary;
    /* typeEncoding=q, ivar=_numberOfDocumentsBeingOpened, attributes=(assign,nonatomic) */
    	numberOfDocumentsBeingOpened(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@?16 */
    	beginOpenPanelWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canShowDocumentsWindowAtLaunch(...args: any[]): any;
    /* typeEncoding=v44@0:8@16c24:28^v36 */
    	closeAllDocumentsWithDelegate_cancellingSheets_didCloseAllSelector_contextInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cloudAuthenticationDidChange(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	cloudDocumentURLsInFolder_shouldEnumerateSubDirectories(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	decideOpenStrategyForDocument_completionHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultType(...args: any[]): any;
    /* typeEncoding=#24@0:8@16 */
    	documentClassForType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentClassOverrides(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24^v28 */
    	documentControllerWithDocController_didReviewAll_contextInfo(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	documentCreationAllowed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24^@32 */
    	makeDocumentWithContentsOfURL_ofType_error(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	makeUntitledDocumentOfType_error(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	noteNewRecentDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	noteNewRecentDocumentURL(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	numberOfDocumentsBeingOpened(...args: any[]): any;
    /* typeEncoding=v40@0:8@16c24c28@?32 */
    	openCloudDocumentWithContentsOfURL_display_displayDownloadProgress_completionHandler(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24@?28 */
    	openDocumentWithContentsOfURL_display_completionHandler(...args: any[]): any;
    /* typeEncoding=v44@0:8@16c24@28@36 */
    	openDocumentWithContentsOfURL_display_context_callback(...args: any[]): any;
    /* typeEncoding=v40@0:8@16c24c28@?32 */
    	openDocumentWithContentsOfURL_display_displayDownloadProgress_completionHandler(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24@?28 */
    	openLocalDocumentWithContentsOfURL_display_completionHandler(...args: any[]): any;
    /* typeEncoding=v44@0:8@16@24c32@?36 */
    	reopenDocumentForURL_withContentsOfURL_display_completionHandler(...args: any[]): any;
    /* typeEncoding=v52@0:8@16c24@28:36^v44 */
    	reviewUnsavedDocumentsWithAlertTitle_cancellable_delegate_didReviewAllSelector_contextInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentClassOverrides(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setNumberOfDocumentsBeingOpened(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldNoteRecentDocumentForType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	testing_resetAllDocumentClassOverrides(): void;
    /* typeEncoding=v32@0:8#16@24 */
    	testing_setDocumentClassOverride_forDocumentType(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	typeForContentsOfURL_error(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateUserInterfaceItem(...args: any[]): any;
  }
}

declare const MSDocumentController: sketchInternal.MSDocumentController;

