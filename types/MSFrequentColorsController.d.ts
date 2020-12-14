// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFrequentColorsController extends MSFrequentObjectsController {
    /* typeEncoding=@"MSColor", ivar=_color, attributes=(retain,nonatomic) */
    	color(): MSColor;
    /* typeEncoding=q, ivar=_colorModel, attributes=(assign,nonatomic) */
    	colorModel(): number;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSFrequentColorsControllerDelegate>", ivar=(null), attributes=(assign,dynamic,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocumentData", ivar=_documentData, attributes=(retain,nonatomic) */
    	documentData(): MSDocumentData;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@40@0:8@16q24@32 */
    	menuItemAttributedTitleForColorCounter_colorModel_document(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24:32@40q48@56 */
    	menuItemForColorCounter_target_action_documentColorSpace_colorModel_document(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	previewImageForColorCounter_documentColorSpace(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	colorModel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	frequentColorPicked(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshMenuItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColor(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setColorModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentData(...args: any[]): any;
  }
}

declare const MSFrequentColorsController: sketchInternal.MSFrequentColorsController;

