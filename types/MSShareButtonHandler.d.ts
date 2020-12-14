// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShareButtonHandler extends NSObject {
    /* typeEncoding=@"MSCanvasView", ivar=_canvas, attributes=(assign,nonatomic,weak) */
    	canvas(): MSCanvasView;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=_sliceLayers, attributes=(retain,nonatomic) */
    	sliceLayers(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSWindow", ivar=_window, attributes=(retain,nonatomic) */
    	window(): cocoascript.NSWindow;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	canvas(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	itemsFromSlices(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCanvas(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSliceLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWindow(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	sharingService_sourceFrameOnScreenForShareItem(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24^q32 */
    	sharingService_sourceWindowForShareItems_sharingContentScope(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24^{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    	sharingService_transitionImageForShareItem_contentRect(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	sharingServicePicker_delegateForSharingService(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	showShareMenuForLayers_sender_canvas(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sliceLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	window(...args: any[]): any;
  }
}

declare const MSShareButtonHandler: sketchInternal.MSShareButtonHandler;

