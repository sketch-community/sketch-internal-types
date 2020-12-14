// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExporter extends NSObject {
    /* typeEncoding=c, ivar=_allowSubpixelAntialiasing, attributes=(assign,nonatomic) */
    	allowSubpixelAntialiasing(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_bounds, attributes=(assign,nonatomic) */
    	bounds(): CGRect;
    /* typeEncoding=@"BCCache", ivar=_cache, attributes=(retain,nonatomic) */
    	cache(): BCCache;
    /* typeEncoding=@"NSColorSpace", ivar=_colorSpace, attributes=(retain,nonatomic) */
    	colorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSRenderingDriver", ivar=_driver, attributes=(retain,nonatomic) */
    	driver(): MSRenderingDriver;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_isPrinting, attributes=(assign,nonatomic) */
    	isPrinting(): boolean;
    /* typeEncoding=@"MSExportRequest", ivar=_request, attributes=(retain,nonatomic) */
    	request(): MSExportRequest;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"BCCache", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	zoomIndependentCache(): BCCache;
    /* typeEncoding=@32@0:8@16@24 */
    	exporterForRequest_colorSpace(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	exporterForRequest_colorSpace_driver(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initialize(): void;
    /* typeEncoding=v32@0:8#16@24 */
    	registerExporterClass_forFormat(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	allowSubpixelAntialiasing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	basicBitmapImageRep(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bitmapImageRep(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	bounds(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	boundsForVectorRender(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cache(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	cacheForZoomLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGContext=}16 */
    	draw(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16^{CGContext=}48 */
    	drawRect_context(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGContext=}16 */
    	drawSliceBackgroundIfNecessary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	driver(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	exportToFileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithRequest_colorSpace_driver(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPrinting(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	request(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAllowSubpixelAntialiasing(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setBounds(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDriver(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsPrinting(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRequest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zoomIndependentCache(...args: any[]): any;
  }
}

declare const MSExporter: sketchInternal.MSExporter;

