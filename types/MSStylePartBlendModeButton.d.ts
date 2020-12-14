// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSStylePartBlendModeButton extends MSInspectorButton {
    /* typeEncoding=@"NSMenu", ivar=_blendModeMainMenu, attributes=(retain,nonatomic) */
    	blendModeMainMenu(): cocoascript.NSMenu;
    /* typeEncoding=@"NSMenu", ivar=_blendModeMenu, attributes=(retain,nonatomic) */
    	blendModeMenu(): cocoascript.NSMenu;
    /* typeEncoding=@"NSSet", ivar=_blendModes, attributes=(retain,nonatomic) */
    	blendModes(): cocoascript.NSSet;
    /* typeEncoding=@"<MSStylePartBlendModeButtonDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSArray", ivar=_styleParts, attributes=(retain,nonatomic) */
    	styleParts(): cocoascript.NSArray;
    /* typeEncoding=@24@0:8@16 */
    	static toolTipForBlendModes(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	_buildBlendModeMenu(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@16@0:8 */
    	blendModeMainMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	blendModeMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	blendModes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeBlendMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	displayNameForColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	menuItemTitleForStylePart(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBlendModeMainMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBlendModeMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBlendModes(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyleParts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showBlendModeMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleParts(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	stylePartsForMenuItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	swatchForColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	uniqueColorsInShadowStyleParts(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	uniqueFillTypesInStyleParts(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateButtonState(): void;
    /* typeEncoding=v16@0:8 */
    	updateStylePartsMenuState(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
  }
}

declare const MSStylePartBlendModeButton: sketchInternal.MSStylePartBlendModeButton;

