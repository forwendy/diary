function ajax(){
  /* 第一个参数对象 */
  var ajaxData = {
    type:arguments[0].type || "GET",
    url:arguments[0].url || "",
    async:arguments[0].async || "true",
    data:arguments[0].data || null,
    dataType:arguments[0].dataType || "text",
    contentType:arguments[0].contentType || "application/x-www-form-urlencoded",
    beforeSend:arguments[0].beforeSend || function(){},
    success:arguments[0].success || function(){},
    error:arguments[0].error || function(){}
  };

  ajaxData.beforeSend(
    );

  /* 创建一个XHR对象 */
  var xhr = createxmlHttpRequest();

  /* 请求/响应过程的当前活动状态 */
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      /* 响应头部形象 */
      // var myHeader = xhr.getResponseHeader('MyHeader');
      var allHeaders = xhr.getAllResponseHeaders();
      // console.log(myHeader);
      console.log(allHeaders);

      if(xhr.status == 200){
        ajaxData.success(xhr.response);
      }else{
        ajaxData.error();
      }
    }
  };

  /* 设置响应类型
   * "" （默认值）字符串类型
   * "arraybuffer"
   * "blob"
   * "document"
   * "json"
   * "text"
   */
  xhr.responseType = ajaxData.dataType;


  /* 启动一个请求以备发送 */
  xhr.open(ajaxData.type,ajaxData.url,ajaxData.async);

  /* 设置请求头部信息 */
  /* 模仿表单提交 - 表单提交时的内容类型 */
  xhr.setRequestHeader("Content-Type", ajaxData.contentType);
  /* 自定义请求头信息 */
  // xhr.setRequestHeader("MyHeader", "MyValue");

  /* 发送特定请求 */
  xhr.send(convertData(ajaxData.data));

}

function createxmlHttpRequest() {
  if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
}

function convertData(data){
  if( typeof data === 'object' ){
    var convertResult = "" ;
    for(var c in data){
      convertResult+= c + "=" + data[c] + "&";
    }
    convertResult=convertResult.substring(0,convertResult.length-1);
    return convertResult;
  }else{
    return data;
  }
}