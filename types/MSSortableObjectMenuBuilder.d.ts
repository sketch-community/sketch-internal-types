// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSortableObjectMenuBuilder extends NSObject {
    /* typeEncoding=@"NSMapTable", ivar=_collatedImages, attributes=(assign,nonatomic,readonly) */
    	collatedImages(): cocoascript.NSMapTable;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSMenuBuilderDelegate>", ivar=_delegate, attributes=(assign,nonatomic,readonly,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v56@0:8@16@24@32@40:48 */
    	addSortableObjects_selectedObjects_toPopUpButton_target_selector(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24@32@40:48 */
    	addSortedSharedObjects_selectedObjects_toMenu_target_selector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyStyleToMenuItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collatedImages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDelegate(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	menu_willHighlightItem(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24:32@40 */
    	menuItemWithName_target_selector_sharedObjects(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32:40 */
    	menuItemsForSortableObjects_selectedObjects_target_selector(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32:40 */
    	menuItemsForSortedSharedObjects_selectedObjects_target_selector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuWillOpen(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	prepareForDisplay(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	selectMenuItemsInPopUpButton_selectedObjects(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sharedObjectsFromDescriptorsContents(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateImages(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
  }
}

declare const MSSortableObjectMenuBuilder: sketchInternal.MSSortableObjectMenuBuilder;

