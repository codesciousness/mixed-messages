const sentence = document.querySelector('h1');
const button = document.querySelector('button');

const subjects = ['Life', 'The mind', 'Love', 'The heart'];
const adverbs = ['amazingly', 'astonishingly', 'exceedingly', 'extremely', 'indescribably', 'remarkably', 'wonderfully'];
const adjectives = ['beautiful', 'extraordinary', 'exceptional', 'fantastic', 'magnificent', 'powerful', 'spectacular'];
const possesives = ['one has', 'we have', 'you have'];
const nouns = ['ability', 'liberty', 'opportunity', 'privilege'];
const verbs = ['appreciate', 'cherish', 'embrace', 'enjoy', 'treasure'];

function randomNumGenerator(num) {
    return Math.floor(Math.random() * num);
}

const messageGenerator = () => {
    let randomSubject = subjects[randomNumGenerator(subjects.length)];
    let randomAdverb = adverbs[randomNumGenerator(adverbs.length)];
    let randomAdjective = adjectives[randomNumGenerator(adjectives.length)];
    let randomPossesive = possesives[randomNumGenerator(possesives.length)];
    let randomNoun = nouns[randomNumGenerator(nouns.length)];
    let randomVerb = verbs[randomNumGenerator(verbs.length)];
    return `${randomSubject} is ${randomAdverb} ${randomAdjective} and ${randomPossesive} the ${randomNoun} to ${randomVerb} it.`
}

button.onclick = () => {
    sentence.innerText = messageGenerator();
}