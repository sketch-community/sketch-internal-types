// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBaseBlurInspectorItem extends MSStylePartInspectorItem {
    /* typeEncoding=@"NSMenuItem", ivar=_backgroundBlurMenuItem, attributes=(retain,nonatomic) */
    	backgroundBlurMenuItem(): cocoascript.NSMenuItem;
    /* typeEncoding=@"NSPopUpButton", ivar=_blurPopUp, attributes=(retain,nonatomic) */
    	blurPopUp(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSMenuItem", ivar=_multipleBlursMenuItem, attributes=(retain,nonatomic) */
    	multipleBlursMenuItem(): cocoascript.NSMenuItem;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_radiusAdapter, attributes=(retain,nonatomic) */
    	radiusAdapter(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSUpDownTextField", ivar=_radiusField, attributes=(retain,nonatomic) */
    	radiusField(): MSUpDownTextField;
    /* typeEncoding=@"NSSlider", ivar=_radiusSlider, attributes=(retain,nonatomic) */
    	radiusSlider(): cocoascript.NSSlider;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	backgroundBlurMenuItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	blurPopUp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	blurPopUpAction(...args: any[]): any;
    /* typeEncoding=Q24@0:8q16 */
    	blurTypeFromPopUpMenuIndex(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	multipleBlursMenuItem(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=q24@0:8Q16 */
    	popUpMenuIndexFromBlurType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	radiusAdapter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	radiusField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	radiusSlider(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackgroundBlurMenuItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBlurPopUp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMultipleBlursMenuItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRadiusAdapter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRadiusField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRadiusSlider(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSBaseBlurInspectorItem: sketchInternal.MSBaseBlurInspectorItem;

