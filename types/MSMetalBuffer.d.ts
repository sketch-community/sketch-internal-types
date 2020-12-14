// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMetalBuffer extends NSObject {
    /* typeEncoding=Q, ivar=_count, attributes=(assign,nonatomic,readonly) */
    	count(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	length(): number;
    /* typeEncoding=@"<MTLBuffer>", ivar=_metalBuffer, attributes=(assign,nonatomic,readonly) */
    	metalBuffer(): any;
    /* typeEncoding=c, ivar=_readonly, attributes=(assign,nonatomic,readonly,getter=isReadonly) */
    	readonly(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	count(...args: any[]): any;
    /* typeEncoding=@36@0:8@16Q24c32 */
    	initWithBuffer_count_readonly(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isReadonly(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	length(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metalBuffer(...args: any[]): any;
    /* typeEncoding=v40@0:8r^v16Q24Q32 */
    	updateBufferWithBytes_length_count(...args: any[]): any;
  }
}

declare const MSMetalBuffer: sketchInternal.MSMetalBuffer;

