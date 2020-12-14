// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmapEffectsContext extends NSObject {
    /* typeEncoding={vImage_Buffer=^vQQQ}, ivar=_imageBuffer, attributes=(assign,nonatomic) */
    	imageBuffer(): vImage_Buffer;
    /* typeEncoding=@?, ivar=_imageFreeBlock, attributes=(copy,nonatomic) */
    	imageFreeBlock(): any;
    /* typeEncoding=^{CGImage=}72@0:8{CGSize=dd}16d32d40Q48^{CGColorSpace=}56@?64 */
    	createImageWithSize_blurRadius_saturation_options_colorSpace_drawingBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=^{vImage_Buffer=^vQQQ}52@0:8^{vImage_Buffer=^vQQQ}16^{vImage_Buffer=^vQQQ}24^v32I40Q44 */
    	blurBuffer_workingBuffer_tempBuffer_kernelSize_options(...args: any[]): any;
    /* typeEncoding={vImage_Buffer=^vQQQ}48@0:8{CGSize=dd}16^{vImage_Buffer=^vQQQ}32^q40 */
    	checkSize_forBuffer_error(...args: any[]): any;
    /* typeEncoding=v36@0:8^{vImage_Buffer=^vQQQ}16^{vImage_Buffer=^vQQQ}24I32 */
    	checkTempDataSizeForImageBuffer_workingBuffer_kernelSize(...args: any[]): any;
    /* typeEncoding=^{CGContext=}68@0:8^{vImage_Buffer=^vQQQ}16{CGSize=dd}24{CGSize=dd}40^{CGColorSpace=}56c64 */
    	createContextForImageBuffer_size_scale_colorSpace_blur(...args: any[]): any;
    /* typeEncoding=^{CGImage=}48@0:8^{vImage_Buffer=^vQQQ}16^{CGColorSpace=}24^?32^v40 */
    	createImageFromBuffer_colorSpace_imageFreeCallack_userData(...args: any[]): any;
    /* typeEncoding=^{CGImage=}80@0:8{CGSize=dd}16d32d40Q48^{CGColorSpace=}56@?64@?72 */
    	createImageWithSize_blurRadius_saturation_options_colorSpace_drawingBlock_imageFreeBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding={vImage_Buffer=^vQQQ}16@0:8 */
    	imageBuffer(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	imageFreeBlock(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	imageScaleForBlurRadius(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	memorySize(...args: any[]): any;
    /* typeEncoding=v32@0:8^{vImage_Buffer=^vQQQ}16d24 */
    	saturateBuffer_saturation(...args: any[]): any;
    /* typeEncoding=v48@0:8{vImage_Buffer=^vQQQ}16 */
    	setImageBuffer(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setImageFreeBlock(...args: any[]): any;
  }
}

declare const MSBitmapEffectsContext: sketchInternal.MSBitmapEffectsContext;

