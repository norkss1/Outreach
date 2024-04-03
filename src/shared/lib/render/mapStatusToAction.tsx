import { ListIcon } from "src/shared/assets/icons/ListIcon";
import { MessageIcon } from "src/shared/assets/icons/MessageIcon";
import { PhoneIcon } from "src/shared/assets/icons/PhoneIcon";
import { CoffeeIcon } from "src/shared/assets/icons/CoffeeIcon";
import { BeerIcon } from "src/shared/assets/icons/BeerIcon";
import { MeetingIcon } from "src/shared/assets/icons/MeetingIcon";

export enum ActionStatus {
    LIST = 'list',
    MESSAGE = 'message',
    CALL = 'call',
    COFFEE = 'coffee',
    BEER = 'beer',
    MEETING = 'meeting',
}

export const mapStatusToAction = (status: string) => {
    switch (status) {
    case ActionStatus.LIST:
        return  <ListIcon />

    case ActionStatus.MESSAGE:
        return  <MessageIcon />

    case ActionStatus.CALL:
        return <PhoneIcon />

    case ActionStatus.COFFEE:
        return  <CoffeeIcon />

    case ActionStatus.BEER:
        return  <BeerIcon />

    case ActionStatus.MEETING:
        return  <MeetingIcon />

    default: return null;
    }
};
