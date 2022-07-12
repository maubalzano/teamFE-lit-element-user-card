import { LitElement } from "lit";
export interface User {
    firstName: string;
    lastName: string;
    imgUrl?: string;
    dob: string;
    gender?: 'male' | 'female' | 'other';
    address: string;
}
export declare class UserCard extends LitElement {
    static get styles(): import("lit").CSSResult;
    user?: User;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'user-card': UserCard;
    }
}
//# sourceMappingURL=user-card.d.ts.map