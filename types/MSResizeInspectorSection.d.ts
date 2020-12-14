// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSResizeInspectorSection extends MSBaseInspectorSection {
    /* typeEncoding=@"MSCollapsibleHeaderInspectorItem", ivar=_resizeHeader, attributes=(retain,nonatomic) */
    	resizeHeader(): MSCollapsibleHeaderInspectorItem;
    /* typeEncoding=@"MSResizeInspectorItem", ivar=_resizeItem, attributes=(retain,nonatomic) */
    	resizeItem(): MSResizeInspectorItem;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	item_wantsSectionToCollapse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	resizeHeader(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	resizeItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setResizeHeader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setResizeItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateItems(): void;
  }
}

declare const MSResizeInspectorSection: sketchInternal.MSResizeInspectorSection;

