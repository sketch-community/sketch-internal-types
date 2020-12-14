// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmapEditor extends NSObject {
    /* typeEncoding=@"NSBezierPath", ivar=(null), attributes=(retain,dynamic,nonatomic) */
    	accumulatedSelection(): cocoascript.NSBezierPath;
    /* typeEncoding=@"MSLayer<MSBitmapEditable>", ivar=(null), attributes=(assign,dynamic,nonatomic,readonly) */
    	bitmapEditableLayer(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSBitmapEditEventHandler", ivar=_eventHandler, attributes=(assign,nonatomic,weak) */
    	eventHandler(): MSBitmapEditEventHandler;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	accumulatedSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bitmapEditableLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	eventHandler(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	imageBounds(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	imageSize(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseDown_flags(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	mouseDragged(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseUp_flags(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	overlayItemsForMarchingAntsForPath(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8{CGPoint=dd}16 */
    	pointInBitmapLayer(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	refreshRectInBitmapCoordinates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAccumulatedSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventHandler(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	transformForConvertingFromImageToPage(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
  }
}

declare const MSBitmapEditor: sketchInternal.MSBitmapEditor;

