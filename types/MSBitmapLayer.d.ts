// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmapLayer extends _MSBitmapLayer {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canReduceImageSize(): boolean;
    /* typeEncoding=@"MSImageData", ivar=(null), attributes=(retain,nonatomic) */
    	image(): MSImageData;
    /* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	targetSizeForReduction(): CGSize;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	NSImage(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	applyData_fromDataSupplier_identifier(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyOverride_document(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canChangeBooleanOperation(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canReduceImageSize(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	copyPropertiesToObject_options(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	correctInvalidGamma(): void;
    /* typeEncoding=#16@0:8 */
    	handlerClass(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	handlerName(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	initWithFrame_image(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initializeUnsetObjectPropertiesWithDefaults(): void;
    /* typeEncoding=@16@0:8 */
    	inspectorSections(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAtOriginalSize(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	originalSize(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reduceImageSize(): void;
    /* typeEncoding=v24@0:8@16 */
    	replaceImageWithImage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resizeToOriginalSize(): void;
    /* typeEncoding=d16@0:8 */
    	scale(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReducedImage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	setupWithLayerBuilderDictionary(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	targetSizeForReduction(...args: any[]): any;
  }
}

declare const MSBitmapLayer: sketchInternal.MSBitmapLayer;

