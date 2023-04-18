// Create a class for the element
class wordCount extends HTMLParagraphElement {
    constructor(){
        // always call super first in the constructor 
        super();

        // count words in element's parent element
        const wcParent = this.parentNode;

        function countwords(node){
            const text = node.innerText || node.textContext;
            return text.trim().split(/\s+/g).filter(a => a.trim().length > 0).length;
        }

        const count = 'Words: $(countWords(wcParent))';

        // Create a shadow root
        const shadow = this.attachShadow((node: 'open'));

        // Create text node and add word count to it
        const text = document.createElement('open');
        text.textContent = count;

        // Append it to the shadow root
        shadow.appendChild(text);
    }
}