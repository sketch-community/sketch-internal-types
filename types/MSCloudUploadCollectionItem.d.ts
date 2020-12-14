// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudUploadCollectionItem extends MSExistingDocumentCollectionItem {
    /* typeEncoding=@"MSDocumentUpload", ivar=_uploader, attributes=(assign,nonatomic,readonly) */
    	uploader(): MSDocumentUpload;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	cancelDocumentDownload(): void;
    /* typeEncoding=@16@0:8 */
    	getStatus(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCloudUpload(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	registerNotifications(): void;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDownloadProgress(): void;
    /* typeEncoding=v24@0:8@16 */
    	uploadDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	uploadProgressDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	uploader(...args: any[]): any;
  }
}

declare const MSCloudUploadCollectionItem: sketchInternal.MSCloudUploadCollectionItem;

