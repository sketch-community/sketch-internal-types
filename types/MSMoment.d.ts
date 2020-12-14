// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMoment extends NSObject {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canCoalesce(): boolean;
    /* typeEncoding=c, ivar=_committed, attributes=(assign,nonatomic,readonly) */
    	committed(): boolean;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_finalDocument, attributes=(retain,nonatomic) */
    	finalDocument(): MSImmutableDocumentData;
    /* typeEncoding=@"MSPatch", ivar=_forwardPatch, attributes=(retain,nonatomic) */
    	forwardPatch(): MSPatch;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasCoalescePeriodExpired(): boolean;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_initialDocument, attributes=(retain,nonatomic) */
    	initialDocument(): MSImmutableDocumentData;
    /* typeEncoding=@"NSString", ivar=_pageID, attributes=(assign,nonatomic,readonly) */
    	pageID(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_selectedOverrides, attributes=(assign,nonatomic,readonly) */
    	selectedOverrides(): cocoascript.NSArray;
    /* typeEncoding=@"NSSet", ivar=_selection, attributes=(assign,nonatomic,readonly) */
    	selection(): cocoascript.NSSet;
    /* typeEncoding=@"NSMutableArray", ivar=_supplementalActions, attributes=(assign,nonatomic,readonly) */
    	supplementalActions(): cocoascript.NSMutableArray;
    /* typeEncoding=d, ivar=_timestamp, attributes=(assign,nonatomic,readonly) */
    	timestamp(): number;
    /* typeEncoding=@"NSString", ivar=_title, attributes=(copy,nonatomic) */
    	title(): cocoascript.NSString;
    /* typeEncoding=v24@0:8d16 */
    	setTimestampCoalesingThreshold(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	timestampCoalesingThreshold(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@20@0:8c16 */
    	affectedPageIDMovingBackwards(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canCoalesce(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	commit(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	committed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	finalDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	forwardPatch(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasCoalescePeriodExpired(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithInitialDocument_finalDocument_patch(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initialDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pageID(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	patchMovingBackwards(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performSupplementalActions(): void;
    /* typeEncoding=@16@0:8 */
    	selectedOverrides(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFinalDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setForwardPatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInitialDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	supplementalActions(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	timestamp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	title(...args: any[]): any;
  }
}

declare const MSMoment: sketchInternal.MSMoment;

