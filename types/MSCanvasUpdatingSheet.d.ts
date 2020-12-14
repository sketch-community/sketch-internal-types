// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCanvasUpdatingSheet extends CHSheetController {
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_oldDocumentState, attributes=(retain,nonatomic) */
    	oldDocumentState(): MSImmutableDocumentData;
    /* typeEncoding=@"NSTimer", ivar=_operationTimer, attributes=(retain,nonatomic) */
    	operationTimer(): cocoascript.NSTimer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	cancel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirm(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	doPerformOperation(): void;
    /* typeEncoding=@16@0:8 */
    	doc(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	historyMomentTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oldDocumentState(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	operationTimer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performOperation(): void;
    /* typeEncoding=v16@0:8 */
    	restoreState(): void;
    /* typeEncoding=v16@0:8 */
    	schedulePerformOperation(): void;
    /* typeEncoding=v24@0:8@16 */
    	setOldDocumentState(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOperationTimer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	storeState(): void;
    /* typeEncoding=v16@0:8 */
    	triggerPerformOperation(): void;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
  }
}

declare const MSCanvasUpdatingSheet: sketchInternal.MSCanvasUpdatingSheet;

