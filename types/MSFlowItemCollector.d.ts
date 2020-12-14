// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlowItemCollector extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=_artboardsByID, attributes=(retain,nonatomic) */
    	artboardsByID(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSArray", ivar=_artboardsByRect, attributes=(retain,nonatomic) */
    	artboardsByRect(): cocoascript.NSArray;
    /* typeEncoding=@"NSDictionary", ivar=_collectedFlows, attributes=(copy,nonatomic) */
    	collectedFlows(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSImmutableDocumentData;
    /* typeEncoding=@"MSImmutablePage", ivar=_page, attributes=(retain,nonatomic) */
    	page(): MSImmutablePage;
    /* typeEncoding=@"NSMutableArray", ivar=_symbolMasterStack, attributes=(retain,nonatomic) */
    	symbolMasterStack(): cocoascript.NSMutableArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	artboardRectsIntersectingSegmentBounds_excludingArtboards(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	artboardsByID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	artboardsByRect(...args: any[]): any;
    /* typeEncoding=@132@0:8@16@24{MSFlowInfo={MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}{MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}q}32@120c128 */
    	collectFlowForLayer_destinationArtboardAncestry_flowInfo_clipToRects_mayDrawHotspotBounds(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	collectFlows(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collectedFlows(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	destinationArtboardAncestryForFlow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	flowKeyForLayerAncestry_destinationArtboardAncestry_clipToRects(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithPage_document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	page(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	pushSymbolMaster_onStackInBlock(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24c32@36 */
    	recursivelyCollectFlowsForLayer_ancestors_mayDrawHotspotBounds_existingFlows(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArtboardsByID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArtboardsByRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCollectedFlows(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSymbolMasterStack(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldInvalidateCollectedFlowsWithDiff(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolMasterStack(...args: any[]): any;
  }
}

declare const MSFlowItemCollector: sketchInternal.MSFlowItemCollector;

