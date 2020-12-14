// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableColor extends _MSImmutableColor {
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	alpha(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	blue(): number;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	green(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	manifestComponents(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isOpaque) */
    	opaque(): boolean;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	red(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(retain,nonatomic) */
    	swatchID(): cocoascript.NSString;
    /* typeEncoding=@16@0:8 */
    	static availableRGBColorSpaces(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static blackColor(...args: any[]): any;
    /* typeEncoding=@40@0:8q16q24q32 */
    	static colorWithIntegerRed_green_blue(...args: any[]): any;
    /* typeEncoding=@48@0:8q16q24q32q40 */
    	static colorWithIntegerRed_green_blue_alpha(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static colorWithNSColor(...args: any[]): any;
    /* typeEncoding=@48@0:8d16d24d32d40 */
    	static colorWithRed_green_blue_alpha(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static colorWithSVGString(...args: any[]): any;
    /* typeEncoding=@32@0:8d16d24 */
    	static colorWithWhite_alpha(...args: any[]): any;
    /* typeEncoding=v48@0:8^d16^d24^d32@40 */
    	static getRed_green_blue_fromHexValue(...args: any[]): any;
    /* typeEncoding=@40@0:8d16d24d32 */
    	static hexValueForRed_green_blue(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static namedColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static staticColorDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static whiteColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	NSColorForContext(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	NSColorWithColorSpace(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	colorWithAlphaComponent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	fuzzyIsEqual(...args: any[]): any;
    /* typeEncoding=c32@0:8@16d24 */
    	fuzzyIsEqual_precision(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	fuzzyIsEqualExcludingAlpha(...args: any[]): any;
    /* typeEncoding=c32@0:8@16d24 */
    	fuzzyIsEqualExcludingAlpha_precision(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hexValue(...args: any[]): any;
    /* typeEncoding=@48@0:8d16d24d32d40 */
    	initWithRed_green_blue_alpha(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isBlack(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isGrayscale(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isOpaque(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isWhite(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	manifestComponents(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV119OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=^{CGColor=}24@0:8^{CGColorSpace=}16 */
    	newCGColorWithColorSpace(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	propertiesAreEqual_forPurpose(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setStroke(): void;
    /* typeEncoding=@20@0:8c16 */
    	stringValueIncludingAlpha(...args: any[]): any;
    /* typeEncoding=@28@0:8c16d20 */
    	stringValueIncludingAlpha_alphaMultiplication(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	svgRepresentation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	treeAsDictionary(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	uniqueStringValueIncludingAlpha(...args: any[]): any;
  }
}

declare const MSImmutableColor: sketchInternal.MSImmutableColor;

