// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentFont extends NSObject {
    /* typeEncoding=c, ivar=_available, attributes=(assign,nonatomic,getter=isAvailable) */
    	available(): boolean;
    /* typeEncoding=@"NSFont", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	bestPreviewFont(): cocoascript.NSFont;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	displayName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_embedded, attributes=(assign,nonatomic,getter=isEmbedded) */
    	embedded(): boolean;
    /* typeEncoding=@"NSString", ivar=_fontFamilyName, attributes=(copy,nonatomic) */
    	fontFamilyName(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_fontReferences, attributes=(copy,nonatomic) */
    	fontReferences(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=_foreign, attributes=(assign,nonatomic,getter=isForeign) */
    	foreign(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	lookupKey(): cocoascript.NSString;
    /* typeEncoding=@"NSSet", ivar=_postscriptNames, attributes=(copy,nonatomic) */
    	postscriptNames(): cocoascript.NSSet;
    /* typeEncoding=c, ivar=_replaceable, attributes=(assign,nonatomic,getter=isReplaceable) */
    	replaceable(): boolean;
    /* typeEncoding=c, ivar=_tooBig, attributes=(assign,nonatomic,getter=isTooBig) */
    	tooBig(): boolean;
    /* typeEncoding=c, ivar=_used, attributes=(assign,nonatomic,getter=isUsed) */
    	used(): boolean;
    /* typeEncoding=@24@0:8@16 */
    	static documentFontKeyforPostscriptName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static documentFontWithReference(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static documentFontWithUnavailableFontName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static embeddableFontsInDocument(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static missingFontsInDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	bestPreviewFont(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	byteSizeForReference(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	compareWithDocumentFont(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	displayNameForSystemFontName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentFontAddingReference(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontFamilyName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontReferences(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAvailable(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEmbedded(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isForeign(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isReplaceable(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isTooBig(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isUsed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lookupKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	postScriptNameOrFamilyName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	postscriptNames(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAvailable(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEmbedded(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontFamilyName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontReferences(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setForeign(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPostscriptNames(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setReplaceable(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setTooBig(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setUsed(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	totalByteSizeOfAllReferences(...args: any[]): any;
  }
}

declare const MSDocumentFont: sketchInternal.MSDocumentFont;

