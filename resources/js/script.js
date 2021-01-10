const sentence = document.querySelector('h1');
const button = document.querySelector('button');

const subjects = ['Life', 'The mind', 'Love', 'The heart'];
const adverbs = ['amazingly', 'astonishingly', 'exceedingly', 'extremely', 'indescribably', 'remarkably', 'wonderfully'];
const adjectives = ['beautiful', 'extraordinary', 'exceptional', 'fantastic', 'magnificent', 'powerful', 'spectacular'];
const possesives = ['one has', 'we have', 'you have'];
const nouns = ['ability', 'liberty', 'opportunity', 'privilege'];
const verbs = ['appreciate', 'cherish', 'embrace', 'enjoy', 'treasure'];

function randNumGen(array) {
    return Math.floor(Math.random() * array.length);
}

const messageGenerator = () => {
    let randomSubject = subjects[randNumGen(subjects)];
    let randomAdverb = adverbs[randNumGen(adverbs)];
    let randomAdjective = adjectives[randNumGen(adjectives)];
    let randomPossesive = possesives[randNumGen(possesives)];
    let randomNoun = nouns[randNumGen(nouns)];
    let randomVerb = verbs[randNumGen(verbs)];
    return `${randomSubject} is ${randomAdverb} ${randomAdjective} and ${randomPossesive} the ${randomNoun} to ${randomVerb} it.`
}

button.onclick = () => {
    sentence.innerText = messageGenerator();
}