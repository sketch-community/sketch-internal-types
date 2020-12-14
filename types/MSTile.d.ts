// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTile extends NSObject {
    /* typeEncoding={?=ii}, ivar=_point, attributes=(assign,nonatomic) */
    	point(): any;
    /* typeEncoding={?=iiii}, ivar=_rectWithImageFragment, attributes=(assign,nonatomic,readonly) */
    	rectWithImageFragment(): any;
    /* typeEncoding=@"MSMetalTexture", ivar=_texture, attributes=(retain,nonatomic) */
    	texture(): MSMetalTexture;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8@16{?=ii}24 */
    	initWithRenderer_point(...args: any[]): any;
    /* typeEncoding={?=ii}16@0:8 */
    	point(...args: any[]): any;
    /* typeEncoding={?=iiii}16@0:8 */
    	rectWithImageFragment(...args: any[]): any;
    /* typeEncoding=v48@0:8{?=iiii}16r^v32Q40 */
    	replaceRegion_withBytes_bytesPerRow(...args: any[]): any;
    /* typeEncoding=v24@0:8{?=ii}16 */
    	setPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTexture(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	texture(...args: any[]): any;
  }
}

declare const MSTile: sketchInternal.MSTile;

