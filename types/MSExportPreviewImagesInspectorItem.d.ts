// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportPreviewImagesInspectorItem extends MSInspectorItem {
    /* typeEncoding=@"NSArray", ivar=_previewViews, attributes=(retain,nonatomic) */
    	previewViews(): cocoascript.NSArray;
    /* typeEncoding=q, ivar=_throttleCount, attributes=(assign,nonatomic) */
    	throttleCount(): number;
    /* typeEncoding=c24@0:8@16 */
    	static canHandleLayer(...args: any[]): any;
    /* typeEncoding={CGSize=dd}24@0:8Q16 */
    	static previewImageSizeForNumColumns(...args: any[]): any;
    /* typeEncoding={CGSize=dd}24@0:8Q16 */
    	static previewViewSizeForNumColumns(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	static reloadPreviewsForLayers_withCompletion(...args: any[]): any;
    /* typeEncoding=v32@0:8@16d24 */
    	static setFrameOfViewModels_withInspectorWidth(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	previewViews(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadPreviewViews(): void;
    /* typeEncoding=v16@0:8 */
    	removeAllPreviewViews(): void;
    /* typeEncoding=v16@0:8 */
    	schedulePreviewViewReload(): void;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewViews(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewsWithViewModels(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setThrottleCount(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	throttleCount(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
  }
}

declare const MSExportPreviewImagesInspectorItem: sketchInternal.MSExportPreviewImagesInspectorItem;

