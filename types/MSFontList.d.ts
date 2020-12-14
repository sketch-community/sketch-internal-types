// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFontList extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_allFontFamilyNames, attributes=(retain,nonatomic) */
    	allFontFamilyNames(): cocoascript.NSArray;
    /* typeEncoding=@"MSDocumentData", ivar=_documentData, attributes=(assign,nonatomic,readonly,weak) */
    	documentData(): MSDocumentData;
    /* typeEncoding=@"NSArray", ivar=_documentFontFamilyNames, attributes=(copy,nonatomic) */
    	documentFontFamilyNames(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_filteredFontFamilyNames, attributes=(retain,nonatomic) */
    	filteredFontFamilyNames(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_systemFontFamilyNames, attributes=(retain,nonatomic) */
    	systemFontFamilyNames(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	initialize(): void;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	allFontFamilyNames(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearFilter(): void;
    /* typeEncoding=v16@0:8 */
    	dispatchStartCachingFonts(): void;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentFontFamilyNames(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	filter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filteredFontFamilyNames(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	findCommonFontsInDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	findSystemFonts(): void;
    /* typeEncoding=@24@0:8Q16 */
    	fontForFontFamilyAtIndex(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	indexOfFont(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocumentData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	localizeFontDescriptors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localizedFontNameSortDescriptor(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	nameOfFontFamilyAtIndex(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	numberOfFontFamilies(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForDealloc(): void;
    /* typeEncoding=v16@0:8 */
    	reloadFonts(): void;
    /* typeEncoding=v24@0:8@16 */
    	setAllFontFamilyNames(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentFontFamilyNames(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFilteredFontFamilyNames(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSystemFontFamilyNames(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startCachingFonts(): void;
    /* typeEncoding=v16@0:8 */
    	stopCachingFonts(): void;
    /* typeEncoding=@16@0:8 */
    	systemFontFamilyNames(...args: any[]): any;
  }
}

declare const MSFontList: sketchInternal.MSFontList;

