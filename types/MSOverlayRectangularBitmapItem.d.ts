// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlayRectangularBitmapItem extends MSOverlayBitmapItem {
    /* typeEncoding=c, ivar=_hollow, attributes=(assign,nonatomic,readonly,getter=isHollow) */
    	hollow(): boolean;
    /* typeEncoding={CGSize=dd}, ivar=_size, attributes=(assign,nonatomic,readonly) */
    	size(): CGSize;
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=_transform, attributes=(assign,nonatomic,readonly) */
    	transform(): CGAffineTransform;
    /* typeEncoding=@108@0:8@16{CGPoint=dd}24{CGSize=dd}40{CGAffineTransform=dddddd}56c104 */
    	initWithImageID_position_size_transform_hollow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isHollow(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	size(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	transform(...args: any[]): any;
  }
}

declare const MSOverlayRectangularBitmapItem: sketchInternal.MSOverlayRectangularBitmapItem;

