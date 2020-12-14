// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInspectorFlowHandler extends NSObject {
    /* typeEncoding=@"<MSInspectorFlowHandlerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@24@0:8@16 */
    	flowConnectionForLayers(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldShowFullInspectorForFlow(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldShowFullInspectorForLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateLayersAndReload(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flowBackAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowConnection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flowTargetAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reload(): void;
    /* typeEncoding=v24@0:8@16 */
    	removeFlowAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
  }
}

declare const MSInspectorFlowHandler: sketchInternal.MSInspectorFlowHandler;

