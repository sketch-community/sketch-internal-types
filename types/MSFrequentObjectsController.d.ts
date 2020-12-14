// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFrequentObjectsController extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSFrequentObjectsControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_frequentObjects, attributes=(retain,nonatomic) */
    	frequentObjects(): cocoascript.NSArray;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSMenu", ivar=_menu, attributes=(retain,nonatomic) */
    	menu(): cocoascript.NSMenu;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8@16@24 */
    	menuItemAttributedTitleForTitle_description(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frequentObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuDidClose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshMenuItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrequentObjects(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenu(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16@32 */
    	showMenuAtLocation_inView(...args: any[]): any;
  }
}

declare const MSFrequentObjectsController: sketchInternal.MSFrequentObjectsController;

