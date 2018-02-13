var request = require('request');
const host ="https://api.cobinhood.com"
//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/
// Public 
//-----------------------------------------------
//System
const get_system_time ="/v1/system/time"
const get_system_info ="/v1/system/info"
//Market
const get_all_currenciers   ="/v1/market/currencies"
const get_all_trading_pairs ="/v1/market/trading_pairs"
const get_order_book        = "/v1/market/orderbooks/" // /v1/market/orderbooks/<trading_pair_id> get with get_all_trading_pairs
const get_trading_statistics="/v1/market/stats/"
const get_tickers           = "/v1/market/tickers/" // /v1/market/tickers/<trading_pair_id> get with get_all_trading_pairs
const recent_trades         ="/v1/market/trades/"    // /v1/market/trades//<trading_pair_id> get with get_all_trading_pairs      
const url_de_requete = host+get_order_book
var options = {
    url: url_de_requete
};






 function get_spread (paire) {
     options.url+=paire
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var json_response =JSON.parse(body).result.orderbook
            var spread = ((json_response.bids[0][0]-json_response.asks[0][0])/json_response.bids[0][0]*100)
            console.log("URL :"+options.url)
            console.log(paire + " :"+spread);
        }
    }
request(options, callback);
 }

 let public = {
    "get_spread2": function(paire) {
        options.url+=paire
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var json_response =JSON.parse(body).result.orderbook
                var spread = ((json_response.bids[0][0]-json_response.asks[0][0])/json_response.bids[0][0]*100)
                console.log("URL :"+options.url)
                console.log(paire + " :"+spread);
            }
    }
    request(options, callback);
}
}
//get_spread("GTC-BTC");
public.get_spread2("ETHOS-ETH")


