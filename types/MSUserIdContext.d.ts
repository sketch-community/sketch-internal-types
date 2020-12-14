// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSUserIdContext extends NSObject {
    /* typeEncoding=@"MSUserIdHistoryInfo", ivar=_currentUserIdInfo, attributes=(retain,nonatomic) */
    	currentUserIdInfo(): MSUserIdHistoryInfo;
    /* typeEncoding=@"NSHashTable", ivar=_delegates, attributes=(retain,nonatomic) */
    	delegates(): cocoascript.NSHashTable;
    /* typeEncoding=@"NSMutableArray", ivar=_userIdHistory, attributes=(retain,nonatomic) */
    	userIdHistory(): cocoascript.NSMutableArray;
    /* typeEncoding=c24@0:8@16 */
    	isUserIdValidForAppCenter(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isUserIdValidForOneCollector(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	prefixedUserIdFromUserId(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetSharedInstance(): void;
    /* typeEncoding=@16@0:8 */
    	sharedInstance(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addDelegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearUserIdHistory(): void;
    /* typeEncoding=@16@0:8 */
    	currentUserIdInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegates(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentUserIdInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserIdHistory(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userId(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	userIdAt(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userIdHistory(...args: any[]): any;
  }
}

declare const MSUserIdContext: sketchInternal.MSUserIdContext;

