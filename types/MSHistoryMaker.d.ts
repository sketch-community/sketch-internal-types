// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSHistoryMaker extends NSObject {
    /* typeEncoding=@"NSTimer", ivar=_commitTimer, attributes=(retain,nonatomic) */
    	commitTimer(): cocoascript.NSTimer;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSHistoryMakerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,readonly,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_fontsDidChange, attributes=(assign,nonatomic) */
    	fontsDidChange(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSHistory", ivar=_history, attributes=(assign,nonatomic,readonly) */
    	history(): MSHistory;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	historyIsCoalescing(): boolean;
    /* typeEncoding=c, ivar=_isMakingHistory, attributes=(assign,nonatomic) */
    	isMakingHistory(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isRedoing(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isUndoing(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	redoTitle(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_state, attributes=(assign,nonatomic) */
    	state(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	undoTitle(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c20@0:8c16 */
    	canMoveThroughHistoryBackInTime(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	commitTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	commitTimerFired(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	currentDocumentData(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	finishCoalescingHistory(): void;
    /* typeEncoding=v16@0:8 */
    	flush(): void;
    /* typeEncoding=c16@0:8 */
    	fontsDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	history(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	history_didCommitMoment_withPatch(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	history_willCommitMoment(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	historyIsCoalescing(...args: any[]): any;
    /* typeEncoding=c24@0:8@?16 */
    	ignoreDocumentChangesInBlock(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	ignoreRemotePatches_inBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithDelegate_initialDocumentData(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	installedFontsChanged(): void;
    /* typeEncoding=c16@0:8 */
    	isMakingHistory(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRedoing(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isUndoing(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	makeHistoryIfNecessary(): void;
    /* typeEncoding=@20@0:8c16 */
    	momentThroughHistoryBackInTime(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	moveDocument_throughHistoryBackInTime(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	redoTitle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	registerHistoryMomentTitle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	registerSupplementalActionWithTarget_handler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeAllSupplementalActionsWithTarget(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCommitTimer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setFontsDidChange(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsMakingHistory(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startCoalescingHistory(): void;
    /* typeEncoding=v16@0:8 */
    	startCommitTimer(): void;
    /* typeEncoding=Q16@0:8 */
    	state(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	undoTitle(...args: any[]): any;
  }
}

declare const MSHistoryMaker: sketchInternal.MSHistoryMaker;

