// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLogDBStorage extends MSDBStorage {
    /* typeEncoding=@"NSMutableDictionary", ivar=_batches, attributes=(retain,nonatomic) */
    	batches(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_groupIdColumnIndex, attributes=(assign,nonatomic,readonly) */
    	groupIdColumnIndex(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=_idColumnIndex, attributes=(assign,nonatomic,readonly) */
    	idColumnIndex(): number;
    /* typeEncoding=Q, ivar=_logColumnIndex, attributes=(assign,nonatomic,readonly) */
    	logColumnIndex(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=Q, ivar=_targetTokenColumnIndex, attributes=(assign,nonatomic,readonly) */
    	targetTokenColumnIndex(): number;
    /* typeEncoding=@"MSEncrypter", ivar=_targetTokenEncrypter, attributes=(assign,nonatomic,readonly) */
    	targetTokenEncrypter(): MSEncrypter;
    /* typeEncoding=i40@0:8@16@24^v32 */
    	static deleteLogsFromDBWithColumnValues_columnName_inOpenedDatabase(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	batches(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	buildKeyFormatWithCount(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	countLogs(...args: any[]): any;
    /* typeEncoding=v24@0:8^v16 */
    	createPriorityIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8^v16 */
    	customizeDatabase(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteLogFromDBWithId(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	deleteLogsFromDBWithColumnValue_columnName(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	deleteLogsFromDBWithColumnValues_columnName(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	deleteLogsWithBatchId_groupId(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	deleteLogsWithGroupId(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	groupIdColumnIndex(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	idColumnIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c48@0:8@16Q24@32@?40 */
    	loadLogsWithGroupId_limit_excludedTargetKeys_completionHandler(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	logColumnIndex(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	logsFromDBWithGroupId(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	logsWithCondition_andValues(...args: any[]): any;
    /* typeEncoding=v32@0:8^v16Q24 */
    	migrateDatabase_fromVersion(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24Q32 */
    	saveLog_withGroupId_flags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBatches(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	targetTokenColumnIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	targetTokenEncrypter(...args: any[]): any;
  }
}

declare const MSLogDBStorage: sketchInternal.MSLogDBStorage;

