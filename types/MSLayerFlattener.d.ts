// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerFlattener extends NSObject {
    /* typeEncoding=@"NSObject<MSLayerFlattenerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@64@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48@56 */
    	bitmapFromRect_fromLayers_withImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24@32c40 */
    	exportRequestFromLayers_immutablePage_immutableDoc_includeArtboardBackground(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	flattenLayer_options(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flattenLayers(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	imageFromLayers_immutablePage_immutableDoc(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24@32c40 */
    	imageFromLayers_immutablePage_immutableDoc_includeArtboardBackground(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	rectFromLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}44@0:8@16@24@32c40 */
    	trimRectFromLayers_immutablePage_immutableDoc_includeArtboardBackground(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}40@0:8@16@24@32 */
    	trimmedRectFromLayers_immutablePage_immutableDoc(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}44@0:8@16@24@32c40 */
    	trimmedRectFromLayers_immutablePage_immutableDoc_includeArtboardBackground(...args: any[]): any;
  }
}

declare const MSLayerFlattener: sketchInternal.MSLayerFlattener;

