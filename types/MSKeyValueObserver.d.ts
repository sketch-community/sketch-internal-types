// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSKeyValueObserver extends NSObject {
    /* typeEncoding=:, ivar=_action, attributes=(assign,nonatomic) */
    	action(): any;
    /* typeEncoding=c, ivar=_isObserving, attributes=(assign,nonatomic) */
    	isObserving(): boolean;
    /* typeEncoding=@"NSString", ivar=_keyPath, attributes=(retain,nonatomic) */
    	keyPath(): cocoascript.NSString;
    /* typeEncoding=@, ivar=_observed, attributes=(assign,nonatomic,weak) */
    	observed(): any;
    /* typeEncoding=Q, ivar=_options, attributes=(assign,nonatomic) */
    	options(): number;
    /* typeEncoding=@, ivar=_target, attributes=(assign,nonatomic,weak) */
    	target(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=:16@0:8 */
    	action(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@56@0:8@16:24@32@40Q48 */
    	initWithTarget_action_observing_keyPath_options(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isObserving(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	keyPath(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	observed(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	options(...args: any[]): any;
    /* typeEncoding=v24@0:8:16 */
    	setAction(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsObserving(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setKeyPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObserved(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTarget(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startObserving(): void;
    /* typeEncoding=v16@0:8 */
    	stopObserving(): void;
    /* typeEncoding=@16@0:8 */
    	target(...args: any[]): any;
  }
}

declare const MSKeyValueObserver: sketchInternal.MSKeyValueObserver;

