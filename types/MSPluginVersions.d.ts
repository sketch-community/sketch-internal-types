// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginVersions extends NSObject {
    /* typeEncoding=@"NSMutableDictionary", ivar=__versionsDictionary, attributes=(assign,nonatomic,readonly) */
    	_versionsDictionary(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSURL", ivar=_appcastURL, attributes=(copy,nonatomic,readonly) */
    	appcastURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_identifier, attributes=(copy,nonatomic,readonly) */
    	identifier(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	latestVersionAvailable(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	versions(): cocoascript.NSArray;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	versionsDictionary(): cocoascript.NSDictionary;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	_versionsDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addVersions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	appcastURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	downloadURLForVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithIdentifier_appcastURL(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isUpdateAvailableForVersion(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isVersionDownloaded(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isVersionListed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	latestVersionAvailable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	versions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	versionsDictionary(...args: any[]): any;
  }
}

declare const MSPluginVersions: sketchInternal.MSPluginVersions;

