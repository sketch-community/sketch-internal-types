// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataPreferenceItem extends NSObject {
    /* typeEncoding=@"MSBuiltinDataSupplierGroup", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	builtinDataGroup(): MSBuiltinDataSupplierGroup;
    /* typeEncoding=c, ivar=(null), attributes=(assign,readonly) */
    	canBeDeleted(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canRevealInFinder(): boolean;
    /* typeEncoding=@"MSDataTableCellView", ivar=_cellView, attributes=(assign,nonatomic,weak) */
    	cellView(): MSDataTableCellView;
    /* typeEncoding=@"MSDataSupplierGroup", ivar=_dataGroup, attributes=(assign,nonatomic,readonly) */
    	dataGroup(): MSDataSupplierGroup;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	enabled(): boolean;
    /* typeEncoding=@"MSLocalDataSupplierGroup", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	localDataGroup(): MSLocalDataSupplierGroup;
    /* typeEncoding=@"NSString", ivar=_modificationDate, attributes=(assign,nonatomic,readonly) */
    	modificationDate(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	namePlusPluginName(): cocoascript.NSString;
    /* typeEncoding=@"MSPluginBundle", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pluginBundle(): MSPluginBundle;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pluginBundleIcon(): cocoascript.NSImage;
    /* typeEncoding=@"MSPluginDataSupplierGroup", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pluginDataGroup(): MSPluginDataSupplierGroup;
    /* typeEncoding=@"NSImage", ivar=_preview, attributes=(retain,nonatomic) */
    	preview(): cocoascript.NSImage;
    /* typeEncoding=@"NSColor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	primaryTextFieldColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSColor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	secondaryTextFieldColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSString", ivar=_secondaryTitle, attributes=(retain,nonatomic) */
    	secondaryTitle(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	valid(): boolean;
    /* typeEncoding=@16@0:8 */
    	static keyPathsForValuesAffectingPrimaryTextFieldColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static keyPathsForValuesAffectingSecondaryTextFieldColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static keyPathsForValuesAffectingSecondaryTitle(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static preferenceItemForLocalData(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	builtinDataGroup(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBeDeleted(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canRevealInFinder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cellView(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	commaSeperatedListOfDataSupplierNames(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataTypeString(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enabled(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localDataGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modificationDate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	namePlusPluginName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginBundle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginBundleIcon(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pluginDataGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preview(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	primaryTextFieldColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryTextFieldColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondaryTitle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCellView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreview(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondaryTitle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
  }
}

declare const MSDataPreferenceItem: sketchInternal.MSDataPreferenceItem;

