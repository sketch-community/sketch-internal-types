// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MS_Reachability extends NSObject {
    /* typeEncoding=^{__SCNetworkReachability=}, ivar=_reachabilityRef, attributes=(assign,nonatomic) */
    	reachabilityRef(): any;
    /* typeEncoding=@16@0:8 */
    	static reachabilityForInternetConnection(...args: any[]): any;
    /* typeEncoding=@24@0:8r^{sockaddr=CC[14c]}16 */
    	static reachabilityWithAddress(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static reachabilityWithHostName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	connectionRequired(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	currentReachabilityStatus(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=q20@0:8I16 */
    	networkStatusForFlags(...args: any[]): any;
    /* typeEncoding=^{__SCNetworkReachability=}16@0:8 */
    	reachabilityRef(...args: any[]): any;
    /* typeEncoding=v24@0:8^{__SCNetworkReachability=}16 */
    	setReachabilityRef(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startNotifier(): void;
    /* typeEncoding=v16@0:8 */
    	stopNotifier(): void;
  }
}

declare const MS_Reachability: sketchInternal.MS_Reachability;

