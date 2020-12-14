// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSessionContext extends NSObject {
    /* typeEncoding=@"MSSessionHistoryInfo", ivar=_currentSessionInfo, attributes=(retain,nonatomic) */
    	currentSessionInfo(): MSSessionHistoryInfo;
    /* typeEncoding=@"NSMutableArray", ivar=_sessionHistory, attributes=(retain,nonatomic) */
    	sessionHistory(): cocoascript.NSMutableArray;
    /* typeEncoding=v16@0:8 */
    	static resetSharedInstance(): void;
    /* typeEncoding=@16@0:8 */
    	static sharedInstance(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v20@0:8c16 */
    	clearSessionHistoryAndKeepCurrentSession(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentSessionInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sessionHistory(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sessionId(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sessionIdAt(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentSessionInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSessionHistory(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSessionId(...args: any[]): any;
  }
}

declare const MSSessionContext: sketchInternal.MSSessionContext;

