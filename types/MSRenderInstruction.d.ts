// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRenderInstruction extends NSObject {
    /* typeEncoding=@"<MSRenderingContextCacheProvider>", ivar=_cacheProvider, attributes=(assign,nonatomic,readonly) */
    	cacheProvider(): any;
    /* typeEncoding=^{CGColorSpace=}, ivar=_colorSpace, attributes=(assign,nonatomic,readonly) */
    	colorSpace(): any;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_documentData, attributes=(assign,nonatomic,readonly) */
    	documentData(): MSImmutableDocumentData;
    /* typeEncoding=@"MSOverlayItemContainer", ivar=_overlayItemContainer, attributes=(assign,nonatomic,readonly) */
    	overlayItemContainer(): MSOverlayItemContainer;
    /* typeEncoding=@"NSDictionary", ivar=_overlayItemImages, attributes=(copy,nonatomic,readonly) */
    	overlayItemImages(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSOverlaySettings", ivar=_overlaySettings, attributes=(assign,nonatomic,readonly) */
    	overlaySettings(): MSOverlaySettings;
    /* typeEncoding={MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}, ivar=_renderingParameters, attributes=(assign,nonatomic,readonly) */
    	renderingParameters(): MSRenderingParameters;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	asDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cacheProvider(...args: any[]): any;
    /* typeEncoding=^{CGColorSpace=}16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@112@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96^{CGColorSpace=}104 */
    	initWithDocumentData_renderingParameters_cacheProvider_colorSpace(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToRenderInstruction(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	mutableCopyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlayItemContainer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlayItemImages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlaySettings(...args: any[]): any;
    /* typeEncoding={MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}16@0:8 */
    	renderingParameters(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	traitsDifferingWithInstruction(...args: any[]): any;
  }
}

declare const MSRenderInstruction: sketchInternal.MSRenderInstruction;

