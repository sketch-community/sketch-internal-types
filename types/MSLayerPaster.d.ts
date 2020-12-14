// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerPaster extends NSObject {
    /* typeEncoding=@"NSMutableArray", ivar=_insertedSymbolMasters, attributes=(assign,nonatomic,readonly) */
    	insertedSymbolMasters(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableDictionary", ivar=_objectIDMap, attributes=(assign,nonatomic,readonly) */
    	objectIDMap(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"MSPasteboardLayers", ivar=_pasteboardLayers, attributes=(assign,nonatomic,readonly) */
    	pasteboardLayers(): MSPasteboardLayers;
    /* typeEncoding=@24@0:8@16 */
    	duplicateLayers(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	insertPagePasteboardData_intoDocument_afterPage(...args: any[]): any;
    /* typeEncoding=@68@0:8@16@24{CGPoint=dd}32@48@56c64 */
    	insertPasteboardData_intoParent_atPosition_afterLayer_viewport_fitToParent(...args: any[]): any;
    /* typeEncoding=@56@0:8@16@24{CGPoint=dd}32@48 */
    	insertPasteboardData_intoParent_atPosition_beforeLayer(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	insertPasteboardData_onPage_withHint_viewPort(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	parentForData_hint_page(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	parentForData_hint_page_viewPort(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addReferencedSymbolsToDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addSharedStylesInDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addSharedSwatchesInDocument(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	allowedRectForViewport_root(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}64@0:8{CGSize=dd}16{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    	centerSize_inAllowedRect(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	ensureSymbolMastersIn_haveUniqueIDInDocument(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}72@0:8{CGSize=dd}16@32{CGRect={CGPoint=dd}{CGSize=dd}}40 */
    	findFirstAvailablePositionForSize_nextToArtboardsOnPage_inAllowedRect(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	fitCombinedRectForLayers_parent_viewport(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	fixupAfterPastingLayers_intoParent(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithPasteboardLayers(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	insertPagePasteboardDataIntoDocument_afterPage(...args: any[]): any;
    /* typeEncoding=@60@0:8@16{CGPoint=dd}24@40@48c56 */
    	insertPasteboardDataIntoParent_atPosition_afterLayer_viewport_fitToParent(...args: any[]): any;
    /* typeEncoding=@48@0:8@16{CGPoint=dd}24@40 */
    	insertPasteboardDataIntoParent_atPosition_beforeLayer(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	insertPasteboardDataOnPage_withHint_viewPort(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertedSymbolMasters(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	mapObjectIDsFrom_to(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	objectIDMap(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	parentForDataWithHint_page(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	parentForDataWithHint_page_viewPort(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pasteboardLayers(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	prepareToInsertLayers_intoDocument(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	rectByMaintainingOriginalPositionInRoot(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeDisconnectedFlowsFromLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	reparentLayersOutsideOfArtboardParent(...args: any[]): any;
    /* typeEncoding=@56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	rightmostArtboardOnPage_intersectingRect(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16@32 */
    	setCombinedOrigin_forLayers(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}40@0:8@16@24^c32 */
    	targetRectForArtboardPasteboardDataWithRoot_viewport_canMoveViewport(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}40@0:8@16@24^c32 */
    	targetRectForPasteboardDataInViewPort_root_canMoveViewport(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateOverrides(): void;
    /* typeEncoding=c56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	wouldArtboardWithRect_intersectOtherArtboardsOnPage(...args: any[]): any;
  }
}

declare const MSLayerPaster: sketchInternal.MSLayerPaster;

