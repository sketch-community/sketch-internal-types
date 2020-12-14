// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextInspectorSection extends MSBaseInspectorSection {
    /* typeEncoding=@"MSAdvancedTextLayerInspectorItem", ivar=_advancedTextItem, attributes=(retain,nonatomic) */
    	advancedTextItem(): MSAdvancedTextLayerInspectorItem;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSTextHeaderInspectorItem", ivar=_headerItem, attributes=(retain,nonatomic) */
    	headerItem(): MSTextHeaderInspectorItem;
    /* typeEncoding=@"MSMissingFontItem", ivar=_missingFontItem, attributes=(retain,nonatomic) */
    	missingFontItem(): MSMissingFontItem;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSTextLayerInspectorItem", ivar=_textItem, attributes=(retain,nonatomic) */
    	textItem(): MSTextLayerInspectorItem;
    /* typeEncoding=@"BCRateLimiter", ivar=_updateLimiter, attributes=(retain,nonatomic) */
    	updateLimiter(): BCRateLimiter;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	advancedTextItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doUpdateDisplayedValues(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	headerItem(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isShowingAdvancedItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isShowingAdvancedItem(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	item_wantsSectionToCollapse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	itemWantsToggleDetailSettings(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	missingFontItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAdvancedTextItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeaderItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMissingFontItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpdateLimiter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textViewDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateItems(): void;
    /* typeEncoding=@16@0:8 */
    	updateLimiter(...args: any[]): any;
  }
}

declare const MSTextInspectorSection: sketchInternal.MSTextInspectorSection;

