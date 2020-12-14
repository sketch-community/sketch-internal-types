// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLogContainer extends NSObject {
    /* typeEncoding=@"NSString", ivar=_batchId, attributes=(copy,nonatomic) */
    	batchId(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_logs, attributes=(retain,nonatomic) */
    	logs(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	batchId(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithBatchId_andLogs(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeLog(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	serializeLogWithPrettyPrinting(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBatchId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogs(...args: any[]): any;
  }
}

declare const MSLogContainer: sketchInternal.MSLogContainer;

