// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSWebExportRequest extends MSExportRequest {
    /* typeEncoding=Q, ivar=_layerBehavior, attributes=(assign,nonatomic) */
    	layerBehavior(): number;
    /* typeEncoding=@"MSImmutableLayer<MSWebExportableRootLayer>", ivar=(null), attributes=(retain,dynamic,nonatomic) */
    	rootLayer(): any;
    /* typeEncoding=@32@0:8@16d24 */
    	static webExportRequestFromLayerAncestry_atScale(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	includedLayerIDs(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	includedLayerIDsFromLayer_ancestors(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	layerBehavior(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	options(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setLayerBehavior(...args: any[]): any;
  }
}

declare const MSWebExportRequest: sketchInternal.MSWebExportRequest;

