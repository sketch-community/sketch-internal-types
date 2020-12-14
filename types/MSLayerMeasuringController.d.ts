// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerMeasuringController extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSNumberFormatter", ivar=_numberFormatter, attributes=(retain,nonatomic) */
    	numberFormatter(): cocoascript.NSNumberFormatter;
    /* typeEncoding=@"MSSpecOverlay", ivar=_overlay, attributes=(assign,nonatomic,readonly) */
    	overlay(): MSSpecOverlay;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"_TtC6Sketch27MSLayerMeasurementViewModel", ivar=_viewModel, attributes=(assign,nonatomic,readonly) */
    	viewModel(): _TtC6Sketch27MSLayerMeasurementViewModel;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q32@0:8@16q24 */
    	collectionOverlay_numberOfItemsInSection(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForItemAtIndexPath_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForSupplementaryElementOfKind_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layerMeasurementUpdated(): void;
    /* typeEncoding=@16@0:8 */
    	numberFormatter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlay(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNumberFormatter(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}48@0:8@16@24{CGPoint=dd}32 */
    	specOverlay_endpointForItemAtIndexPath_startpoint(...args: any[]): any;
    /* typeEncoding=c72@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32@64 */
    	specOverlay_layout_shouldShowEndRect_forItemAtIndexPath(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	specOverlay_rectForEndOfItemAtIndexPath(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	specOverlay_rectForStartOfItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=c64@0:8@16@24{CGPoint=dd}32{CGPoint=dd}48 */
    	specOverlay_shouldHideItemAtIndexPath_startpoint_endpoint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8@16@24 */
    	specOverlay_startpointForItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24{CGVector=dd}32 */
    	specOverlay_textForMeasurement_vector(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	viewModel(...args: any[]): any;
  }
}

declare const MSLayerMeasuringController: sketchInternal.MSLayerMeasuringController;

