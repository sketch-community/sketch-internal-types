// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginBundleIconInfo extends NSObject {
    /* typeEncoding=@"NSFileWrapper", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	fileWrapper(): cocoascript.NSFileWrapper;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	image(): cocoascript.NSImage;
    /* typeEncoding=@"MSImageData", ivar=_imageWrapper, attributes=(retain,nonatomic) */
    	imageWrapper(): MSImageData;
    /* typeEncoding=@"NSString", ivar=_path, attributes=(retain,nonatomic) */
    	path(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	fileWrapper(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageWrapper(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithImage(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithPath_imageData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageWrapper(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPath(...args: any[]): any;
  }
}

declare const MSPluginBundleIconInfo: sketchInternal.MSPluginBundleIconInfo;

