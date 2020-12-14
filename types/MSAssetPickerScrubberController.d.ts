// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetPickerScrubberController extends NSObject {
    /* typeEncoding=@"MSAssetCollectionViewDataSource", ivar=_dataSource, attributes=(retain,nonatomic) */
    	dataSource(): MSAssetCollectionViewDataSource;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSAssetPickerScrubberControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSString", ivar=_identifier, attributes=(retain,nonatomic) */
    	identifier(): cocoascript.NSString;
    /* typeEncoding=@"NSTouchBarItem", ivar=_item, attributes=(retain,nonatomic) */
    	item(): cocoascript.NSTouchBarItem;
    /* typeEncoding=@"NSScrubber", ivar=_scrubber, attributes=(retain,nonatomic) */
    	scrubber(): cocoascript.NSScrubber;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	colorAssetCollectionLabelWithTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSource(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding={CGSize=dd}24@0:8@16 */
    	fittingAssetScrubberLabelItemSizeForTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	item(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfItemsForScrubber(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadData(): void;
    /* typeEncoding=@16@0:8 */
    	scrubber(...args: any[]): any;
    /* typeEncoding=v32@0:8@16q24 */
    	scrubber_didSelectItemAtIndex(...args: any[]): any;
    /* typeEncoding={CGSize=dd}40@0:8@16@24q32 */
    	scrubber_layout_sizeForItemAtIndex(...args: any[]): any;
    /* typeEncoding=@32@0:8@16q24 */
    	scrubber_viewForItemAtIndex(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	scrubberItemViewForAssetAtIndex(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	scrubberItemViewWrapping(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataSource(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScrubber(...args: any[]): any;
  }
}

declare const MSAssetPickerScrubberController: sketchInternal.MSAssetPickerScrubberController;

