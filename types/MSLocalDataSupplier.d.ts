// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLocalDataSupplier extends MSDataSupplier {
    /* typeEncoding=@"NSArray", ivar=_data, attributes=(retain,nonatomic) */
    	data(): cocoascript.NSArray;
    /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataSource(): cocoascript.NSURL;
    /* typeEncoding=@"MSFolderMonitor", ivar=_folderMonitor, attributes=(retain,nonatomic) */
    	folderMonitor(): MSFolderMonitor;
    /* typeEncoding=@24@0:8@16 */
    	dataFromFileURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	identifierForURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	imageFileNamesFromFolderURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	validImageFileUTIs(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSource(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	folderMonitor(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@?32@?40 */
    	generateDataForObjects_dataSupplierManager_dataApplier_completionHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	imageFileURLForDataItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithFileSystemURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	makeFolderMonitor(): void;
    /* typeEncoding=v16@0:8 */
    	makeImageDataFileSystemMonitor(): void;
    /* typeEncoding=v16@0:8 */
    	makeTextDataFileSystemMonitor(): void;
    /* typeEncoding=@16@0:8 */
    	menuItemTooltipInfo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	respondToContentChanged(): void;
    /* typeEncoding=v24@0:8@16 */
    	setData(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFolderMonitor(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	shuffleArray_truncateToLength(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16@24 */
    	shuffledArrayWithCount_fromArray(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	valid(...args: any[]): any;
  }
}

declare const MSLocalDataSupplier: sketchInternal.MSLocalDataSupplier;

