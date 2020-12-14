// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPDFState extends NSObject {
    /* typeEncoding=d, ivar=_borderAlphaConstant, attributes=(assign,nonatomic) */
    	borderAlphaConstant(): number;
    /* typeEncoding=Q, ivar=_borderCapStyle, attributes=(assign,nonatomic) */
    	borderCapStyle(): number;
    /* typeEncoding=@"NSColor", ivar=_borderColor, attributes=(retain,nonatomic) */
    	borderColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSColorSpace", ivar=_borderColorSpace, attributes=(retain,nonatomic) */
    	borderColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"PDFFunction", ivar=_borderColorSpaceMapping, attributes=(retain,nonatomic) */
    	borderColorSpaceMapping(): PDFFunction;
    /* typeEncoding=@"NSArray", ivar=_borderDashes, attributes=(retain,nonatomic) */
    	borderDashes(): cocoascript.NSArray;
    /* typeEncoding=@"PDFPattern", ivar=_borderGradient, attributes=(retain,nonatomic) */
    	borderGradient(): PDFPattern;
    /* typeEncoding=Q, ivar=_borderJoinStyle, attributes=(assign,nonatomic) */
    	borderJoinStyle(): number;
    /* typeEncoding=d, ivar=_borderThickness, attributes=(assign,nonatomic) */
    	borderThickness(): number;
    /* typeEncoding=Q, ivar=_clippingMode, attributes=(assign,nonatomic) */
    	clippingMode(): number;
    /* typeEncoding=@"NSBezierPath", ivar=_clippingPath, attributes=(retain,nonatomic) */
    	clippingPath(): cocoascript.NSBezierPath;
    /* typeEncoding=c, ivar=_clippingUpdated, attributes=(assign,nonatomic) */
    	clippingUpdated(): boolean;
    /* typeEncoding=c, ivar=_containsClippedItems, attributes=(assign,nonatomic) */
    	containsClippedItems(): boolean;
    /* typeEncoding={CGPoint=dd}, ivar=_currentPoint, attributes=(assign,nonatomic) */
    	currentPoint(): CGPoint;
    /* typeEncoding=d, ivar=_fillAlphaConstant, attributes=(assign,nonatomic) */
    	fillAlphaConstant(): number;
    /* typeEncoding=@"NSColor", ivar=_fillColor, attributes=(retain,nonatomic) */
    	fillColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSColorSpace", ivar=_fillColorSpace, attributes=(retain,nonatomic) */
    	fillColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"PDFFunction", ivar=_fillColorSpaceMapping, attributes=(retain,nonatomic) */
    	fillColorSpaceMapping(): PDFFunction;
    /* typeEncoding=@"PDFPattern", ivar=_fillGradient, attributes=(retain,nonatomic) */
    	fillGradient(): PDFPattern;
    /* typeEncoding=@"NSAffineTransform", ivar=_flippedTransform, attributes=(retain,nonatomic) */
    	flippedTransform(): cocoascript.NSAffineTransform;
    /* typeEncoding=@"NSMutableArray", ivar=_layers, attributes=(retain,nonatomic) */
    	layers(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSBezierPath", ivar=_path, attributes=(retain,nonatomic) */
    	path(): cocoascript.NSBezierPath;
    /* typeEncoding=c, ivar=_pathClosed, attributes=(assign,nonatomic) */
    	pathClosed(): boolean;
    /* typeEncoding=c, ivar=_pathUsed, attributes=(assign,nonatomic) */
    	pathUsed(): boolean;
    /* typeEncoding=c, ivar=_pathWasRect, attributes=(assign,nonatomic) */
    	pathWasRect(): boolean;
    /* typeEncoding=i, ivar=_renderingIntent, attributes=(assign,nonatomic) */
    	renderingIntent(): number;
    /* typeEncoding=@"MSPDFScanner", ivar=_scanner, attributes=(assign,nonatomic,weak) */
    	scanner(): MSPDFScanner;
    /* typeEncoding=@"MSPDFTextState", ivar=_text, attributes=(retain,nonatomic) */
    	text(): MSPDFTextState;
    /* typeEncoding=@"NSAffineTransform", ivar=_transform, attributes=(retain,nonatomic) */
    	transform(): cocoascript.NSAffineTransform;
    /* typeEncoding=@"NSBezierPath", ivar=_transformedPath, attributes=(retain,nonatomic) */
    	transformedPath(): cocoascript.NSBezierPath;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	appendTransform(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	borderAlphaConstant(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	borderCapStyle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderColorSpaceMapping(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderDashes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderGradient(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	borderJoinStyle(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	borderThickness(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	clippingMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	clippingPath(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	clippingUpdated(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsClippedItems(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	currentPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	fillAlphaConstant(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillColorSpaceMapping(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillGradient(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flippedTransform(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithScanner(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastLayer(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	layerWithEnclosingGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeArtboardGroup(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	optimiseClipLayerInGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	pathClosed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	pathUsed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	pathWasRect(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	renderingIntent(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetFlipped(): void;
    /* typeEncoding=v24@0:8@16 */
    	resetTransform(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scanner(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setBorderAlphaConstant(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setBorderCapStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBorderColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBorderColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBorderColorSpaceMapping(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBorderDashes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBorderGradient(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setBorderJoinStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setBorderThickness(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setClippingMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setClippingPath(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setClippingUpdated(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setContainsClippedItems(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setCurrentPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setFillAlphaConstant(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillColorSpaceMapping(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillGradient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlippedTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPath(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPathClosed(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPathUsed(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPathWasRect(...args: any[]): any;
    /* typeEncoding=v20@0:8i16 */
    	setRenderingIntent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScanner(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setText(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTransformedPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	stringFromTransform(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	text(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transform(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	transformBezierPath(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8{CGPoint=dd}16 */
    	transformPoint(...args: any[]): any;
    /* typeEncoding={CGSize=dd}32@0:8{CGSize=dd}16 */
    	transformSize(...args: any[]): any;
    /* typeEncoding={?=dddddd}16@0:8 */
    	transformStruct(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transformedClippingPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transformedPath(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateClipping(): void;
    /* typeEncoding=v24@0:8@16 */
    	updateClippingWithTextPath(...args: any[]): any;
  }
}

declare const MSPDFState: sketchInternal.MSPDFState;

