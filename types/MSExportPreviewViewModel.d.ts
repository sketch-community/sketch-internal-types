// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportPreviewViewModel extends NSObject {
    /* typeEncoding=@"MSExportRequest", ivar=_cachedExportRequest, attributes=(retain,nonatomic) */
    	cachedExportRequest(): MSExportRequest;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	defaultExportFileName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_defaultExportFormat, attributes=(assign,nonatomic,readonly) */
    	defaultExportFormat(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_isVectorFormat, attributes=(assign,nonatomic,readonly) */
    	isVectorFormat(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_previewFrame, attributes=(assign,nonatomic) */
    	previewFrame(): CGRect;
    /* typeEncoding=@"NSImage", ivar=_previewImage, attributes=(retain,nonatomic) */
    	previewImage(): cocoascript.NSImage;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	cachedExportRequest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultExportFileName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultExportFormat(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	exportDataInFormat_toURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	imageDataInFormat(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithPreviewImage_cachedExportRequest_ancestry(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isVectorFormat(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	previewFrame(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedExportRequest(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setPreviewFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewImage(...args: any[]): any;
  }
}

declare const MSExportPreviewViewModel: sketchInternal.MSExportPreviewViewModel;

