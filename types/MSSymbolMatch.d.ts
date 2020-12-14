// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSymbolMatch extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_allMatches, attributes=(assign,nonatomic,weak) */
    	allMatches(): cocoascript.NSArray;
    /* typeEncoding=@"MSForeignSymbol", ivar=_foreignSymbol, attributes=(assign,nonatomic,readonly) */
    	foreignSymbol(): MSForeignSymbol;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isResolved(): boolean;
    /* typeEncoding=@"NSMutableArray", ivar=_potentialMatches, attributes=(retain,nonatomic) */
    	potentialMatches(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSSymbolMaster", ivar=_remoteMaster, attributes=(assign,nonatomic,readonly) */
    	remoteMaster(): MSSymbolMaster;
    /* typeEncoding=@"MSSymbolMaster", ivar=_resolvedMatch, attributes=(retain,nonatomic) */
    	resolvedMatch(): MSSymbolMaster;
    /* typeEncoding=@"MSDocumentData", ivar=_searchDocument, attributes=(assign,nonatomic,weak) */
    	searchDocument(): MSDocumentData;
    /* typeEncoding=v24@0:8@16 */
    	static resolve(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	allMatches(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	findPotentialMatches(): void;
    /* typeEncoding=@16@0:8 */
    	foreignSymbol(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithRemoteForeignSymbol_searchingDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithRemoteSymbol_searchingDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isResolved(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	potentialMatches(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	remoteMaster(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	resolve(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resolveForeignMatch(): void;
    /* typeEncoding=v16@0:8 */
    	resolveLocalMatch(): void;
    /* typeEncoding=@16@0:8 */
    	resolvedMatch(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	searchDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAllMatches(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPotentialMatches(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setResolvedMatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSearchDocument(...args: any[]): any;
  }
}

declare const MSSymbolMatch: sketchInternal.MSSymbolMatch;

