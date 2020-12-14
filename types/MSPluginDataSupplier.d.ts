// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginDataSupplier extends MSDataSupplier {
    /* typeEncoding=@"NSString", ivar=_commandIdentifier, attributes=(assign,nonatomic,readonly) */
    	commandIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_dynamicDataKey, attributes=(assign,nonatomic,readonly) */
    	dynamicDataKey(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_pluginIdentifier, attributes=(assign,nonatomic,readonly) */
    	pluginIdentifier(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_registered, attributes=(assign,nonatomic) */
    	registered(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	subgroupName(): cocoascript.NSString;
    /* typeEncoding=@40@0:8@16@24@32 */
    	identifierWithPluginIdentifier_commandIdentifier_dynamicDataKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	commandIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dynamicDataKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@?32@?40 */
    	generateDataForObjects_dataSupplierManager_dataApplier_completionHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	imageFileURLForDataItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@56@0:8@16@24@32@40@48 */
    	initWithPluginIdentifier_commandIdentifier_dataName_dataTypeStringRepresentation_dynamicDataKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginIdentifier(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	registered(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRegistered(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	splitString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subgroupName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
  }
}

declare const MSPluginDataSupplier: sketchInternal.MSPluginDataSupplier;

