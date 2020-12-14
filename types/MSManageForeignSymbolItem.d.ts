// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSManageForeignSymbolItem extends NSObject {
    /* typeEncoding=@"MSForeignSymbol", ivar=_foreignSymbol, attributes=(assign,nonatomic,readonly) */
    	foreignSymbol(): MSForeignSymbol;
    /* typeEncoding=@"MSAssetLibrary", ivar=_library, attributes=(assign,nonatomic,readonly) */
    	library(): MSAssetLibrary;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	libraryName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	symbolName(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	foreignSymbol(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithForeignSymbol(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	library(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolName(...args: any[]): any;
  }
}

declare const MSManageForeignSymbolItem: sketchInternal.MSManageForeignSymbolItem;

