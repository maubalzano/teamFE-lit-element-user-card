
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface User {
    firstName: string,
    lastName: string,
    imgUrl?: string,
    dob: string,
    gender?: 'male'|'female'|'other',
    address: string
}
@customElement('user-card')
export class UserCard extends LitElement {
    static override get styles(){
        return css`
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
           `

    } 
    @property({
        converter: (value: string | null) => {
          if (value){
              return JSON.parse(value);
          }
          else
            return undefined;
        }
    })
    user?: User;

    @property({type: Boolean})
    disabled!: boolean

    override render() {

        return html `
        <style>
            :host{
                opacity: ${!!this.disabled ? '.6' : '1'}
            }
            p:first-of-type strong {
                color: ${this.user?.gender === 'male' ? 'blue' : 'pink'}
            }
        </style>
        <div class="card-container">
            <div>
                <div class="card">
                    <h2>${this.user?.firstName} <strong>${this.user?.lastName}</strong></h2>
                </div>
                <div>
                    <p><span>Gender: </span><strong>${this.user?.gender}</strong></p>
                    <p><span>Address: </span><strong>${this.user?.address}</strong></p>
                    <p><span>Date of Birth: </span><strong>${this.user?.dob}</strong></p>
                </div>
                <br>
                <div>
                    <button @click=${() => {this.dispatchEvent(new Event('customEvent'))}}>EDIT USER</button>
                </div>
            </div>
            <img class="user-img" src="${this.user?.imgUrl}">
        </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'user-card': UserCard
    }
  }