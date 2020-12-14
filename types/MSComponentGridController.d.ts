// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSComponentGridController extends NSViewController {
    /* typeEncoding=@"NSCollectionView", ivar=collectionView, attributes=(retain,nonatomic) */
    	collectionView(): cocoascript.NSCollectionView;
    /* typeEncoding=@"_TtC6Sketch22ComponentGridEmptyView", ivar=emptyView, attributes=(retain,nonatomic) */
    	emptyView(): _TtC6Sketch22ComponentGridEmptyView;
    /* typeEncoding=@"MSComponentInspectorDriver", ivar=inspectorDriver, attributes=(assign,nonatomic,weak) */
    	inspectorDriver(): MSComponentInspectorDriver;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	collectionView(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collectionView_didDeselectItemsAtIndexPaths(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collectionView_didSelectItemsAtIndexPaths(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24{CGPoint=dd}32Q48 */
    	collectionView_draggingSession_endedAtPoint_dragOperation(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24{CGPoint=dd}32@48 */
    	collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexPaths(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collectionView_itemForRepresentedObjectAtIndexPath(...args: any[]): any;
    /* typeEncoding={CGSize=dd}40@0:8@16@24q32 */
    	collectionView_layout_referenceSizeForHeaderInSection(...args: any[]): any;
    /* typeEncoding=q32@0:8@16q24 */
    	collectionView_numberOfItemsInSection(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collectionView_pasteboardWriterForItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	collectionView_viewForSupplementaryElementOfKind_atIndexPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteBackward(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doubleClick(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	emptyView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	group(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertNewline(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorDriver(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfSectionsInCollectionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCollectionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEmptyView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInspectorDriver(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateUserInterfaceItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
  }
}

declare const MSComponentGridController: sketchInternal.MSComponentGridController;

