// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataPreview extends NSView {
    /* typeEncoding=@"NSBezierPath", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	contentPath(): cocoascript.NSBezierPath;
    /* typeEncoding=@"MSDataPreferenceItem", ivar=_dataItem, attributes=(assign,nonatomic,weak) */
    	dataItem(): MSDataPreferenceItem;
    /* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,readonly) */
    	imageSize(): CGSize;
    /* typeEncoding=@"NSImage", ivar=_preview, attributes=(retain,nonatomic) */
    	preview(): cocoascript.NSImage;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	previewFrame(): CGRect;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	centeredThumbFromImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentsOfDataTextItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataItem(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstFourDataImages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstThreeDataTextItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	generateBuiltinDataPreview(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	generateLocalDataPreview(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	generateLocalImageDataPreview(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	generateLocalStructuredDataPreview(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	generateLocalTextDataPreview(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	generateLocalTextDataPreviewFromText(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	generatePluginDataPreview(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	generatePreview(): void;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	imageSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	placeHolderImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preview(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	previewFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreview(...args: any[]): any;
  }
}

declare const MSDataPreview: sketchInternal.MSDataPreview;

