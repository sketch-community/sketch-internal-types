// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudBaseViewController extends MSToolbarPopoverContentViewController {
    /* typeEncoding=@"MSCloudAction", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	cloudAction(): MSCloudAction;
    /* typeEncoding=@"MSCloudViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	cloudViewController(): MSCloudViewController;
    /* typeEncoding=@16@0:8 */
    	cloudAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cloudBaseViewControllerDidAppear(): void;
    /* typeEncoding=@16@0:8 */
    	cloudViewController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dismissPopoverIfCommandKeyDown(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithAction(...args: any[]): any;
  }
}

declare const MSCloudBaseViewController: sketchInternal.MSCloudBaseViewController;

