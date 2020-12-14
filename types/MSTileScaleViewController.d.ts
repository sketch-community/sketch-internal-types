// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTileScaleViewController extends NSViewController {
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_scaleAdaptor, attributes=(retain,nonatomic) */
    	scaleAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_scaleField, attributes=(retain,nonatomic) */
    	scaleField(): MSInlineUpDownTextField;
    /* typeEncoding=@"NSArrayController", ivar=_stylesController, attributes=(retain,nonatomic) */
    	stylesController(): cocoascript.NSArrayController;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithStylesController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scaleAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scaleField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScaleAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScaleField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStylesController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stylesController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSTileScaleViewController: sketchInternal.MSTileScaleViewController;

