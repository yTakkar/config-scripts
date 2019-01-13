import './styles.scss'
const githubWorker = require('./github.worker')()

console.log(process.env.NAME)

githubWorker.getProfile('yTakkar')
  .then(profile => {
    console.log(profile)
  })
  .catch(e => console.log(e))

const obj = {}

let name = obj?.name ?? 'Faiyaz'

let surName = do {
  name === 'Faiyaz' ? 'Shaikh' : ''
}

console.log(name, surName)

class User {
  #name = 'Takkar'

  returnName = () => {
    console.log(this.#name)
  }
}

const u = new User();
u.returnName();

const doubleSay = str => str + ", " + str;
const capitalize = str => str[0].toUpperCase() + str.substring(1);
const exclaim = str =>  str + '!';

let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;

console.log(result)

function double (x) { return x + x; }
function add (x, y) { return x + y; }

function boundScore (min, max, score) {
  return Math.max(min, Math.min(max, score));
}

let person = { score: 25 };

let newScore = person.score
  |> double
  |> (_ => add(7, _))
  |> (_ => boundScore(0, 100, _));

console.log(newScore)
