// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSyncLocalColorAction extends MSUnlinkAndOrSyncAction {
    /* typeEncoding=@"MSColor", ivar=_color, attributes=(retain,nonatomic) */
    	color(): MSColor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performSharedObjectAction(): void;
    /* typeEncoding=v24@0:8@16 */
    	setColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	syncLocalSharedColor(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	validationStatus(...args: any[]): any;
  }
}

declare const MSSyncLocalColorAction: sketchInternal.MSSyncLocalColorAction;

