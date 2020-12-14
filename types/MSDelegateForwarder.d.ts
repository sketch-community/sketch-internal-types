// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDelegateForwarder extends NSObject {
    /* typeEncoding=@"NSHashTable", ivar=_delegates, attributes=(retain,nonatomic) */
    	delegates(): cocoascript.NSHashTable;
    /* typeEncoding=@"NSDictionary", ivar=_deprecatedSelectors, attributes=(retain,nonatomic) */
    	deprecatedSelectors(): cocoascript.NSDictionary;
    /* typeEncoding=c, ivar=_enabled, attributes=(assign,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=@"NSMutableDictionary", ivar=_originalImplementations, attributes=(assign,nonatomic,readonly) */
    	originalImplementations(): cocoascript.NSMutableDictionary;
    /* typeEncoding=^?, ivar=_originalSetDelegateImp, attributes=(assign,nonatomic) */
    	originalSetDelegateImp(): any;
    /* typeEncoding=@"NSMutableSet", ivar=_selectorsToSwizzle, attributes=(assign,nonatomic,readonly) */
    	selectorsToSwizzle(): cocoascript.NSMutableSet;
    /* typeEncoding=@16@0:8 */
    	static enabledKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	static flushTraceBuffer(): void;
    /* typeEncoding=v16@0:8 */
    	static load(): void;
    /* typeEncoding=v16@0:8 */
    	static resetSharedInstance(): void;
    /* typeEncoding=@16@0:8 */
    	static sharedInstance(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8:16 */
    	addDelegateSelectorToSwizzle(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	addTraceBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	custom_setDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegates(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	deprecatedSelectors(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	forwardInvocation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	originalClassForSetDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalImplementations(...args: any[]): any;
    /* typeEncoding=^?16@0:8 */
    	originalSetDelegateImp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectorsToSwizzle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDeprecatedSelectors(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEnabledFromPlistForKey(...args: any[]): any;
    /* typeEncoding=v24@0:8^?16 */
    	setOriginalSetDelegateImp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	swizzleOriginalDelegate(...args: any[]): any;
    /* typeEncoding=^?40@0:8:16:24#32 */
    	swizzleOriginalSelector_withCustomSelector_originalClass(...args: any[]): any;
    /* typeEncoding=^q16@0:8 */
    	swizzlingOnceToken(...args: any[]): any;
  }
}

declare const MSDelegateForwarder: sketchInternal.MSDelegateForwarder;

