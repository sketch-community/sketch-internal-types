// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentationSearcher extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSOperationQueue", ivar=_queue, attributes=(retain) */
    	queue(): cocoascript.NSOperationQueue;
    /* typeEncoding=@"NSArray", ivar=_searchEntries, attributes=(retain) */
    	searchEntries(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	addDownloadOperation(): void;
    /* typeEncoding=v32@0:8@16@?24 */
    	addSearchOperationForItemsWithSearchString_completionBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	documentationMightHaveChanged(): void;
    /* typeEncoding=@16@0:8 */
    	downloadRequest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	localizedTitlesForItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	performActionForItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	queue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	searchEntries(...args: any[]): any;
    /* typeEncoding=v40@0:8@16q24@?32 */
    	searchForItemsWithSearchString_resultLimit_matchedItemHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSearchEntries(...args: any[]): any;
  }
}

declare const MSDocumentationSearcher: sketchInternal.MSDocumentationSearcher;

