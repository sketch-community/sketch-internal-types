// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSToggleInterfaceAction extends MSDocumentAction {
    /* typeEncoding=c, ivar=_didHideInspector, attributes=(assign,nonatomic) */
    	didHideInspector(): boolean;
    /* typeEncoding=c, ivar=_didHideLayerList, attributes=(assign,nonatomic) */
    	didHideLayerList(): boolean;
    /* typeEncoding=c, ivar=_didHideRulers, attributes=(assign,nonatomic) */
    	didHideRulers(): boolean;
    /* typeEncoding=c, ivar=_didHideToolbar, attributes=(assign,nonatomic) */
    	didHideToolbar(): boolean;
    /* typeEncoding=c16@0:8 */
    	didHideInspector(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didHideLayerList(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didHideRulers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didHideToolbar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	documentWillClose(): void;
    /* typeEncoding=c16@0:8 */
    	hasDynamicTitle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	hideInterface(): void;
    /* typeEncoding=c24@0:8@16 */
    	hideInterfaceElementForActionNamed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInterfaceHidden(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isToolbarVisible(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidHideInspector(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidHideLayerList(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidHideRulers(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidHideToolbar(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	showHiddenInterface(): void;
    /* typeEncoding=v24@0:8@16 */
    	sketchrunnerMSToggleInterfaceAction_toggleHideInterface(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleHideInterface(...args: any[]): any;
  }
}

declare const MSToggleInterfaceAction: sketchInternal.MSToggleInterfaceAction;

