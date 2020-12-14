// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportSheet extends CHSheetController {
    /* typeEncoding=@"NSCollectionView", ivar=_collectionView, attributes=(retain,nonatomic) */
    	collectionView(): cocoascript.NSCollectionView;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSButton", ivar=_exportButton, attributes=(retain,nonatomic) */
    	exportButton(): cocoascript.NSButton;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSButton", ivar=_includeAllSlicesCheckBox, attributes=(retain,nonatomic) */
    	includeAllSlicesCheckBox(): cocoascript.NSButton;
    /* typeEncoding=@"NSMutableArray", ivar=_selectedSlices, attributes=(retain,nonatomic) */
    	selectedSlices(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSArray", ivar=_slices, attributes=(retain,nonatomic) */
    	slices(): cocoascript.NSArray;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	slicesCheckBoxState(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSSet", ivar=_warningSliceIDs, attributes=(retain,nonatomic) */
    	warningSliceIDs(): cocoascript.NSSet;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@16@0:8 */
    	collectionView(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collectionView_itemForRepresentedObjectAtIndexPath(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collectionView_newItemForRepresentedObject(...args: any[]): any;
    /* typeEncoding=q32@0:8@16q24 */
    	collectionView_numberOfItemsInSection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirm(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	findConflictingNamesInSlices(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	includeAllCheckboxAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	includeAllSlicesCheckBox(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isItemSelectedForExport(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resizeWindowToFit(): void;
    /* typeEncoding=@16@0:8 */
    	selectedSlices(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCollectionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIncludeAllSlicesCheckBox(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedSlices(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSlices(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWarningSliceIDs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	slices(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	slicesCheckBoxState(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleItemSelectedForExportState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validateIncludeAllSlicesCheckBox(): void;
    /* typeEncoding=@16@0:8 */
    	warningSliceIDs(...args: any[]): any;
  }
}

declare const MSExportSheet: sketchInternal.MSExportSheet;

