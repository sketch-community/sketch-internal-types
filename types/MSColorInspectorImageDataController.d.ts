// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorInspectorImageDataController extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSColorInspectorImageDataControllerDelegate>", ivar=delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSAvailableOverride", ivar=(null), attributes=(retain) */
    	overrideItemForInspector(): MSAvailableOverride;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	applyDataToCurrentSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	clearDataRecordFromCurrentSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dataSupplierSelected(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuDidClose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshDataOnCurrentSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16@32 */
    	showMenuAtLocation_inView(...args: any[]): any;
  }
}

declare const MSColorInspectorImageDataController: sketchInternal.MSColorInspectorImageDataController;

