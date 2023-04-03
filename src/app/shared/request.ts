export class Request {

  public static queue = [];
  public static isFired = false;

  /**
   * add to queue
   * @param object {observer: any, action: function()}
   */
  public static addToQueue(object: any) {
    if (!object.key)
      object.key = new Date().getMilliseconds();

    if (!object.times)
      object.times = 1;
    else
      object.times += 1;

    Request.queue.push(object);
    Request.isFired = true;
  }

  /**
   * start the queue
   *
   */
  public static fire(action=null, asnc=false) {
    //if (Request.isFired)
    //  return;
    let object = Request.queue.pop();

    if (object) {
      object.observer.subscribe((res)=>{
        object.action(res);
      }, (error)=>{
        console.log("errors : " + error.statusText);
        if (object.times <= 10 || error.status == 429)
          Request.queue.push(object);
      }, ()=>{
        if (!asnc) {
          console.log("queue size : " + (Request.queue.length) + ", key : " + object.key + ", times : " + object.times);
          Request.fire(action, asnc);
        }
      });

      if (asnc) {
        console.log("queue size : " + (Request.queue.length) + ", key : " + object.key + ", times : " + object.times);
        Request.fire(action, asnc);
      }
    } else {
      Request.isFired = false;
      if (action)
        action();
      return;
    }
  }


}
