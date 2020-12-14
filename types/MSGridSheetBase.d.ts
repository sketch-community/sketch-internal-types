// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGridSheetBase extends CHSheetController {
    /* typeEncoding=@"NSColor", ivar=(null), attributes=(assign,nonatomic,weak) */
    	darkColor(): cocoascript.NSColor;
    /* typeEncoding=@"MSColorWell", ivar=_darkColorButton, attributes=(retain,nonatomic) */
    	darkColorButton(): MSColorWell;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSColor", ivar=(null), attributes=(assign,nonatomic,weak) */
    	lightColor(): cocoascript.NSColor;
    /* typeEncoding=@"MSColorWell", ivar=_lightColorButton, attributes=(retain,nonatomic) */
    	lightColorButton(): MSColorWell;
    /* typeEncoding=@"NSMapTable", ivar=_originalSettings, attributes=(retain,nonatomic) */
    	originalSettings(): cocoascript.NSMapTable;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	shouldSaveDefaults(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSImmutableBaseGrid", ivar=_templateImmutable, attributes=(retain,nonatomic) */
    	templateImmutable(): MSImmutableBaseGrid;
    /* typeEncoding=@"MSBaseGrid", ivar=_templateObject, attributes=(copy,nonatomic) */
    	templateObject(): MSBaseGrid;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	applyObject_toLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyTemplateObjectToLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@24@0:8@16 */
    	baseObjectForRootLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	buildApplicableRootLayerList(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirm(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	darkColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	darkColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	darkColorUpdated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	gridChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lightColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lightColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	lightColorUpdated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalSettings(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareColorPickers(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshCanvas(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshView(): void;
    /* typeEncoding=v16@0:8 */
    	saveCurrentSettingsAsDefault(): void;
    /* typeEncoding=v24@0:8@16 */
    	setDarkColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDarkColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLightColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLightColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalSettings(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldSaveDefaults(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTemplateImmutable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTemplateObject(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldSaveDefaults(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	templateImmutable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	templateObject(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	turnOffForcedDrawing(): void;
  }
}

declare const MSGridSheetBase: sketchInternal.MSGridSheetBase;

