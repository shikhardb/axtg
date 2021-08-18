new Vue({
  el: '#app_basic',
  data() {
    return {
      btcprice: null,
      ethprice: null,
    };
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        this.btcprice = response.data.bpi.USD.rate.slice(0, 8);
        axios
          .get(
            'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'
          )
          .then((response) => {
            this.ethprice = response.data.USD;
          });
      });
  },
});
