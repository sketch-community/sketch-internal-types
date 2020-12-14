// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPatchContainer extends NSObject {
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	localPatches(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_receivedPatches, attributes=(assign,nonatomic,readonly) */
    	receivedPatches(): cocoascript.NSArray;
    /* typeEncoding=@"<MSCollaborationInfoProtocol>", ivar=_statusInfo, attributes=(retain) */
    	statusInfo(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addPatch(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	addPatch_statusInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16@24 */
    	indexOfPatchWithID_inArray(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithReceivedPatches_localPatches(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localPatches(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	objectForKeyedSubscript(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	patchReceived(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	patchReceived_statusInfo(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	patchWithID_inArray(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	patchesFollowingPatchID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	receivedPatches(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	removePatchWithID_fromArray(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	resetStatusToCloudVersionWithShareID_owner_versionID_nextVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStatusInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	statusInfo(...args: any[]): any;
  }
}

declare const MSPatchContainer: sketchInternal.MSPatchContainer;

