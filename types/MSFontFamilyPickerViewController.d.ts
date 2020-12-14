// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFontFamilyPickerViewController extends NSViewController {
    /* typeEncoding=@?, ivar=_completionBlock, attributes=(copy,nonatomic) */
    	completionBlock(): any;
    /* typeEncoding=@"NSArray", ivar=_currentFonts, attributes=(retain,nonatomic) */
    	currentFonts(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSFontList", ivar=_fontList, attributes=(retain,nonatomic) */
    	fontList(): MSFontList;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSSearchField", ivar=_searchField, attributes=(assign,nonatomic,weak) */
    	searchField(): cocoascript.NSSearchField;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTableView", ivar=_tableView, attributes=(assign,nonatomic,weak) */
    	tableView(): cocoascript.NSTableView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@?16@0:8 */
    	completionBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentFonts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doubleClickTableView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontList(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	scrollTableToSelectedFont(): void;
    /* typeEncoding=@16@0:8 */
    	searchField(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setCompletionBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentFonts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontList(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSearchField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=d32@0:8@16q24 */
    	tableView_heightOfRow(...args: any[]): any;
    /* typeEncoding=@32@0:8@16q24 */
    	tableView_rowViewForRow(...args: any[]): any;
    /* typeEncoding=c32@0:8@16q24 */
    	tableView_shouldSelectRow(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableViewSelectionDidChange(...args: any[]): any;
  }
}

declare const MSFontFamilyPickerViewController: sketchInternal.MSFontFamilyPickerViewController;

