// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBasePlaceLayerEventHandler extends MSEventHandler {
    /* typeEncoding=@"NSMutableDictionary", ivar=_previewImages, attributes=(retain,nonatomic) */
    	previewImages(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"MSLayer", ivar=_previewLayer, attributes=(retain,nonatomic) */
    	previewLayer(): MSLayer;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldEditLayerAfterInsert(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldShowOverlayItems(): boolean;
    /* typeEncoding=@"MSSnapOverlayController", ivar=_snapOverlayController, attributes=(retain,nonatomic) */
    	snapOverlayController(): MSSnapOverlayController;
    /* typeEncoding=@"MSDocumentData", ivar=_temporaryPreviewDocument, attributes=(retain,nonatomic) */
    	temporaryPreviewDocument(): MSDocumentData;
    /* typeEncoding=@"MSComponentInsertionTool", ivar=_tool, attributes=(retain,nonatomic) */
    	tool(): MSComponentInsertionTool;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	generatePreviewAndRefreshWhenDone(): void;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layersForInserting(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	performInsert(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	previewBitmapForZoomScale(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewLayer(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	previewRectForInserting(...args: any[]): any;
    /* typeEncoding=v32@0:8@16d24 */
    	setPreviewImage_forZoomScale(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewImages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSnapOverlayController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTemporaryPreviewDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTool(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldEditLayerAfterInsert(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowOverlayItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snapOverlayController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	temporaryPreviewDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tool(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=v36@0:8{CGPoint=dd}16c32 */
    	updateWithLocation_disableSnapping(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	zoomValueDidChange(): void;
  }
}

declare const MSBasePlaceLayerEventHandler: sketchInternal.MSBasePlaceLayerEventHandler;

