// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOneCollectorIngestion extends MSHttpIngestion {
    /* typeEncoding=@32@0:8@16@24 */
    	getHeadersWithData_eTag(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	getPayloadWithData(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithHttpClient_baseUrl(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	obfuscateResponsePayload(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	obfuscateTargetTokens(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	obfuscateTickets(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	sendAsync_completionHandler(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	willSendHTTPRequestToURL_withHeaders(...args: any[]): any;
  }
}

declare const MSOneCollectorIngestion: sketchInternal.MSOneCollectorIngestion;

