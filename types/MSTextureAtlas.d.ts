// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextureAtlas extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	absoluteRects(): cocoascript.NSDictionary;
    /* typeEncoding=^{CGImage=}, ivar=_atlasImage, attributes=(assign,nonatomic) */
    	atlasImage(): any;
    /* typeEncoding=@"NSDictionary", ivar=_relativeRects, attributes=(copy,nonatomic) */
    	relativeRects(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSDictionary", ivar=_textures, attributes=(copy,nonatomic,readonly) */
    	textures(): cocoascript.NSDictionary;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	absoluteRectForTextureNamed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	absoluteRects(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	assembleAtlas(): void;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	atlasImage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@32@0:8@16^{CGColorSpace=}24 */
    	initWithTextures_colorSpace(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8@16{BCEdgePaddings=dddd}24 */
    	relativeRectForResizeableTextureNamed_withEdgePaddings(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	relativeRectForTextureNamed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	relativeRects(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGImage=}16 */
    	setAtlasImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRelativeRects(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	textureForRenderer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textures(...args: any[]): any;
  }
}

declare const MSTextureAtlas: sketchInternal.MSTextureAtlas;

