// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerDraggingSnapTargetManager extends NSObject {
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic) */
    	snapMask(): number;
    /* typeEncoding=@"MSLayerPositioningTool", ivar=tool, attributes=(assign,nonatomic,readonly) */
    	tool(): MSLayerPositioningTool;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=visibleRect, attributes=(assign,nonatomic) */
    	visibleRect(): CGRect;
    /* typeEncoding=d, ivar=zoomScale, attributes=(assign,nonatomic) */
    	zoomScale(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithTool(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	provideTargetsToSnapper(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setSnapMask(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setVisibleRect(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomScale(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	snapMask(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tool(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	visibleRect(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomScale(...args: any[]): any;
  }
}

declare const MSLayerDraggingSnapTargetManager: sketchInternal.MSLayerDraggingSnapTargetManager;

