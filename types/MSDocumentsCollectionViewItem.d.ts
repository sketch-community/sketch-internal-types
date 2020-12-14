// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentsCollectionViewItem extends NSCollectionViewItem {
    /* typeEncoding=@"MSDocumentsCollectionItem", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	collectionItem(): MSDocumentsCollectionItem;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSDocumentsCollectionViewItemDelegate>", ivar=_delegate, attributes=(assign,nonatomic) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSImageView", ivar=_errorView, attributes=(retain,nonatomic) */
    	errorView(): cocoascript.NSImageView;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSDocumentProgressView", ivar=_progressView, attributes=(retain,nonatomic) */
    	progressView(): MSDocumentProgressView;
    /* typeEncoding=@"NSTextField", ivar=_subtextField, attributes=(retain,nonatomic) */
    	subtextField(): cocoascript.NSTextField;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSDocumentsCollectionTextField", ivar=(null), attributes=(retain,dynamic,nonatomic) */
    	textField(): MSDocumentsCollectionTextField;
    /* typeEncoding=@16@0:8 */
    	static reuseIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	collectionItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidEndEditing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	errorView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	fetchPreviewImage(): void;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuWillOpen(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	progressView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setErrorView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setNeedsDisplaySelection(): void;
    /* typeEncoding=v24@0:8@16 */
    	setProgressView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRepresentedObject(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSelected(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSubtextField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startEditing(): void;
    /* typeEncoding=@16@0:8 */
    	subtextField(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateCloudMenuItem(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateRevealInFinderMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSDocumentsCollectionViewItem: sketchInternal.MSDocumentsCollectionViewItem;

