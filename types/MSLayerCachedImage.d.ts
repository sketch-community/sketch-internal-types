// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerCachedImage extends NSObject {
    /* typeEncoding=^{CGImage=}, ivar=_image, attributes=(assign,nonatomic) */
    	image(): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_rect, attributes=(assign,nonatomic) */
    	rect(): CGRect;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGImage=}16 */
    	setImage(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setRect(...args: any[]): any;
  }
}

declare const MSLayerCachedImage: sketchInternal.MSLayerCachedImage;

