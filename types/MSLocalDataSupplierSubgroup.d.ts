// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLocalDataSupplierSubgroup extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_dataSupplierIdentifiers, attributes=(assign,nonatomic,readonly) */
    	dataSupplierIdentifiers(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	groupName(): cocoascript.NSString;
    /* typeEncoding=@"MSLocalDataSupplierGroup", ivar=_parentGroup, attributes=(assign,nonatomic,readonly,weak) */
    	parentGroup(): MSLocalDataSupplierGroup;
    /* typeEncoding=@"NSArray", ivar=_subGroups, attributes=(assign,nonatomic,readonly) */
    	subGroups(): cocoascript.NSArray;
    /* typeEncoding=@"NSURL", ivar=_subgroupURL, attributes=(assign,nonatomic,readonly) */
    	subgroupURL(): cocoascript.NSURL;
    /* typeEncoding=@24@0:8@16 */
    	dataSupplierIdentifiersForDataSuppliers(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	localDataSupplierSubgroupWithURL_localDataSupplierGroup(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	localDataSupplierSubgroupsInFolder_localDataSupplierGroup(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	localDataSuppliersInFolder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	dataSupplierIdentifiers(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	dataSupplierMenuItemForDataType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupName(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithLocalDataSupplier_parentGroup(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	initWithURL_parentSupplierGroup_subGroups_dataSupplierIdentifiers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subGroups(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subgroupURL(...args: any[]): any;
  }
}

declare const MSLocalDataSupplierSubgroup: sketchInternal.MSLocalDataSupplierSubgroup;

