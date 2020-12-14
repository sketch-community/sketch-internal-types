// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSHistory extends NSObject {
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_currentDocument, attributes=(retain,nonatomic) */
    	currentDocument(): MSImmutableDocumentData;
    /* typeEncoding=@"<MSHistoryDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=Q, ivar=_indexOfNextMoment, attributes=(assign,nonatomic) */
    	indexOfNextMoment(): number;
    /* typeEncoding=c, ivar=_isCoalescing, attributes=(assign,nonatomic) */
    	isCoalescing(): boolean;
    /* typeEncoding=@"NSMutableArray", ivar=_moments, attributes=(retain,nonatomic) */
    	moments(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSString", ivar=_nextMomentTitle, attributes=(copy,nonatomic) */
    	nextMomentTitle(): cocoascript.NSString;
    /* typeEncoding=@"NSMutableArray", ivar=_nextSupplementalActions, attributes=(assign,nonatomic,readonly) */
    	nextSupplementalActions(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSMoment", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	redoMoment(): MSMoment;
    /* typeEncoding=@"MSMoment", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	undoMoment(): MSMoment;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@?24 */
    	addSupplementalActionWithTarget_handler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	commitCurrentMoment(): void;
    /* typeEncoding=v16@0:8 */
    	commitCurrentMomentIfCoalesePeriodHasExpired(): void;
    /* typeEncoding=@16@0:8 */
    	currentDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	ignoreLocalChangeFrom_toCurrentDocument(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	ignoreRemotePatches_changingFrom_toCurrentDocument(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	indexOfNextMoment(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithInitialDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isCoalescing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	moments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nextMomentTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nextSupplementalActions(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	progressToNextMoment(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	redoMoment(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeAllSupplementalActionsWithTarget(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeFutureMoments(): void;
    /* typeEncoding=c16@0:8 */
    	revertToPreviousMoment(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setIndexOfNextMoment(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsCoalescing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMoments(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNextMomentTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	undoMoment(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	updateAfterHistoryChange_backwards(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	updateDocument_against_removingPatchContents(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	updateWithLocalDocumentChanges(...args: any[]): any;
  }
}

declare const MSHistory: sketchInternal.MSHistory;

