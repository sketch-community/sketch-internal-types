// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorModelPickerView extends NSControl {
    /* typeEncoding=c, ivar=_active, attributes=(assign,nonatomic) */
    	active(): boolean;
    /* typeEncoding=c, ivar=_visible, attributes=(assign,nonatomic) */
    	visible(): boolean;
    /* typeEncoding=c16@0:8 */
    	active(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseExited(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseUp(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setActive(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setVisible(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setup(): void;
    /* typeEncoding=v16@0:8 */
    	updateUI(): void;
    /* typeEncoding=c16@0:8 */
    	visible(...args: any[]): any;
  }
}

declare const MSColorModelPickerView: sketchInternal.MSColorModelPickerView;

