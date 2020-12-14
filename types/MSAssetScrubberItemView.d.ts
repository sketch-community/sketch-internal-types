// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetScrubberItemView extends NSScrubberItemView {
    /* typeEncoding=@"NSImage", ivar=_cachedPreviewImage, attributes=(assign,nonatomic,weak) */
    	cachedPreviewImage(): cocoascript.NSImage;
    /* typeEncoding=@"NSColorSpace", ivar=_canvasColorSpace, attributes=(assign,nonatomic,readonly) */
    	canvasColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"MSColor", ivar=_color, attributes=(assign,nonatomic,readonly) */
    	color(): MSColor;
    /* typeEncoding=@"MSGradient", ivar=_gradient, attributes=(assign,nonatomic,readonly) */
    	gradient(): MSGradient;
    /* typeEncoding=c, ivar=_isFirstInCollection, attributes=(assign,nonatomic,readonly) */
    	isFirstInCollection(): boolean;
    /* typeEncoding=c, ivar=_isLastInCollection, attributes=(assign,nonatomic,readonly) */
    	isLastInCollection(): boolean;
    /* typeEncoding=@"MSImageData", ivar=_pattern, attributes=(assign,nonatomic,readonly) */
    	pattern(): MSImageData;
    /* typeEncoding=d, ivar=_tailPadding, attributes=(assign,nonatomic,readonly) */
    	tailPadding(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	cachedPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	clipPath(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16d48 */
    	clipPathForRect_cornerRadius(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	colorPreviewImageWithDrawingBounds(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
    	deviceColorPreviewRectForRect_drawingBorder(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	drawingBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradient(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	gradientPreviewImageWithDrawingBounds(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24c32c36d40 */
    	initWithAsset_canvasColorSpace_isFirst_isLast_tailPadding(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFirstInCollection(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLastInCollection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pattern(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	patternPreviewImageWithDrawingBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedPreviewImage(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldDrawBorderForColor(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	tailPadding(...args: any[]): any;
  }
}

declare const MSAssetScrubberItemView: sketchInternal.MSAssetScrubberItemView;

