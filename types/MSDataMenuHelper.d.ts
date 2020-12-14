// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataMenuHelper extends NSObject {
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	applicableDataTypesDataTypeFromCurrentSelection(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canRefreshDataOnSelection(): boolean;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataIdentifiersInCurrentSelection(): cocoascript.NSSet;
    /* typeEncoding=@"MSDataSupplierManager", ivar=_dataManager, attributes=(assign,nonatomic,readonly,weak) */
    	dataManager(): MSDataSupplierManager;
    /* typeEncoding=@"MSDocumentData", ivar=_documentData, attributes=(assign,nonatomic,weak) */
    	documentData(): MSDocumentData;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	refreshDataText(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectedLayersHaveClearableDataIdentifiers(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	applicableDataTypesDataTypeFromCurrentSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyDataFromSupplier(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyDataFromSupplier_toLayersWithIdentifier(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyDataFromSupplier_toObjects(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	applyDataFromSupplier_toObjects_identifier(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canRefreshDataOnSelection(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearDataIdentifiersOnSelectedLayers(): void;
    /* typeEncoding=@16@0:8 */
    	dataIdentifiersInCurrentSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataManager(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16@24 */
    	dataOverridesInInstancesOfType_identifier(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16@24 */
    	dataPointsInLayersOfType_identifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDataManager(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshDataOnSelection(): void;
    /* typeEncoding=@16@0:8 */
    	refreshDataText(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	selectedLayersHaveClearableDataIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentData(...args: any[]): any;
  }
}

declare const MSDataMenuHelper: sketchInternal.MSDataMenuHelper;

