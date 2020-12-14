// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLogAction extends MSAction {
    /* typeEncoding=@"NSDictionary", ivar=_latestLog, attributes=(retain,nonatomic) */
    	latestLog(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSMutableDictionary", ivar=_logs, attributes=(retain,nonatomic) */
    	logs(): cocoascript.NSMutableDictionary;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	URLForLogFile(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	URLForLogFolder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	clearLogFor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextForActionObservers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	latestLog(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	log_from(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	logStringFor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	logs(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLatestLog(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLogs(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	writeToLogFile(...args: any[]): any;
  }
}

declare const MSLogAction: sketchInternal.MSLogAction;

