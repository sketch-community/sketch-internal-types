// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataSupplier extends NSObject {
    /* typeEncoding=@"NSString", ivar=_dataIdentifier, attributes=(assign,nonatomic,readonly) */
    	dataIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_dataName, attributes=(copy,nonatomic) */
    	dataName(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_dataType, attributes=(assign,nonatomic,readonly) */
    	dataType(): number;
    /* typeEncoding=@"<MSDataSupplierDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	displayName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_enabled, attributes=(assign,nonatomic) */
    	enabled(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isUsableDataSupplier(): boolean;
    /* typeEncoding=@"NSImage", ivar=_menuItemImage, attributes=(retain,nonatomic) */
    	menuItemImage(): cocoascript.NSImage;
    /* typeEncoding=@, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTooltipInfo(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	uttDataType(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	valid(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v40@0:8Q16@24@?32 */
    	applyDataAtIndex_datum_dataApplier(...args: any[]): any;
    /* typeEncoding=v40@0:8Q16@24@?32 */
    	applyDataWithCount_data_dataApplier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	dataForItem_ofType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	dataType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@?32@?40 */
    	generateDataForObjects_dataSupplierManager_dataApplier_completionHandler(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	imageFileURLForDataItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	initWithDataIdentifier_dataName_dataType(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToDataSupplier(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isUsableDataSupplier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTooltipInfo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetMenuItemImage(): void;
    /* typeEncoding=v24@0:8@16 */
    	setDataName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenuItemImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	uttDataType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
  }
}

declare const MSDataSupplier: sketchInternal.MSDataSupplier;

