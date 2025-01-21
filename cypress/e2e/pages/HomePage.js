import { CommonActions } from "../actions/CommonActions"

const ca = new CommonActions();

export class Homepage {
    page_logo_identifier = "a > img"

    pageLogoIsVisible(){
        ca.verifyWebElementExist(this.page_logo_identifier)
    }
}