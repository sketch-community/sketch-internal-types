// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSViewControllerHostingCell extends NSTableCellView {
    /* typeEncoding=@"NSViewController", ivar=_hostedItem, attributes=(retain,nonatomic) */
    	hostedItem(): cocoascript.NSViewController;
    /* typeEncoding=@"<MSInspectorItemProvider>", ivar=_itemOwner, attributes=(assign,nonatomic,weak) */
    	itemOwner(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	hostedItem(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	installItem_owner_withParentViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	itemOwner(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    	popHostedItemAndGetOwner(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHostedItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setItemOwner(...args: any[]): any;
  }
}

declare const MSViewControllerHostingCell: sketchInternal.MSViewControllerHostingCell;

