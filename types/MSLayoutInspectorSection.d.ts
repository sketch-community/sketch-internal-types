// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayoutInspectorSection extends MSBaseInspectorSection {
    /* typeEncoding=@"MSCollapsibleHeaderInspectorItem", ivar=_layoutHeader, attributes=(retain,nonatomic) */
    	layoutHeader(): MSCollapsibleHeaderInspectorItem;
    /* typeEncoding=@"MSLayoutInspectorItem", ivar=_layoutItem, attributes=(retain,nonatomic) */
    	layoutItem(): MSLayoutInspectorItem;
    /* typeEncoding=@"MSMinOrMaxSizeLayoutInspectorItem", ivar=_layoutSizeHeightItem, attributes=(retain,nonatomic) */
    	layoutSizeHeightItem(): MSMinOrMaxSizeLayoutInspectorItem;
    /* typeEncoding=@"MSMinOrMaxSizeLayoutInspectorItem", ivar=_layoutSizeWidthItem, attributes=(retain,nonatomic) */
    	layoutSizeWidthItem(): MSMinOrMaxSizeLayoutInspectorItem;
    /* typeEncoding=@24@0:8@16 */
    	createLayoutInspectorHeaderForSection(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	inferredLayoutAxes(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	item_wantsSectionToCollapse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layoutHeader(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layoutItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layoutSizeHeightItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layoutSizeWidthItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayoutHeader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayoutItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayoutSizeHeightItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayoutSizeWidthItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolMasters(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateItems(): void;
    /* typeEncoding=c32@0:8@16@24 */
    	wantsSeparatorBetweenView_andView(...args: any[]): any;
  }
}

declare const MSLayoutInspectorSection: sketchInternal.MSLayoutInspectorSection;

