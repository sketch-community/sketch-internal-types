// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSToggleVisibilityAction extends MSDocumentAction {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isActive(): boolean;
    /* typeEncoding=@16@0:8 */
    	defaultsKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	hide(): void;
    /* typeEncoding=c16@0:8 */
    	isActive(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForNewWindow(): void;
    /* typeEncoding=c16@0:8 */
    	shouldRunForAllTabsInWindow(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	show(): void;
    /* typeEncoding=@16@0:8 */
    	tabbedWindows(...args: any[]): any;
  }
}

declare const MSToggleVisibilityAction: sketchInternal.MSToggleVisibilityAction;

