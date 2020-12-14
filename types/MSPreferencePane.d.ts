// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPreferencePane extends NSViewController {
    /* typeEncoding=@"MSPreferencesController", ivar=_preferencesController, attributes=(assign,nonatomic,readonly,weak) */
    	preferencesController(): MSPreferencesController;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nibName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIcon(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	toolbarIconNameWithBase(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIconSuffix(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	didSwitchToPane(): void;
    /* typeEncoding=v16@0:8 */
    	dismissAlertSheet(): void;
    /* typeEncoding=v24@0:8@16 */
    	dismissAlertWindow(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithPreferencesController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preferencesController(...args: any[]): any;
  }
}

declare const MSPreferencePane: sketchInternal.MSPreferencePane;

