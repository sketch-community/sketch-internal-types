// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLocalDataSupplierGroup extends MSDataSupplierGroup {
    /* typeEncoding=@"MSLocalDataSupplier", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	anyLocalDataSupplier(): MSLocalDataSupplier;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canGroupMultipleDataSuppliers(): boolean;
    /* typeEncoding=@"MSFolderMonitor", ivar=_folderMonitor, attributes=(retain,nonatomic) */
    	folderMonitor(): MSFolderMonitor;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	groupFolder(): cocoascript.NSURL;
    /* typeEncoding=@"NSURL", ivar=_groupURL, attributes=(assign,nonatomic,readonly) */
    	groupURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	localDataSuppliers(): cocoascript.NSArray;
    /* typeEncoding=@"MSLocalDataSupplierSubgroup", ivar=_subGroup, attributes=(retain,nonatomic) */
    	subGroup(): MSLocalDataSupplierSubgroup;
    /* typeEncoding=@"MSLocalDataSupplier", ivar=_topLevelSupplier, attributes=(retain,nonatomic) */
    	topLevelSupplier(): MSLocalDataSupplier;
    /* typeEncoding=@32@0:8@16@24 */
    	static localDataSupplierGroupFromFileSystemURL_dataSupplierDelegate(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	static localDataSupplierGroupFromFileSystemURL_dataSupplierDelegate_makeFolderMonitor(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static subgroupWithFileSytemURL_localDataSupplierGroup(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	anyLocalDataSupplier(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canGroupMultipleDataSuppliers(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	dataSupplierMenuItemForDataType(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	dataSupplierWithIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	folderMonitor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupFolder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithLocalDataSupplier_groupURL_delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localDataSuppliers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeGroupIdentifier(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	postDecodingInitializingWithDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFolderMonitor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSubGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTopLevelSupplier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupFolderMonitor(): void;
    /* typeEncoding=@16@0:8 */
    	subGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	topLevelSupplier(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
  }
}

declare const MSLocalDataSupplierGroup: sketchInternal.MSLocalDataSupplierGroup;

