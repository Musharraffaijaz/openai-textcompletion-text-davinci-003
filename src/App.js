import React, { useState } from 'react';
import { Configuration, OpenAIApi} from 'openai'
import './index.css'

const App = () => {
  const [prompt, setprompt] = useState('');
  const [completedText, setCompletedText] = useState('');

  const configuration = new Configuration({
    apiKey: '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',
  });

  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (event) => {
    event.preventDefault()
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 100, //help ensure that the model's response is of the desired length and scope
    temperature: 1,// randomness in the answer
  });
  setCompletedText(res.data.choices[0].text);
console.log(completedText);
}

  return (
    <div className='app'>
      <form onSubmit={handleSubmit} className='main-div'>

          <input type="text" value={prompt} onChange={(e)=>setprompt(e.target.value)} placeholder='Enter some text' />
        <button type="submit">Complete Text</button>
      </form>
     <div className='p-div'>
     <p><span style={{ fontWeight: "800", color: '#000'}}>Completed Text: </span> "{completedText}"</p>
     <h6 style={{textAlign: "center", marginTop: "5%", textDecoration: "line-through"}}>Musharaf Aijaz</h6>
     </div>
    </div>
  );
};

export default App;