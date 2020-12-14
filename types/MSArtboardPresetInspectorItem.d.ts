// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArtboardPresetInspectorItem extends MSInspectorItem {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSInspectorPopoverButton", ivar=_presetButton, attributes=(retain,nonatomic) */
    	presetButton(): MSInspectorPopoverButton;
    /* typeEncoding=@"MSArtboardPresetStore", ivar=_presetStore, attributes=(assign,nonatomic,readonly) */
    	presetStore(): MSArtboardPresetStore;
    /* typeEncoding=@"MSArtboardPresetsViewController", ivar=_presetsViewController, attributes=(retain,nonatomic) */
    	presetsViewController(): MSArtboardPresetsViewController;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c24@0:8@16 */
    	canHandleLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8q16 */
    	applyOrientation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyPreset(...args: any[]): any;
    /* typeEncoding=v32@0:8@16q24 */
    	artboardPresetsViewController_didSelectOrientation(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	artboardPresetsViewController_didSelectPreset(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	didChangeOrientation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dismissAllPresentedViewControllers(): void;
    /* typeEncoding=v24@0:8@16 */
    	dismissViewController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	displayImageForPreset(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	editArtboardPresetViewController_savePreset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	orientation(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	orientationOfArtboard(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	presentViewController_animator(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presetButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presetStore(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presetsViewController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshPresetButtonAndPopover(): void;
    /* typeEncoding=@16@0:8 */
    	selectedPreset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPresetButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPresetsViewController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	showCustomPresetSheet_preset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showPresets(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	sizeStringForPreset_match(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleOrientation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
  }
}

declare const MSArtboardPresetInspectorItem: sketchInternal.MSArtboardPresetInspectorItem;

