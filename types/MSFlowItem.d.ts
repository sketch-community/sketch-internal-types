// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlowItem extends NSObject {
    /* typeEncoding=@"NSSet", ivar=_clipRects, attributes=(copy,nonatomic,readonly) */
    	clipRects(): cocoascript.NSSet;
    /* typeEncoding=@"NSSet", ivar=_flowInfluencingLayerIDs, attributes=(copy,nonatomic,readonly) */
    	flowInfluencingLayerIDs(): cocoascript.NSSet;
    /* typeEncoding={MSFlowInfo={MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}{MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}q}, ivar=_flowInfo, attributes=(assign,nonatomic,readonly) */
    	flowInfo(): MSFlowInfo;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	flowType(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldDrawSourceLayerBounds(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldDrawSourceLineAndTip(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_sourceLayerBounds, attributes=(assign,nonatomic,readonly) */
    	sourceLayerBounds(): CGRect;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	startPoint(): CGPoint;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	clipRects(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	endPoint(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	endPointDisplacement(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowInfluencingLayerIDs(...args: any[]): any;
    /* typeEncoding={MSFlowInfo={MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}{MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}q}16@0:8 */
    	flowInfo(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	flowSegmentForZoomLevel(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	flowType(...args: any[]): any;
    /* typeEncoding=@152@0:8{MSFlowInfo={MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}{MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}q}16@104@112{CGRect={CGPoint=dd}{CGSize=dd}}120 */
    	initWithFlowInfo_flowInfluencingLayerIDs_clipToRects_sourceLayerBounds(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawSourceLayerBounds(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawSourceLineAndTip(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	sourceLayerBounds(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	startPoint(...args: any[]): any;
  }
}

declare const MSFlowItem: sketchInternal.MSFlowItem;

