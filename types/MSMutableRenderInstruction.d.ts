// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMutableRenderInstruction extends MSRenderInstruction {
    /* typeEncoding=@"<MSRenderingContextCacheProvider>", ivar=(null), attributes=(retain,dynamic,nonatomic) */
    	cacheProvider(): any;
    /* typeEncoding=^{CGColorSpace=}, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	colorSpace(): any;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=(null), attributes=(retain,dynamic,nonatomic) */
    	documentData(): MSImmutableDocumentData;
    /* typeEncoding=@"MSOverlayItemContainer", ivar=(null), attributes=(retain,dynamic,nonatomic) */
    	overlayItemContainer(): MSOverlayItemContainer;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(copy,dynamic,nonatomic) */
    	overlayItemImages(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSOverlaySettings", ivar=(null), attributes=(retain,dynamic,nonatomic) */
    	overlaySettings(): MSOverlaySettings;
    /* typeEncoding={MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}, ivar=(null), attributes=(assign,dynamic,nonatomic) */
    	renderingParameters(): MSRenderingParameters;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCacheProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGColorSpace=}16 */
    	setColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverlayItemContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverlayItemImages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverlaySettings(...args: any[]): any;
    /* typeEncoding=v88@0:8{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}16 */
    	setRenderingParameters(...args: any[]): any;
  }
}

declare const MSMutableRenderInstruction: sketchInternal.MSMutableRenderInstruction;

