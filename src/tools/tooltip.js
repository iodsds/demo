export function autoHover(myChart, num, time, plusFlag) {
  var defaultData = { //设置默认值
    time: 3000,
    num: 5
  };
  if (!time) {
    time = defaultData.time;
  }
  if (!num) {
    num = defaultData.num;
  }


  var count = 0;
  var timeTicket = null;
  timeTicket && clearInterval(timeTicket);
  timeTicket = setInterval(function () {
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0 //serieIndex的索引值   可以触发多个
    });
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: count
    });
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: count
    });
    if (plusFlag == true) {
      count++;
    }


    if (count >= num) {
      count = 0
    }
  }, time);

  myChart.on("mouseover", function (params) {
    clearInterval(timeTicket);
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0
    });
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: params.dataIndex
    });
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: params.dataIndex
    });
  });

  myChart.on("mouseout", function () {
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0 //serieIndex的索引值   可以触发多个
    });
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function () {
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0 //serieIndex的索引值   可以触发多个
      });
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: count
      });
      myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: count
      });
      count++;
      if (count >= num) {
        count = 0
      }
    }, time);
  });
  return 333333333

}
export default {
  autoHover
}