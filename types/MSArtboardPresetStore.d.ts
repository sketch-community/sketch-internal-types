// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArtboardPresetStore extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_categories, attributes=(assign,nonatomic,readonly) */
    	categories(): cocoascript.NSArray;
    /* typeEncoding=@"MSArtboardPresetsCategory", ivar=_customPresetsCategory, attributes=(assign,nonatomic,readonly) */
    	customPresetsCategory(): MSArtboardPresetsCategory;
    /* typeEncoding=Q16@0:8 */
    	indexOfLastSelectedCategory(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setIndexOfLastSelectedCategory(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSystemCategories(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	systemCategories(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	artboardPresetStoreDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	categories(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	customPresetsCategory(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@?24 */
    	enumeratePresetsInCategory_usingBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadUserPresets(): void;
    /* typeEncoding=@40@0:8@16{CGSize=dd}24 */
    	presetWithName_matchingSize(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGSize=dd}16@32 */
    	presetWithSize_preferredCategory(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	removePreset_error(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGSize=dd}16@32 */
    	resizablePresetMatchingSize_preferredCategory(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	savePreset_error(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	saveUserPresets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	suggestedNameForUserPreset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userPresetsURL(...args: any[]): any;
  }
}

declare const MSArtboardPresetStore: sketchInternal.MSArtboardPresetStore;

