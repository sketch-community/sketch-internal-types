// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorModelPicker extends NSViewController {
    /* typeEncoding=q, ivar=_colorModel, attributes=(assign,nonatomic) */
    	colorModel(): number;
    /* typeEncoding=@"<MSColorModelPickerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"MSColorModelPickerView", ivar=_modelPickerView, attributes=(retain,nonatomic) */
    	modelPickerView(): MSColorModelPickerView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	colorModeAction(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	colorModel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	disclosureAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelPickerView(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setColorModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setModelPickerView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	showMenu(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSColorModelPicker: sketchInternal.MSColorModelPicker;

