interface Message {
    content: string | number;
    sender: string;
    receiver: string;
    send: (m: Message) => boolean;
};

let sendFunc = (m: Message) => {
    console.log(m.content);
    return true;
}

let m: Message = {
    content: "Please understand",
    sender: "Emmet",
    receiver: "The typescript workshoop",
    send: sendFunc
};

m.send(m);