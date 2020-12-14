// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlayItemContainer extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_bitmapItems, attributes=(copy,nonatomic,readonly) */
    	bitmapItems(): cocoascript.NSArray;
    /* typeEncoding=@"NSSet", ivar=_flowItems, attributes=(copy,nonatomic,readonly) */
    	flowItems(): cocoascript.NSSet;
    /* typeEncoding=c, ivar=_isEmpty, attributes=(assign,nonatomic,readonly) */
    	isEmpty(): boolean;
    /* typeEncoding=@"NSArray", ivar=_labelItems, attributes=(copy,nonatomic,readonly) */
    	labelItems(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_pathItems, attributes=(copy,nonatomic,readonly) */
    	pathItems(): cocoascript.NSArray;
    /* typeEncoding=@16@0:8 */
    	container(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	containerWithPathItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	containerWithPathItems(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	appendingItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bitmapItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithPathItems_bitmapItems_labelItems(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	initWithPathItems_bitmapItems_labelItems_flowItems(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEmpty(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToOverlayItemContainer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	labelItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathItems(...args: any[]): any;
  }
}

declare const MSOverlayItemContainer: sketchInternal.MSOverlayItemContainer;

