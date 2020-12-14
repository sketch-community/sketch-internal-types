// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmap extends NSObject {
    /* typeEncoding=^{CGImage=}, ivar=_CGImage, attributes=(assign,nonatomic,readonly) */
    	CGImage(): any;
    /* typeEncoding=^{CGColorSpace=}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	colorspace(): any;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=_edgePaddings, attributes=(assign,nonatomic,readonly) */
    	edgePaddings(): BCEdgePaddings;
    /* typeEncoding={CGSize=dd}, ivar=_size, attributes=(assign,nonatomic,readonly) */
    	size(): CGSize;
    /* typeEncoding=@32@0:8@16d24 */
    	static bitmapWithName_backingScale(...args: any[]): any;
    /* typeEncoding=@84@0:8{CGSize=dd}16c32{BCEdgePaddings=dddd}36^{CGColorSpace=}68@?76 */
    	static bitmapWithSize_flipped_edgePaddings_colorspace_drawingBlock(...args: any[]): any;
    /* typeEncoding=@56@0:8d16^{CGColor=}24^{CGColor=}32^{CGColorSpace=}40d48 */
    	static rectangularBitmapWithStrokeWidth_strokeColor_fillColor_colorspace_backingScale(...args: any[]): any;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	CGImage(...args: any[]): any;
    /* typeEncoding=^{CGColorSpace=}16@0:8 */
    	colorspace(...args: any[]): any;
    /* typeEncoding=^{CGContext=}40@0:8{CGSize=dd}16^{CGColorSpace=}32 */
    	createBitmapContext_colorspace(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding={BCEdgePaddings=dddd}16@0:8 */
    	edgePaddings(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageFlippedVertically(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	imageRotatedBy(...args: any[]): any;
    /* typeEncoding=@24@0:8^{CGColorSpace=}16 */
    	imageWithColorspace(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGAffineTransform=dddddd}16 */
    	imageWithTransform(...args: any[]): any;
    /* typeEncoding=@24@0:8^{CGImage=}16 */
    	initWithCGImage(...args: any[]): any;
    /* typeEncoding=@56@0:8^{CGImage=}16{BCEdgePaddings=dddd}24 */
    	initWithCGImage_edgePaddings(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	size(...args: any[]): any;
  }
}

declare const MSBitmap: sketchInternal.MSBitmap;

