// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextOverrideEventHandler extends MSTextInputEventHandler {
    /* typeEncoding=@"MSImmutableSymbolMaster", ivar=_immutableMaster, attributes=(retain,nonatomic) */
    	immutableMaster(): MSImmutableSymbolMaster;
    /* typeEncoding=@"MSSymbolInstance", ivar=_instance, attributes=(retain,nonatomic) */
    	instance(): MSSymbolInstance;
    /* typeEncoding=@"MSOverrideRepresentation", ivar=_override, attributes=(retain,nonatomic) */
    	override(): MSOverrideRepresentation;
    /* typeEncoding=@"MSOverrideValue", ivar=_overrideValue, attributes=(retain,nonatomic) */
    	overrideValue(): MSOverrideValue;
    /* typeEncoding=@"MSImmutableTextStyle", ivar=_style, attributes=(retain,nonatomic) */
    	style(): MSImmutableTextStyle;
    /* typeEncoding=@"MSTextLayer", ivar=_textLayer, attributes=(retain,nonatomic) */
    	textLayer(): MSTextLayer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	absoluteFrameForRect(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	accumulatedScale(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	attributedStringValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultTextStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@16@0:8 */
    	immutableMaster(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableTextLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	instance(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	override(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overrideValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImmutableMaster(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInstance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverride(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverrideValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupSelectedOverride(): void;
    /* typeEncoding=@16@0:8 */
    	stringValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	style(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleOverrideRepresentation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unmodifiedDefaultTextStyle(...args: any[]): any;
  }
}

declare const MSTextOverrideEventHandler: sketchInternal.MSTextOverrideEventHandler;

