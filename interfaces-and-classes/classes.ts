
class Message2<T> {
    constructor(private content: T,
                private sender: string,
                private receiver: string,
                private send: (x: T) => boolean) {}

    public runSend = (): boolean => {
        return this.send(this.content);
    }

    public info = (): string => {
        return "Message being send by '" + this.sender + "', to '" + this.receiver + "'";
    }
}

let send = (x: number | string) => {
    console.log(x);
    return true;
}

let m2: Message2<number> = new Message2<number>(123, "Emmet", "Mum", send);
let m3: Message2<string> = new Message2<string>("Hello world!", "Emmet", "Mum", send);

m2.runSend();
console.log(m2.info());

m3.runSend();
console.log(m3.info());

let unk: unknown = m3;

if (unk instanceof Message2) {
    // inside here, unknown is a Message2
    unk.runSend();
    console.log(unk.info());
}