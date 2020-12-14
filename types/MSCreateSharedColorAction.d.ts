// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCreateSharedColorAction extends MSBaseSharedObjectAction {
    /* typeEncoding=@"MSColor", ivar=_color, attributes=(retain,nonatomic) */
    	color(): MSColor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	canPerformNewSharedColorAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	createSharedColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	historyMomentTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	performCreateNewColorAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performSharedObjectAction(): void;
    /* typeEncoding=v24@0:8@16 */
    	setColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trySelectComponentForColor(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	validationStatus(...args: any[]): any;
  }
}

declare const MSCreateSharedColorAction: sketchInternal.MSCreateSharedColorAction;

