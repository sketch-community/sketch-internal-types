// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlayPathItem extends MSOverlayItem {
    /* typeEncoding=^{CGColor=}, ivar=_colorRef, attributes=(assign,nonatomic,readonly) */
    	color(): any;
    /* typeEncoding=@"NSArray", ivar=_dashes, attributes=(copy,nonatomic,readonly) */
    	dashes(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasDashes(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFilled(): boolean;
    /* typeEncoding=d, ivar=_lineWidth, attributes=(assign,nonatomic,readonly) */
    	lineWidth(): number;
    /* typeEncoding=@"MSPath", ivar=_path, attributes=(assign,nonatomic,readonly) */
    	path(): MSPath;
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=_transform, attributes=(assign,nonatomic,readonly) */
    	transform(): CGAffineTransform;
    /* typeEncoding=@"MSPath", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	transformedPath(): MSPath;
    /* typeEncoding=@80@0:8@16{CGAffineTransform=dddddd}24^{CGColor=}72 */
    	filledItemForPath_transform_color(...args: any[]): any;
    /* typeEncoding=@88@0:8@16{CGAffineTransform=dddddd}24^{CGColor=}72d80 */
    	itemForPath_transform_color_lineWidth(...args: any[]): any;
    /* typeEncoding=@96@0:8@16{CGAffineTransform=dddddd}24^{CGColor=}72d80@88 */
    	itemForPath_transform_color_lineWidth_dashes(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=^{CGColor=}16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dashes(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=c16@0:8 */
    	hasDashes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@96@0:8@16{CGAffineTransform=dddddd}24^{CGColor=}72d80@88 */
    	initWithPath_transform_color_lineWidth_dashes(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFilled(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	lineWidth(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	transform(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	transformedPath(...args: any[]): any;
  }
}

declare const MSOverlayPathItem: sketchInternal.MSOverlayPathItem;

