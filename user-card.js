var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
let UserCard = class UserCard extends LitElement {
    static get styles() {
        return css `
           :host{
                font-family: Arial, 'sans serif';
               display:block;
               border:solid 1px rgb(101 122 131);
               border-radius:5px;
               box-shadow: 2px 4px 4px rgb(101 122 131);
               background-color: #E1F5FE;
               padding:20px;
               max-width:500px
           }
           h2{
               margin: 5px 0px;
               color:rgb(28 59 72)
           }
           .card-container{
               display:flex;
               align-items:start;
               justify-content:space-between
           }
           .user-img{
               width:45%
           }
           button{
               border:none;
               background-color:rgb(101 122 131);
               color: #E1F5FE;
               border-radius:20px;
               padding:5px 15px
           }
           `;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return html `
        <style>
            :host{
                opacity: ${!!this.disabled ? '.6' : '1'}
            }
            p:first-of-type strong {
                color: ${((_a = this.user) === null || _a === void 0 ? void 0 : _a.gender) === 'male' ? 'blue' : 'pink'}
            }
        </style>
        <div class="card-container">
            <div>
                <div class="card">
                    <h2>${(_b = this.user) === null || _b === void 0 ? void 0 : _b.firstName} <strong>${(_c = this.user) === null || _c === void 0 ? void 0 : _c.lastName}</strong></h2>
                </div>
                <div>
                    <p><span>Gender: </span><strong>${(_d = this.user) === null || _d === void 0 ? void 0 : _d.gender}</strong></p>
                    <p><span>Address: </span><strong>${(_e = this.user) === null || _e === void 0 ? void 0 : _e.address}</strong></p>
                    <p><span>Date of Birth: </span><strong>${(_f = this.user) === null || _f === void 0 ? void 0 : _f.dob}</strong></p>
                </div>
                <br>
                <div>
                    <button @click=${() => { this.dispatchEvent(new Event('customEvent')); }}>EDIT USER</button>
                </div>
            </div>
            <img class="user-img" src="${(_g = this.user) === null || _g === void 0 ? void 0 : _g.imgUrl}">
        </div>
        `;
    }
};
__decorate([
    property({
        converter: (value) => {
            if (value) {
                return JSON.parse(value);
            }
            else
                return undefined;
        }
    })
], UserCard.prototype, "user", void 0);
__decorate([
    property({ type: Boolean })
], UserCard.prototype, "disabled", void 0);
UserCard = __decorate([
    customElement('user-card')
], UserCard);
export { UserCard };
//# sourceMappingURL=user-card.js.map