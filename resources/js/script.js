const sentence = document.querySelector('h1');
const button = document.querySelector('button');

const subjects = ['Life', 'The mind', 'Love', 'The heart'];
const adverbs = ['amazingly', 'astonishingly', 'exceedingly', 'extremely', 'indescribably', 'remarkably', 'wonderfully'];
const adjectives = ['beautiful', 'extraordinary', 'exceptional', 'fantastic', 'magnificent', 'powerful', 'spectacular'];
const possesives = ['one has', 'we have', 'you have'];
const nouns = ['ability', 'liberty', 'opportunity', 'privilege'];
const verbs = ['appreciate', 'cherish', 'embrace', 'enjoy', 'treasure'];

const messageGenerator = () => {
    let randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    let randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomPossesive = possesives[Math.floor(Math.random() * possesives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    return `${randomSubject} is ${randomAdverb} ${randomAdjective} and ${randomPossesive} the ${randomNoun} to ${randomVerb} it.`
}

button.onclick = () => {
    sentence.innerText = messageGenerator();
}