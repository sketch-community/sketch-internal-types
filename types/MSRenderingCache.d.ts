// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRenderingCache extends NSObject {
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v40@0:8@16@24Q32 */
    	cacheObject_forKey_traits(...args: any[]): any;
    /* typeEncoding=v72@0:8@16@24Q32{CGRect={CGPoint=dd}{CGSize=dd}}40 */
    	cacheObject_forKey_traits_rect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	objectForKey(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@?24Q32 */
    	objectForKey_orCreateWithBlock_addToCacheWithTraits(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeObjectForKey(...args: any[]): any;
    /* typeEncoding=v56@0:8Q16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	removeObjectsWithTraits_orOutsideRect(...args: any[]): any;
  }
}

declare const MSRenderingCache: sketchInternal.MSRenderingCache;

