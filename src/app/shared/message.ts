

export class Message {

    public static success(message: string) {
      let doc: any = document;
      doc.playSound('not2');
      doc.swal.success(message);
      //
      //AppModule.doc.observeNotification();
    }

    public static error(message: string) {
      let doc: any = document;
      doc.playSound('not2');
      doc.swal.error(message);
      //
      //AppModule.doc.observeNotification();
    }

    public static confirm(message: string, action: any) {
      let doc: any = document;
      doc.swal.confirm(message, action);
    }
}
