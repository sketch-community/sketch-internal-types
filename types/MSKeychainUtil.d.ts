// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSKeychainUtil extends NSObject {
    /* typeEncoding=i24@0:8@16 */
    	addSecItem(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	clear(...args: any[]): any;
    /* typeEncoding=i24@0:8@16 */
    	deleteSecItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	deleteStringForKey(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	deleteStringForKey_withServiceName(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	generateItem_withServiceName(...args: any[]): any;
    /* typeEncoding=i32@0:8@16r^^v24 */
    	secItemCopyMatchingQuery_result(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	storeString_forKey(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	storeString_forKey_withServiceName(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^i24 */
    	stringForKey_statusCode(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24^i32 */
    	stringForKey_withServiceName_statusCode(...args: any[]): any;
  }
}

declare const MSKeychainUtil: sketchInternal.MSKeychainUtil;

