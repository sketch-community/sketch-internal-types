// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportSheetItem extends NSCollectionViewItem {
    /* typeEncoding=@"NSButton", ivar=_checkBox, attributes=(retain,nonatomic) */
    	checkBox(): cocoascript.NSButton;
    /* typeEncoding=@"MSExportSheet", ivar=_exportSheet, attributes=(assign,nonatomic,weak) */
    	exportSheet(): MSExportSheet;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	isExportable(): boolean;
    /* typeEncoding=@"NSView", ivar=_previewContainer, attributes=(retain,nonatomic) */
    	previewContainer(): cocoascript.NSView;
    /* typeEncoding=c, ivar=_showWarningLabel, attributes=(assign,nonatomic) */
    	showWarningLabel(): boolean;
    /* typeEncoding=@"NSTextField", ivar=_subTitleField, attributes=(retain,nonatomic) */
    	subTitleField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_titleField, attributes=(retain,nonatomic) */
    	titleField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSImageView", ivar=_warningView, attributes=(retain,nonatomic) */
    	warningView(): cocoascript.NSImageView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@16@0:8 */
    	checkBox(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	exportPreviewOperationDidFinish(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isExportable(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	loadUI(): void;
    /* typeEncoding=@16@0:8 */
    	previewContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCheckBox(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportSheet(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsExportable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewContainer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShowWarningLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSubTitleField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTitleField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWarningView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	showWarningLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subTitleField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	titleField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	warningView(...args: any[]): any;
  }
}

declare const MSExportSheetItem: sketchInternal.MSExportSheetItem;

