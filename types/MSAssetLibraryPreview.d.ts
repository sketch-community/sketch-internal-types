// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetLibraryPreview extends NSView {
    /* typeEncoding=@"NSBezierPath", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	contentPath(): cocoascript.NSBezierPath;
    /* typeEncoding=@"NSImage", ivar=_libraryPreview, attributes=(assign,nonatomic,weak) */
    	libraryPreview(): cocoascript.NSImage;
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
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryPreview(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preview(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	previewFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryPreview(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreview(...args: any[]): any;
  }
}

declare const MSAssetLibraryPreview: sketchInternal.MSAssetLibraryPreview;

