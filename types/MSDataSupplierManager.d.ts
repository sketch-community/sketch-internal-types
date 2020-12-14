// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataSupplierManager extends NSObject {
    /* typeEncoding=@"NSMutableArray", ivar=_builtinData, attributes=(retain,nonatomic) */
    	builtinData(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableDictionary", ivar=_builtinDataGroups, attributes=(retain,nonatomic) */
    	builtinDataGroups(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataSupplierGroups(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataSuppliers(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSDataSupplierManagerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,readonly,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSMutableArray", ivar=_localData, attributes=(retain,nonatomic) */
    	localData(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableDictionary", ivar=_localDataGroups, attributes=(retain,nonatomic) */
    	localDataGroups(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSString", ivar=_objectID, attributes=(copy,nonatomic,readonly) */
    	objectID(): cocoascript.NSString;
    /* typeEncoding=@"NSMutableArray", ivar=_pluginData, attributes=(retain,nonatomic) */
    	pluginData(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableDictionary", ivar=_pluginDataGroups, attributes=(retain,nonatomic) */
    	pluginDataGroups(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSMutableDictionary", ivar=_replyContexts, attributes=(retain,nonatomic) */
    	replyContexts(): cocoascript.NSMutableDictionary;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8@16 */
    	URLForBuiltinDataNamed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinDataDefaultLanguage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinDataDefaultLanguageFolder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinDataDefaultPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinDataDefaultURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localizedBuiltinDataFolder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeObjectID(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validLocalDataFileSystemURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addBuiltinDataSupplierGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addLocalData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addLocalDataSupplierGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addLocalDataSuppliers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinDataFromDefaults(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinDataGroups(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinDataGroupsFromDefaults(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	builtinDataInApplication(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canAddLocalDataGroupWithURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataGroupsFromBuiltinData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataGroupsFromLocalData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dataSupplierDataDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dataSupplierGroupDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSupplierGroups(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	dataSupplierMenuItemImage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	dataSupplierWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSuppliers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deregisterDataSuppliersForPluginWithIdentifier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	firstDataSupplierInArray_dataIdentifier(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	firstPluginDataSupplierWithIdentifier(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	groupNameForPluginGroupIdentifier(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	hasLocalDataSupplierWithDataIdentifier(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	hasLocalDataSupplierWithURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	imageForImageLocalDataSupplier(...args: any[]): any;
    /* typeEncoding=@40@0:8@16{CGSize=dd}24 */
    	imageForTextLocalDataSupplier_forSize(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDelegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadBuiltinData(): void;
    /* typeEncoding=v16@0:8 */
    	loadDataSuppliers(): void;
    /* typeEncoding=v16@0:8 */
    	loadLocalData(): void;
    /* typeEncoding=v16@0:8 */
    	loadPluginData(): void;
    /* typeEncoding=@16@0:8 */
    	localData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localDataFromDefaults(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localDataGroups(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	localDataSupplierGroupWithMultipleDataSuppliersWithGroupFolder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	localDataSupplierGroupsInFolder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localDataSuppliers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	makeGroupsFromPluginDataSuppliers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	objectID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginDataGroups(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pluginDataSupplierGroupForPluginIdentifier(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pluginDataSuppliersWithPluginIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	postDataSupplierChangeNotification(): void;
    /* typeEncoding=v56@0:8@16@24@32@40@48 */
    	registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeAndFinalizeReplyContextWithKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeLocalDataSupplierGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeLocalDataSupplierGroupWithIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeLocalDataSuppliers(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	removePluginDataSupplierGroupsWithNoAssociatedPlugin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removePluginDataSuppliersNotIdentifiedWithIdentifiers(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	replaceLocalDataSupplierGroup_withLocalGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	replyContexts(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@?32@?40 */
    	requestDataFromPluginDataSupplier_dataContext_applierBlock_completionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	saveBuiltinDataGroups(): void;
    /* typeEncoding=v16@0:8 */
    	saveLocalDataGroups(): void;
    /* typeEncoding=v16@0:8 */
    	savePluginDataGroups(): void;
    /* typeEncoding=v24@0:8@16 */
    	setBuiltinData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBuiltinDataGroups(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocalData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocalDataGroups(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginDataGroups(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setPluginDataReplyContext_forDataKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReplyContexts(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	supplyData_atIndex_forKey(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	supplyData_forKey(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	usableDataSupplierWithIdentifier(...args: any[]): any;
  }
}

declare const MSDataSupplierManager: sketchInternal.MSDataSupplierManager;

