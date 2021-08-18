new Vue({
  el: '#stock_price',
  data() {
    return {
      stockprice: null,
    };
  },
  mounted() {
    axios
      .get(
        'https://finnhub.io/api/v1/quote?symbol=AXTG&token=c2jonaqad3i8191pfeag'
      )
      .then((res) => {
        this.stockprice = res.data.c;
      });
  },
});
