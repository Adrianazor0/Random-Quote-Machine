function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //redux
const CLICK = 'CLICK';

function ChangeQuote() {
  return {
    type: CLICK,
    text };

}

//react
const Quotes = [
{
  text: "La vida comienza al final de tu zona de confort.",
  author: "Neale Donald Walsch" },

{
  text: "Vayas a donde vayas, ve con todo tu corazón.",
  author: "Confucio" },

{
  text: "Solo se vive una vez. Pero si lo haces bien, una vez es suficiente.",
  author: "Mae West" },

{
  text: "Siempre parece imposible, hasta que se hace.",
  author: "Nelson Mandela" },

{
  text: "Iré a cualquier parte siempre y cuando sea hacia delante.",
  author: "David Livingston." }];


const Colors = [
{
  name: "GoldenRod" },

{
  name: "Black" },

{
  name: "CornflowerBlue" },

{
  name: "DarkSlateGray" },

{
  name: "FireBrick" }];



function Text(props) {
  return React.createElement("p", { class: "mb-0 text-center", id: "text" }, "\"",
  props.text, "\"");

}

function Author(props) {
  return React.createElement("footer", { class: "blockquote-footer" },
  React.createElement("cite", { class: "text-capitalize ", id: "author" },
  props.author));


}
class QuoteBox extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",







    () => {
      let newQuote = Math.floor(Math.random() * Quotes.length);
      let newColor = Math.floor(Math.random() * Colors.length);
      if (this.state.quote.text !== Quotes[newQuote].text && this.state.color.name !== Colors[newColor].name) {
        this.setState({
          quote: Quotes[newQuote],
          color: Colors[newColor] });

      }
    });this.state = { quote: Quotes[Math.floor(Math.random() * Quotes.length)], color: Colors[Math.floor(Math.random() * Colors.length)] };this.handleClick = this.handleClick.bind(this);}

  render() {
    return (
      React.createElement("div", { style: { backgroundColor: this.state.color.name }, id: "quote-box" },
      React.createElement("blockquote", { class: "blockquote text-right" },
      React.createElement(Text, { text: this.state.quote.text }),
      React.createElement(Author, { author: this.state.quote.author })),

      React.createElement("button", { className: "btn btn-outline-light btn-block", id: "new-quote", onClick: this.handleClick }, "New Quote"),


      React.createElement("a", { className: "text-light", href: "twitter.com/intent/tweet", id: "tweet-quote" }, "Source")));




  }}


ReactDOM.render(
React.createElement(QuoteBox, null),
document.getElementById('root'));