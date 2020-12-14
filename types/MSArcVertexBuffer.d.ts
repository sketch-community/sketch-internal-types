// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArcVertexBuffer extends NSObject {
    /* typeEncoding=@"MSMetalBuffer", ivar=_indexBuffer, attributes=(assign,nonatomic,readonly) */
    	indexBuffer(): MSMetalBuffer;
    /* typeEncoding=Q, ivar=_indexCount, attributes=(assign,nonatomic,readonly) */
    	indexCount(): number;
    /* typeEncoding=r^I, ivar=_indicies, attributes=(assign,nonatomic,readonly) */
    	indicies(): any;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	indiciesLength(): number;
    /* typeEncoding=@"MSMetalBuffer", ivar=_vertexBuffer, attributes=(assign,nonatomic,readonly) */
    	vertexBuffer(): MSMetalBuffer;
    /* typeEncoding=Q, ivar=_vertexCount, attributes=(assign,nonatomic,readonly) */
    	vertexCount(): number;
    /* typeEncoding=r^{MSArcVertex=(?={?=ff})}, ivar=_verticies, attributes=(assign,nonatomic,readonly) */
    	verticies(): any;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	verticiesLength(): number;
    /* typeEncoding=@24@0:8@16 */
    	arcVertexBufferWithBuffers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	indexBuffer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	indexBufferForRenderer(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	indexCount(...args: any[]): any;
    /* typeEncoding=r^I16@0:8 */
    	indicies(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	indiciesLength(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@48@0:8^{MSArcVertex=(?={?=ff})}16Q24^I32Q40 */
    	initWithVerticies_vertexCount_indicies_indexCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	vertexBuffer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	vertexBufferForRenderer(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	vertexCount(...args: any[]): any;
    /* typeEncoding=r^{MSArcVertex=(?={?=ff})}16@0:8 */
    	verticies(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	verticiesLength(...args: any[]): any;
  }
}

declare const MSArcVertexBuffer: sketchInternal.MSArcVertexBuffer;

