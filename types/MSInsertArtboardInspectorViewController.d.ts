// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInsertArtboardInspectorViewController extends NSViewController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSInsertArtboardEventHandler", ivar=_eventHandler, attributes=(assign,nonatomic) */
    	eventHandler(): MSInsertArtboardEventHandler;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSView", ivar=_presetsContainerView, attributes=(retain,nonatomic) */
    	presetsContainerView(): cocoascript.NSView;
    /* typeEncoding={CGSize=dd}, ivar=_proposedArtboardSize, attributes=(assign,nonatomic) */
    	proposedArtboardSize(): CGSize;
    /* typeEncoding=c, ivar=_shouldAddInsertFromSelectionItem, attributes=(assign,nonatomic) */
    	shouldAddInsertFromSelectionItem(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	artboardPresetsViewController_didSelectPreset(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	editArtboardPresetViewController_savePreset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	eventHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	focusCanvasOnAllArtboards(): void;
    /* typeEncoding=v16@0:8 */
    	prepareForDisplay(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	prepareForSegue_sender(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presetsContainerView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presetsViewController(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	proposedArtboardSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPresetsContainerView(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setProposedArtboardSize(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldAddInsertFromSelectionItem(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldAddInsertFromSelectionItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
  }
}

declare const MSInsertArtboardInspectorViewController: sketchInternal.MSInsertArtboardInspectorViewController;

