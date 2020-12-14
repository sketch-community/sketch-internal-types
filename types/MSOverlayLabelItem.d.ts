// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlayLabelItem extends MSOverlayItem {
    /* typeEncoding={CGPoint=dd}, ivar=_anchorPoint, attributes=(assign,nonatomic,readonly) */
    	anchorPoint(): CGPoint;
    /* typeEncoding=@"NSAttributedString", ivar=_attributedString, attributes=(copy,nonatomic,readonly) */
    	attributedString(): cocoascript.NSAttributedString;
    /* typeEncoding=^{CGColor=}, ivar=_backgroundColorRef, attributes=(assign,nonatomic,readonly) */
    	backgroundColor(): any;
    /* typeEncoding=d, ivar=_cornerRadius, attributes=(assign,nonatomic,readonly) */
    	cornerRadius(): number;
    /* typeEncoding={CGVector=dd}, ivar=_displacement, attributes=(assign,nonatomic,readonly) */
    	displacement(): CGVector;
    /* typeEncoding={CGSize=dd}, ivar=_padding, attributes=(assign,nonatomic,readonly) */
    	padding(): CGSize;
    /* typeEncoding={CGPoint=dd}, ivar=_position, attributes=(assign,nonatomic,readonly) */
    	position(): CGPoint;
    /* typeEncoding=d, ivar=_rotation, attributes=(assign,nonatomic,readonly) */
    	rotation(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	anchorPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	attributedString(...args: any[]): any;
    /* typeEncoding=^{CGColor=}16@0:8 */
    	backgroundColor(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	cornerRadius(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	displacement(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@112@0:8@16{CGSize=dd}24{CGPoint=dd}40{CGVector=dd}56{CGPoint=dd}72d88^{CGColor=}96d104 */
    	initWithAttributedString_padding_position_displacement_anchorPoint_rotation_backgroundColor_cornerRadius(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	padding(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	position(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	rotation(...args: any[]): any;
  }
}

declare const MSOverlayLabelItem: sketchInternal.MSOverlayLabelItem;

