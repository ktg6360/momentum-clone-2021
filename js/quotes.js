const quotes = [
    {
        quotes : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney",
    },
    {
        quotes : "Life is what happens when you're busy making other plans.",
        author : "John Lennon",
    },
    {
        quotes : "The world is a book and those who do not travel read only one page.",
        author : "Saint Augustine",
    },
    {
        quotes : "Life is either a daring adventure or nothing at all.",
        author : "Hellen Keller",
    },
    {
        quotes : "단순하게 살아라. 현대인은 쓸데없는 절차와 일 떄문에 얼마나 복잡한 삶을 살아가는가?",
        author : "이드리스 샤흐",
    },
    {
        quotes : "서두르지 말되, 멈추지 말라",
        author : "괴테",
    },
    {
        quotes : "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author : "메이슨 쿨리",
    },
    {
        quotes : "실패는 고통스럽다. 그러나 최선을 다하지 못했음을 깨닫는 것은 몇 배 더 고통스럽다.",
        author : "엔드류 매튜스",
    },
    {
        quotes : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi"
    },
    {
        quotes : "You only live once, but if you do it right, once is enough.",
        author : "Mae West"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[0]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = '- ' + todaysQuote.author;