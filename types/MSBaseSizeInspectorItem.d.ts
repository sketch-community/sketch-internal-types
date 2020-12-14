// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBaseSizeInspectorItem extends MSInspectorItem {
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	accessory(): number;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSSizeInspectorValueAdaptor", ivar=_heightAdapter, attributes=(retain,nonatomic) */
    	heightAdapter(): MSSizeInspectorValueAdaptor;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_heightField, attributes=(retain,nonatomic) */
    	heightField(): MSInlineUpDownTextField;
    /* typeEncoding=@"NSButton", ivar=_interTextFieldButton, attributes=(retain,nonatomic) */
    	interTextFieldButton(): cocoascript.NSButton;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSSizeInspectorValueAdaptor", ivar=_widthAdapter, attributes=(retain,nonatomic) */
    	widthAdapter(): MSSizeInspectorValueAdaptor;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_widthField, attributes=(retain,nonatomic) */
    	widthField(): MSInlineUpDownTextField;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	accessory(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowFloatValues(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	heightAdapter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	heightField(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	inspectorValueAdaptor_didEncounterError(...args: any[]): any;
    /* typeEncoding=c48@0:8@16@24@32@40 */
    	inspectorValueAdaptor_validateValue_forModel_context(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	inspectorValueAdaptorAllowFloat(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	inspectorValueAdaptorDidChangeValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	interTextFieldButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeightAdapter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeightField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInterTextFieldButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWidthAdapter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWidthField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupAccessoryButton(): void;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=v16@0:8 */
    	updateUI(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@16@0:8 */
    	widthAdapter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	widthField(...args: any[]): any;
  }
}

declare const MSBaseSizeInspectorItem: sketchInternal.MSBaseSizeInspectorItem;

