// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSActionController extends NSResponder {
    /* typeEncoding=@"NSMutableDictionary", ivar=_actionsByIdentifier, attributes=(retain,nonatomic) */
    	actionsByIdentifier(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"NSMutableSet", ivar=_observers, attributes=(retain,nonatomic) */
    	observers(): cocoascript.NSMutableSet;
    /* typeEncoding=@"NSDictionary", ivar=_singleKeyShortcuts, attributes=(copy,nonatomic) */
    	singleKeyShortcuts(): cocoascript.NSDictionary;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	actionForID(...args: any[]): any;
    /* typeEncoding=@24@0:8:16 */
    	actionForSelector(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	actionsByIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	allActions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	assertValidActionID(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	didFinishActionWithID_context(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	didInstantActionWithID_context(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	firstActionToHandleKeyEvent(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	forwardKeyEvent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertAfterResponder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isSystemSeparatorID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	observers(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	performActionWithID_sender(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	performFakeActionWithID_context_block(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	registerAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	registerActionObserver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActionsByIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObservers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSingleKeyShortcuts(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	singleKeyShortcuts(...args: any[]): any;
    /* typeEncoding=@32@0:8:16@24 */
    	supplementalTargetForAction_sender(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	unregisterActionObserver(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	willBeginActionWithID_context(...args: any[]): any;
  }
}

declare const MSActionController: sketchInternal.MSActionController;

