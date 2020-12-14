// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLoadedImageData extends NSObject {
    /* typeEncoding=@"MSImageData", ivar=_image, attributes=(retain,nonatomic) */
    	image(): MSImageData;
    /* typeEncoding=q, ivar=_intendedDPI, attributes=(assign,nonatomic) */
    	intendedDPI(): number;
    /* typeEncoding={CGSize=dd}, ivar=_size, attributes=(assign,nonatomic) */
    	size(): CGSize;
    /* typeEncoding=d24@0:8@16 */
    	static bestScaleAccountingForPixelDensityOfImage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static imageFromFileURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static imageFromPasteboard(...args: any[]): any;
    /* typeEncoding=@32@0:8@16d24 */
    	static loadedImageFromImage_withSizeScaledDownByFactor(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	static scalingFactorForFilename(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	intendedDPI(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImage(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setIntendedDPI(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setSize(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	size(...args: any[]): any;
  }
}

declare const MSLoadedImageData: sketchInternal.MSLoadedImageData;

