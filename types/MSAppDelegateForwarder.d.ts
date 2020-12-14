// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAppDelegateForwarder extends MSDelegateForwarder {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	static load(): void;
    /* typeEncoding=v16@0:8 */
    	static resetSharedInstance(): void;
    /* typeEncoding=@16@0:8 */
    	static sharedInstance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	custom_setDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	originalClassForSetDelegate(...args: any[]): any;
    /* typeEncoding=^q16@0:8 */
    	swizzlingOnceToken(...args: any[]): any;
  }
}

declare const MSAppDelegateForwarder: sketchInternal.MSAppDelegateForwarder;

