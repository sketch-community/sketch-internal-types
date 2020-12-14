// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMirrorDataProvider extends NSObject {
    /* typeEncoding=@"SMKMirrorController", ivar=_connectionController, attributes=(assign,nonatomic,weak) */
    	connectionController(): SMKMirrorController;
    /* typeEncoding=@"NSString", ivar=_currentArtboardID, attributes=(copy,nonatomic) */
    	currentArtboardID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSDocument;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_documentData, attributes=(assign,nonatomic,readonly) */
    	documentData(): MSImmutableDocumentData;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasConnectedClients(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_isAlreadyComparing, attributes=(assign,nonatomic) */
    	isAlreadyComparing(): boolean;
    /* typeEncoding=@"NSDictionary", ivar=_manifestContent, attributes=(retain,nonatomic) */
    	manifestContent(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSObject<OS_dispatch_queue>", ivar=_mirrorQueue, attributes=(retain,nonatomic) */
    	mirrorQueue(): any;
    /* typeEncoding=c, ivar=_needsUpdateMetadata, attributes=(assign,nonatomic) */
    	needsUpdateMetadata(): boolean;
    /* typeEncoding=c, ivar=_requiresImmediateUpdate, attributes=(assign,nonatomic) */
    	requiresImmediateUpdate(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTimer", ivar=_updateTimer, attributes=(retain,nonatomic) */
    	updateTimer(): cocoascript.NSTimer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	connectionController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	createManifestContent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentArtboard(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	currentArtboardDidChange(): void;
    /* typeEncoding=@16@0:8 */
    	currentArtboardID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidBecomeCurrentNotification(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidResignCurrentNotification(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasConnectedClients(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	imageData_dataByInsertingBackgroundColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	invalidateRootLayer_inCanvasRect(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAlreadyComparing(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	lookupUpdateTypeWithHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	manifestContent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mirrorConnectionsDidChangeNotification(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mirrorQueue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	needsUpdateMetadata(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	renderExportForRequest_handler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	requiresImmediateUpdate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	sendUpdate(): void;
    /* typeEncoding=v24@0:8@16 */
    	sendVisualUpdateForNewDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setConnectionController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentArtboardID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentData(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsAlreadyComparing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setManifestContent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMirrorQueue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setNeedsUpdate(): void;
    /* typeEncoding=v16@0:8 */
    	setNeedsUpdateMetadata(): void;
    /* typeEncoding=v20@0:8c16 */
    	setNeedsUpdateMetadata(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRequiresImmediateUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpdateTimer(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	treeDiff_containsFlowLayerChangesInNewDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateIfNeeded(): void;
    /* typeEncoding=@16@0:8 */
    	updateTimer(...args: any[]): any;
  }
}

declare const MSMirrorDataProvider: sketchInternal.MSMirrorDataProvider;

