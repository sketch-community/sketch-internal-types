// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCoreImageQueue extends NSObject {
    /* typeEncoding=@40@0:8Q16@24^{CGImage=}32 */
    	applyEffect_fromSource_toImage(...args: any[]): any;
    /* typeEncoding=d24@0:8^{CGImage=}16 */
    	averageLuminanceOfImage(...args: any[]): any;
    /* typeEncoding=@48@0:8^{CGImage=}16Q24@32^{CGColorSpace=}40 */
    	cachedImage_withEffect_fromObject_colorSpace(...args: any[]): any;
    /* typeEncoding=v96@0:8^{CGImage=}16Q24{CGRect={CGPoint=dd}{CGSize=dd}}32@64^{CGContext=}72^{CGColorSpace=}80Q88 */
    	drawImage_withEffect_inRect_fromObject_context_colorSpace_options(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	imageWithWhiteBackground(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initialize(): void;
  }
}

declare const MSCoreImageQueue: sketchInternal.MSCoreImageQueue;

