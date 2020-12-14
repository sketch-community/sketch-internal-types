// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTicketCache extends NSObject {
    /* typeEncoding=@"NSMutableDictionary", ivar=_tickets, attributes=(retain,nonatomic) */
    	tickets(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@16@0:8 */
    	static sharedInstance(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	clearCache(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setTicket_forKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTickets(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	ticketFor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tickets(...args: any[]): any;
  }
}

declare const MSTicketCache: sketchInternal.MSTicketCache;

