// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataSupplierGroup extends NSObject {
    /* typeEncoding=@"MSDataSupplier", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	anyDataSupplier(): MSDataSupplier;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataSuppliers(): cocoascript.NSArray;
    /* typeEncoding=@"NSDictionary", ivar=_dataSuppliersDictionary, attributes=(retain,nonatomic) */
    	dataSuppliersDictionary(): cocoascript.NSDictionary;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataType(): number;
    /* typeEncoding=@"<MSDataSupplierDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=c, ivar=_enabled, attributes=(assign,nonatomic) */
    	enabled(): boolean;
    /* typeEncoding=@"NSString", ivar=_groupIdentifier, attributes=(copy,nonatomic) */
    	groupIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	groupName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isUsableDataSupplierGroup(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	oneDataSupplierInGroup(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	valid(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addDataSuppliers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	anyDataSupplier(...args: any[]): any;
    /* typeEncoding=Q24@0:8Q16 */
    	countOfUsableDataSuppliersForDataType(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	dataSupplierMenuItemForDataType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSuppliers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSuppliersDictionary(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	dataType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithDataSuppliers_delegate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isUsableDataSupplierGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeGroupIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	notifyDelegateOfChanges(): void;
    /* typeEncoding=c16@0:8 */
    	oneDataSupplierInGroup(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	postDecodingInitializingWithDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeDataSupplier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataSuppliersDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGroupIdentifier(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	usableDataSuppliersOfDataType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
  }
}

declare const MSDataSupplierGroup: sketchInternal.MSDataSupplierGroup;

