// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPlaceComponentEventHandler extends MSBasePlaceLayerEventHandler {
    /* typeEncoding=@"NSArray", ivar=_shareableObjectReferences, attributes=(retain,nonatomic) */
    	shareableObjectReferences(): cocoascript.NSArray;
    /* typeEncoding=@"NSDictionary", ivar=_storedDragImageProviders, attributes=(retain,nonatomic) */
    	storedDragImageProviders(): cocoascript.NSDictionary;
    /* typeEncoding=@36@0:8@16c24@28 */
    	makeLayerForComponentReference_forInserting_intoDocument(...args: any[]): any;
    /* typeEncoding=@40@0:8@16c24@28c36 */
    	makeLayerForComponentReference_forInserting_intoDocument_isForeign(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q24@0:8@16 */
    	draggingEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	draggingExited(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingUpdated(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	generatePreviewAndRefreshWhenDone(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@16@0:8 */
    	layersForInserting(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	pasteboardContainsComponent(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	performDragOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	readReferencesFromPasteboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setShareableObjectReferences(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStoredDragImageProviders(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shareableObjectReferences(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldEditLayerafterInsert(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowOverlayItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	storedDragImageProviders(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateDraggingItemsForDrag(...args: any[]): any;
  }
}

declare const MSPlaceComponentEventHandler: sketchInternal.MSPlaceComponentEventHandler;

