// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTileRasterisationOperation extends NSOperation {
    /* typeEncoding=d, ivar=_backingScaleFactor, attributes=(assign,nonatomic) */
    	backingScaleFactor(): number;
    /* typeEncoding=Q, ivar=_bytesPerRow, attributes=(assign,nonatomic) */
    	bytesPerRow(): number;
    /* typeEncoding=@"<MSRenderingContextCacheProvider>", ivar=_cacheProvider, attributes=(retain,nonatomic) */
    	cacheProvider(): any;
    /* typeEncoding=^{CGColorSpace=}, ivar=_colorSpace, attributes=(assign,nonatomic) */
    	colorSpace(): any;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSImmutableDocumentData;
    /* typeEncoding=@"MSRenderingDriver", ivar=_driver, attributes=(retain,nonatomic) */
    	driver(): MSRenderingDriver;
    /* typeEncoding=^v, ivar=_memory, attributes=(assign,nonatomic) */
    	memory(): any;
    /* typeEncoding=@"MSImmutablePage", ivar=_page, attributes=(retain,nonatomic) */
    	page(): MSImmutablePage;
    /* typeEncoding={MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}, ivar=_parameters, attributes=(assign,nonatomic) */
    	parameters(): MSRenderingParameters;
    /* typeEncoding=@"<MSRenderingContextCGPoolProvider>", ivar=_poolProvider, attributes=(retain,nonatomic) */
    	poolProvider(): any;
    /* typeEncoding={?=iiii}, ivar=_rect, attributes=(assign,nonatomic) */
    	rect(): any;
    /* typeEncoding=d, ivar=_zoomValue, attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding=@184@0:8^v16Q24{?=iiii}32d48{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}56d128@136@144@152@160@168^{CGColorSpace=}176 */
    	static operationWithMemory_bytesPerRow_rect_zoomValue_parameters_backingScaleFactor_page_document_driver_cacheProvider_poolProvider_colorSpace(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=d16@0:8 */
    	backingScaleFactor(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	bytesPerRow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cacheProvider(...args: any[]): any;
    /* typeEncoding=^{CGColorSpace=}16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	driver(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	main(): void;
    /* typeEncoding=^v16@0:8 */
    	memory(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	page(...args: any[]): any;
    /* typeEncoding={MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}16@0:8 */
    	parameters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	poolProvider(...args: any[]): any;
    /* typeEncoding={?=iiii}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setBackingScaleFactor(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setBytesPerRow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCacheProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGColorSpace=}16 */
    	setColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDriver(...args: any[]): any;
    /* typeEncoding=v24@0:8^v16 */
    	setMemory(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPage(...args: any[]): any;
    /* typeEncoding=v88@0:8{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}16 */
    	setParameters(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPoolProvider(...args: any[]): any;
    /* typeEncoding=v32@0:8{?=iiii}16 */
    	setRect(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
  }
}

declare const MSTileRasterisationOperation: sketchInternal.MSTileRasterisationOperation;

