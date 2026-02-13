import { Messagefun } from "@/types/type";

function SfMessage(obj: Messagefun) {
    const div = document.createElement('div');
    const body = document.querySelector('body');

    div.className = obj.type;

    div.append(obj.message);

    body?.appendChild(div);
}

export default { SfMessage };