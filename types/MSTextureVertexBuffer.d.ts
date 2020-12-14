// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextureVertexBuffer extends NSObject {
    /* typeEncoding=c, ivar=_empty, attributes=(assign,nonatomic,readonly,getter=isEmpty) */
    	empty(): boolean;
    /* typeEncoding=@"MSMetalBuffer", ivar=_indexBuffer, attributes=(retain,nonatomic) */
    	indexBuffer(): MSMetalBuffer;
    /* typeEncoding=@"MSMetalBuffer", ivar=_vertexBuffer, attributes=(retain,nonatomic) */
    	vertexBuffer(): MSMetalBuffer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	indexBuffer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	indexBufferForRenderer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8^{MSTextureVertexMesh=}16^{MSMesh=}24 */
    	initWithVertexMesh_indexMesh(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEmpty(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIndexBuffer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVertexBuffer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	vertexBuffer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	vertexBufferForRenderer(...args: any[]): any;
  }
}

declare const MSTextureVertexBuffer: sketchInternal.MSTextureVertexBuffer;

