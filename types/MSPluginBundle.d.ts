// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginBundle extends NSObject {
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	alertIcon(): cocoascript.NSImage;
    /* typeEncoding=@"NSURL", ivar=_appcastURL, attributes=(copy,nonatomic,readonly) */
    	appcastURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_author, attributes=(copy,nonatomic,readonly) */
    	author(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_authorEmail, attributes=(copy,nonatomic,readonly) */
    	authorEmail(): cocoascript.NSString;
    /* typeEncoding=@"NSDictionary", ivar=_commands, attributes=(copy,nonatomic,readonly) */
    	commands(): cocoascript.NSDictionary;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isCompatible) */
    	compatible(): boolean;
    /* typeEncoding=@"NSString", ivar=_compatibleVersion, attributes=(copy,nonatomic,readonly) */
    	compatibleVersion(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_disableCocoaScriptPreprocessor, attributes=(assign,nonatomic) */
    	disableCocoaScriptPreprocessor(): boolean;
    /* typeEncoding=c, ivar=_enabled, attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,readonly) */
    	executableFileURLsAndArchitectures(): cocoascript.NSDictionary;
    /* typeEncoding=c, ivar=(null), attributes=(assign,readonly) */
    	hasUnsupportedBinaries(): boolean;
    /* typeEncoding=@"NSURL", ivar=_homepageURL, attributes=(copy,nonatomic,readonly) */
    	homepageURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	icon(): cocoascript.NSImage;
    /* typeEncoding=@"MSPluginBundleIconInfo", ivar=_iconInfo, attributes=(retain,nonatomic) */
    	iconInfo(): MSPluginBundleIconInfo;
    /* typeEncoding=@"NSString", ivar=_identifier, attributes=(copy,nonatomic,readonly) */
    	identifier(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_maximumCompatibleVersion, attributes=(copy,nonatomic,readonly) */
    	maximumCompatibleVersion(): cocoascript.NSString;
    /* typeEncoding=@"NSDictionary", ivar=_menuDescription, attributes=(copy,nonatomic) */
    	menuDescription(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic,readonly) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_pluginDescription, attributes=(copy,nonatomic,readonly) */
    	pluginDescription(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_suppliesData, attributes=(assign,nonatomic,readonly) */
    	suppliesData(): boolean;
    /* typeEncoding=@"NSURL", ivar=_url, attributes=(copy,nonatomic,readonly) */
    	url(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_version, attributes=(copy,nonatomic,readonly) */
    	version(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	versionedIdentifier(): cocoascript.NSString;
    /* typeEncoding=@40@0:8@16@24@32 */
    	commandsFromArray_sketchPluginURL_pluginBundle(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pluginBundleWithURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scriptDefaultTitle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	alertIcon(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	appcastURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	author(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	authorEmail(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	commands(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	compatibleVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	disableCocoaScriptPreprocessor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	executableFileURLsAndArchitectures(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasUnsupportedBinaries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	homepageURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	icon(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	iconInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initPluginBundleWithURL(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	initWithName_identifier_commands_icon(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isCompatible(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	logErrorString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	maximumCompatibleVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuDescription(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginDescription(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDisableCocoaScriptPreprocessor(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIconInfo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenuDescription(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	suppliesData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	url(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	urlForResourceNamed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	version(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	versionedIdentifier(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	writeToURL(...args: any[]): any;
  }
}

declare const MSPluginBundle: sketchInternal.MSPluginBundle;

