// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPathNode extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_children, attributes=(copy,nonatomic,readonly) */
    	children(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=_isFilled, attributes=(assign,nonatomic,readonly) */
    	isFilled(): boolean;
    /* typeEncoding=@"MSPath", ivar=_path, attributes=(assign,nonatomic,readonly) */
    	path(): MSPath;
    /* typeEncoding=@28@0:8^{ClipperGraphNode=^{CGPath}^{ClipperGraphNode}Qc}16c24 */
    	static pathNodeFromClipperNode_isFilled(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static rootNodeFromPath(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	children(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collapsedPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=@36@0:8@16c24@28 */
    	initWithPath_isFilled_children(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFilled(...args: any[]): any;
    /* typeEncoding=@32@0:8d16Q24 */
    	nodeWithInset_joinStrategy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	recursivelyAddChildPathsToChain(...args: any[]): any;
  }
}

declare const MSPathNode: sketchInternal.MSPathNode;

