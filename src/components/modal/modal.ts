import sheet from './modal.css' with { type: 'css'};

const template = document.createElement('template');

template.innerHTML = `
  <dialog>
    <h3 id="content"></h3>
    <button autofocus>Close</button>
  </dialog>
`;

export default class Modal extends HTMLElement {

  updateModal(content: string) {
    console.log(`selected item is => ${content}`);
    const modal = this.shadowRoot.querySelector('dialog');
    
    modal.querySelector('#content').textContent = content;
    modal.showModal();
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = [sheet];

    // setup event handlers for updating and closing the dialog
    window.addEventListener('update-modal', (event: CustomEvent) => {
      this.updateModal(event.detail.content);
    })

    const modal = this.shadowRoot.querySelector('dialog');

    modal.querySelector('button').addEventListener("click", () => {
      modal.close();
    });
  }
}

customElements.define('app-modal', Modal);