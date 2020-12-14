// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMissingFontsDialog extends NSWindowController {
    /* typeEncoding=@"NSButton", ivar=_cancelButton, attributes=(retain,nonatomic) */
    	cancelButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSTextField", ivar=_descriptionText, attributes=(retain,nonatomic) */
    	descriptionText(): cocoascript.NSTextField;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSArray", ivar=_missingFonts, attributes=(copy,nonatomic) */
    	missingFonts(): cocoascript.NSArray;
    /* typeEncoding=@"NSButton", ivar=_openButton, attributes=(retain,nonatomic) */
    	openButton(): cocoascript.NSButton;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	cancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	close(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	descriptionText(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	missingFonts(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	openAnyway(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	openButton(...args: any[]): any;
    /* typeEncoding=c28@0:8@16c24 */
    	runPanelWithMissingFonts_savingWillChangeFonts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDescriptionText(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMissingFonts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOpenButton(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_objectValueForTableColumn_row(...args: any[]): any;
  }
}

declare const MSMissingFontsDialog: sketchInternal.MSMissingFontsDialog;

