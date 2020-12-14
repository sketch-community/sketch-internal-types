// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSKeychainUtil extends NSObject {
    /* typeEncoding=i24@0:8@16 */
    	static addSecItem(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	static clear(...args: any[]): any;
    /* typeEncoding=i24@0:8@16 */
    	static deleteSecItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static deleteStringForKey(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static deleteStringForKey_withServiceName(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static generateItem_withServiceName(...args: any[]): any;
    /* typeEncoding=i32@0:8@16r^^v24 */
    	static secItemCopyMatchingQuery_result(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	static storeString_forKey(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	static storeString_forKey_withServiceName(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^i24 */
    	static stringForKey_statusCode(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24^i32 */
    	static stringForKey_withServiceName_statusCode(...args: any[]): any;
  }
}

declare const MSKeychainUtil: sketchInternal.MSKeychainUtil;

