// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportPreviewOperation extends NSOperation {
    /* typeEncoding=@"_TtC11SketchModel24MSImmutableLayerAncestry", ivar=_ancestry, attributes=(retain,nonatomic) */
    	ancestry(): _TtC11SketchModel24MSImmutableLayerAncestry;
    /* typeEncoding={CGSize=dd}, ivar=_imageSize, attributes=(assign,nonatomic) */
    	imageSize(): CGSize;
    /* typeEncoding=@"NSImage", ivar=_previewImage, attributes=(retain,nonatomic) */
    	previewImage(): cocoascript.NSImage;
    /* typeEncoding=@"MSExportPreviewViewModel", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	previewViewModel(): MSExportPreviewViewModel;
    /* typeEncoding=@"MSExportRequest", ivar=_request, attributes=(retain,nonatomic) */
    	request(): MSExportRequest;
    /* typeEncoding=@16@0:8 */
    	sharedPreviewRenderQueue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	ancestry(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportingColorSpace(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	imageSize(...args: any[]): any;
    /* typeEncoding=@40@0:8@16{CGSize=dd}24 */
    	initWithAncestry_imageSize(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	main(): void;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewViewModel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	request(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAncestry(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setImageSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRequest(...args: any[]): any;
  }
}

declare const MSExportPreviewOperation: sketchInternal.MSExportPreviewOperation;

