// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAttributedString extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	archiveReferenceIdentifier_bc(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	areRequiredFontsAvailable(): boolean;
    /* typeEncoding=@"NSAttributedString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	attributedString(): cocoascript.NSAttributedString;
    /* typeEncoding=@"NSAttributedString", ivar=_encodedAttributedString, attributes=(copy,nonatomic,readonly) */
    	encodedAttributedString(): cocoascript.NSAttributedString;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	fontDescriptors(): cocoascript.NSSet;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	fontNames(): cocoascript.NSSet;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	string(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_textIsOverridden, attributes=(assign,nonatomic) */
    	textIsOverridden(): boolean;
    /* typeEncoding=@"NSAttributedString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	transformedAttributedString(): cocoascript.NSAttributedString;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	unavailableFontNames(): cocoascript.NSSet;
    /* typeEncoding=@24@0:8@16 */
    	static attributedStringWithRefreshedFontDescriptors(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static decodeAttributedString(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static decodeAttributesInDictionary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static encodeAttributedString(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static encodeAttributesInDictionary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static fontDescriptorInDictionary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static fontNameInDictionary(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	static isFontAvailable(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	static isRequiredFontAvailableInDictionary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static refreshFontDescriptorsInDictionary(...args: any[]): any;
    /* typeEncoding=@32@0:8@16d24 */
    	static replacementFontDescriptorWithFaceName_size(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	areRequiredFontsAvailable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	attributedString(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	attributedStringByReplacingFontNames(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	calculateAttributedString(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	calculateTransformedAttributedStringFromAtrributedString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	calculateUnavailableFontNames(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	encodedAttributedString(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	encodedAttributesAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontDescriptors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontNames(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableModelObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	initWithAttributedString_colorSpace_convert(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithEncodedAttributedString(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	propertiesAreEqual_forPurpose(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setTextIsOverridden(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	string(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	textIsOverridden(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transformedAttributedString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	treeAsDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unavailableFontNames(...args: any[]): any;
  }
}

declare const MSAttributedString: sketchInternal.MSAttributedString;

