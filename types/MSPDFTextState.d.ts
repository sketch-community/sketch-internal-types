// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPDFTextState extends NSObject {
    /* typeEncoding=d, ivar=_characterSpacing, attributes=(assign,nonatomic) */
    	characterSpacing(): number;
    /* typeEncoding=@"NSFont", ivar=_font, attributes=(retain,nonatomic) */
    	font(): cocoascript.NSFont;
    /* typeEncoding=@"NSDictionary", ivar=_fontInfo, attributes=(retain,nonatomic) */
    	fontInfo(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSString", ivar=_fontName, attributes=(retain,nonatomic) */
    	fontName(): cocoascript.NSString;
    /* typeEncoding=d, ivar=_leading, attributes=(assign,nonatomic) */
    	leading(): number;
    /* typeEncoding=@"NSAffineTransform", ivar=_lineTransform, attributes=(retain,nonatomic) */
    	lineTransform(): cocoascript.NSAffineTransform;
    /* typeEncoding=Q, ivar=_mode, attributes=(assign,nonatomic) */
    	mode(): number;
    /* typeEncoding=d, ivar=_offset, attributes=(assign,nonatomic) */
    	offset(): number;
    /* typeEncoding=@"NSAffineTransform", ivar=_renderingTransform, attributes=(retain,nonatomic) */
    	renderingTransform(): cocoascript.NSAffineTransform;
    /* typeEncoding=d, ivar=_rise, attributes=(assign,nonatomic) */
    	rise(): number;
    /* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
    	scale(): number;
    /* typeEncoding=d, ivar=_size, attributes=(assign,nonatomic) */
    	size(): number;
    /* typeEncoding=@"MSPDFState", ivar=_state, attributes=(assign,nonatomic,weak) */
    	state(): MSPDFState;
    /* typeEncoding=@"NSMutableAttributedString", ivar=_text, attributes=(retain,nonatomic) */
    	text(): cocoascript.NSMutableAttributedString;
    /* typeEncoding=@"NSAffineTransform", ivar=_transform, attributes=(retain,nonatomic) */
    	transform(): cocoascript.NSAffineTransform;
    /* typeEncoding=d, ivar=_wordSpacing, attributes=(assign,nonatomic) */
    	wordSpacing(): number;
    /* typeEncoding=@24@0:8@16 */
    	textStateWithState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	appendText(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	attributes(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	characterSpacing(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	font(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	leading(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lineTransform(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	mode(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	offset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderingTransform(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetRenderingTransform(): void;
    /* typeEncoding=d16@0:8 */
    	rise(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	scale(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setCharacterSpacing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFont(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontName(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setLeading(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLineTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setMode(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setOffset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderingTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setRise(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setScale(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setState(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setText(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTransform(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	setTransform_resettingLineTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setWordSpacing(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldClip(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	size(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	state(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	text(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transform(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	wordSpacing(...args: any[]): any;
  }
}

declare const MSPDFTextState: sketchInternal.MSPDFTextState;

