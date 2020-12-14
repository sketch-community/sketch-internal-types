// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSpecOverlay extends SketchControllers.MSCollectionOverlay {
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=coordinateSpaceTransform, attributes=(assign,nonatomic) */
    	coordinateSpaceTransform(): CGAffineTransform;
    /* typeEncoding=@"NSColor", ivar=guideColor, attributes=(retain,nonatomic) */
    	guideColor(): cocoascript.NSColor;
    /* typeEncoding=@"MSSpecOverlayItemCache", ivar=itemCache, attributes=(assign,nonatomic,readonly) */
    	itemCache(): MSSpecOverlayItemCache;
    /* typeEncoding=@"NSColor", ivar=textColor, attributes=(retain,nonatomic) */
    	textColor(): cocoascript.NSColor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	bindColorsToUserDefaults(): void;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	coordinateSpaceTransform(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	guideColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithLayout(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	itemCache(...args: any[]): any;
    /* typeEncoding=v64@0:8{CGAffineTransform=dddddd}16 */
    	setCoordinateSpaceTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGuideColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textColor(...args: any[]): any;
  }
}

declare const MSSpecOverlay: sketchInternal.MSSpecOverlay;

