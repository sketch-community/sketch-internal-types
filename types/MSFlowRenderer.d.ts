// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlowRenderer extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=_absoluteRects, attributes=(retain,nonatomic) */
    	absoluteRects(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSArcVertexBuffer", ivar=_arcVertexBuffer, attributes=(retain,nonatomic) */
    	arcVertexBuffer(): MSArcVertexBuffer;
    /* typeEncoding=@"NSDictionary", ivar=_cachedItemBuffers, attributes=(retain,nonatomic) */
    	cachedItemBuffers(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSMetalTexture", ivar=_flowAnnotationsTexture, attributes=(retain,nonatomic) */
    	flowAnnotationsTexture(): MSMetalTexture;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_flowHotspotTextureCenterRect, attributes=(assign,nonatomic) */
    	flowHotspotTextureCenterRect(): CGRect;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=_flowHotspotTexturePaddings, attributes=(assign,nonatomic) */
    	flowHotspotTexturePaddings(): BCEdgePaddings;
    /* typeEncoding=d, ivar=_flowItemZoomLevel, attributes=(assign,nonatomic) */
    	flowItemZoomLevel(): number;
    /* typeEncoding=@"NSSet", ivar=_flowItems, attributes=(retain,nonatomic) */
    	flowItems(): cocoascript.NSSet;
    /* typeEncoding=@"MSMetalRenderer", ivar=_lastRenderer, attributes=(assign,nonatomic,weak) */
    	lastRenderer(): MSMetalRenderer;
    /* typeEncoding=@"MSFlowRendererSettings", ivar=_lastSettings, attributes=(assign,nonatomic,weak) */
    	lastSettings(): MSFlowRendererSettings;
    /* typeEncoding=@"NSDictionary", ivar=_relativeTextureRects, attributes=(retain,nonatomic) */
    	relativeTextureRects(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSSet", ivar=_selectedLayerIDs, attributes=(retain,nonatomic) */
    	selectedLayerIDs(): cocoascript.NSSet;
    /* typeEncoding=@"MSTextureVertexBuffer", ivar=_textureVertexBuffer, attributes=(retain,nonatomic) */
    	textureVertexBuffer(): MSTextureVertexBuffer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	absoluteRects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	arcVertexBuffer(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24d32 */
    	arcVertexBufferForItems_selectedLayerIDs_zoomLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedItemBuffers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowAnnotationsTexture(...args: any[]): any;
    /* typeEncoding=@40@0:8d16@24@32 */
    	flowAnnotationsTexture_renderer_settings(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	flowHotspotTextureCenterRect(...args: any[]): any;
    /* typeEncoding={BCEdgePaddings=dddd}16@0:8 */
    	flowHotspotTexturePaddings(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	flowItemZoomLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastRenderer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastSettings(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	relativeTextureRects(...args: any[]): any;
    /* typeEncoding=v80@0:8@16@24d32{CGPoint=dd}40d56@64@72 */
    	renderFlowItems_selectedLayerIDs_backingScaleFactor_translation_zoomLevel_renderer_settings(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayerIDs(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAbsoluteRects(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArcVertexBuffer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedItemBuffers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlowAnnotationsTexture(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setFlowHotspotTextureCenterRect(...args: any[]): any;
    /* typeEncoding=v48@0:8{BCEdgePaddings=dddd}16 */
    	setFlowHotspotTexturePaddings(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setFlowItemZoomLevel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlowItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastRenderer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastSettings(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRelativeTextureRects(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedLayerIDs(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextureVertexBuffer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textureVertexBuffer(...args: any[]): any;
    /* typeEncoding=@40@0:8@16d24d32 */
    	textureVertexBufferForItems_zoomLevel_backingScaleFactor(...args: any[]): any;
    /* typeEncoding={MSTextureVertexQuad=(?={?={MSTextureVertex=}{MSTextureVertex=}{MSTextureVertex=}{MSTextureVertex=}}[4{MSTextureVertex=}])}48@0:8@16d24^{CGSize=dd}32d40 */
    	textureVertexQuadWithName_scaledToWidth_size_backingScaleFactor(...args: any[]): any;
  }
}

declare const MSFlowRenderer: sketchInternal.MSFlowRenderer;

