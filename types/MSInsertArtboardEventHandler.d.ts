// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInsertArtboardEventHandler extends MSDragToInsertLayerEventHandler {
    /* typeEncoding=@"NSMutableArray", ivar=_insertedArtboards, attributes=(assign,nonatomic,readonly) */
    	insertedArtboards(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSInsertArtboardInspectorViewController", ivar=_inspectorViewController, attributes=(assign,nonatomic,readonly) */
    	inspectorViewController(): MSInsertArtboardInspectorViewController;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	allowsSwitchToInsertAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	configureInspector(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}40@0:8{CGSize=dd}16@32 */
    	initialRectForNewArtboard_besidesExistingArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertArtboardFromPreset(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	insertArtboardWithRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertedArtboards(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	inspectorLocation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorViewController(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	inspectorViewControllersForLayers_standardControllers(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8{CGSize=dd}16 */
    	newPositionForFirstArtboardWithSize(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8{CGSize=dd}16 */
    	newPositionForSecondArtboardWithSize(...args: any[]): any;
    /* typeEncoding=@60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48c56 */
    	performActionWithRect_fromLayer_constrainProportions(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	rectForArtboardWithPreset(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldAddInsertFromSelectionItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateInspector(): void;
  }
}

declare const MSInsertArtboardEventHandler: sketchInternal.MSInsertArtboardEventHandler;

