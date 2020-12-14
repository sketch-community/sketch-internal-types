// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlowItemBufferOperation extends NSOperation {
    /* typeEncoding=@"MSArcVertexBuffer", ivar=_buffer, attributes=(assign,nonatomic,readonly) */
    	buffer(): MSArcVertexBuffer;
    /* typeEncoding=c, ivar=_clipToArtboards, attributes=(assign,nonatomic,readonly) */
    	clipToArtboards(): boolean;
    /* typeEncoding=@"MSFlowItem", ivar=_item, attributes=(assign,nonatomic,readonly) */
    	item(): MSFlowItem;
    /* typeEncoding=d, ivar=_zoomLevel, attributes=(assign,nonatomic,readonly) */
    	zoomLevel(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	buffer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	clipToArtboards(...args: any[]): any;
    /* typeEncoding=@36@0:8@16c24d28 */
    	initWithFlowItem_clipToArtboards_zoomLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	item(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	main(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	segmentsByClippingSegment_toRects(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomLevel(...args: any[]): any;
  }
}

declare const MSFlowItemBufferOperation: sketchInternal.MSFlowItemBufferOperation;

