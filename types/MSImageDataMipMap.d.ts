// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImageDataMipMap extends NSObject {
    /* typeEncoding=^{CGImage=}, ivar=_CGImage, attributes=(assign,nonatomic,readonly) */
    	CGImage(): any;
    /* typeEncoding=^{CGColorSpace=}, ivar=_colorspace, attributes=(assign,nonatomic,readonly) */
    	colorspace(): any;
    /* typeEncoding=Q, ivar=_lod, attributes=(assign,nonatomic,readonly) */
    	lod(): number;
    /* typeEncoding=@"MSImageDataMipMap", ivar=_next, attributes=(retain,nonatomic) */
    	next(): MSImageDataMipMap;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	CGImage(...args: any[]): any;
    /* typeEncoding=v32@0:8^{vImage_Buffer=^vQQQ}16^{vImage_Buffer=^vQQQ}24 */
    	boxFilterBufferRGBA8888_into(...args: any[]): any;
    /* typeEncoding=^{CGColorSpace=}16@0:8 */
    	colorspace(...args: any[]): any;
    /* typeEncoding=^{CGImage=}24@0:8^{CGImage=}16 */
    	createDownscaledImageWithBoxFilter(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	generateNext(...args: any[]): any;
    /* typeEncoding=@40@0:8^{CGImage=}16^{CGColorSpace=}24Q32 */
    	initWithCGImage_colorSpace_lod(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	lod(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	next(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNext(...args: any[]): any;
  }
}

declare const MSImageDataMipMap: sketchInternal.MSImageDataMipMap;

