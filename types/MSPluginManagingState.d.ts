// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginManagingState extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=_incompatiblePluginVersions, attributes=(copy,nonatomic) */
    	incompatiblePluginVersions(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSDictionary", ivar=_metadata, attributes=(copy,nonatomic) */
    	metadata(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSURL", ivar=_metadataURL, attributes=(assign,nonatomic,readonly) */
    	metadataURL(): cocoascript.NSURL;
    /* typeEncoding=@16@0:8 */
    	existingDownloadededBlacklistURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	incompatiblePlugins(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	incompatiblePluginVersions(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithMetadataURL(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	isPluginVersion_incompatibleWithVersion(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	isPluginWithIdentifier_incompatibleWithVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadataURL(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	metadataValueForKey_identifier(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	registerIncompatibilityForPluginIdentifier_withVersion(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	registerPluginIncompatibilityForVersions(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeDisableOverrides(): void;
    /* typeEncoding=v16@0:8 */
    	removeIncompatibilityRegistrations(): void;
    /* typeEncoding=v16@0:8 */
    	resetIncompatiblePluginMetadata(): void;
    /* typeEncoding=v36@0:8c16@20@28 */
    	setEnabled_forPluginIdentifier_withVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIncompatiblePluginVersions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetadata(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	setMetadataValue_forKey_identifier(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	setPluginMetadaDictionary_forIdentifier(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	shouldEnablePluginIdentifier_withVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateMetadataWithPluginIndentifiers(...args: any[]): any;
  }
}

declare const MSPluginManagingState: sketchInternal.MSPluginManagingState;

