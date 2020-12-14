// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInspectorTextfieldManager extends NSObject {
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_adaptor, attributes=(retain,nonatomic) */
    	adaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_hideSelectionOnEdit, attributes=(assign,nonatomic) */
    	hideSelectionOnEdit(): boolean;
    /* typeEncoding=@"MSInspectorItem", ivar=_item, attributes=(assign,nonatomic,weak) */
    	item(): MSInspectorItem;
    /* typeEncoding=c, ivar=_resetPointsOnEdit, attributes=(assign,nonatomic) */
    	resetPointsOnEdit(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSUpDownTextField", ivar=_textField, attributes=(retain,nonatomic) */
    	textField(): MSUpDownTextField;
    /* typeEncoding=@"NSArray", ivar=_touchBarItems, attributes=(retain,nonatomic) */
    	touchBarItems(): cocoascript.NSArray;
    /* typeEncoding=@64@0:8@16@24@32@40@48@56 */
    	static managerWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems(...args: any[]): any;
    /* typeEncoding=@72@0:8@16@24@32@40@48@56@64 */
    	static managerWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems_bindingOptions(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	adaptor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handleValueDidChange(): void;
    /* typeEncoding=c16@0:8 */
    	hideSelectionOnEdit(...args: any[]): any;
    /* typeEncoding=@72@0:8@16@24@32@40@48@56@64 */
    	initWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems_bindingOptions(...args: any[]): any;
    /* typeEncoding=@80@0:8@16@24@32@40@48@56c64c68@72 */
    	initWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems_hideSelectionOnEdit_resetPointsOnEdit_bindingOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	inspectorValueAdaptorDidChangeValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	item(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	resetPointsOnEdit(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAdaptor(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHideSelectionOnEdit(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setItem(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setResetPointsOnEdit(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTouchBarItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	touchBarItems(...args: any[]): any;
  }
}

declare const MSInspectorTextfieldManager: sketchInternal.MSInspectorTextfieldManager;

