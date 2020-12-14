// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentProgressView extends NSView {
    /* typeEncoding=@"NSColor", ivar=_backgroundColor, attributes=(retain,nonatomic) */
    	backgroundColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSButton", ivar=_cancelButton, attributes=(retain,nonatomic) */
    	cancelButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSDocumentsCollectionItem", ivar=_collectionItem, attributes=(assign,nonatomic,weak) */
    	collectionItem(): MSDocumentsCollectionItem;
    /* typeEncoding=@"NSProgressIndicator", ivar=_progressIndicator, attributes=(retain,nonatomic) */
    	progressIndicator(): cocoascript.NSProgressIndicator;
    /* typeEncoding=@"NSImageView", ivar=_progressIndicatorBackground, attributes=(retain,nonatomic) */
    	progressIndicatorBackground(): cocoascript.NSImageView;
    /* typeEncoding=@"NSTrackingArea", ivar=_trackingArea, attributes=(retain,nonatomic) */
    	trackingArea(): cocoascript.NSTrackingArea;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	backgroundColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelButtonClicked(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collectionItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	intrinsicContentSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseEntered(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseExited(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	progressIndicator(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	progressIndicatorBackground(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackgroundColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCollectionItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProgressIndicator(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProgressIndicatorBackground(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTrackingArea(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	trackingArea(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateTrackingAreas(): void;
  }
}

declare const MSDocumentProgressView: sketchInternal.MSDocumentProgressView;

