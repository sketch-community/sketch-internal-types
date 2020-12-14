// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPDFScanner extends PDFScanner {
    /* typeEncoding=Q, ivar=_nextID, attributes=(assign,nonatomic) */
    	nextID(): number;
    /* typeEncoding=@"MSLayerGroup", ivar=_rootLayer, attributes=(retain,nonatomic) */
    	rootLayer(): MSLayerGroup;
    /* typeEncoding=@"NSMutableArray", ivar=_stack, attributes=(retain,nonatomic) */
    	stack(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSPDFState", ivar=_state, attributes=(retain,nonatomic) */
    	state(): MSPDFState;
    /* typeEncoding=@"NSString", ivar=_substituteFontName, attributes=(retain,nonatomic) */
    	substituteFontName(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8d16@24 */
    	adjustVerticalOffset_ofChildrenInContainer(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	appendRectangle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	appendText(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	beginText(): void;
    /* typeEncoding=v24@0:8Q16 */
    	clipWithWinding(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	closePath(): void;
    /* typeEncoding=v24@0:8@16 */
    	concatMatrix(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentFillColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentFillColorSpaceMapping(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentFont(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	currentLeading(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	currentPoint(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	currentRenderingIntent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentStrokeColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentStrokeColorSpaceMapping(...args: any[]): any;
    /* typeEncoding=v64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
    	curveTo_control1_control2(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	doClipping(): void;
    /* typeEncoding=v16@0:8 */
    	doClose(): void;
    /* typeEncoding=v16@0:8 */
    	doNewPath(): void;
    /* typeEncoding=v16@0:8 */
    	doRestoreState(): void;
    /* typeEncoding=v16@0:8 */
    	doSaveState(): void;
    /* typeEncoding=v16@0:8 */
    	doText(): void;
    /* typeEncoding=v16@0:8 */
    	endPath(): void;
    /* typeEncoding=v16@0:8 */
    	endText(): void;
    /* typeEncoding=v24@0:8@16 */
    	fillWithShadingPattern(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	fillWithWinding(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	gradientForLayer_pattern(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c24@0:8^{CGPDFPage=}16 */
    	isPDFPageCropped(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	lineTo(...args: any[]): any;
    /* typeEncoding=@24@0:8^{CGPDFPage=}16 */
    	makeCropLayerFromPDFPage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	makeLayerFromPath(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	moveTo(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	nameForType(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	nextID(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	nextLineWithOffset(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	offset(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	processImage_info(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	restoreGraphicState(): void;
    /* typeEncoding=@16@0:8 */
    	rootLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	saveGraphicState(): void;
    /* typeEncoding=v36@0:8^{CGPDFPage=}16@24c32 */
    	scanPage_parser_isPasted(...args: any[]): any;
    /* typeEncoding=v32@0:8^{CGPDFContentStream=}16@24 */
    	scanStream_dictionary(...args: any[]): any;
    /* typeEncoding=v20@0:8i16 */
    	setColourRenderingIntent(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setFillAlphaConstant(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillColour(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setFillColourSpace_mapping(...args: any[]): any;
    /* typeEncoding=v40@0:8@16d24@32 */
    	setFontName_size_info(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setLineCap(...args: any[]): any;
    /* typeEncoding=v32@0:8@16q24 */
    	setLineDash_phase(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setLineJoin(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setLineWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setNextID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRootLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setState(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setStrokeAlphaConstant(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStrokeColour(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setStrokeColourSpace_mapping(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSubstituteFontName(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTextCharacterSpacing(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTextLeading(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextMatrix(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setTextMode(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTextRise(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTextScale(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	setTextTransform_resettingLineTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setTextWordSpacing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stack(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	state(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	strokeWithWinding(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	substituteFontName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transformedPath(...args: any[]): any;
  }
}

declare const MSPDFScanner: sketchInternal.MSPDFScanner;

