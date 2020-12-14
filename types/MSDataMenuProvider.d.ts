// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataMenuProvider extends NSObject {
    /* typeEncoding=@"MSDataSupplierManager", ivar=_dataManager, attributes=(assign,nonatomic,readonly) */
    	dataManager(): MSDataSupplierManager;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSDataMenuProviderDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=q, ivar=_presentationContext, attributes=(assign,nonatomic,readonly) */
    	presentationContext(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=:16@0:8 */
    	actionForCurrentContext(...args: any[]): any;
    /* typeEncoding=c40@0:8Q16@24@32 */
    	addDataSuppliersForType_toMenu_typeTitle(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	addImageToMenuItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addMenusForMultipleTypesToMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	clearDataMenuItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataManager(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	dataSuppliersForDataType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16q24 */
    	initWithDataManager_presentationContext(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	menuItemsForDataType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pluginKeysDictionaryFromDataSuppliers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pluginNameForIdentifier(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	presentationContext(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	refreshDataMenuItem(...args: any[]): any;
    /* typeEncoding=:16@0:8 */
    	rootActionForCurrentContext(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	shadowImageFromImage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sortedMenuItems(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	tooltipFromInfo(...args: any[]): any;
  }
}

declare const MSDataMenuProvider: sketchInternal.MSDataMenuProvider;

