// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGPUArtboardShadow extends NSObject {
    /* typeEncoding=@"MSMetalRenderer", ivar=_renderer, attributes=(assign,nonatomic,weak) */
    	renderer(): MSMetalRenderer;
    /* typeEncoding=@"MSMetalTexture", ivar=_texture, attributes=(assign,nonatomic,readonly) */
    	texture(): MSMetalTexture;
    /* typeEncoding=@"MSTextureAtlas", ivar=_textureAtlas, attributes=(assign,nonatomic,readonly) */
    	textureAtlas(): MSTextureAtlas;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=d16@0:8 */
    	cornerSize(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	cornerSourceSize(...args: any[]): any;
    /* typeEncoding=v32@0:8^{CGRect={CGPoint=dd}{CGSize=dd}}16^{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	getArtboardShadowTextureRects_innerRect(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithRenderer(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	minimumArtboardSizeForDrawingShadow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	texture(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textureAtlas(...args: any[]): any;
  }
}

declare const MSGPUArtboardShadow: sketchInternal.MSGPUArtboardShadow;

