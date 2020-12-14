// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArtboardPreset extends NSObject {
    /* typeEncoding=c, ivar=_allowResizedMatching, attributes=(assign,nonatomic,readonly) */
    	allowResizedMatching(): boolean;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dictionaryRepresentation(): cocoascript.NSDictionary;
    /* typeEncoding=Q, ivar=_height, attributes=(assign,nonatomic) */
    	height(): number;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	image(): cocoascript.NSImage;
    /* typeEncoding=@"NSString", ivar=_imageName, attributes=(retain,nonatomic) */
    	imageName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_imageNameLandscape, attributes=(retain,nonatomic) */
    	imageNameLandscape(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_isNew, attributes=(assign,nonatomic) */
    	isNew(): boolean;
    /* typeEncoding=c, ivar=_isSizeToFit, attributes=(assign,nonatomic,readonly) */
    	isSizeToFit(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layerName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_offersLandscapeVariant, attributes=(assign,nonatomic,readonly) */
    	offersLandscapeVariant(): boolean;
    /* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	size(): CGSize;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sizeDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_tooltip, attributes=(copy,nonatomic,readonly) */
    	tooltip(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_width, attributes=(assign,nonatomic) */
    	width(): number;
    /* typeEncoding=q60@0:8{CGSize=dd}16{CGSize=dd}32c48^c52 */
    	compareArtboardSize_withScaledPresetSize_offeringLandscapeVariant_isRotated(...args: any[]): any;
    /* typeEncoding=d52@0:8{CGSize=dd}16{CGSize=dd}32c48 */
    	resizeScaleFromArtboardSize_presetSize_offeringLandscapeVariant(...args: any[]): any;
    /* typeEncoding=@40@0:8@16{CGSize=dd}24 */
    	sizeToFitPresetWithName_size(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	allowResizedMatching(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dictionaryRepresentation(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	height(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageNameLandscape(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDictionaryRepresentation(...args: any[]): any;
    /* typeEncoding=@56@0:8@16{CGSize=dd}24@40@48 */
    	initWithName_size_imageName_imageNameLandscape(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isNew(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSizeToFit(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerName(...args: any[]): any;
    /* typeEncoding=Q32@0:8{CGSize=dd}16 */
    	matchWithArtboardSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	offersLandscapeVariant(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oppositeOrientationPreset(...args: any[]): any;
    /* typeEncoding=d32@0:8{CGSize=dd}16 */
    	resizeScaleFromArtboardSize(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setHeight(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageNameLandscape(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsNew(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNilValueForKey(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setSize(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setWidth(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	size(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sizeDescription(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tooltip(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	width(...args: any[]): any;
  }
}

declare const MSArtboardPreset: sketchInternal.MSArtboardPreset;

