// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInspectorSegmentedControlTagBinder extends NSObject {
    /* typeEncoding=@, ivar=_model, attributes=(retain,nonatomic) */
    	model(): any;
    /* typeEncoding=@"NSString", ivar=_modelKeyPath, attributes=(retain,nonatomic) */
    	modelKeyPath(): cocoascript.NSString;
    /* typeEncoding=@"MSInspectorSegmentedControl", ivar=_segmentedControl, attributes=(assign,nonatomic,weak) */
    	segmentedControl(): MSInspectorSegmentedControl;
    /* typeEncoding=c, ivar=_suppressBinding, attributes=(assign,nonatomic) */
    	suppressBinding(): boolean;
    /* typeEncoding=@"NSNumber", ivar=_tag, attributes=(retain,nonatomic) */
    	tag(): cocoascript.NSNumber;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithSegmentedControl_model_keyPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	model(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelKeyPath(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	segmentedControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setModelKeyPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSegmentedControl(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSuppressBinding(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTag(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	suppressBinding(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tag(...args: any[]): any;
  }
}

declare const MSInspectorSegmentedControlTagBinder: sketchInternal.MSInspectorSegmentedControlTagBinder;

