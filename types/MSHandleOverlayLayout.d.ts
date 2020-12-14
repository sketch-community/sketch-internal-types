// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSHandleOverlayLayout extends SketchControllers.MSCollectionOverlayLayout {
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic) */
    	connectingPaths(): cocoascript.NSArray;
    /* typeEncoding={CGSize=dd}, ivar=handleSize, attributes=(assign,nonatomic) */
    	handleSize(): CGSize;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	connectingPaths(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	handleSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	layoutAttributesForElementsIn(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layoutAttributesForItemAt(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	layoutAttributesForSupplementaryElementOfKind_at(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareLayout(): void;
    /* typeEncoding=v24@0:8@16 */
    	setConnectingPaths(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setHandleSize(...args: any[]): any;
    /* typeEncoding=c24@0:8d16 */
    	shouldInvalidateLayoutForZoomScaleChange(...args: any[]): any;
  }
}

declare const MSHandleOverlayLayout: sketchInternal.MSHandleOverlayLayout;

