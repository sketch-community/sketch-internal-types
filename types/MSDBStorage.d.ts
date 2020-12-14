// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDBStorage extends NSObject {
    /* typeEncoding=@"NSURL", ivar=_dbFileURL, attributes=(retain,nonatomic) */
    	dbFileURL(): cocoascript.NSURL;
    /* typeEncoding=q, ivar=_maxSizeInBytes, attributes=(assign,nonatomic) */
    	maxSizeInBytes(): number;
    /* typeEncoding=q, ivar=_pageSize, attributes=(assign,nonatomic) */
    	pageSize(): number;
    /* typeEncoding=@"NSDictionary", ivar=_schema, attributes=(assign,nonatomic,readonly) */
    	schema(): cocoascript.NSDictionary;
    /* typeEncoding=@28@0:8^{sqlite3_stmt=}16i24 */
    	columnValueFromStatement_atIndex(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	columnsIndexes(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	columnsQueryFromColumnsSchema(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	configureSQLite(...args: any[]): any;
    /* typeEncoding=i32@0:8@16^v24 */
    	createTablesWithSchema_inOpenedDatabase(...args: any[]): any;
    /* typeEncoding=v24@0:8^v16 */
    	enableAutoVacuumInOpenedDatabase(...args: any[]): any;
    /* typeEncoding=i32@0:8@16^v24 */
    	executeNonSelectionQuery_inOpenedDatabase(...args: any[]): any;
    /* typeEncoding=i40@0:8@16^v24@32 */
    	executeNonSelectionQuery_inOpenedDatabase_withValues(...args: any[]): any;
    /* typeEncoding=i48@0:8@16^v24@32@?40 */
    	executeQuery_inOpenedDatabase_withValues_usingBlock(...args: any[]): any;
    /* typeEncoding=@48@0:8@16^v24^i32@40 */
    	executeSelectionQuery_inOpenedDatabase_result_withValues(...args: any[]): any;
    /* typeEncoding=@40@0:8@16^v24@32 */
    	executeSelectionQuery_inOpenedDatabase_withValues(...args: any[]): any;
    /* typeEncoding=q24@0:8^v16 */
    	getMaxPageCountInOpenedDatabase(...args: any[]): any;
    /* typeEncoding=q24@0:8^v16 */
    	getPageCountInOpenedDatabase(...args: any[]): any;
    /* typeEncoding=q24@0:8^v16 */
    	getPageSizeInOpenedDatabase(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	load(): void;
    /* typeEncoding=^{sqlite3=}32@0:8@16^i24 */
    	openDatabaseAtFileURL_withResult(...args: any[]): any;
    /* typeEncoding=q32@0:8@16^v24 */
    	querySingleValue_inOpenedDatabase(...args: any[]): any;
    /* typeEncoding=i32@0:8q16^v24 */
    	setMaxPageCount_inOpenedDatabase(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16^v24 */
    	setVersion_inOpenedDatabase(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^v24 */
    	tableExists_inOpenedDatabase(...args: any[]): any;
    /* typeEncoding=c40@0:8@16^v24^i32 */
    	tableExists_inOpenedDatabase_result(...args: any[]): any;
    /* typeEncoding=Q32@0:8^v16^i24 */
    	versionInOpenedDatabase_result(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=i40@0:8@16Q24@32 */
    	configureDatabaseWithSchema_version_filename(...args: any[]): any;
    /* typeEncoding=Q40@0:8@16@24@32 */
    	countEntriesForTable_condition_withValues(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	createTable_columnsSchema(...args: any[]): any;
    /* typeEncoding=v24@0:8^v16 */
    	customizeDatabase(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dbFileURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dropDatabase(): void;
    /* typeEncoding=c24@0:8@16 */
    	dropTable(...args: any[]): any;
    /* typeEncoding=i24@0:8@16 */
    	executeNonSelectionQuery(...args: any[]): any;
    /* typeEncoding=i32@0:8@16@24 */
    	executeNonSelectionQuery_withValues(...args: any[]): any;
    /* typeEncoding=i24@0:8@?16 */
    	executeQueryUsingBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	executeSelectionQuery_withValues(...args: any[]): any;
    /* typeEncoding=@40@0:8@16Q24@32 */
    	initWithSchema_version_filename(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16@24 */
    	initWithVersion_filename(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	maxSizeInBytes(...args: any[]): any;
    /* typeEncoding=v32@0:8^v16Q24 */
    	migrateDatabase_fromVersion(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	pageSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	schema(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDbFileURL(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setMaxSizeInBytes(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@?24 */
    	setMaxStorageSize_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setPageSize(...args: any[]): any;
  }
}

declare const MSDBStorage: sketchInternal.MSDBStorage;

