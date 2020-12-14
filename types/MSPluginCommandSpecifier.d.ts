// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginCommandSpecifier extends NSObject {
    /* typeEncoding=@"NSString", ivar=_commandIdentifier, attributes=(copy,nonatomic,readonly) */
    	commandIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_pluginBundleIdentifier, attributes=(copy,nonatomic,readonly) */
    	pluginBundleIdentifier(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	commandIdentifier(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithPluginBundleIdentifier_commandIdentifier(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToCommandSpecifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginBundleIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stringValue(...args: any[]): any;
  }
}

declare const MSPluginCommandSpecifier: sketchInternal.MSPluginCommandSpecifier;

