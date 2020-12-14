// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPreferencesPluginInfo extends NSObject {
    /* typeEncoding=@"NSAttributedString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	attributedTitle(): cocoascript.NSAttributedString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	enableCheckboxTitle(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,getter=isEnabled) */
    	enabled(): boolean;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	homepage(): cocoascript.NSURL;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	icon(): cocoascript.NSImage;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isCompatible(): boolean;
    /* typeEncoding=c, ivar=_isUpdating, attributes=(assign,nonatomic) */
    	isUpdating(): boolean;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	namePlusAuthor(): cocoascript.NSString;
    /* typeEncoding=@"MSPluginBundle", ivar=_pluginBundle, attributes=(retain,nonatomic) */
    	pluginBundle(): MSPluginBundle;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	pluginDescription(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	suppliesData(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	updateAvailable(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	updateVersionString(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	version(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	warningString(): cocoascript.NSString;
    /* typeEncoding=@24@0:8@16 */
    	pluginInfoWithName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pluginInfoWithPluginBundle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	attributedTitle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	enableCheckboxTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	homepage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	icon(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isCompatible(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isUpdating(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	latestPluginUpdate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	namePlusAuthor(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginBundle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginDescription(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginManager(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsUpdating(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPluginBundle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	suppliesData(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateAvailable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updateVersionString(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	version(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	warningString(...args: any[]): any;
  }
}

declare const MSPreferencesPluginInfo: sketchInternal.MSPreferencesPluginInfo;

