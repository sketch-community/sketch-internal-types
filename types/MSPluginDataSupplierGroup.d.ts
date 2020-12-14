// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginDataSupplierGroup extends MSDataSupplierGroup {
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pluginDataSuppliers(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pluginIdentifier(): cocoascript.NSString;
    /* typeEncoding=@24@0:8Q16 */
    	dataSupplierMenuItemForDataType(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	dataSupplierSubgroupsForDataSuppliers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithPluginDataSuppliers_delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeGroupIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginDataSuppliers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginIdentifier(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	postDecodingInitializingWithDelegate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
  }
}

declare const MSPluginDataSupplierGroup: sketchInternal.MSPluginDataSupplierGroup;

