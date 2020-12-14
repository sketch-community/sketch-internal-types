// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSidebarListController extends NSObject {
    /* typeEncoding=@"<MSSidebarControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"MSDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly,weak) */
    	documentData(): MSDocumentData;
    /* typeEncoding=#, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pasteboardWriterClass(): any;
    /* typeEncoding=@, ivar=_rootObject, attributes=(assign,nonatomic,readonly) */
    	rootObject(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c40@0:8@16@24@32 */
    	canCopyNode_toParent_after(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	canMoveNode_toParent_after(...args: any[]): any;
    /* typeEncoding=c48@0:8@16@24@32@40 */
    	dataController_canCopyFromPasteboard_toParent_after(...args: any[]): any;
    /* typeEncoding=c48@0:8@16@24@32@40 */
    	dataController_canMoveFromPasteboard_toParent_after(...args: any[]): any;
    /* typeEncoding=c48@0:8@16@24@32@40 */
    	dataController_copyFromPasteboard_toParent_after(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	dataController_exportNodes_toFolder(...args: any[]): any;
    /* typeEncoding=c48@0:8@16@24@32@40 */
    	dataController_moveFromPasteboard_toParent_after(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	dataController_writeNodes_toPasteboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	dragTypesForDataController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDelegate(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layerForNode(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layersFromNodeArray(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	moveNode_toParent_after(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8@16@24 */
    	originalPositionOfLayersInPasteboard_forNewParent(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	pasteboardWriterClass(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	readDragNodesFromPasteboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rootObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
  }
}

declare const MSSidebarListController: sketchInternal.MSSidebarListController;

